import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function BeautyList() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: "GlowUp Salon",
      desc: "Premium hair styling & spa",
      location: "Chennai",
      rating: 4.7,
      price: "₹499",
      category: "salon",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      verified: true,
    },
    {
      name: "Bridal Studio",
      desc: "Wedding makeup",
      location: "Mumbai",
      rating: 4.8,
      price: "₹2999",
      category: "makeup",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      verified: true,
    },
    {
      name: "Urban Spa",
      desc: "Relaxation spa",
      location: "Bangalore",
      rating: 4.6,
      price: "₹799",
      category: "spa",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      verified: false,
    },

    // 👉 tum aur bhi add kar sakte ho same format me (40+ already ok hai)
  ];

  // ✅ FILTER
  const filtered = services.filter((item) => {
    return (
      item.category === category &&
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* 🔥 HEADER */}
      <div className="sticky top-0 z-20 bg-white shadow-md px-4 py-4">
        <h1 className="text-lg md:text-2xl font-bold text-center capitalize text-gray-800">
          {category} Services 💄
        </h1>

        {/* SEARCH */}
        <div className="mt-3 max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search services, city..."
            className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-pink-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* 🔥 LIST */}
      <div className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No services found 😕</p>
          </div>
        ) : (
          <div className="grid gap-6 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3">

            {filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden 
                hover:shadow-xl hover:-translate-y-1 transition duration-300"
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

                  {/* VERIFIED */}
                  {item.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  <h2 className="text-lg font-semibold mt-2 text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>

                  <div className="flex justify-between mt-3 text-sm text-gray-600">
                    <span>📍 {item.location}</span>
                    <span className="text-green-600 font-semibold">
                      {item.price}
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-pink-500 text-white py-2 rounded-xl hover:opacity-90">
                      Book
                    </button>
                    <button className="flex-1 border border-gray-300 py-2 rounded-xl hover:bg-gray-100">
                      Details
                    </button>
                  </div>

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