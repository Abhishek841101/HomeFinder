import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TravelList() {
  const { category } = useParams();

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const cities = [
    "Delhi","Mumbai","Chennai","Bangalore","Goa",
    "Jaipur","Kolkata","Hyderabad"
  ];

  // 🔥 BIG DUMMY DATA
  const travelData = [
    { name:"IndiGo 6E-203", type:"flight", from:"Delhi", to:"Goa", date:"2026-05-15", price:4999, rating:4.6 },
    { name:"Vistara UK-811", type:"flight", from:"Delhi", to:"Mumbai", date:"2026-05-15", price:5499, rating:4.8 },
    { name:"Air India AI-302", type:"flight", from:"Mumbai", to:"Chennai", date:"2026-05-18", price:6200, rating:4.5 },
    { name:"SpiceJet SG-100", type:"flight", from:"Delhi", to:"Bangalore", date:"2026-05-20", price:4700, rating:4.2 },

    { name:"Luxury Goa Package", type:"tour", from:"Mumbai", to:"Goa", date:"2026-05-20", price:9999, rating:4.7 },
    { name:"Kerala Tour", type:"tour", from:"Chennai", to:"Kerala", date:"2026-05-25", price:12999, rating:4.9 },

    { name:"AC Sleeper Bus", type:"bus", from:"Chennai", to:"Bangalore", date:"2026-05-15", price:899, rating:4.3 },
    { name:"Volvo Bus", type:"bus", from:"Delhi", to:"Jaipur", date:"2026-05-18", price:1200, rating:4.4 },

    { name:"Intercity Cab", type:"cab", from:"Delhi", to:"Jaipur", date:"2026-05-16", price:2500, rating:4.5 },
    { name:"SUV Cab", type:"cab", from:"Mumbai", to:"Pune", date:"2026-05-17", price:3000, rating:4.6 },

    { name:"Rajdhani Express", type:"train", from:"Delhi", to:"Mumbai", date:"2026-05-21", price:1800, rating:4.7 },
    { name:"Shatabdi Express", type:"train", from:"Delhi", to:"Chandigarh", date:"2026-05-22", price:1200, rating:4.5 },
  ];

  // 🔥 DEFAULT SHOW (popular)
  useEffect(() => {
    const popular = travelData.filter((item) => item.type === category);
    setFilteredData(popular);
  }, [category]);

  const handleSearch = () => {
    const result = travelData.filter((item) => {
      return (
        item.type === category &&
        (from ? item.from.toLowerCase().includes(from.toLowerCase()) : true) &&
        (to ? item.to.toLowerCase().includes(to.toLowerCase()) : true) &&
        (date ? item.date === date : true)
      );
    });

    setFilteredData(result);
  };

  // suggestions
  const fromSuggestions = cities.filter((c) =>
    c.toLowerCase().includes(from.toLowerCase())
  );

  const toSuggestions = cities.filter((c) =>
    c.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6">
        <h1 className="text-2xl font-bold text-center capitalize">
          Book {category}
        </h1>

        {/* TABS */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setTripType("oneway")}
            className={`px-4 py-2 rounded-full ${
              tripType === "oneway" ? "bg-white text-black" : "bg-white/30"
            }`}
          >
            One Way
          </button>

          <button
            onClick={() => setTripType("round")}
            className={`px-4 py-2 rounded-full ${
              tripType === "round" ? "bg-white text-black" : "bg-white/30"
            }`}
          >
            Round Trip
          </button>
        </div>

        {/* SEARCH */}
        <div className="mt-6 bg-white text-black rounded-2xl p-4 grid md:grid-cols-5 gap-3 shadow-lg">

          {/* FROM */}
          <div className="relative">
            <input
              placeholder="From"
              className="border p-2 w-full rounded"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            {from && (
              <div className="absolute bg-white shadow w-full z-10">
                {fromSuggestions.map((s, i) => (
                  <p key={i} onClick={() => setFrom(s)} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {s}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* TO */}
          <div className="relative">
            <input
              placeholder="To"
              className="border p-2 w-full rounded"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            {to && (
              <div className="absolute bg-white shadow w-full z-10">
                {toSuggestions.map((s, i) => (
                  <p key={i} onClick={() => setTo(s)} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {s}
                  </p>
                ))}
              </div>
            )}
          </div>

          <input type="date" className="border p-2 rounded" value={date} onChange={(e) => setDate(e.target.value)} />

          <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="border p-2 rounded" />

          <button onClick={handleSearch} className="bg-blue-600 text-white rounded">
            Search
          </button>

        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-6xl mx-auto p-4">

        {/* 🔥 ADS */}
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-xl mb-6 flex justify-between items-center">
          <div>
            <h2 className="font-bold">🔥 Special Offer</h2>
            <p className="text-sm">Flat 20% OFF on bookings</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded">
            Explore
          </button>
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No results found 😕
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">

            {filteredData.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

                <h2 className="font-semibold text-lg">{item.name}</h2>

                <p className="text-sm text-gray-500">
                  {item.from} → {item.to}
                </p>

                <p className="text-xs text-gray-400">
                  📅 {item.date}
                </p>

                <p className="text-green-600 font-bold mt-2">
                  ₹{item.price}
                </p>

                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded">
                  Book Now
                </button>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}