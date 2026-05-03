import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Beauty() {
  const [search, setSearch] = useState("");

  // ✅ FIX: scroll to top on page open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: "GlowUp Luxury Salon",
      desc: "Premium hair styling, spa & bridal makeup services",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rating: 4.7,
      price: "₹499 onwards",
      category: "Salon",
      verified: true,
    },
    {
      name: "Elegant Bridal Studio",
      desc: "Professional bridal makeup & wedding packages",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.8,
      price: "₹2999 onwards",
      category: "Makeup",
      verified: true,
    },
    {
      name: "Urban Spa & Wellness",
      desc: "Full body massage, aromatherapy & relaxation spa",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.6,
      price: "₹799 onwards",
      category: "Spa",
      verified: true,
    },
    {
      name: "SkinCare Pro Clinic",
      desc: "Dermatology, acne treatment & skin glow therapy",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.5,
      price: "₹999 onwards",
      category: "Skincare",
      verified: false,
    },
    {
      name: "Hair Studio X",
      desc: "Modern haircut, coloring & hair spa treatments",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=60",
      location: "Pune",
      rating: 4.4,
      price: "₹399 onwards",
      category: "Hair",
      verified: false,
    },
    {
      name: "Royal Makeup Lounge",
      desc: "Party makeup, bridal & celebrity styling",
      image:
        "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=60",
      location: "Jaipur",
      rating: 4.9,
      price: "₹1999 onwards",
      category: "Makeup",
      verified: true,
    },
  ];

  const filtered = services.filter((item) => {
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
          Beauty Services 💄
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search salon, spa, makeup, location..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
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

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No services found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try salon, spa, makeup or city
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((item, i) => (
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

                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>📍 {item.location}</span>
                    <span className="text-green-600 font-medium">
                      {item.price}
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition">
                    Book Now
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