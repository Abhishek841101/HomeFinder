import { useState } from "react";
import Footer from "../components/Footer";

export default function Packers() {
  const [search, setSearch] = useState("");

  const movers = [
    {
      name: "SafeShift Packers",
      desc: "Reliable home & office shifting services",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=60",
      from: "Chennai",
      to: "Bangalore",
      price: "₹5,000 - ₹12,000",
      vehicle: "Truck + Helpers",
      rating: 4.7,
      time: "1-2 Days",
      type: "Safe Move",
      verified: true,
    },
    {
      name: "QuickMove Logistics",
      desc: "Fast local shifting at affordable price",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      from: "Delhi",
      to: "Noida",
      price: "₹2,000 - ₹6,000",
      vehicle: "Mini Truck",
      rating: 4.5,
      time: "Same Day",
      type: "Budget",
      verified: true,
    },
    {
      name: "UrbanPack Movers",
      desc: "Intercity relocation specialists",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=60",
      from: "Mumbai",
      to: "Pune",
      price: "₹4,000 - ₹10,000",
      vehicle: "Tempo + Workers",
      rating: 4.6,
      time: "1 Day",
      type: "Fast",
      verified: false,
    },
    {
      name: "Express Cargo Movers",
      desc: "Heavy goods & office relocation experts",
      image: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?auto=format&fit=crop&w=800&q=60",
      from: "Jaipur",
      to: "Delhi",
      price: "₹6,000 - ₹15,000",
      vehicle: "Large Truck",
      rating: 4.8,
      time: "2 Days",
      type: "Premium",
      verified: true,
    },
    {
      name: "CityShift Packers",
      desc: "Affordable household shifting service",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=60",
      from: "Hyderabad",
      to: "Chennai",
      price: "₹3,500 - ₹9,000",
      vehicle: "Mini Truck + Helpers",
      rating: 4.4,
      time: "1-2 Days",
      type: "Budget",
      verified: false,
    },
  ];

  const filtered = movers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.from.toLowerCase().includes(search.toLowerCase()) ||
      m.to.toLowerCase().includes(search.toLowerCase()) ||
      m.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Packers & Movers 📦
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search city, service, company..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6">

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No movers found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try city name or service type
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {filtered.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-44 object-cover"
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {m.rating}
                  </span>

                  {/* TAG */}
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {m.type}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {m.verified && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {m.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {m.desc}
                  </p>

                  {/* ROUTE */}
                  <p className="text-sm text-gray-600 mt-2">
                    🚚 {m.from} → {m.to}
                  </p>

                  {/* INFO */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>⏱ {m.time}</span>
                    <span>{m.vehicle}</span>
                  </div>

                  <p className="text-sm text-green-600 font-semibold mt-2">
                    💰 {m.price}
                  </p>

                  <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-xl hover:opacity-90 transition">
                    Book Move
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}