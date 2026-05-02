

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import PropertyCard from "../components/PropertyCard";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProperties } from "../features/property/propertySlice";

// import { Search, ChevronDown } from "lucide-react";

// export default function Properties() {
//   const dispatch = useDispatch();
//   const { properties, loading } = useSelector((state) => state.property);

//   const [search, setSearch] = useState("");

//   const [purpose, setPurpose] = useState("Rent");
//   const [type, setType] = useState("All");
//   const [bhk, setBhk] = useState("All");
//   const [budget, setBudget] = useState("All");

//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     dispatch(fetchProperties());
//   }, [dispatch]);

//   const closeAll = () => setOpenDropdown(null);

//   const typeOptions = {
//     Rent: ["All", "Rent Flat", "Rent Shop", "Rent Office"],
//     Sale: ["All", "Sale Flat", "Sale Shop", "Sale House"],
//     Resale: ["All", "Resale Flat", "Resale House"],
//   };

//   const bhkOptions = ["All", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

//   const filtered = properties.filter((p) => {
//     return (
//       (purpose === "All" ||
//         p.purpose?.toLowerCase() === purpose.toLowerCase()) &&
//       (type === "All" ||
//         p.propertyType?.toLowerCase().includes(type.toLowerCase())) &&
//       (p.propertyName?.toLowerCase().includes(search.toLowerCase()) ||
//         p.location?.toLowerCase().includes(search.toLowerCase()))
//     );
//   });

//   return (
//     <div className="bg-[#F8FAFC] min-h-screen flex flex-col w-full">

//       {/* 🔥 NAVBAR (NOT STICKY) */}
//       <Navbar />

//       {/* 🔥 FILTER BAR (NORMAL SECTION) */}
//       <div className="w-full border-b border-gray-300 bg-white px-6 py-3">

//         <div className="flex flex-wrap items-center gap-4 w-full">

//           {/* SEARCH */}
//           <div className="flex flex-1 min-w-[280px] border border-gray-300 rounded-xl overflow-hidden">

//             <div className="relative w-full">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={18}
//               />

//               <input
//                 type="text"
//                 placeholder="Search property..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-12 pr-4 py-2.5 outline-none"
//               />
//             </div>

//           </div>

//           {/* PURPOSE */}
//           <div className="flex gap-2 p-1 border border-gray-300 rounded-xl bg-white">
//             {["Rent", "Sale", "Resale"].map((p) => (
//               <button
//                 key={p}
//                 onClick={() => {
//                   setPurpose(p);
//                   setType("All");
//                 }}
//                 className={`px-4 py-2 rounded-lg text-sm transition ${
//                   purpose === p
//                     ? "bg-gray-100 shadow font-semibold"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>

//           {/* TYPE */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "type" ? null : "type")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               {type}
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "type" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-52 z-50">
//                 {typeOptions[purpose]?.map((t) => (
//                   <button
//                     key={t}
//                     onClick={() => {
//                       setType(t);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* BHK */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "bhk" ? null : "bhk")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               {bhk}
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "bhk" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-40 z-50">
//                 {bhkOptions.map((b) => (
//                   <button
//                     key={b}
//                     onClick={() => {
//                       setBhk(b);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* BUDGET */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "budget" ? null : "budget")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               Budget
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "budget" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-44 z-50">
//                 {["All", "20L", "50L", "1Cr", "2Cr+"].map((b) => (
//                   <button
//                     key={b}
//                     onClick={() => {
//                       setBudget(b);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* SEARCH BUTTON */}
//           <button className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-xl active:scale-95">
//             Search
//           </button>

//         </div>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="flex-1 w-full px-6 py-6">

//         <h2 className="text-xl font-bold mb-4">
//           {filtered.length} Properties Found
//         </h2>

//         {loading && <p>Loading...</p>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((item) => (
//             <PropertyCard key={item._id} item={item} />
//           ))}
//         </div>

//       </div>

//       {/* 🔥 FOOTER */}
//       <Footer />

//     </div>
//   );
// }









// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import PropertyCard from "../components/PropertyCard";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProperties } from "../features/property/propertySlice";

