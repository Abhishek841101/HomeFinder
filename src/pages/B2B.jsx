import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function B2B() {
  const [search, setSearch] = useState("");

  // ✅ FIX: always open top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      name: "ABC Traders Pvt Ltd",
      desc: "Wholesale electronics supplier for bulk orders",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.5,
      category: "Electronics",
      verified: true,
    },
    {
      name: "Global Export Hub",
      desc: "International import-export & logistics solutions",
      image:
        "https://images.unsplash.com/photo-1581091870622-2c5f1f0c1c4f?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.2,
      category: "Export",
      verified: true,
    },
    {
      name: "Industrial Supply Co.",
      desc: "Heavy machinery and industrial tools provider",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=60",
      location: "Pune",
      rating: 4.4,
      category: "Machinery",
      verified: false,
    },
    {
      name: "Rajasthan Textile Mart",
      desc: "Wholesale textile and fabric supplier",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60",
      location: "Jaipur",
      rating: 4.6,
      category: "Textile",
      verified: true,
    },
    {
      name: "Delhi Food Supply Chain",
      desc: "Bulk food & restaurant supply distributor",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.3,
      category: "Food",
      verified: false,
    },
    {
      name: "TechNova IT Solutions",
      desc: "B2B software & IT outsourcing company",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.7,
      category: "IT Services",
      verified: true,
    },
  ];

  const filteredData = data.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          B2B Marketplace 🏢
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search company, category, location..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6">

        {filteredData.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No results found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try company, category or city
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filteredData.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image")
                    }
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {item.rating}
                  </span>

                  {/* VERIFIED */}
                  {item.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    📍 {item.location}
                  </p>

                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition">
                    View Details
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