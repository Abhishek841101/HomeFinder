
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import MapView from "../components/MapView"; // ✅ ADD
// import { useState } from "react";
// import propertiesData from "../data/properties";

// export default function Properties() {

//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");

//   const filtered = propertiesData.filter((p) => {
//     return (
//       (filter === "All" || p.location === filter) &&
//       (p.title.toLowerCase().includes(search.toLowerCase()) ||
//         p.location.toLowerCase().includes(search.toLowerCase()))
//     );
//   });

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col">

//       <Navbar />

//       <div className="flex-grow px-6 py-8 max-w-7xl mx-auto w-full">

//         <h1 className="text-3xl md:text-4xl font-bold mb-2">
//           Find Properties
//         </h1>

//         <p className="text-gray-500 mb-6">
//           Search your dream home easily
//         </p>

//         {/* FILTER */}
//         <div className="flex gap-3 flex-wrap mb-6">
//           {["All", "Bangalore", "Mumbai", "Delhi", "Patna", "Nagpur"].map((city) => (
//             <button
//               key={city}
//               onClick={() => setFilter(city)}
//               className={`px-4 py-2 rounded-full border ${
//                 filter === city
//                   ? "bg-blue-600 text-white"
//                   : "bg-white text-gray-600 hover:bg-blue-50"
//               }`}
//             >
//               {city}
//             </button>
//           ))}
//         </div>

//         {/* SEARCH */}
//         <input
//           type="text"
//           placeholder="Search by name or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-1/2 p-3 border rounded-lg mb-8 outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//           {filtered.length > 0 ? (
//             filtered.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
//               >

//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="h-48 w-full object-cover"
//                 />

//                 <div className="p-4">

//                   <h2 className="text-lg font-semibold">
//                     {item.title}
//                   </h2>

//                   <p className="text-gray-500 text-sm">
//                     📍 {item.location}
//                   </p>

//                   <p className="text-blue-600 font-bold mt-2">
//                     {item.price}
//                   </p>

//                   {/* DETAILS */}
//                   <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                     View Details
//                   </button>

//                   {/* 🔥 MAP BUTTON */}
//                   <button
//                     onClick={() =>
//                       window.open(`https://www.google.com/maps/search/${item.location}`)
//                     }
//                     className="mt-2 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
//                   >
//                     View on Map
//                   </button>

//                   {/* 🔥 MAP VIEW */}
//                   <MapView location={item.location} />

//                 </div>

//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 col-span-full text-center">
//               No properties found 😢
//             </p>
//           )}

//         </div>

//       </div>

//       <Footer />

//     </div>
//   );
// }

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../features/property/propertySlice";

import { Search, ChevronDown } from "lucide-react";

export default function Properties() {
  const dispatch = useDispatch();
  const { properties, loading } = useSelector((state) => state.property);

  const [search, setSearch] = useState("");

  const [purpose, setPurpose] = useState("Rent");
  const [type, setType] = useState("All");
  const [bhk, setBhk] = useState("All");
  const [budget, setBudget] = useState("All");

  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const closeAll = () => setOpenDropdown(null);

  const typeOptions = {
    Rent: ["All", "Rent Flat", "Rent Shop", "Rent Office"],
    Sale: ["All", "Sale Flat", "Sale Shop", "Sale House"],
    Resale: ["All", "Resale Flat", "Resale House"],
  };

  const bhkOptions = ["All", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

  const filtered = properties.filter((p) => {
    return (
      (purpose === "All" ||
        p.purpose?.toLowerCase() === purpose.toLowerCase()) &&
      (type === "All" ||
        p.propertyType?.toLowerCase().includes(type.toLowerCase())) &&
      (p.propertyName?.toLowerCase().includes(search.toLowerCase()) ||
        p.location?.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col w-full">

      {/* 🔥 NAVBAR (NOT STICKY) */}
      <Navbar />

      {/* 🔥 FILTER BAR (NORMAL SECTION) */}
      <div className="w-full border-b border-gray-300 bg-white px-6 py-3">

        <div className="flex flex-wrap items-center gap-4 w-full">

          {/* SEARCH */}
          <div className="flex flex-1 min-w-[280px] border border-gray-300 rounded-xl overflow-hidden">

            <div className="relative w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search property..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 outline-none"
              />
            </div>

          </div>

          {/* PURPOSE */}
          <div className="flex gap-2 p-1 border border-gray-300 rounded-xl bg-white">
            {["Rent", "Sale", "Resale"].map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPurpose(p);
                  setType("All");
                }}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  purpose === p
                    ? "bg-gray-100 shadow font-semibold"
                    : "text-gray-600"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* TYPE */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "type" ? null : "type")
              }
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
            >
              {type}
              <ChevronDown size={16} />
            </button>

            {openDropdown === "type" && (
              <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-52 z-50">
                {typeOptions[purpose]?.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setType(t);
                      closeAll();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* BHK */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "bhk" ? null : "bhk")
              }
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
            >
              {bhk}
              <ChevronDown size={16} />
            </button>

            {openDropdown === "bhk" && (
              <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-40 z-50">
                {bhkOptions.map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setBhk(b);
                      closeAll();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* BUDGET */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "budget" ? null : "budget")
              }
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
            >
              Budget
              <ChevronDown size={16} />
            </button>

            {openDropdown === "budget" && (
              <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-44 z-50">
                {["All", "20L", "50L", "1Cr", "2Cr+"].map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setBudget(b);
                      closeAll();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <button className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-xl active:scale-95">
            Search
          </button>

        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 w-full px-6 py-6">

        <h2 className="text-xl font-bold mb-4">
          {filtered.length} Properties Found
        </h2>

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <PropertyCard key={item._id} item={item} />
          ))}
        </div>

      </div>

      {/* 🔥 FOOTER */}
      <Footer />

    </div>
  );
}