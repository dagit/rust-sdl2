use std::ffi::{CStr, CString, NulError};
use std::rc::Rc;
use libc::c_char;

use sys::sdl as ll;

#[derive(Copy, Clone, Eq, PartialEq, Hash, Debug)]
pub enum Error {
    NoMemError = ll::SDL_ENOMEM as isize,
    ReadError = ll::SDL_EFREAD as isize,
    WriteError = ll::SDL_EFWRITE as isize,
    SeekError = ll::SDL_EFSEEK as isize,
    UnsupportedError = ll::SDL_UNSUPPORTED as isize
}

use std::sync::atomic::{AtomicBool, ATOMIC_BOOL_INIT};
/// Only one Sdl context can be alive at a time.
/// Set to false by default (not alive).
static IS_SDL_CONTEXT_ALIVE: AtomicBool = ATOMIC_BOOL_INIT;

/// The SDL context type. Initialize with `sdl2::init()`.
///
/// From a thread-safety perspective, `Sdl` represents the main thread.
/// As such, `Sdl` is a useful type for ensuring that SDL types that can only
/// be used on the main thread are initialized that way.
///
/// For instance, `SDL_PumpEvents()` is not thread safe, and may only be
/// called on the main thread.
/// All functionality that calls `SDL_PumpEvents()` is thus put into an
/// `EventPump` type, which can only be obtained through `Sdl`.
/// This guarantees that the only way to call event-pumping functions is on
/// the main thread.
#[derive(Clone)]
pub struct Sdl {
    sdldrop: Rc<SdlDrop>
}

impl Sdl {
    #[inline]
    fn new() -> Result<Sdl, String> {
        unsafe {
            use std::sync::atomic::Ordering;

            // Atomically switch the `IS_SDL_CONTEXT_ALIVE` global to true
            let was_alive = IS_SDL_CONTEXT_ALIVE.swap(true, Ordering::Relaxed);

            if was_alive {
                Err("Cannot initialize `Sdl` more than once at a time.".to_owned())
            } else {
                // Initialize SDL without any explicit subsystems (flags = 0).
                if ll::SDL_Init(0) == 0 {
                    Ok(Sdl {
                        sdldrop: Rc::new(SdlDrop)
                    })
                } else {
                    IS_SDL_CONTEXT_ALIVE.swap(false, Ordering::Relaxed);
                    Err(get_error())
                }
            }
        }
    }

    /// Initializes the audio subsystem.
    #[inline]
    pub fn audio(&self) -> Result<AudioSubsystem, String> { AudioSubsystem::new(self) }

    /// Initializes the event subsystem.
    #[inline]
    pub fn event(&self) -> Result<EventSubsystem, String> { EventSubsystem::new(self) }

    /// Initializes the joystick subsystem.
    #[inline]
    pub fn joystick(&self) -> Result<JoystickSubsystem, String> { JoystickSubsystem::new(self) }

    /// Initializes the haptic subsystem.
    #[inline]
    pub fn haptic(&self) -> Result<HapticSubsystem, String> { HapticSubsystem::new(self) }

    /// Initializes the game controller subsystem.
    #[inline]
    pub fn game_controller(&self) -> Result<GameControllerSubsystem, String> { GameControllerSubsystem::new(self) }

    /// Initializes the timer subsystem.
    #[inline]
    pub fn timer(&self) -> Result<TimerSubsystem, String> { TimerSubsystem::new(self) }

    /// Initializes the video subsystem.
    #[inline]
    pub fn video(&self) -> Result<VideoSubsystem, String> { VideoSubsystem::new(self) }

    /// Obtains the SDL event pump.
    ///
    /// At most one `EventPump` is allowed to be alive during the program's execution.
    /// If this function is called while an `EventPump` instance is alive, the function will return
    /// an error.
    #[inline]
    pub fn event_pump(&self) -> Result<EventPump, String> {
        EventPump::new(self)
    }

    #[inline]
    #[doc(hidden)]
    pub fn sdldrop(&self) -> Rc<SdlDrop> {
        self.sdldrop.clone()
    }
}

/// When SDL is no longer in use (the refcount in an `Rc<SdlDrop>` reaches 0), the library is quit.
#[doc(hidden)]
#[derive(Debug)]
pub struct SdlDrop;

impl Drop for SdlDrop {
    #[inline]
    fn drop(&mut self) {
        use std::sync::atomic::Ordering;

        let was_alive = IS_SDL_CONTEXT_ALIVE.swap(false, Ordering::Relaxed);
        assert!(was_alive);

        unsafe { ll::SDL_Quit(); }
    }
}

// No subsystem can implement `Send` because the destructor, `SDL_QuitSubSystem`,
// utilizes non-atomic reference counting and should thus be called on a single thread.
// Some subsystems have functions designed to be thread-safe, such as adding a timer or accessing
// the event queue. These subsystems implement `Sync`.

