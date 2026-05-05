import { useParams } from "react-router-dom";
import { useState } from "react";

export default function DoctorsList() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  // 🔥 Generate 100+ doctors dynamically
  const generateDoctors = () => {
    const categories = [
      "cardiologist","orthopedic","neurologist","gynecologist","eye","dentist",
      "ent","physician","pulmonologist","pediatrician","dermatologist",
      "psychiatrist","radiologist","surgeon","urologist","oncologist",
      "endocrinologist","gastro","nephrologist","physio","pathologist","pharmacist"
    ];

    const cities = [
      "Chennai","Delhi","Mumbai","Bangalore","Hyderabad",
      "Patna","Kolkata","Jaipur","Pune","Lucknow"
    ];

    const hospitals = [
      "Apollo Hospital","Fortis Hospital","AIIMS",
      "Max Hospital","Manipal Hospital"
    ];

    const names = [
      "Rajesh Sharma","Amit Verma","Neha Kapoor","Sneha Iyer",
      "Ravi Kumar","Pooja Sharma","Ankit Mehta","Vikram Singh",
      "Kavita Jain","Rahul Das","Simran Kaur","Arjun Reddy"
    ];

    let data = [];

    categories.forEach((cat) => {
      for (let i = 0; i < 5; i++) {
        data.push({
          name: `Dr. ${names[Math.floor(Math.random() * names.length)]}`,
          specialization: cat,
          location: cities[Math.floor(Math.random() * cities.length)],
          hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
          experience: `${2 + Math.floor(Math.random() * 15)} years`,
          rating: (4 + Math.random()).toFixed(1),
          fee: `₹${500 + Math.floor(Math.random() * 700)}`,
          image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*50)}.jpg`,
          verified: Math.random() > 0.5,
        });
      }
    });

    return data;
  };

  const doctors = generateDoctors();

  // ✅ Filter
  const filtered = doctors.filter((doc) => {
    return (
      doc.specialization === category &&
      (doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.location.toLowerCase().includes(search.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">

      {/* HEADER */}
      <h1 className="text-xl md:text-2xl font-bold mb-4 capitalize text-center">
        {category} Doctors
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search doctor, hospital, city..."
        className="w-full mb-6 p-3 rounded-xl border outline-none focus:ring-2 focus:ring-green-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LIST */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found 😕</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-40 object-cover"
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
                <h2 className="font-semibold text-lg">{doc.name}</h2>

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

                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}