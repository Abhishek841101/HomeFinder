

import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserCheck,
  Map,
  Home,
  MessageCircle,
  Ticket,
  CreditCard,
  Gift,
  ChevronDown,
  ChevronRight,
  LogOut,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function UserSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openSection, setOpenSection] = useState("crm");

  const [user, setUser] = useState({
    name: "User",
    email: "user@gmail.com",
  });

  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem("userProfile")) ||
      JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser({
        name: storedUser.name || "User",
        email: storedUser.email || "",
      });
    }
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false); // 🔥 mobile auto close
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menu = [
    {
      title: "Network & CRM",
      key: "crm",
      items: [
        { name: "Customers", path: "/customers", icon: <Users size={18} /> },
        { name: "Builders", path: "/builders", icon: <Building2 size={18} /> },
        { name: "Sales Partners", path: "/sales", icon: <UserCheck size={18} /> },
        { name: "Territory Partners", path: "/territory", icon: <Map size={18} /> },
      ],
    },
    {
      title: "Business Modules",
      key: "business",
      items: [
        { name: "Properties", path: "/properties", icon: <Home size={18} /> },
        { name: "Enquiries", path: "/enquiries", icon: <MessageCircle size={18} /> },
        { name: "Tickets", path: "/tickets", icon: <Ticket size={18} /> },
      ],
    },
    {
      title: "Account & Settings",
      key: "account",
      items: [
        { name: "Subscription Plan", path: "/subscription", icon: <CreditCard size={18} /> },
        { name: "Invite Friends", path: "/invite", icon: <Gift size={18} /> },
      ],
    },
  ];

  return (
    <>
      {/* 🔥 BACKDROP */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl flex flex-col
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        {/* 🔷 USER INFO */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-lg">
              {user.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-sm font-semibold">{user.name}</h2>
              <p className="text-xs text-gray-400 truncate max-w-[140px]">
                {user.email}
              </p>
            </div>

          </div>

          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* 🔥 DASHBOARD */}
        <div className="p-3 border-b">
          <button
            onClick={() => handleNavigate("/user/dashboard")}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg font-medium transition
            ${
              location.pathname === "/user/dashboard"
                ? "bg-blue-600 text-white shadow"
                : "hover:bg-blue-50 text-gray-700"
            }`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>
        </div>

        {/* 🔥 MENU */}
        <div className="flex-1 p-3 space-y-3 overflow-y-auto">

          {menu.map((section) => (
            <div key={section.key}>

              {/* SECTION HEADER */}
              <button
                onClick={() => toggleSection(section.key)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600 font-semibold hover:bg-gray-100 rounded-lg"
              >
                <span>{section.title}</span>

                <span className="transition">
                  {openSection === section.key ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </span>
              </button>

              {/* ITEMS */}
              {openSection === section.key && (
                <div className="ml-3 mt-2 space-y-1">

                  {section.items.map((item, i) => {
                    const active = location.pathname === item.path;

                    return (
                      <button
                        key={i}
                        onClick={() => handleNavigate(item.path)}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-all
                        ${
                          active
                            ? "bg-blue-600 text-white shadow"
                            : "hover:bg-blue-50 text-gray-700"
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </button>
                    );
                  })}

                </div>
              )}

            </div>
          ))}
        </div>

        {/* 🔥 LOGOUT */}
        <div className="p-3 border-t">
          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </>
  );
}