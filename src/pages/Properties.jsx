
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MapView from "../components/MapView"; // ✅ ADD
import { useState } from "react";
import propertiesData from "../data/properties";

export default function Properties() {

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = propertiesData.filter((p) => {
    return (
      (filter === "All" || p.location === filter) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <Navbar />

      <div className="flex-grow px-6 py-8 max-w-7xl mx-auto w-full">

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Find Properties
        </h1>

        <p className="text-gray-500 mb-6">
          Search your dream home easily
        </p>

        {/* FILTER */}
        <div className="flex gap-3 flex-wrap mb-6">
          {["All", "Bangalore", "Mumbai", "Delhi", "Patna", "Nagpur"].map((city) => (
            <button
              key={city}
              onClick={() => setFilter(city)}
              className={`px-4 py-2 rounded-full border ${
                filter === city
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-lg mb-8 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">

                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    📍 {item.location}
                  </p>

                  <p className="text-blue-600 font-bold mt-2">
                    {item.price}
                  </p>

                  {/* DETAILS */}
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    View Details
                  </button>

                  {/* 🔥 MAP BUTTON */}
                  <button
                    onClick={() =>
                      window.open(`https://www.google.com/maps/search/${item.location}`)
                    }
                    className="mt-2 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
                  >
                    View on Map
                  </button>

                  {/* 🔥 MAP VIEW */}
                  <MapView location={item.location} />

                </div>

              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No properties found 😢
            </p>
          )}

        </div>

      </div>

      <Footer />

    </div>
  );
}