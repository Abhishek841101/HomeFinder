// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Home,
//   User,
//   PlusCircle,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";

// export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const logout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   const menu = [
//     {
//       name: "Dashboard",
//       path: "/admin",
//       icon: <LayoutDashboard size={18} />,
//     },
//     {
//       name: "Add Property",
//       path: "/add-property",
//       icon: <PlusCircle size={18} />,
//     },
//     {
//       name: "Manage Properties",
//       path: "/properties",
//       icon: <Home size={18} />,
//     },
//     {
//       name: "Profile",
//       path: "/admin/profile",
//       icon: <User size={18} />,
//     },
//   ];

//   return (
//     <>
//       {/* 🔥 MOBILE BACKDROP */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* 🔥 SIDEBAR */}
//       <div
//         className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col
//         transition-transform duration-300
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >

//         {/* 🔷 HEADER */}
//         <div className="flex items-center justify-between p-5 border-b">

//           <div>
//             <h2 className="text-2xl font-bold text-blue-600">
//               Admin Panel
//             </h2>
//             <p className="text-xs text-gray-400">
//               Manage everything
//             </p>
//           </div>

//           {/* CLOSE BUTTON (MOBILE) */}
//           <button
//             className="md:hidden"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X />
//           </button>
//         </div>

//         {/* 🔥 MENU */}
//         <div className="flex-1 p-4 space-y-2">

//           <p className="text-xs text-gray-400 px-2 mb-2">
//             MAIN MENU
//           </p>

//           {menu.map((item, i) => {
//             const active = location.pathname === item.path;

//             return (
//               <button
//                 key={i}
//                 onClick={() => {
//                   navigate(item.path);
//                   setSidebarOpen(false);
//                 }}
//                 className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all
//                 ${
//                   active
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "hover:bg-blue-50 text-gray-700"
//                 }`}
//               >
//                 {item.icon}
//                 <span className="font-medium">{item.name}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* 🔥 FOOTER */}
//         <div className="p-4 border-t">

//           <button
//             onClick={logout}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
//           >
//             <LogOut size={18} />
//             Logout
//           </button>

//         </div>
//       </div>
//     </>
//   );
// }





import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  User,
  PlusCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ArrowRight, // 👉 arrow for active item
  X,
} from "lucide-react";
import { useState } from "react";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menu = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Add Property", path: "/add-property", icon: <PlusCircle size={20} /> },
    { name: "Manage Properties", path: "/properties", icon: <Home size={20} /> },
    { name: "Profile", path: "/admin/profile", icon: <User size={20} /> },
  ];

  return (
    <>
      {/* BACKDROP */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-white shadow-2xl flex flex-col
        transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                Admin Panel
              </h2>
              <p className="text-xs text-gray-400">
                Manage everything
              </p>
            </div>
          )}

          {/* COLLAPSE */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>

          {/* MOBILE CLOSE */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 p-3 space-y-2">

          {menu.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={i}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`flex items-center justify-between w-full px-3 py-3 rounded-xl transition-all
                ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-50 text-gray-700"
                }`}
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  {item.icon}

                  {!collapsed && (
                    <span className="font-medium">
                      {item.name}
                    </span>
                  )}
                </div>

                {/* 👉 RIGHT ARROW ONLY WHEN ACTIVE */}
                {!collapsed && active && (
                  <ArrowRight size={16} />
                )}
              </button>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="p-3 border-t">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut size={20} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
}