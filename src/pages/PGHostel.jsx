import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../features/property/propertySlice";

export default function PGHostel() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { properties, loading } = useSelector(
    (state) => state.property
  );

  // ✅ FIX: scroll to top on open
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProperties());
  }, [dispatch]);

  const filtered = (properties || []).filter((item) => {
    const q = search.toLowerCase();
    return (
      item.title?.toLowerCase().includes(q) ||
      item.location?.toLowerCase().includes(q) ||
      item.type?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          PG / Hostel & Rentals 🏠
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search PG, hostel, flat, city..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-6">

        {/* LOADING */}
        {loading ? (
          <div className="text-center mt-10 text-gray-500">
            Loading properties...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              No properties found 😕
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Try PG, hostel, flat or city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={
                      room.images?.[0] ||
                      "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    className="h-44 w-full object-cover"
                    alt={room.title}
                  />

                  {/* TYPE BADGE */}
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                    {room.type || "PG"}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <h2 className="font-bold text-gray-800">
                    {room.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    📍 {room.location}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    ₹{room.rent || "N/A"} / month
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    👤 {room.gender || "All"} | 🏠{" "}
                    {room.sharing || "Private"}
                  </p>

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      navigate(`/property/${room._id}`)
                    }
                    className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 active:scale-95 transition"
                  >
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