// // ✅ DUMMY IMPORT
// // import dummyProperties from "../data/dummyProperties";
// import dummyProperties from "../data/properties";
// import { Search, ChevronDown } from "lucide-react";

// export default function Properties() {
//   const dispatch = useDispatch();
//   const { properties, loading } = useSelector((state) => state.property);

//   const [search, setSearch] = useState("");

//   const [purpose, setPurpose] = useState("Rent");
//   const [type, setType] = useState("All");
//   const [bhk, setBhk] = useState("All");
//   const [budget, setBudget] = useState("All");

//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     dispatch(fetchProperties());
//   }, [dispatch]);

//   const closeAll = () => setOpenDropdown(null);

//   // 🔥 FINAL DATA (REAL + DUMMY)
//   const finalProperties =
//     properties && properties.length > 0 ? properties : dummyProperties;

//   const typeOptions = {
//     Rent: ["All", "Rent Flat", "Rent Shop", "Rent Office"],
//     Sale: ["All", "Sale Flat", "Sale Shop", "Sale House"],
//     Resale: ["All", "Resale Flat", "Resale House"],
//   };

//   const bhkOptions = ["All", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

//   // 🔥 FILTER LOGIC (FINAL DATA PAR)
//   const filtered = finalProperties.filter((p) => {
//     return (
//       (purpose === "All" ||
//         p.purpose?.toLowerCase() === purpose.toLowerCase()) &&
//       (type === "All" ||
//         p.propertyType?.toLowerCase().includes(type.toLowerCase())) &&
//       (p.propertyName?.toLowerCase().includes(search.toLowerCase()) ||
//         p.location?.toLowerCase().includes(search.toLowerCase()))
//     );
//   });

//   // 🔥 CHECK DUMMY MODE
//   const isUsingDummy = !properties || properties.length === 0;

//   return (
//     <div className="bg-[#F8FAFC] min-h-screen flex flex-col w-full">

//       <Navbar />

//       {/* 🔥 FILTER BAR */}
//       <div className="w-full border-b border-gray-300 bg-white px-6 py-3">
//         <div className="flex flex-wrap items-center gap-4 w-full">

//           {/* SEARCH */}
//           <div className="flex flex-1 min-w-[280px] border border-gray-300 rounded-xl overflow-hidden">
//             <div className="relative w-full">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 placeholder="Search property..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-12 pr-4 py-2.5 outline-none"
//               />
//             </div>
//           </div>

//           {/* PURPOSE */}
//           <div className="flex gap-2 p-1 border border-gray-300 rounded-xl bg-white">
//             {["Rent", "Sale", "Resale"].map((p) => (
//               <button
//                 key={p}
//                 onClick={() => {
//                   setPurpose(p);
//                   setType("All");
//                 }}
//                 className={`px-4 py-2 rounded-lg text-sm transition ${
//                   purpose === p
//                     ? "bg-gray-100 shadow font-semibold"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>

//           {/* TYPE */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "type" ? null : "type")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               {type}
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "type" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-52 z-50">
//                 {typeOptions[purpose]?.map((t) => (
//                   <button
//                     key={t}
//                     onClick={() => {
//                       setType(t);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* BHK */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "bhk" ? null : "bhk")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               {bhk}
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "bhk" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-40 z-50">
//                 {bhkOptions.map((b) => (
//                   <button
//                     key={b}
//                     onClick={() => {
//                       setBhk(b);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* BUDGET */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "budget" ? null : "budget")
//               }
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white"
//             >
//               Budget
//               <ChevronDown size={16} />
//             </button>

//             {openDropdown === "budget" && (
//               <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-xl w-44 z-50">
//                 {["All", "20L", "50L", "1Cr", "2Cr+"].map((b) => (
//                   <button
//                     key={b}
//                     onClick={() => {
//                       setBudget(b);
//                       closeAll();
//                     }}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {b}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* SEARCH BUTTON */}
//           <button className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-xl active:scale-95">
//             Search
//           </button>

//         </div>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="flex-1 w-full px-6 py-6">

