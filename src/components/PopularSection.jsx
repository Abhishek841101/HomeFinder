import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function PopularSection() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const popular = [
    {
      name: "Glow Beauty Salon",
      slug: "/beauty/salon",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      location: "Chennai",
      rating: 4.8,
      tag: "Trending",
    },
    {
      name: "FitZone Gym",
      slug: "/gym/bodybuilding",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      location: "Bangalore",
      rating: 4.6,
      tag: "Top Rated",
    },
    {
      name: "City Hospital",
      slug: "/doctors",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      location: "Delhi",
      rating: 4.7,
      tag: "Verified",
    },
    {
      name: "Bright Academy",
      slug: "/education/coaching",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      location: "Kota",
      rating: 4.9,
      tag: "Popular",
    },
    {
      name: "Urban Spa",
      slug: "/beauty/spa",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      location: "Mumbai",
      rating: 4.5,
      tag: "Relax",
    },
  ];

  // AUTO SCROLL (mobile)
  useEffect(() => {
    const container = scrollRef.current;
    let pos = 0;

    const interval = setInterval(() => {
      if (!container) return;

      pos += 1;
      container.scrollTo({
        left: pos,
        behavior: "smooth",
      });

      if (pos >= container.scrollWidth - container.clientWidth) {
        pos = 0;
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     🔥 REALISTIC ADS DATA
  ========================== */
  const ads = [
    {
      title: "🏡 Sell Your Property Fast",
      desc: "Get verified buyers & rent leads instantly",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      btn: "Post Property",
    },
    {
      title: "🎉 Wedding & Events Booking",
      desc: "Halls, DJs, photographers & catering in one place",
      image:
        "https://images.unsplash.com/photo-1529636798458-92182e662485",
      btn: "Book Event",
    },
    {
      title: "🏖️ Holiday Packages",
      desc: "Goa, Manali, Bali & Dubai starting ₹9999",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      btn: "Explore Trips",
    },
    {
      title: "📚 Top Coaching Institutes",
      desc: "NEET, JEE, UPSC best institutes near you",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      btn: "Find Coaching",
    },
    {
      title: "💼 Grow Your Business",
      desc: "Get more customers with premium ads & listings",
      image:
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0",
      btn: "Start Ads",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE EVERY 3 SEC
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const ad = ads[index];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Popular Near You 🔥
        </h2>

        <button
          onClick={() => navigate("/category/all")}
          className="text-pink-600 font-semibold text-sm hover:underline"
        >
          View All →
        </button>
      </div>

      {/* MOBILE */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto md:hidden pb-2 no-scrollbar"
      >
        {popular.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.slug)}
            className="min-w-[85%] bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img src={item.image} className="h-44 w-full object-cover" />
            <div className="p-3">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {popular.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.slug)}
            className="bg-white rounded-2xl shadow hover:shadow-xl cursor-pointer"
          >
            <img src={item.image} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          🔥 REALISTIC ADS CAROUSEL
      ========================== */}
      <div className="mt-12 relative rounded-3xl overflow-hidden shadow-xl">

        <img
          src={ad.image}
          className="w-full h-56 md:h-72 object-cover transition duration-700"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 text-white">

          <h3 className="text-2xl md:text-3xl font-bold">
            {ad.title}
          </h3>

          <p className="mt-2 text-sm md:text-base opacity-90 max-w-md">
            {ad.desc}
          </p>

          <button
            onClick={() => navigate("/b2b")}
            className="mt-4 bg-white text-black px-6 py-2 rounded-full w-fit font-semibold hover:scale-105 transition"
          >
            {ad.btn}
          </button>
        </div>

        {/* dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {ads.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}