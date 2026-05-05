import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import {
  FaHeart,
  FaBone,
  FaBrain,
  FaBaby,
  FaEye,
  FaTeeth,
  FaUserMd,
  FaLungs,
  FaStethoscope,
  FaProcedures,
  FaNotesMedical,
  FaXRay,
  FaAllergies,
  FaCapsules,
  FaWheelchair,
  FaSyringe,
  FaMicroscope,
  FaHeartbeat,
  FaHospital,
  FaAssistiveListeningSystems,
} from "react-icons/fa";

export default function Doctors() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "Cardiologist", icon: <FaHeart />, slug: "cardiologist" },
    { name: "Orthopedic", icon: <FaBone />, slug: "orthopedic" },
    { name: "Neurologist", icon: <FaBrain />, slug: "neurologist" },
    { name: "Gynecologist", icon: <FaBaby />, slug: "gynecologist" },
    { name: "Eye Specialist", icon: <FaEye />, slug: "eye" },
    { name: "Dentist", icon: <FaTeeth />, slug: "dentist" },

    { name: "ENT Specialist", icon: <FaAssistiveListeningSystems />, slug: "ent" },
    { name: "General Physician", icon: <FaUserMd />, slug: "physician" },
    { name: "Pulmonologist", icon: <FaLungs />, slug: "pulmonologist" },
    { name: "Pediatrician", icon: <FaBaby />, slug: "pediatrician" },

    { name: "Dermatologist", icon: <FaAllergies />, slug: "dermatologist" },
    { name: "Psychiatrist", icon: <FaBrain />, slug: "psychiatrist" },
    { name: "Radiologist", icon: <FaXRay />, slug: "radiologist" },
    { name: "Surgeon", icon: <FaProcedures />, slug: "surgeon" },

    { name: "Urologist", icon: <FaStethoscope />, slug: "urologist" },
    { name: "Oncologist", icon: <FaMicroscope />, slug: "oncologist" },
    { name: "Endocrinologist", icon: <FaHeartbeat />, slug: "endocrinologist" },
    { name: "Gastroenterologist", icon: <FaNotesMedical />, slug: "gastro" },

    { name: "Nephrologist", icon: <FaHospital />, slug: "nephrologist" },
    { name: "Physiotherapist", icon: <FaWheelchair />, slug: "physio" },
    { name: "Pathologist", icon: <FaSyringe />, slug: "pathologist" },
    { name: "Pharmacist", icon: <FaCapsules />, slug: "pharmacist" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow px-4 py-4 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Doctor Categories 🏥
        </h1>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-8 max-w-6xl mx-auto 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/doctors/${cat.slug}`)}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-3xl text-green-600 mb-3">
              {cat.icon}
            </div>

            <p className="font-semibold text-gray-700 text-center text-sm">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}