import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function CarHire() {
  const [search, setSearch] = useState("");

  // ✅ FIX: scroll to top on page open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cars = [
    {
      name: "Toyota Innova Crysta",
      desc: "Comfortable family & long trip car",
      image:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rating: 4.7,
      price: "₹3500/day",
      type: "SUV",
      fuel: "Diesel",
      seats: 7,
      verified: true,
    },
    {
      name: "Hyundai i20",
      desc: "Compact hatchback for city rides",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.4,
      price: "₹1800/day",
      type: "Hatchback",
      fuel: "Petrol",
      seats: 5,
      verified: true,
    },
    {
      name: "Maruti Swift Dzire",
      desc: "Affordable sedan for daily travel",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c2f3e6a11?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.3,
      price: "₹2000/day",
      type: "Sedan",
      fuel: "Petrol",
      seats: 5,
      verified: false,
    },
    {
      name: "Mahindra Thar",
      desc: "Off-road adventure SUV",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=60",
      location: "Jaipur",
      rating: 4.8,
      price: "₹4000/day",
      type: "SUV",
      fuel: "Diesel",
      seats: 4,
      verified: true,
    },
    {
      name: "Honda City",
      desc: "Premium sedan with comfort ride",
      image:
        "https://images.unsplash.com/photo-1606611013016-969c19d8a1c8?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.6,
      price: "₹2500/day",
      type: "Sedan",
      fuel: "Petrol",
      seats: 5,
      verified: true,
    },
  ];

  const filtered = cars.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Car Hire 🚗
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search car, type, city..."
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

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No cars found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try SUV, Sedan, Hatchback or city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-44 object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image")
                    }
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {car.rating}
                  </span>

                  {/* VERIFIED */}
                  {car.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {car.type}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {car.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {car.desc}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>⛽ {car.fuel}</span>
                    <span>🪑 {car.seats} Seats</span>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>📍 {car.location}</span>
                    <span className="text-green-600 font-semibold">
                      {car.price}
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition">
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