import {
  FaHandshake,
  FaUserMd,
  FaPlane,
  FaCar,
  FaPaintBrush,
  FaUsers,
  FaDumbbell,
  FaGraduationCap,
  FaBox,
  FaTools,
  FaKey,
  FaUserTie,
  FaMoneyBill,
  FaHome,
  FaBed,
  FaChevronDown,
  FaSearch, // ✅ NEW
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useState } from "react"; // ✅ NEW

export default function ServiceGrid() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); // ✅ state

  const services = [
    { name: "B2B", icon: <FaHandshake />, slug: "b2b" },
    { name: "Doctors", icon: <FaUserMd />, slug: "doctors" },
    { name: "Travel", icon: <FaPlane />, slug: "travel" },
    { name: "Car Hire", icon: <FaCar />, slug: "car-hire" },

    { name: "Beauty", icon: <FaPaintBrush />, slug: "beauty" },
    { name: "Wedding Planning", icon: <FaUsers />, slug: "wedding-planning" },
    { name: "Gym", icon: <FaDumbbell />, slug: "gym" },
    { name: "Education", icon: <FaGraduationCap />, slug: "education" },

    { name: "Packers & Movers", icon: <FaBox />, slug: "packers-movers" },
    { name: "Repairs & Services", icon: <FaTools />, slug: "repairs-services" },
    { name: "Rent or Hire", icon: <FaKey />, slug: "rent-hire" },
    { name: "Jobs", icon: <FaUserTie />, slug: "jobs" },

    { name: "Loans", icon: <FaMoneyBill />, slug: "loans" },
    { name: "Real Estate", icon: <FaHome />, slug: "real-estate" },
    { name: "PG/Hostel", icon: <FaBed />, slug: "pg-hostel" },
    { name: "Show More", icon: <FaChevronDown />, slug: "more" },
  ];

  // ✅ Filter logic
  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">

      {/* 🔍 SEARCH BOX */}
      <div className="mb-8 flex items-center bg-white shadow-md rounded-xl px-4 py-3">
        <FaSearch className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search services like doctors, gym, jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* 🔥 TITLE */}
      {/* <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
        Explore Services
      </h2> */}

      {/* 🔲 GRID */}
      <div
        className="
        grid 
        grid-cols-3 
        sm:grid-cols-4 
        md:grid-cols-5 
        lg:grid-cols-6
        gap-y-10 
        gap-x-6 
        text-center
      "
      >
        {filteredServices.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(`/${item.slug}`)}
            className="
              flex flex-col items-center 
              group cursor-pointer
              transition outline-none
            "
          >
            <div
              className="
              w-20 h-20 
              md:w-24 md:h-24 
              flex items-center justify-center 
              bg-white 
              rounded-full 
              shadow-md 
              text-blue-600 
              text-2xl md:text-3xl

              transition-all duration-300
              group-hover:scale-110 
              group-hover:shadow-2xl
              group-hover:bg-blue-50

              active:scale-95
            "
            >
              {item.icon}
            </div>

            <p
              className="
              text-sm md:text-base 
              font-semibold 
              mt-3 
              text-gray-800 
              leading-tight
              group-hover:text-blue-600
            "
            >
              {item.name}
            </p>
          </button>
        ))}
      </div>

      {/* 📢 BANNER */}
      <div
        className="
        mt-12 
        bg-white 
        border 
        rounded-2xl 
        p-6 
        flex 
        flex-col sm:flex-row 
        items-start sm:items-center 
        justify-between 
        gap-4
        shadow-md
      "
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-900 font-semibold text-base md:text-lg">
            List your business
          </span>

          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Free
          </span>
        </div>

        <button
          className="
          bg-blue-600 
          text-white 
          px-6 py-3 
          rounded-xl 
          font-semibold 
          hover:bg-blue-700 
          transition
          w-full sm:w-auto
        "
        >
          Start Now
        </button>
      </div>
    </div>
  );
}