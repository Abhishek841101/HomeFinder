import { useEffect, useState } from "react";

const rentals = [
  {
    id: 1,
    title: "Furnished Shop",
    location: "Nagpur",
    price: "₹15,000",
    oldPrice: "₹20,000",
    likes: 62,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 2,
    title: "Hingna Tpoint",
    location: "Nagpur",
    price: "₹43,000",
    oldPrice: "₹45,000",
    likes: 4,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    title: "New Manish Nagar",
    location: "Nagpur",
    price: "₹32,000",
    oldPrice: "₹35,000",
    likes: 46,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 4,
    title: "Luxury Flat",
    location: "Nagpur",
    price: "₹28,000",
    oldPrice: "₹32,000",
    likes: 18,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 5,
    title: "2BHK Apartment",
    location: "Nagpur",
    price: "₹22,000",
    oldPrice: "₹25,000",
    likes: 30,
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
];

export default function VerifiedRentals() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rentals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 circular items (5 cards)
  const getItems = () => {
    let items = [];
    for (let i = -2; i <= 2; i++) {
      items.push(rentals[(index + i + rentals.length) % rentals.length]);
    }
    return items;
  };

  const visible = getItems();

  return (
    <section className="bg-gray-100 py-16 overflow-hidden">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Verified <span className="text-blue-600">Rental</span> Properties in Nagpur
      </h2>

      {/* DESKTOP (5 CARDS) */}
      <div className="hidden md:flex justify-center items-center gap-6 transition-all duration-700">

        {visible.map((item, i) => {
          const isCenter = i === 2;

          return (
            <div
              key={item.id}
              className={`transition-all duration-700 rounded-2xl overflow-hidden shadow-lg
              ${isCenter ? "scale-110 z-10 w-[300px]" : "scale-90 opacity-60 w-[240px]"}`}
            >
              <img src={item.img} className="h-40 w-full object-cover" />

              <div className="p-3 bg-white">
                <h3 className="font-bold text-sm">{item.title}</h3>

                <p className="text-xs text-gray-500">
                  📍 {item.location}
                </p>

                <div className="flex gap-2 items-center">
                  <span className="text-blue-600 font-bold text-sm">
                    {item.price}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    {item.oldPrice}
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  ❤️ {item.likes}
                </p>

                <button className="mt-2 w-full text-xs bg-blue-600 text-white py-1 rounded">
                  Show Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📱 MOBILE (ONLY CENTER CARD) */}
      <div className="md:hidden flex justify-center">
        <div className="w-[90%] max-w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden transition duration-500">

          <img
            src={rentals[index].img}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h3 className="font-bold text-lg">
              {rentals[index].title}
            </h3>

            <p className="text-sm text-gray-500">
              📍 {rentals[index].location}
            </p>

            <div className="flex gap-2 items-center">
              <span className="text-blue-600 font-bold">
                {rentals[index].price}
              </span>
              <span className="text-gray-400 line-through text-sm">
                {rentals[index].oldPrice}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              ❤️ {rentals[index].likes}
            </p>

            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
              Show Details
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}