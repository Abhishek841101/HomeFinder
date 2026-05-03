import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Doctors() {
  const [search, setSearch] = useState("");

  // ✅ FIX: always open top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiologist",
      hospital: "Apollo Hospital",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      rating: 4.8,
      experience: "12 years",
      fee: "₹800",
      verified: true,
    },
    {
      name: "Dr. Priya Nair",
      specialization: "Dermatologist",
      hospital: "Fortis Hospital",
      image:
        "https://images.unsplash.com/photo-1594824475317-d3b4c2b1a7a1?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      rating: 4.7,
      experience: "8 years",
      fee: "₹600",
      verified: true,
    },
    {
      name: "Dr. Amit Verma",
      specialization: "Orthopedic",
      hospital: "AIIMS",
      image:
        "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      rating: 4.6,
      experience: "10 years",
      fee: "₹700",
      verified: true,
    },
    {
      name: "Dr. Sneha Iyer",
      specialization: "Gynecologist",
      hospital: "Apollo Clinic",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      rating: 4.9,
      experience: "14 years",
      fee: "₹1000",
      verified: false,
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "Neurologist",
      hospital: "Max Hospital",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2f0a2b0b?auto=format&fit=crop&w=800&q=60",
      location: "Jaipur",
      rating: 4.5,
      experience: "9 years",
      fee: "₹900",
      verified: true,
    },
  ];

  const filtered = doctors.filter((doc) => {
    const q = search.toLowerCase();
    return (
      doc.name.toLowerCase().includes(q) ||
      doc.specialization.toLowerCase().includes(q) ||
      doc.location.toLowerCase().includes(q) ||
      doc.hospital.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Doctors Portal 🧑‍⚕️
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search doctor, specialization, hospital..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
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
            <p className="text-gray-500 text-lg">No doctors found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try cardiologist, dermatologist or city name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filtered.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-44 object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=Doctor")
                    }
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {doc.rating}
                  </span>

                  {/* VERIFIED */}
                  {doc.verified && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {doc.specialization}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    {doc.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    🏥 {doc.hospital}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    📍 {doc.location}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>⏳ {doc.experience}</span>
                    <span className="text-green-600 font-semibold">
                      {doc.fee}
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition">
                    Book Appointment
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