//         {/* 🔥 DUMMY INFO */}
//         {isUsingDummy && (
//           <p className="text-yellow-500 text-sm mb-2">
//             Showing demo properties (backend not connected)
//           </p>
//         )}

//         <h2 className="text-xl font-bold mb-4">
//           {filtered.length} Properties Found
//         </h2>

//         {loading && <p>Loading...</p>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((item) => (
//             <PropertyCard key={item._id} item={item} />
//           ))}
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

import dummyProperties from "../data/properties";
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

  const finalProperties =
    properties && properties.length > 0 ? properties : dummyProperties;

  const typeOptions = {
    Rent: ["All", "Rent Flat", "Rent Shop", "Rent Office"],
    Sale: ["All", "Sale Flat", "Sale Shop", "Sale House"],
    Resale: ["All", "Resale Flat", "Resale House"],
  };

  const bhkOptions = ["All", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];

  const filtered = finalProperties.filter((p) => {
    return (
      (purpose === "All" ||
        p.purpose?.toLowerCase() === purpose.toLowerCase()) &&
      (type === "All" ||
        p.propertyType?.toLowerCase().includes(type.toLowerCase())) &&
      (p.propertyName?.toLowerCase().includes(search.toLowerCase()) ||
        p.location?.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const isUsingDummy = !properties || properties.length === 0;

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white min-h-screen flex flex-col">

      <Navbar />

      {/* 🔥 GLASS FILTER BAR */}
      <div className="w-full px-6 py-4 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg">
        <div className="flex flex-wrap items-center gap-4">

          {/* SEARCH */}
          <div className="flex flex-1 min-w-[280px] rounded-xl overflow-hidden bg-white/10 backdrop-blur border border-white/20">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
              <input
                type="text"
                placeholder="Search property..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* PURPOSE */}
          <div className="flex gap-2 p-1 rounded-xl bg-white/10 border border-white/20 backdrop-blur">
            {["Rent", "Sale", "Resale"].map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPurpose(p);
                  setType("All");
                }}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  purpose === p
                    ? "bg-white/20 shadow text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* DROPDOWN */}
          <Dropdown
            label={type}
            open={openDropdown === "type"}
            onClick={() =>
              setOpenDropdown(openDropdown === "type" ? null : "type")
            }
            options={typeOptions[purpose]}
            onSelect={(val) => {
              setType(val);
              closeAll();
            }}
          />

          <Dropdown
            label={bhk}
            open={openDropdown === "bhk"}
            onClick={() =>
              setOpenDropdown(openDropdown === "bhk" ? null : "bhk")
            }
            options={bhkOptions}
            onSelect={(val) => {
              setBhk(val);
              closeAll();
            }}
          />

          <Dropdown
            label="Budget"
            open={openDropdown === "budget"}
            onClick={() =>
              setOpenDropdown(openDropdown === "budget" ? null : "budget")
            }
            options={["All", "20L", "50L", "1Cr", "2Cr+"]}
            onSelect={(val) => {
              setBudget(val);
              closeAll();
            }}
          />

          {/* BUTTON */}
          <button className="px-6 py-2.5 rounded-xl font-semibold 
          bg-gradient-to-r from-purple-600 to-indigo-500 
          shadow-lg hover:shadow-2xl hover:scale-105 transition">
            Search
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-6 py-6">

        {isUsingDummy && (
          <p className="text-yellow-400 text-sm mb-2">
            Showing demo properties
          </p>
        )}

        <h2 className="text-xl font-bold mb-4">
          {filtered.length} Properties Found
        </h2>

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div className="transition hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <PropertyCard key={item._id} item={item} />
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

/* 🔥 PREMIUM DROPDOWN */
function Dropdown({ label, open, onClick, options, onSelect }) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 rounded-xl 
        bg-white/10 backdrop-blur border border-white/20 
        hover:bg-white/20 transition"
      >
        {label}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute top-12 left-0 w-44 
        bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 
        shadow-2xl rounded-xl z-50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className="w-full text-left px-4 py-2 text-sm 
              hover:bg-white/10 transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}