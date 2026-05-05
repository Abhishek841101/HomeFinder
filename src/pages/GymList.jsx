import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function GymList() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gyms = [
    // 🔥 BODYBUILDING
    { name: "PowerHouse Gym", location: "Chennai", rating: 4.7, category: "bodybuilding", price: "₹1200", trainer: "Available" },
    { name: "Iron Muscle Club", location: "Delhi", rating: 4.6, category: "bodybuilding", price: "₹1500", trainer: "Available" },
    { name: "Beast Gym", location: "Mumbai", rating: 4.8, category: "bodybuilding", price: "₹1800", trainer: "Premium" },

    // 🔥 WEIGHT LOSS
    { name: "FitZone Gym", location: "Bangalore", rating: 4.5, category: "weight-loss", price: "₹999", trainer: "Available" },
    { name: "Slim Fit Studio", location: "Pune", rating: 4.4, category: "weight-loss", price: "₹899", trainer: "Available" },
    { name: "Fat Burn Arena", location: "Hyderabad", rating: 4.3, category: "weight-loss", price: "₹799", trainer: "Available" },

    // 🔥 YOGA
    { name: "Urban Yoga", location: "Delhi", rating: 4.8, category: "yoga", price: "₹800", trainer: "Available" },
    { name: "Peace Yoga Center", location: "Rishikesh", rating: 4.9, category: "yoga", price: "₹1200", trainer: "Expert" },
    { name: "Yoga Bliss", location: "Chennai", rating: 4.7, category: "yoga", price: "₹700", trainer: "Available" },

    // 🔥 CROSSFIT
    { name: "CrossFit Arena", location: "Mumbai", rating: 4.6, category: "crossfit", price: "₹1500", trainer: "Available" },
    { name: "CrossFit Pro", location: "Delhi", rating: 4.7, category: "crossfit", price: "₹1700", trainer: "Expert" },
    { name: "CrossFit Hub", location: "Bangalore", rating: 4.5, category: "crossfit", price: "₹1400", trainer: "Available" },

    // 🔥 ZUMBA
    { name: "Zumba Club", location: "Pune", rating: 4.4, category: "zumba", price: "₹700", trainer: "Available" },
    { name: "Dance Fitness Studio", location: "Mumbai", rating: 4.6, category: "zumba", price: "₹900", trainer: "Available" },
    { name: "Zumba Beats", location: "Delhi", rating: 4.5, category: "zumba", price: "₹850", trainer: "Available" },

    // 🔥 STRENGTH
    { name: "Iron Gym Pro", location: "Mumbai", rating: 4.6, category: "strength", price: "₹1500", trainer: "Available" },
    { name: "StrongFit Club", location: "Delhi", rating: 4.7, category: "strength", price: "₹1300", trainer: "Available" },
    { name: "Power Strength Gym", location: "Chennai", rating: 4.5, category: "strength", price: "₹1200", trainer: "Available" },

    // 🔥 CARDIO
    { name: "Cardio Burn Gym", location: "Bangalore", rating: 4.4, category: "cardio", price: "₹800", trainer: "Available" },
    { name: "Run Fit Studio", location: "Delhi", rating: 4.3, category: "cardio", price: "₹700", trainer: "Available" },
    { name: "Pulse Fitness", location: "Mumbai", rating: 4.6, category: "cardio", price: "₹900", trainer: "Available" },

    // 🔥 PERSONAL TRAINER
    { name: "Elite Trainer Hub", location: "Delhi", rating: 4.9, category: "trainer", price: "₹3000", trainer: "Personal" },
    { name: "Fit Coach Center", location: "Pune", rating: 4.7, category: "trainer", price: "₹2500", trainer: "Personal" },
    { name: "Pro Trainer Gym", location: "Bangalore", rating: 4.8, category: "trainer", price: "₹2800", trainer: "Personal" },

    // 🔥 WOMEN FITNESS
    { name: "Ladies Fitness Club", location: "Delhi", rating: 4.6, category: "women", price: "₹900", trainer: "Available" },
    { name: "Her Fitness Studio", location: "Mumbai", rating: 4.7, category: "women", price: "₹1000", trainer: "Available" },
    { name: "Women Power Gym", location: "Chennai", rating: 4.5, category: "women", price: "₹950", trainer: "Available" },

    // 🔥 MEN FITNESS
    { name: "Men Fitness Arena", location: "Delhi", rating: 4.5, category: "men", price: "₹1100", trainer: "Available" },
    { name: "Alpha Gym", location: "Mumbai", rating: 4.6, category: "men", price: "₹1300", trainer: "Available" },

    // 🔥 HIIT
    { name: "HIIT Burn Center", location: "Bangalore", rating: 4.7, category: "hiit", price: "₹1200", trainer: "Available" },
    { name: "HIIT Pro Gym", location: "Delhi", rating: 4.6, category: "hiit", price: "₹1100", trainer: "Available" },

    // 🔥 BOXING
    { name: "Boxing Fitness Club", location: "Mumbai", rating: 4.8, category: "boxing", price: "₹1500", trainer: "Available" },
    { name: "Fight Club Gym", location: "Delhi", rating: 4.7, category: "boxing", price: "₹1400", trainer: "Available" },

    // 🔥 EXTRA
    { name: "Athlete Training Hub", location: "Hyderabad", rating: 4.7, category: "athlete", price: "₹2000", trainer: "Expert" },
    { name: "Rehab Fitness Center", location: "Chennai", rating: 4.5, category: "rehab", price: "₹1800", trainer: "Expert" },
  ];

  const filtered = gyms.filter((g) => {
    return (
      g.category === category &&
      (g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-20">

        <h1 className="text-lg md:text-2xl font-bold text-center capitalize">
          {category} Gyms 🏋️
        </h1>

        <div className="mt-3 max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search gym, city..."
            className="w-full border rounded-full pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-red-500 outline-none shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">

        {filtered.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">
            No gyms found 😕
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">

            {filtered.map((gym, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <h2 className="font-semibold text-gray-800 text-lg">
                  {gym.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  📍 {gym.location}
                </p>

                <div className="flex justify-between mt-2 text-sm">
                  <span>⭐ {gym.rating}</span>
                  <span className="text-red-600 font-semibold">
                    {gym.price}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Trainer: {gym.trainer}
                </p>

                <button className="mt-3 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg hover:opacity-90">
                  Join Now
                </button>
              </div>
            ))}

          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}