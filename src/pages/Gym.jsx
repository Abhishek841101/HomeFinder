import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Gym() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "Bodybuilding", slug: "bodybuilding" },
    { name: "Weight Loss", slug: "weight-loss" },
    { name: "Yoga", slug: "yoga" },
    { name: "Crossfit", slug: "crossfit" },
    { name: "Zumba", slug: "zumba" },
    { name: "Cardio", slug: "cardio" },
    { name: "Strength", slug: "strength" },
    { name: "Personal Trainer", slug: "trainer" },
    { name: "Home Workout", slug: "home-workout" },
    { name: "Women Fitness", slug: "women" },
    { name: "Men Fitness", slug: "men" },
    { name: "Kids Fitness", slug: "kids" },
    { name: "Diet & Nutrition", slug: "diet" },
    { name: "Meditation", slug: "meditation" },
    { name: "HIIT Training", slug: "hiit" },
    { name: "Boxing Fitness", slug: "boxing" },
    { name: "Athlete Training", slug: "athlete" },
    { name: "Rehab Fitness", slug: "rehab" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Gym Categories 🏋️
        </h1>
      </div>

      {/* GRID */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-5xl mx-auto">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/gym/${cat.slug}`)}
            className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center cursor-pointer hover:shadow-xl transition hover:scale-105"
          >
            <p className="font-semibold text-gray-700 text-sm md:text-base">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}