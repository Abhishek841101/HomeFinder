

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../features/property/propertySlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PropertyDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProperty, loading } = useSelector((state) => state.property);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(getSingleProperty(id));
  }, [dispatch, id]);

  if (loading || !singleProperty) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <p className="text-gray-500 text-lg">Loading property...</p>
      </div>
    );
  }

  const property = singleProperty;
  const images = property.images?.map((img) => img?.url || img) || [];
  const units = property.units || [];

  const availableUnits = units.filter((u) => u.status === "available").length;
  const bookedUnits = units.filter((u) => u.status === "booked").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex-grow">

        {/* IMAGE CARD (FLOATING STYLE) */}
        <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
          <img
            src={images[activeImage]}
            className="w-full h-[430px] object-cover"
          />

          <div className="flex gap-3 p-4 overflow-x-auto bg-white/70 backdrop-blur-md">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 rounded-2xl object-cover cursor-pointer transition-all duration-300
                ${activeImage === i
                    ? "scale-105 shadow-lg"
                    : "opacity-60"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* MAIN INFO CARD */}
        <div className="mt-7 rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-6 md:p-8">

          <h1 className="text-3xl font-semibold text-gray-800">
            {property.propertyName}
          </h1>

          <p className="text-gray-500 mt-1">
            📍 {property.location}, {property.city}, {property.state}
          </p>

          <div className="mt-4 flex items-center gap-4">
            <p className="text-3xl font-bold text-pink-500">
              ₹ {property.price}
            </p>

            {property.expectedPrice && (
              <p className="text-gray-400 line-through">
                ₹ {property.expectedPrice}
              </p>
            )}
          </div>

          {/* OVERVIEW CARD */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 shadow-sm">
            <h2 className="font-semibold text-gray-700 mb-2">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {property.overview || property.aboutProperty || "No overview available"}
            </p>
          </div>

          {/* STATS (FLOATING CARDS) */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">

            <SoftStat label="Available" value={availableUnits} color="green" />
            <SoftStat label="Booked" value={bookedUnits} color="red" />
            <SoftStat label="Total" value={units.length} color="blue" />

          </div>

          {/* INFO GRID (NO BORDERS, SOFT CARDS) */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">

            <SoftInfo label="Category" value={property.propertyCategory} />
            <SoftInfo label="Purpose" value={property.purpose} />
            <SoftInfo label="Furnishing" value={property.furnishing} />
            <SoftInfo label="Water Supply" value={property.waterSupply} />
            <SoftInfo label="Power Backup" value={property.powerBackup ? "Yes" : "No"} />
            <SoftInfo label="Loan" value={property.loanAvailable ? "Yes" : "No"} />
            <SoftInfo label="Area" value={`${property.area} sq.ft`} />

          </div>

          {/* AMENITIES */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-700 mb-3">Amenities</h2>

            <div className="flex flex-wrap gap-2">
              {property.amenities?.length ? (
                property.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white shadow-sm text-gray-600"
                  >
                    {a}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">No amenities</p>
              )}
            </div>
          </div>

   
          {/* UNITS */}
          <div className="mt-8">
            <h2 className="font-semibold text-gray-800 mb-4">Units</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {units.length > 0 ? (
                units.map((u, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl text-center shadow-md transition hover:scale-[1.02]
                    ${u.status === "available"
                        ? "bg-green-50"
                        : "bg-red-50"
                      }`}
                  >
                    <p className="font-bold text-lg text-gray-800">{u.number}</p>

                    <p
                      className={`mt-2 text-xs px-2 py-1 rounded-full inline-block font-medium
                      ${u.status === "available"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                        }`}
                    >
                      {u.status}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No units available</p>
              )}
            </div>
          </div>
       {/* ABOUT */}
          <div className="mt-6 p-5 rounded-2xl bg-white shadow-sm">
            <h2 className="font-semibold text-gray-700 mb-2">About Property</h2>
            <p className="text-gray-600">
              {property.aboutProperty || "No additional information provided."}
            </p>
          </div>

          {/* CONTACT */}
          {property.contact && (
            <div className="mt-8 p-5 rounded-2xl bg-white shadow-md">
              <h2 className="font-semibold mb-2 text-gray-700">Contact Owner</h2>
              <p className="text-gray-600">Name: {property.contact.ownerName}</p>
              <p className="text-gray-600">Phone: {property.contact.phone}</p>
              <p className="text-gray-600">Email: {property.contact.email}</p>
            </div>
          )}

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col md:flex-row gap-3">

            <button className="w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 to-red-400 shadow-lg hover:scale-[1.02] transition">
              🏠 Book Now
            </button>

            <button
              onClick={() =>
                window.open(`https://www.google.com/maps/search/${property.location}`)
              }
              className="w-full py-3 rounded-2xl font-semibold bg-white shadow-md text-pink-500 hover:shadow-lg transition"
            >
              📍 View on Map
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ---------------- SOFT UI COMPONENTS ---------------- */

function SoftInfo({ label, value }) {
  return (
    <div className="p-3 rounded-xl bg-white shadow-sm">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-medium text-gray-700">{value || "-"}</p>
    </div>
  );
}

function SoftStat({ label, value, color }) {
  const colors = {
    green: "text-green-500",
    red: "text-red-500",
    blue: "text-blue-500",
  };

  return (
    <div className="p-4 rounded-2xl bg-white shadow-md">
      <p className={`text-xl font-bold ${colors[color]}`}>{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}