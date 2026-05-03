import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Jobs() {
  const [search, setSearch] = useState("");

  // ✅ FIX: always open top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
      location: "Bangalore",
      salary: "₹4 - 8 LPA",
      type: "Full-time",
      experience: "1-3 Years",
      skills: "React, JavaScript",
      verified: true,
    },
    {
      title: "Backend Developer",
      company: "CodeCraft Labs",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=60",
      location: "Chennai",
      salary: "₹5 - 10 LPA",
      type: "Full-time",
      experience: "2-4 Years",
      skills: "Node.js, MongoDB",
      verified: true,
    },
    {
      title: "UI/UX Designer",
      company: "Design Studio X",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=60",
      location: "Mumbai",
      salary: "₹3 - 6 LPA",
      type: "Remote",
      experience: "1-2 Years",
      skills: "Figma, Photoshop",
      verified: false,
    },
    {
      title: "Data Analyst",
      company: "Analytics Hub",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
      location: "Delhi",
      salary: "₹4 - 7 LPA",
      type: "Full-time",
      experience: "2-5 Years",
      skills: "SQL, Excel, Python",
      verified: true,
    },
    {
      title: "Digital Marketing Intern",
      company: "Growthify Agency",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=60",
      location: "Pune",
      salary: "₹10k - 20k/month",
      type: "Internship",
      experience: "Fresher",
      skills: "SEO, Social Media",
      verified: false,
    },
  ];

  const filtered = jobs.filter((job) => {
    const q = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      job.skills.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Job Portal 💼
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search job, company, skill, location..."
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
            <p className="text-gray-500 text-lg">No jobs found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try frontend, backend, internship, city or skill
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {filtered.map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-5"
              >

                {/* HEADER */}
                <div className="flex items-center gap-3">

                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/100x100?text=Job")
                    }
                  />

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {job.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {job.company}

                      {job.verified && (
                        <span className="ml-2 text-green-600 text-xs font-medium">
                          ✔ Verified
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* INFO */}
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>📍 {job.location}</p>
                  <p>💰 {job.salary}</p>
                  <p>⏳ {job.experience}</p>
                  <p>🧑‍💻 {job.type}</p>
                </div>

                {/* SKILLS */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.split(",").map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition">
                  Apply Now
                </button>

              </div>
            ))}

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}