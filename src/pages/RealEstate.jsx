import { useState } from "react";
import Footer from "../components/Footer";

export default function RealEstate() {
  const [search, setSearch] = useState("");

  const properties = [
    {
      name: "Skyline Luxury Apartment",
      desc: "2 & 3 BHK premium flats with modern amenities",
      image:
        "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      price: "₹85 Lakhs",
      type: "Buy",
      bhk: "3 BHK",
      rating: 4.8,
      verified: true,
      tag: "Premium",
    },
    {
      name: "Green Valley Residency",
      desc: "Affordable family apartments with park view",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      price: "₹55 Lakhs",
      type: "Buy",
      bhk: "2 BHK",
      rating: 4.5,
      verified: true,
      tag: "Hot Deal",
    },
    {
      name: "Urban Heights Flat",
      desc: "Modern living with gym, pool & security",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      price: "₹35,000/month",
      type: "Rent",
      bhk: "2 BHK",
      rating: 4.6,
      verified: false,
      tag: "New",
    },
    {
      name: "Royal Garden Villa",
      desc: "Luxury independent villa with garden space",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      location: "Hyderabad",
      price: "₹1.2 Cr",
      type: "Buy",
      bhk: "4 BHK",
      rating: 4.9,
      verified: true,
      tag: "Luxury",
    },
    {
      name: "Sunshine PG Apartments",
      desc: "Budget-friendly rooms for students & working",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      price: "₹12,000/month",
      type: "Rent",
      bhk: "1 RK",
      rating: 4.3,
      verified: false,
      tag: "Budget",
    },
  ];

  const filtered = properties.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase()) ||
      p.bhk.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Real Estate Marketplace 🏠
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search property, city, BHK, buy/rent..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
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
            <p className="text-gray-500 text-lg">No properties found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try Bangalore, 2 BHK, Rent or Buy
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={p.image}
                    className="h-44 w-full object-cover"
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full">
                    ⭐ {p.rating}
                  </span>

                  {/* TAG */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {p.verified && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}

                  <h2 className="font-bold mt-2 text-gray-800">
                    {p.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    📍 {p.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    🏠 {p.bhk} | {p.type}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    💰 {p.price}
                  </p>

                  <button className="mt-3 w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-xl hover:opacity-90 transition">
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