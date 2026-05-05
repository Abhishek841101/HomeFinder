import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../features/property/propertySlice";

export default function TopPropertiesSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { properties, loading } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  // 🔥 LATEST + FEATURED STYLE LOGIC
  const topProperties = (properties || [])
    .filter((item) => item) // safety check
    .sort((a, b) => {
      // NEW FIRST PRIORITY
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 10); // top 10

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          🏠 Latest Properties
        </h2>

        <button
          onClick={() => navigate("/properties")}
          className="flex items-center gap-1 text-pink-600 font-semibold hover:gap-2 transition"
        >
          View All <ChevronRight size={18} />
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex gap-4 overflow-x-auto">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="min-w-[280px] h-40 bg-gray-200 animate-pulse rounded-2xl"
              />
            ))}
        </div>
      )}

      {/* EMPTY */}
      {!loading && topProperties.length === 0 && (
        <p className="text-gray-500 text-sm">
          No properties found
        </p>
      )}

      {/* CARDS */}
      <div className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth">

        {topProperties.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(`/property/${item._id}`)}
            className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
          >

            {/* IMAGE */}
            <div className="h-40 relative">
              <img
                src={
                  item.images?.[0]?.url ||
                  item.images?.[0] ||
                  "https://via.placeholder.com/400"
                }
                className="h-full w-full object-cover"
              />

              {/* BADGE */}
              <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-3">

              <h3 className="font-semibold text-gray-800 line-clamp-1">
                {item.propertyName || "Unnamed Property"}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                📍 {item.location || "Location not available"}
              </p>

              <p className="text-pink-600 font-bold mt-2">
                ₹ {item.price || "N/A"}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}