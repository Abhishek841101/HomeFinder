import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Travel() {
  const [search, setSearch] = useState("");

  // ✅ FIX: page always opens at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: "Goa Holiday Package",
      desc: "3N/4D beach holiday with hotel + food",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      from: "Delhi",
      to: "Goa",
      price: "₹9,999",
      type: "Tour Package",
      duration: "4 Days",
      rating: 4.8,
      tag: "Popular",
      verified: true,
    },
    {
      name: "Mumbai → Bangalore Flight",
      desc: "Budget airline tickets with instant booking",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=60",
      from: "Mumbai",
      to: "Bangalore",
      price: "₹3,499",
      type: "Flight",
      duration: "1.5 Hours",
      rating: 4.6,
      tag: "Fast",
      verified: true,
    },
    {
      name: "Kerala Backwater Tour",
      desc: "Luxury houseboat experience with meals",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      from: "Cochin",
      to: "Alleppey",
      price: "₹12,999",
      type: "Tour Package",
      duration: "2 Days",
      rating: 4.9,
      tag: "Luxury",
      verified: true,
    },
    {
      name: "Delhi → Jaipur Cab",
      desc: "Private AC cab for family travel",
      image:
        "https://images.unsplash.com/photo-1549921296-3a6b3b4c1f0b?auto=format&fit=crop&w=800&q=60",
      from: "Delhi",
      to: "Jaipur",
      price: "₹2,500",
      type: "Cab",
      duration: "5 Hours",
      rating: 4.5,
      tag: "Budget",
      verified: false,
    },
  ];

  // ✅ SEARCH FILTER (safe)
  const filtered = services.filter((s) => {
    const query = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.from.toLowerCase().includes(query) ||
      s.to.toLowerCase().includes(query) ||
      s.type.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow px-4 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Travel Services ✈️
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search flight, cab, tour, city..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No travel options found 😕
            </p>
          ) : (
            filtered.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-44 w-full object-cover"
                  />

                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {t.rating}
                  </span>

                  <span className="absolute top-2 left-2 bg-sky-600 text-white text-xs px-2 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {t.verified && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}

                  <h2 className="font-bold mt-2 text-gray-800">
                    {t.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    ✈️ {t.from} → {t.to}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    🚀 {t.type} • ⏱ {t.duration}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    💰 {t.price}
                  </p>

                  <button className="mt-3 w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white py-2 rounded-xl hover:opacity-90 transition">
                    Book Now
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}