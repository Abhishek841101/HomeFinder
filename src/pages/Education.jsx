import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Education() {
  const [search, setSearch] = useState("");

  // ✅ FIX: scroll top on open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      name: "Bright Future Academy",
      desc: "Coaching for IIT & NEET with top faculty",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=60",
      location: "Patna",
      rating: 4.6,
      category: "Coaching",
      students: "10K+",
    },
    {
      name: "Smart Classes Pro",
      desc: "Online + Offline hybrid learning platform",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.3,
      category: "Online Learning",
      students: "25K+",
    },
    {
      name: "Career Point Institute",
      desc: "Best career guidance & competitive exam training",
      image:
        "https://images.unsplash.com/photo-1523246193007-4f2c3a8b0c1d?auto=format&fit=crop&w=800&q=60",
      location: "Kota",
      rating: 4.7,
      category: "Coaching",
      students: "50K+",
    },
    {
      name: "Future Tech Academy",
      desc: "Coding, AI, Web Development training center",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.8,
      category: "Tech Education",
      students: "15K+",
    },
    {
      name: "Global English Institute",
      desc: "Spoken English & IELTS preparation classes",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rating: 4.5,
      category: "Language",
      students: "8K+",
    },
    {
      name: "Elite Science Academy",
      desc: "Physics, Chemistry, Biology expert coaching",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.6,
      category: "Science",
      students: "18K+",
    },
  ];

  const filtered = data.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Education Hub 📚
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search institute, course, city..."
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
            <p className="text-gray-500 text-lg">No institutes found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try IIT, coaching, coding, city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover"
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {item.rating}
                  </span>

                  {/* CATEGORY */}
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>📍 {item.location}</span>
                    <span>🎓 {item.students} Students</span>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 transition">
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