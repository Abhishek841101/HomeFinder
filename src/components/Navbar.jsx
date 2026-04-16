

// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";

// // 👉 IMPORT PROPERTY DATA
// import properties from "../data/properties";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openLocation, setOpenLocation] = useState(false);
//   const [search, setSearch] = useState("");

//   const locationRef = useRef();

//   const isAuth = localStorage.getItem("token");

//   // 🔥 PROFILE LOGIC
//   const goToProfile = () => {
//     const role = localStorage.getItem("role");

//     if (!isAuth) {
//       navigate("/login");
//       return;
//     }

//     if (role === "admin") {
//       navigate("/admin/profile");
//     } else {
//       navigate("/profile");
//     }
//   };

//   // 🔥 CLICK OUTSIDE CLOSE SEARCH
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (locationRef.current && !locationRef.current.contains(e.target)) {
//         setOpenLocation(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🔍 SEARCH FILTER
//   const filteredProperties = properties.filter((item) =>
//     `${item.name} ${item.location} ${item.address}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   return (
//     <nav className="w-full bg-white border-b-2 border-blue-200 shadow-lg px-4 md:px-10 py-4 sticky top-0 z-50">

//       <div className="flex items-center justify-between">

//         {/* 🔷 LOGO */}
//         <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-wide">
//           HomeFinder
//         </h1>

//         {/* 💻 DESKTOP MENU */}
//         <ul className="hidden md:flex gap-10 text-lg font-bold text-gray-800 items-center">

//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>

//           <Link to="/properties" className="hover:text-blue-600">
//             Properties
//           </Link>

//           <Link to="/about" className="hover:text-blue-600">
//             About
//           </Link>

//           <Link to="/contact" className="hover:text-blue-600">
//             Contact
//           </Link>

//           {/* 🔥 PROFILE */}
//           {isAuth ? (
//             <button
//               onClick={goToProfile}
//               className="text-blue-600 font-bold"
//             >
//               My Profile
//             </button>
//           ) : (
//             <Link to="/login" className="hover:text-blue-600">
//               Login
//             </Link>
//           )}
//         </ul>

//         {/* 🔍 SEARCH + MOBILE */}
//         <div className="flex items-center gap-4">

//           {/* 🔍 SEARCH BOX */}
//           <div className="relative hidden md:block w-[250px]" ref={locationRef}>

//             <div
//               onClick={() => setOpenLocation(true)}
//               className="flex items-center gap-2 border-2 border-blue-200 px-4 py-2 rounded-full cursor-pointer"
//             >
//               <Search size={18} />
//               <input
//                 type="text"
//                 placeholder="Search property..."
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setOpenLocation(true);
//                 }}
//                 className="w-full outline-none text-sm"
//               />
//             </div>

//             {/* 🔥 DROPDOWN */}
//             {openLocation && (
//               <div className="absolute right-0 top-14 w-full bg-white shadow-xl rounded-xl p-3 z-50">

//                 {search ? (
//                   filteredProperties.length > 0 ? (
//                     filteredProperties.map((item, i) => (
//                       <Link
//                         to="/properties"
//                         key={i}
//                         onClick={() => setOpenLocation(false)}
//                         className="block p-3 border-b hover:bg-blue-50 rounded"
//                       >
//                         <h4 className="font-bold text-sm">
//                           {item.name}
//                         </h4>
//                         <p className="text-xs text-gray-500">
//                           {item.location} - {item.address}
//                         </p>
//                       </Link>
//                     ))
//                   ) : (
//                     <p className="text-center text-gray-400 py-4">
//                       No property found
//                     </p>
//                   )
//                 ) : (
//                   <p className="text-center text-gray-400 py-4">
//                     Start typing to search...
//                   </p>
//                 )}

//               </div>
//             )}
//           </div>

//           {/* 📱 MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={30} />
//           </button>

//         </div>
//       </div>

//       {/* 📱 BACKDROP */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       {/* 📱 MOBILE MENU */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 transform transition-transform duration-300
//         ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >

//         <div className="flex justify-between items-center p-5 border-b">
//           <h1 className="text-2xl font-bold text-blue-600">Menu</h1>
//           <X size={30} onClick={() => setMenuOpen(false)} />
//         </div>

//         <div className="flex flex-col p-6 space-y-8 text-lg font-bold">

//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>

//           <Link to="/properties" onClick={() => setMenuOpen(false)}>
//             Properties
//           </Link>

//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </Link>

//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>

//           {/* 🔥 PROFILE */}
//           {isAuth ? (
//             <button
//               onClick={() => {
//                 setMenuOpen(false);
//                 goToProfile();
//               }}
//               className="text-blue-600 text-left"
//             >
//               My Profile
//             </button>
//           ) : (
//             <Link to="/login" onClick={() => setMenuOpen(false)}>
//               Login
//             </Link>
//           )}

//         </div>
//       </div>

//     </nav>
//   );
// }









import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import properties from "../data/properties";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [search, setSearch] = useState("");

  const locationRef = useRef();

  const isAuth = localStorage.getItem("token");

  // 🔥 PROFILE ROUTE
  const goToProfile = () => {
    const role = localStorage.getItem("role");

    if (!isAuth) return navigate("/login");

    if (role === "admin") {
      navigate("/admin/profile");
    } else {
      navigate("/profile");
    }

    setMenuOpen(false);
  };

  // click outside search
  useEffect(() => {
    const handler = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setOpenLocation(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path) => location.pathname === path;

  const filteredProperties = properties.filter((item) =>
    `${item.name} ${item.location} ${item.address}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const navItem = "transition font-bold hover:text-pink-600";

  return (
    <nav className="w-full bg-gradient-to-r from-pink-50 to-white shadow-md border-b border-pink-200 px-4 md:px-10 py-4 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold text-pink-600">
          HomeFinder
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg font-bold text-gray-800 items-center">

          <Link
            to="/"
            className={`${navItem} ${isActive("/") ? "text-pink-600" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/properties"
            className={`${navItem} ${isActive("/properties") ? "text-pink-600" : ""}`}
          >
            Properties
          </Link>

          <Link
            to="/about"
            className={`${navItem} ${isActive("/about") ? "text-pink-600" : ""}`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`${navItem} ${isActive("/contact") ? "text-pink-600" : ""}`}
          >
            Contact
          </Link>

          {/* PROFILE */}
          {isAuth ? (
            <button
              onClick={goToProfile}
              className="text-pink-600 font-bold"
            >
              My Profile
            </button>
          ) : (
            <Link to="/login" className="hover:text-pink-600">
              Login
            </Link>
          )}

        </ul>

        {/* SEARCH + MOBILE */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="relative hidden md:block w-[250px]" ref={locationRef}>

            <div className="flex items-center gap-2 border border-pink-200 px-4 py-2 rounded-full bg-white">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search property..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpenLocation(true);
                }}
                className="w-full outline-none text-sm"
              />
            </div>

            {/* DROPDOWN */}
            {openLocation && (
              <div className="absolute right-0 top-14 w-full bg-white shadow-xl rounded-xl p-3 z-50">

                {filteredProperties.length > 0 ? (
                  filteredProperties.map((item, i) => (
                    <Link
                      key={i}
                      to="/properties"
                      className="block p-3 border-b hover:bg-pink-50 rounded"
                    >
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.location} - {item.address}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-4">
                    No property found
                  </p>
                )}

              </div>
            )}
          </div>

          {/* MOBILE MENU */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={30} />
          </button>

        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-2xl font-bold text-pink-600">Menu</h1>
          <X size={30} onClick={() => setMenuOpen(false)} />
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col p-6 space-y-6 text-xl font-bold">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={isActive("/") ? "text-pink-600" : ""}
          >
            Home
          </Link>

          <Link
            to="/properties"
            onClick={() => setMenuOpen(false)}
            className={isActive("/properties") ? "text-pink-600" : ""}
          >
            Properties
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={isActive("/about") ? "text-pink-600" : ""}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={isActive("/contact") ? "text-pink-600" : ""}
          >
            Contact
          </Link>

          {/* PROFILE */}
          {isAuth ? (
            <button
              onClick={goToProfile}
              className="text-pink-600 text-left"
            >
              My Profile
            </button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}

        </div>

      </div>
    </nav>
  );
}