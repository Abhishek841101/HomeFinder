import { useState } from "react";
import Footer from "../components/Footer";

export default function Rent() {
  const [search, setSearch] = useState("");

  const items = [
    {
      name: "2BHK Fully Furnished Flat",
      desc: "Perfect for families & working professionals",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rent: "₹25,000/month",
      category: "House",
      rating: 4.7,
      verified: true,
      tag: "Premium",
      available: "Immediate",
    },
    {
      name: "Royal Enfield Bike Rental",
      desc: "Daily bike rental for trips & travel",
      image:
        "https://images.unsplash.com/photo-1558980664-769d59546b4f?auto=format&fit=crop&w=800&q=60",
      location: "Goa",
      rent: "₹800/day",
      category: "Bike",
      rating: 4.6,
      verified: true,
      tag: "Fast",
      available: "Today",
    },
    {
      name: "Office Chair & Desk Set",
      desc: "Work from home furniture rental",
      image:
        "https://images.unsplash.com/photo-1582582429416-2f6a03f9b1f5?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rent: "₹1,500/month",
      category: "Furniture",
      rating: 4.4,
      verified: false,
      tag: "Budget",
      available: "Next Day",
    },
    {
      name: "Camera DSLR Rental",
      desc: "Professional camera for shoots & events",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rent: "₹1,200/day",
      category: "Electronics",
      rating: 4.8,
      verified: true,
      tag: "Premium",
      available: "Immediate",
    },
    {
      name: "Scooty Rental Service",
      desc: "Affordable daily scooter rental",
      image:
        "https://images.unsplash.com/photo-1591637333184-19aa84b3e01d?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rent: "₹400/day",
      category: "Vehicle",
      rating: 4.3,
      verified: true,
      tag: "Cheap",
      available: "Today",
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.location.toLowerCase().includes(search.toLowerCase()) ||
      i.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Rent & Hire Marketplace 🚀
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search car, house, bike, furniture..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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
            <p className="text-gray-500 text-lg">No items found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try bike, house, furniture or city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            {filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    className="h-44 w-full object-cover"
                  />

                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full">
                    ⭐ {item.rating}
                  </span>

                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {item.verified && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}

                  <h2 className="font-bold mt-2 text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    📍 {item.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    🏷 {item.category}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    💰 {item.rent}
                  </p>

                  <p className="text-xs text-gray-400">
                    📅 {item.available}
                  </p>

                  <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 transition">
                    Rent Now
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