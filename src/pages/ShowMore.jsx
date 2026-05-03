import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function ShowMore() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const services = [
    { name: "Jobs", route: "/jobs", icon: "💼", color: "from-blue-500 to-blue-600" },
    { name: "PG / Hostel", route: "/pg-hostel", icon: "🏠", color: "from-indigo-500 to-indigo-600" },
    { name: "Real Estate", route: "/real-estate", icon: "🏘️", color: "from-green-500 to-green-600" },
    { name: "Rent / Hire", route: "/rent", icon: "🚀", color: "from-purple-500 to-purple-600" },
    { name: "Loans", route: "/loans", icon: "💰", color: "from-yellow-500 to-yellow-600" },
    { name: "B2B Services", route: "/b2b", icon: "🏢", color: "from-pink-500 to-pink-600" },
    { name: "Doctors", route: "/doctors", icon: "🧑‍⚕️", color: "from-red-500 to-red-600" },
    { name: "Gym & Fitness", route: "/gym", icon: "🏋️", color: "from-orange-500 to-orange-600" },
    { name: "Beauty Services", route: "/beauty", icon: "💄", color: "from-rose-500 to-rose-600" },
    { name: "Car Hire", route: "/car-hire", icon: "🚗", color: "from-sky-500 to-sky-600" },
    { name: "Repairs", route: "/repairs", icon: "🔧", color: "from-gray-600 to-gray-700" },
    { name: "Packers & Movers", route: "/packers", icon: "📦", color: "from-orange-600 to-orange-700" },
  ];

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Explore All Services 🚀
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search services (jobs, rent, loans...)"
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {filtered.map((s, i) => (
            <div
              key={i}
              onClick={() => navigate(s.route)}
              className={`cursor-pointer rounded-2xl p-5 text-white bg-gradient-to-r ${s.color} shadow-md hover:shadow-xl hover:scale-105 transition`}
            >

              <div className="text-3xl">{s.icon}</div>

              <h2 className="mt-3 font-bold text-lg">
                {s.name}
              </h2>

              <p className="text-xs opacity-80 mt-1">
                Explore {s.name} services
              </p>

            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}