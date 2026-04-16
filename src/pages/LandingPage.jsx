



import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OverlapCards from "../components/OverlapCards";
import Testimonials from "../components/Testimonials"; // ✅ ADD
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";
import VerifiedRentals from "../components/VerifiedRentals";
export default function LandingPage() {
  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* FEATURE CARDS */}
      <OverlapCards />
      <VerifiedRentals />
<PricingSection />
      {/* 🔥 TESTIMONIALS */}
      <Testimonials />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}