macro_rules! subsystem {
    ($name:ident, $flag:expr) => (
        impl $name {
            #[inline]
            fn new(sdl: &Sdl) -> Result<$name, String> {
                let result = unsafe { ll::SDL_InitSubSystem($flag) };

                if result == 0 {
                    Ok($name {
                        _subsystem_drop: Rc::new(SubsystemDrop {
                            _sdldrop: sdl.sdldrop.clone(),
                            flag: $flag
                        })
                    })
                } else {
                    Err(get_error())
                }
            }
        }
    );
    ($name:ident, $flag:expr, nosync) => (
        #[derive(Debug, Clone)]
        pub struct $name {
            /// Subsystems cannot be moved or (usually) used on non-main threads.
            /// Luckily, Rc restricts use to the main thread.
            _subsystem_drop: Rc<SubsystemDrop>
        }

        impl $name {
            /// Obtain an SDL context.
            #[inline]
            pub fn sdl(&self) -> Sdl {
                Sdl { sdldrop: self._subsystem_drop._sdldrop.clone() }
            }
        }

        subsystem!($name, $flag);
    );
    ($name:ident, $flag:expr, sync) => (
        pub struct $name {
            /// Subsystems cannot be moved or (usually) used on non-main threads.
            /// Luckily, Rc restricts use to the main thread.
            _subsystem_drop: Rc<SubsystemDrop>
        }
        unsafe impl Sync for $name {}

        impl $name {
            #[inline]
            pub fn clone(&mut self) -> $name {
                $name {
                    _subsystem_drop: self._subsystem_drop.clone()
                }
            }

            /// Obtain an SDL context.
            #[inline]
            pub fn sdl(&mut self) -> Sdl {
                Sdl { sdldrop: self._subsystem_drop._sdldrop.clone() }
            }
        }

        subsystem!($name, $flag);
    )
}

/// When a subsystem is no longer in use (the refcount in an `Rc<SubsystemDrop>` reaches 0),
/// the subsystem is quit.
#[derive(Debug, Clone)]
struct SubsystemDrop {
    _sdldrop: Rc<SdlDrop>,
    flag: ll::SDL_InitFlag
}

impl Drop for SubsystemDrop {
    #[inline]
    fn drop(&mut self) {
        unsafe { ll::SDL_QuitSubSystem(self.flag); }
    }
}

subsystem!(AudioSubsystem, ll::SDL_INIT_AUDIO, nosync);
subsystem!(GameControllerSubsystem, ll::SDL_INIT_GAMECONTROLLER, nosync);
subsystem!(HapticSubsystem, ll::SDL_INIT_HAPTIC, nosync);
subsystem!(JoystickSubsystem, ll::SDL_INIT_JOYSTICK, nosync);
subsystem!(VideoSubsystem, ll::SDL_INIT_VIDEO, nosync);
// Timers can be added on other threads.
subsystem!(TimerSubsystem, ll::SDL_INIT_TIMER, sync);
// The event queue can be read from other threads.
subsystem!(EventSubsystem, ll::SDL_INIT_EVENTS, sync);

static mut IS_EVENT_PUMP_ALIVE: bool = false;

/// A thread-safe type that encapsulates SDL event-pumping functions.
pub struct EventPump {
    _sdldrop: Rc<SdlDrop>
}

impl EventPump {
    /// Obtains the SDL event pump.
    #[inline]
    fn new(sdl: &Sdl) -> Result<EventPump, String> {
        // Called on the main SDL thread.

        unsafe {
            if IS_EVENT_PUMP_ALIVE {
                Err("an `EventPump` instance is already alive - there can only be one `EventPump` in use at a time.".to_owned())
            } else {
                // Initialize the events subsystem, just in case none of the other subsystems have done it yet.
                let result = ll::SDL_InitSubSystem(ll::SDL_INIT_EVENTS);

                if result == 0 {
                    IS_EVENT_PUMP_ALIVE = true;

                    Ok(EventPump {
                        _sdldrop: sdl.sdldrop.clone()
                    })
                } else {
                    Err(get_error())
                }
            }
        }
    }
}

impl Drop for EventPump {
    #[inline]
    fn drop(&mut self) {
        // Called on the main SDL thread.

        unsafe {
            assert!(IS_EVENT_PUMP_ALIVE);
            ll::SDL_QuitSubSystem(ll::SDL_INIT_EVENTS);
            IS_EVENT_PUMP_ALIVE = false;
        }
    }
}

/// Initializes the SDL library.
/// This must be called before using any other SDL function.
///
/// # Example
/// ```no_run
/// let sdl_context = sdl2::init().unwrap();
/// let mut event_pump = sdl_context.event_pump().unwrap();
///
/// for event in event_pump.poll_iter() {
///     // ...
/// }
///
/// // SDL_Quit() is called here as `sdl_context` is dropped.
/// ```
#[inline]
pub fn init() -> Result<Sdl, String> { Sdl::new() }

pub fn get_error() -> String {
    unsafe {
        let err = ll::SDL_GetError();
        CStr::from_ptr(err as *const _).to_str().unwrap().to_owned()
    }
}

pub fn set_error(err: &str) -> Result<(), NulError> {
    let c_string = try!(CString::new(err));
    Ok(unsafe { 
        ll::SDL_SetError(c_string.as_ptr() as *const c_char);
    })
}

pub fn set_error_from_code(err: Error) {
    unsafe { ll::SDL_Error(err as ll::SDL_errorcode); }
}

pub fn clear_error() {
    unsafe { ll::SDL_ClearError(); }
}
