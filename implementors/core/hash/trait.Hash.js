(function() {var implementors = {};
implementors["lazy_static"] = [];implementors["libc"] = [];implementors["sdl2_sys"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2_sys/joystick/struct.SDL_JoystickGUID.html' title='sdl2_sys::joystick::SDL_JoystickGUID'>SDL_JoystickGUID</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2_sys/rect/struct.SDL_Point.html' title='sdl2_sys::rect::SDL_Point'>SDL_Point</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2_sys/rect/struct.SDL_Rect.html' title='sdl2_sys::rect::SDL_Rect'>SDL_Rect</a>",];implementors["num_complex"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;",];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors["num"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='num_bigint/bigint/enum.Sign.html' title='num_bigint::bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num/struct.BigInt.html' title='num::BigInt'>BigInt</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='num/struct.Complex.html' title='num::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>",];implementors["sdl2"] = ["impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/fs/struct.FileType.html' title='std::fs::FileType'>FileType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/std/net/ip/enum.IpAddr.html' title='std::net::ip::IpAddr'>IpAddr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/std/net/ip/enum.Ipv6MulticastScope.html' title='std::net::ip::Ipv6MulticastScope'>Ipv6MulticastScope</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/ip/struct.Ipv4Addr.html' title='std::net::ip::Ipv4Addr'>Ipv4Addr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/ip/struct.Ipv6Addr.html' title='std::net::ip::Ipv6Addr'>Ipv6Addr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html' title='std::net::addr::SocketAddr'>SocketAddr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV4.html' title='std::net::addr::SocketAddrV4'>SocketAddrV4</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV6.html' title='std::net::addr::SocketAddrV6'>SocketAddrV6</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/std/path/enum.Prefix.html' title='std::path::Prefix'>Prefix</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PrefixComponent.html' title='std::path::PrefixComponent'>PrefixComponent</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/std/path/enum.Component.html' title='std::path::Component'>Component</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>","impl&lt;'a,&nbsp;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/event/enum.EventType.html' title='sdl2::event::EventType'>EventType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/event/enum.WindowEventId.html' title='sdl2::event::WindowEventId'>WindowEventId</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/joystick/struct.Guid.html' title='sdl2::joystick::Guid'>Guid</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/joystick/enum.HatState.html' title='sdl2::joystick::HatState'>HatState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/controller/enum.Axis.html' title='sdl2::controller::Axis'>Axis</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/controller/enum.Button.html' title='sdl2::controller::Button'>Button</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/controller/enum.MappingStatus.html' title='sdl2::controller::MappingStatus'>MappingStatus</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/keyboard/enum.Keycode.html' title='sdl2::keyboard::Keycode'>Keycode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/keyboard/enum.Scancode.html' title='sdl2::keyboard::Scancode'>Scancode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/keyboard/struct.Mod.html' title='sdl2::keyboard::Mod'>Mod</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/mouse/enum.SystemCursor.html' title='sdl2::mouse::SystemCursor'>SystemCursor</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/mouse/enum.Mouse.html' title='sdl2::mouse::Mouse'>Mouse</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/mouse/struct.MouseState.html' title='sdl2::mouse::MouseState'>MouseState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/rect/struct.Rect.html' title='sdl2::rect::Rect'>Rect</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/rect/struct.Point.html' title='sdl2::rect::Point'>Point</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/pixels/enum.Color.html' title='sdl2::pixels::Color'>Color</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/pixels/enum.PixelFormatEnum.html' title='sdl2::pixels::PixelFormatEnum'>PixelFormatEnum</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/video/enum.GLProfile.html' title='sdl2::video::GLProfile'>GLProfile</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/video/struct.DisplayMode.html' title='sdl2::video::DisplayMode'>DisplayMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/video/enum.FullscreenType.html' title='sdl2::video::FullscreenType'>FullscreenType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/video/enum.WindowPos.html' title='sdl2::video::WindowPos'>WindowPos</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/render/enum.TextureAccess.html' title='sdl2::render::TextureAccess'>TextureAccess</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/render/struct.RendererInfo.html' title='sdl2::render::RendererInfo'>RendererInfo</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/render/enum.BlendMode.html' title='sdl2::render::BlendMode'>BlendMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/render/struct.TextureQuery.html' title='sdl2::render::TextureQuery'>TextureQuery</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/enum.Error.html' title='sdl2::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/audio/enum.AudioFormat.html' title='sdl2::audio::AudioFormat'>AudioFormat</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='enum' href='sdl2/audio/enum.AudioStatus.html' title='sdl2::audio::AudioStatus'>AudioStatus</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/audio/struct.AudioSpec.html' title='sdl2::audio::AudioSpec'>AudioSpec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/version/struct.Version.html' title='sdl2::version::Version'>Version</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> for <a class='struct' href='sdl2/messagebox/struct.MessageBoxFlag.html' title='sdl2::messagebox::MessageBoxFlag'>MessageBoxFlag</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
