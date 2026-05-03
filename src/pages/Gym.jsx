import { useState } from "react";
import Footer from "../components/Footer";

export default function Gym() {
  const [search, setSearch] = useState("");

  const gyms = [
    {
      name: "PowerHouse Fitness Club",
      desc: "Advanced gym with modern equipment & trainers",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rating: 4.7,
      price: "₹1200/month",
      category: "Bodybuilding",
      trainer: "Available",
      verified: true,
    },
    {
      name: "FitZone Gym",
      desc: "Weight loss & cardio focused training center",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.5,
      price: "₹999/month",
      category: "Weight Loss",
      trainer: "Available",
      verified: true,
    },
    {
      name: "Urban Yoga Studio",
      desc: "Peaceful yoga & meditation classes",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.8,
      price: "₹800/month",
      category: "Yoga",
      trainer: "Available",
      verified: true,
    },
    {
      name: "Iron Gym Pro",
      desc: "Hardcore strength training & bodybuilding gym",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.6,
      price: "₹1500/month",
      category: "Strength",
      trainer: "Limited",
      verified: false,
    },
    {
      name: "Flex Fitness Studio",
      desc: "Personal trainer & diet guidance included",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=60",
      location: "Pune",
      rating: 4.4,
      price: "₹1100/month",
      category: "Fitness",
      trainer: "Available",
      verified: true,
    },
  ];

  const filtered = gyms.filter(
    (g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.category.toLowerCase().includes(search.toLowerCase()) ||
      g.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Gym & Fitness Centers 🏋️
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search gym, yoga, trainer, city..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
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
            <p className="text-gray-500 text-lg">No gyms found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try fitness, yoga, bodybuilding or city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((gym, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={gym.image}
                    alt={gym.name}
                    className="w-full h-44 object-cover"
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {gym.rating}
                  </span>

                  {/* VERIFIED */}
                  {gym.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {/* CATEGORY */}
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {gym.category}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {gym.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {gym.desc}
                  </p>

                  {/* INFO */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>🏋️ Trainer: {gym.trainer}</span>
                    <span className="text-green-600 font-semibold">
                      {gym.price}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    📍 {gym.location}
                  </p>

                  <button className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-xl hover:opacity-90 transition">
                    Join Now
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