import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import {
  FaPlane,
  FaHotel,
  FaTaxi,
  FaBus,
  FaTrain,
  FaShip,
  FaMapMarkedAlt,
  FaGlobeAsia,
} from "react-icons/fa";

export default function Travel() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "Flights", icon: <FaPlane />, slug: "flight" },
    { name: "Hotels", icon: <FaHotel />, slug: "hotel" },
    { name: "Cabs", icon: <FaTaxi />, slug: "cab" },
    { name: "Bus", icon: <FaBus />, slug: "bus" },
    { name: "Train", icon: <FaTrain />, slug: "train" },
    { name: "Cruise", icon: <FaShip />, slug: "cruise" },
    { name: "Tour Packages", icon: <FaMapMarkedAlt />, slug: "tour" },
    { name: "International Trips", icon: <FaGlobeAsia />, slug: "international" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Travel Categories ✈️
        </h1>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-8 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/travel/${cat.slug}`)}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center cursor-pointer hover:shadow-xl transition"
          >
            <div className="text-3xl text-sky-600 mb-3">
              {cat.icon}
            </div>

            <p className="font-semibold text-gray-700 text-center">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}