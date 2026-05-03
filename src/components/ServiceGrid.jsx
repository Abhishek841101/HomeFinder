// import {
//   FaHandshake,
//   FaUserMd,
//   FaPlane,
//   FaCar,
//   FaPaintBrush,
//   FaUsers,
//   FaDumbbell,
//   FaGraduationCap,
//   FaBox,
//   FaTools,
//   FaKey,
//   FaUserTie,
//   FaMoneyBill,
//   FaHome,
//   FaBed,
//   FaChevronDown,
// } from "react-icons/fa";

// const services = [
//   { name: "B2B", icon: <FaHandshake /> },
//   { name: "Doctors", icon: <FaUserMd /> },
//   { name: "Travel", icon: <FaPlane /> },
//   { name: "Car Hire", icon: <FaCar /> },

//   { name: "Beauty", icon: <FaPaintBrush /> },
//   { name: "Wedding Planning", icon: <FaUsers /> },
//   { name: "Gym", icon: <FaDumbbell /> },
//   { name: "Education", icon: <FaGraduationCap /> },

//   { name: "Packers & Movers", icon: <FaBox /> },
//   { name: "Repairs & Services", icon: <FaTools /> },
//   { name: "Rent or Hire", icon: <FaKey /> },
//   { name: "Jobs", icon: <FaUserTie /> },

//   { name: "Loans", icon: <FaMoneyBill /> },
//   { name: "Real Estate", icon: <FaHome /> },
//   { name: "PG/Hostel", icon: <FaBed /> },
//   { name: "Show More", icon: <FaChevronDown /> },
// ];

// export default function ServiceGrid() {
//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-8">

//       {/* 🔲 GRID */}
//       <div className="
//         grid 
//         grid-cols-4 
//         sm:grid-cols-5 
//         md:grid-cols-6 
//         gap-y-6 
//         gap-x-4 
//         text-center
//       ">
//         {services.map((item, i) => (
//           <div
//             key={i}
//             className="flex flex-col items-center group cursor-pointer"
//           >
//             {/* Icon Circle */}
//             <div className="
//               w-14 h-14 
//               md:w-16 md:h-16 
//               flex items-center justify-center 
//               bg-white 
//               rounded-full 
//               shadow-md 
//               text-blue-600 
//               text-lg md:text-xl
//               transition-all duration-300
//               group-hover:scale-110 
//               group-hover:shadow-lg
//             ">
//               {item.icon}
//             </div>

//             {/* Label */}
//             <p className="
//               text-xs md:text-sm 
//               font-medium 
//               mt-2 
//               text-gray-800 
//               leading-tight
//               group-hover:text-blue-600
//             ">
//               {item.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* 📢 BANNER */}
//       <div className="
//         mt-8 
//         border 
//         rounded-xl 
//         p-4 
//         flex 
//         flex-col sm:flex-row 
//         items-start sm:items-center 
//         justify-between 
//         gap-3
//         bg-white
//         shadow-sm
//       ">
//         {/* Left */}
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-gray-800 font-semibold text-sm md:text-base">
//             List your business
//           </span>

//           <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
//             Free
//           </span>
//         </div>

//         {/* Button */}
//         <button className="
//           bg-blue-600 
//           text-white 
//           px-5 py-2 
//           rounded-lg 
//           font-medium 
//           hover:bg-blue-700 
//           transition
//           w-full sm:w-auto
//         ">
//           Start Now
//         </button>
//       </div>

//     </div>
//   );
// }



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
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function ServiceGrid() {
  const navigate = useNavigate();

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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">

      {/* 🔥 TITLE */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
        Explore Services
      </h2>

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
        {services.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(`/${item.slug}`)}   // ✅ FIXED HERE
            className="
              flex flex-col items-center 
              group cursor-pointer
              transition outline-none
            "
          >
            {/* ICON */}
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

            {/* LABEL */}
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