import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import {
  FaCar,
  FaTruckPickup,
  FaTaxi,
  FaBus,
  FaCarSide,
  FaShuttleVan,
  FaMotorcycle,
  FaAmbulance,
  FaTruck,
} from "react-icons/fa";

export default function CarHire() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "SUV", icon: <FaCar />, slug: "suv" },
    { name: "Sedan", icon: <FaTaxi />, slug: "sedan" },
    { name: "Hatchback", icon: <FaCarSide />, slug: "hatchback" },
    { name: "Luxury", icon: <FaCar />, slug: "luxury" },
    { name: "Pickup", icon: <FaTruckPickup />, slug: "pickup" },
    { name: "Bus", icon: <FaBus />, slug: "bus" },

    { name: "Mini Car", icon: <FaCar />, slug: "mini" },
    { name: "Electric Car", icon: <FaCarSide />, slug: "electric" },
    { name: "Self Drive", icon: <FaCar />, slug: "selfdrive" },
    { name: "With Driver", icon: <FaTaxi />, slug: "driver" },
    { name: "Outstation", icon: <FaShuttleVan />, slug: "outstation" },
    { name: "Airport Pickup", icon: <FaShuttleVan />, slug: "airport" },
    { name: "Bike Rental", icon: <FaMotorcycle />, slug: "bike" },
    { name: "Ambulance", icon: <FaAmbulance />, slug: "ambulance" },
    { name: "Tempo Traveller", icon: <FaBus />, slug: "tempo" },
    { name: "Truck Rental", icon: <FaTruck />, slug: "truck" },
    { name: "Wedding Cars", icon: <FaCar />, slug: "wedding" },
    { name: "Tourist Vans", icon: <FaShuttleVan />, slug: "tourist" },
    { name: "Corporate Travel", icon: <FaCarSide />, slug: "corporate" },
    { name: "Monthly Rental", icon: <FaTaxi />, slug: "monthly" },
    { name: "Hourly Rental", icon: <FaTaxi />, slug: "hourly" },
    { name: "Luxury Bus", icon: <FaBus />, slug: "luxurybus" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* 🔥 HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-20 backdrop-blur">
        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Car Categories 🚗
        </h1>
      </div>

      {/* 🔥 HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-8 px-4">
        <h2 className="text-lg md:text-xl font-semibold">
          Find Your Perfect Ride 🚘
        </h2>
        <p className="text-sm opacity-90 mt-1">
          Book cars, bikes, buses & more instantly
        </p>

        {/* 🔥 SEARCH BAR (NEW ADD) */}
        <div className="mt-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search car type (SUV, Sedan...)"
            className="w-full px-4 py-2 rounded-full text-black outline-none shadow"
            onChange={(e) => {
              const val = e.target.value.toLowerCase();
              const match = categories.find((c) =>
                c.name.toLowerCase().includes(val)
              );
              if (match) navigate(`/cars/${match.slug}`);
            }}
          />
        </div>
      </div>

      {/* 🔥 GRID */}
      <div className="flex-1 px-4 py-8 max-w-6xl mx-auto 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/cars/${cat.slug}`)}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center cursor-pointer 
            hover:shadow-xl hover:-translate-y-1 transition group active:scale-95"
          >
            <div className="text-3xl text-blue-600 mb-3 group-hover:scale-110 transition">
              {cat.icon}
            </div>

            <p className="font-semibold text-gray-700 text-center text-sm">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

      {/* 🔥 PROMO */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-5 rounded-xl shadow flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            <h2 className="font-bold text-lg">🔥 Special Offer</h2>
            <p className="text-sm">Flat ₹500 OFF on first booking</p>
          </div>
          <button
            onClick={() => navigate("/cars/suv")}
            className="bg-white text-black px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}