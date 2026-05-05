import { useNavigate } from "react-router-dom";

export default function EducationPreviewSection() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Top Coaching Institutes",
      desc: "Kota & Delhi best coaching",
      icon: "🎯",
      route: "/education/coaching",
    },
    {
      title: "Online Learning",
      desc: "Learn from anywhere",
      icon: "💻",
      route: "/education/online",
    },
    {
      title: "Tech Courses",
      desc: "Coding & AI training",
      icon: "🚀",
      route: "/education/tech",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Education 📚
        </h2>

        {/* RIGHT INDICATOR */}
        <button
          onClick={() => navigate("/education")}
          className="flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition"
        >
          View All <span>→</span>
        </button>
      </div>

      {/* SLIDER */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">

        {cards.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.route)}
            className="min-w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 cursor-pointer active:scale-95"
          >
            <div className="text-3xl">{item.icon}</div>

            <h3 className="mt-3 font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {item.desc}
            </p>

            <div className="mt-4 text-blue-600 font-semibold text-sm">
              Explore →
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}