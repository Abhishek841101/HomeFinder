import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBanner from "../assets/About.png";

export default function About() {
  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* BANNER */}
      <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">

        <img
          src={aboutBanner}
          alt="About Banner"
          className="w-full h-full object-cover block"
        />

        {/* OVERLAY TEXT */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>

      </div>

      {/* CONTENT */}
      <div className="px-6 py-10 max-w-6xl mx-auto">

        {/* TAG */}
        <div className="text-blue-600 font-semibold mb-2">
          #Get to Know
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Journey
        </h2>

        {/* TIMELINE */}
        <div className="space-y-6 border-l-2 border-blue-200 pl-6">

          <div>
            <h3 className="font-bold text-lg">2023</h3>
            <p className="text-gray-600">
              We started offline sales and marketing in real estate to provide clear titled properties.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">2024</h3>
            <p className="text-gray-600">
              We identified missing real-time booking update system in real estate process.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">2025</h3>
            <p className="text-gray-600">
              We are ready to expand PAN India to solve buyer and seller problems.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">2026</h3>
            <p className="text-gray-600">
              Expansion into small and big towns with minimal investment.
            </p>
          </div>

        </div>

        {/* VALUES */}
        <div className="mt-14">

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Values
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl">
            We are committed to solving every property buyer's and seller's needs
            with a hassle-free and transparent process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">🔷</div>
              <h3 className="font-bold text-lg mb-2">Truth</h3>
              <p className="text-gray-600 text-sm">
                Real estate transactions are challenging, but we solve them with honesty and efficiency.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-lg mb-2">Trust</h3>
              <p className="text-gray-600 text-sm">
                We ensure safe, transparent and reliable property transactions.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-lg mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                Every process is tracked and clear using our tech-driven system.
              </p>
            </div>

          </div>

        </div>

       

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}