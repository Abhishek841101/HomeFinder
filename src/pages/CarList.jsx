import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CarList() {
  const { slug } = useParams();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filtered, setFiltered] = useState([]);

  // 🔥 STATIC DATA (backend jaisa feel)
  const cars = [
    {
      name: "Toyota Innova Crysta",
      type: "suv",
      location: "Chennai",
      price: 3500,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    },
    {
      name: "Mahindra Thar",
      type: "suv",
      location: "Goa",
      price: 4000,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    },
    {
      name: "Honda City",
      type: "sedan",
      location: "Mumbai",
      price: 2500,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1606611013016-969c19d8a1c8",
    },
    {
      name: "Hyundai i20",
      type: "hatchback",
      location: "Bangalore",
      price: 1800,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      name: "Electric MG ZS",
      type: "electric",
      location: "Delhi",
      price: 3200,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // 🔥 filter by slug
    let data = cars.filter((c) => c.type === slug);

    // 🔍 search filter
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🔽 sorting
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    setFiltered(data);
  }, [slug, search, sort]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 text-center">
        <h1 className="text-2xl font-bold capitalize">
          {slug} Cars 🚗
        </h1>
        <p className="text-sm opacity-90">
          Best deals available
        </p>
      </div>

      {/* 🔍 FILTER BAR */}
      <div className="max-w-6xl mx-auto mt-4 px-4 grid md:grid-cols-3 gap-3">

        <input
          type="text"
          placeholder="Search car..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

        <button className="bg-blue-600 text-white rounded">
          Filter
        </button>

      </div>

      {/* 🔥 RESULTS */}
      <div className="max-w-6xl mx-auto p-4">

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No cars found 😕
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-xl transition"
              >

                {/* IMAGE */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-44 object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://dummyimage.com/400x300/cccccc/000000&text=No+Image")
                  }
                />

                {/* CONTENT */}
                <div className="p-4">

                  <h2 className="font-semibold text-lg">
                    {car.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    📍 {car.location}
                  </p>

                  <p className="text-yellow-500 text-sm">
                    ⭐ {car.rating}
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{car.price}/day
                  </p>

                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded">
                    Book Now
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* 🔥 ADS SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <h2 className="font-bold">🔥 Limited Deal</h2>
            <p className="text-sm">Extra 20% OFF today</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded">
            Grab
          </button>
        </div>
      </div>

    </div>
  );
}