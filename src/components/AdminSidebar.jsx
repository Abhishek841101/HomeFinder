
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  User,
  PlusCircle,
  LogOut,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@gmail.com",
  });

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("userProfile")) ||
      JSON.parse(localStorage.getItem("user"));

    if (stored) {
      setUser({
        name: stored.name || "Admin",
        email: stored.email || "",
      });
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  const menu = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={22} /> },
    { name: "Add Property", path: "/add-property", icon: <PlusCircle size={22} /> },
    { name: "Manage Properties", path: "/properties", icon: <Home size={22} /> },
    { name: "Profile", path: "/admin/profile", icon: <User size={22} /> },
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
        className={`fixed top-0 left-0 h-full z-50 flex flex-col
        bg-gradient-to-b from-pink-50 to-white shadow-2xl
        transition-all duration-300
        ${collapsed ? "w-20" : "w-80"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-4">

          {!collapsed && (
            <div>
              <h2 className="text-xl font-extrabold text-pink-600">
                Admin Panel
              </h2>
              <p className="text-xs text-gray-500">
                Manage everything
              </p>
            </div>
          )}

          <div className="flex items-center gap-2">

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg text-pink-600 hover:bg-pink-100 font-bold"
            >
              {collapsed ? "›" : "‹"}
            </button>

            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>

          </div>
        </div>

        {/* 👤 PROFILE CARD (NEW) */}
        {!collapsed && (
          <div className="px-4 mb-3">
            <div className="bg-white rounded-3xl shadow-md p-5 text-center">

              <div className="w-20 h-20 mx-auto bg-pink-600 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                {user.name.charAt(0)}
              </div>

              <h2 className="mt-3 text-lg font-extrabold text-black">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">{user.email}</p>

              <button
                onClick={() => navigate("/admin/profile")}
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl text-sm font-bold"
              >
                View Profile
              </button>
            </div>
          </div>
        )}

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-3 space-y-3">

          {menu.map((item, i) => {
            const active = isActive(item.path);

            return (
              <button
                key={i}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-[16px] transition
                ${
                  active
                    ? "bg-pink-600 text-white shadow-md"
                    : "bg-white text-black hover:bg-pink-50"
                }`}
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`p-2 rounded-full ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {!collapsed && (
                    <span className="text-[17px] font-extrabold">
                      {item.name}
                    </span>
                  )}

                </div>

                {!collapsed && (
                  <span className="text-xl opacity-70">›</span>
                )}

              </button>
            );
          })}
        </div>

        {/* LOGOUT */}
        <div className="p-3">

          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
          >
            <LogOut size={20} />
            {!collapsed && "Logout"}
          </button>

        </div>

      </div>
    </>
  );
}