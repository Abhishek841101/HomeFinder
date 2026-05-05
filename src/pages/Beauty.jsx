import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Beauty() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "Salon", slug: "salon" },
    { name: "Makeup", slug: "makeup" },
    { name: "Spa", slug: "spa" },
    { name: "Skincare", slug: "skincare" },
    { name: "Hair", slug: "hair" },
    { name: "Bridal", slug: "bridal" },

    // 🔥 NEW 20+ CATEGORIES
    { name: "Hair Cutting", slug: "haircut" },
    { name: "Hair Coloring", slug: "haircolor" },
    { name: "Hair Spa", slug: "hairspa" },
    { name: "Facial", slug: "facial" },
    { name: "Clean Up", slug: "cleanup" },
    { name: "Bleach", slug: "bleach" },
    { name: "Threading", slug: "threading" },
    { name: "Waxing", slug: "waxing" },
    { name: "Manicure", slug: "manicure" },
    { name: "Pedicure", slug: "pedicure" },
    { name: "Nail Art", slug: "nailart" },
    { name: "Body Massage", slug: "massage" },
    { name: "Aromatherapy", slug: "aroma" },
    { name: "Bridal Package", slug: "bridal-package" },
    { name: "Party Makeup", slug: "party-makeup" },
    { name: "Pre Bridal", slug: "pre-bridal" },
    { name: "Tattoo", slug: "tattoo" },
    { name: "Men Grooming", slug: "men-grooming" },
    { name: "Kids Haircut", slug: "kids-haircut" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Beauty Categories 💄
        </h1>
      </div>

      {/* GRID */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 max-w-6xl mx-auto">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/beauty/${cat.slug}`)}
            className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
          >
            <p className="font-semibold text-gray-700 text-sm">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}