import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Wedding() {
  const [search, setSearch] = useState("");

  // ✅ FIX: always open page at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: "Royal Wedding Venue",
      desc: "Luxury banquet hall with decoration & catering",
      image:
        "https://images.unsplash.com/photo-1529634896982-8c6c7b2b5b1f?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      price: "₹2,50,000",
      type: "Venue",
      rating: 4.9,
      tag: "Luxury",
      verified: true,
      availability: "Available",
    },
    {
      name: "Candid Wedding Photographer",
      desc: "HD photography & cinematic wedding shoot",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      price: "₹50,000",
      type: "Photography",
      rating: 4.8,
      tag: "Trending",
      verified: true,
      availability: "Few Slots",
    },
    {
      name: "Bridal Makeup Artist",
      desc: "Professional makeup for bride & engagement",
      image:
        "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      price: "₹15,000",
      type: "Makeup",
      rating: 4.7,
      tag: "Popular",
      verified: false,
      availability: "Available",
    },
    {
      name: "Wedding Planner Pro",
      desc: "Full wedding planning & coordination service",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29c1e0c2a?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      price: "₹1,00,000",
      type: "Planner",
      rating: 4.8,
      tag: "Premium",
      verified: true,
      availability: "Available",
    },
    {
      name: "Destination Wedding Goa",
      desc: "Beachside luxury wedding packages",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      location: "Goa",
      price: "₹5,00,000",
      type: "Destination",
      rating: 4.9,
      tag: "Luxury",
      verified: true,
      availability: "Limited",
    },
  ];

  const filtered = services.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q) ||
      s.type.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Wedding Planning 💍
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search venue, photographer, planner..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500 shadow-sm"
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
            <p className="text-gray-500 text-lg">
              No wedding services found 😕
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            {filtered.map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="h-44 w-full object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image")
                    }
                  />

                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full">
                    ⭐ {w.rating}
                  </span>

                  <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    {w.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {w.verified && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}

                  <h2 className="font-bold mt-2 text-gray-800">
                    {w.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    📍 {w.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    💒 {w.type}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    💰 {w.price}
                  </p>

                  <p className="text-xs text-gray-400">
                    📅 {w.availability}
                  </p>

                  <button className="mt-3 w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white py-2 rounded-xl hover:opacity-90 transition active:scale-95">
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