
import { useState, useEffect } from "react";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

export default function Subscription() {

  const [billing, setBilling] = useState("full"); // full / emi
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [trialTime, setTrialTime] = useState(86400); // 24hr

  // 🔥 LOAD ACTIVE PLAN
  useEffect(() => {
    const plan = localStorage.getItem("userPlan");
    if (plan) setActivePlan(plan);
  }, []);

  // 🔥 COUNTDOWN TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setTrialTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h}h ${m}m ${s}s`;
  };

  // 🔥 APPLY COUPON
  const applyCoupon = () => {
    if (coupon === "SAVE20") {
      setDiscount(20);
      alert("✅ 20% Discount Applied");
    } else if (coupon === "WELCOME50") {
      setDiscount(50);
      alert("🔥 50% OFF Applied");
    } else {
      alert("❌ Invalid Coupon");
    }
  };

  // 🔥 SUBSCRIBE
  const handleSubscribe = (plan) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userPlan", plan);
      setActivePlan(plan);
      alert(`🎉 Subscribed to ${plan}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* 🔥 HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">
          Upgrade Your Business 🚀
        </h1>
        <p className="mt-2 opacity-90">
          Choose the perfect plan and scale your growth
        </p>
      </div>

      {/* 🔥 TRIAL TIMER */}
      <div className="bg-yellow-100 text-center py-3 font-medium">
        ⏳ Free Trial Ends In: {formatTime(trialTime)}
      </div>

      {/* 🔥 BILLING TOGGLE */}
      <div className="flex justify-center mt-6">
        <div className="bg-white rounded-full p-1 shadow flex">
          <button
            onClick={() => setBilling("full")}
            className={`px-5 py-2 rounded-full ${
              billing === "full"
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            Full Payment
          </button>

          <button
            onClick={() => setBilling("emi")}
            className={`px-5 py-2 rounded-full ${
              billing === "emi"
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            EMI Option
          </button>
        </div>
      </div>

      {/* 🔥 COUPON */}
      <div className="max-w-md mx-auto mt-6 flex gap-2">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Coupon Code"
          className="flex-1 border p-3 rounded-lg"
        />
        <button
          onClick={applyCoupon}
          className="bg-green-500 text-white px-4 rounded-lg"
        >
          Apply
        </button>
      </div>

      {/* 🔥 PRICING */}
      <div className="flex-grow mt-10">
        <PricingSection
          billing={billing}
          discount={discount}
          activePlan={activePlan}
          onSubscribe={handleSubscribe}
        />
      </div>

      {/* 🔥 LOADING MODAL */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <p className="font-semibold">Processing Payment...</p>
            <div className="mt-3 animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      )}

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}