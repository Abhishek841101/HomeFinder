import { useState } from "react";
import Footer from "../components/Footer";

export default function Loans() {
  const [search, setSearch] = useState("");

  const loans = [
    {
      name: "Personal Loan",
      bank: "HDFC Bank",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=60",
      interest: "10.5% - 16%",
      amount: "₹50K - ₹10L",
      tenure: "1 - 5 Years",
      type: "Instant",
      rating: 4.7,
      approval: "24 Hours",
    },
    {
      name: "Home Loan",
      bank: "SBI Bank",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=60",
      interest: "8.5% - 10%",
      amount: "₹5L - ₹2Cr",
      tenure: "10 - 30 Years",
      type: "Low Interest",
      rating: 4.8,
      approval: "2-3 Days",
    },
    {
      name: "Car Loan",
      bank: "ICICI Bank",
      image: "https://images.unsplash.com/photo-1549921296-3a6b3b4c1f0b?auto=format&fit=crop&w=800&q=60",
      interest: "9% - 12%",
      amount: "₹2L - ₹50L",
      tenure: "1 - 7 Years",
      type: "Easy Approval",
      rating: 4.5,
      approval: "24-48 Hours",
    },
    {
      name: "Business Loan",
      bank: "Axis Bank",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60",
      interest: "11% - 18%",
      amount: "₹1L - ₹1Cr",
      tenure: "1 - 10 Years",
      type: "Fast Approval",
      rating: 4.6,
      approval: "1-2 Days",
    },
    {
      name: "Education Loan",
      bank: "Bank of Baroda",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=60",
      interest: "8% - 11%",
      amount: "₹50K - ₹20L",
      tenure: "5 - 15 Years",
      type: "Student Friendly",
      rating: 4.4,
      approval: "3-5 Days",
    },
  ];

  const filtered = loans.filter(
    (loan) =>
      loan.name.toLowerCase().includes(search.toLowerCase()) ||
      loan.bank.toLowerCase().includes(search.toLowerCase()) ||
      loan.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-sm px-4 py-4">

        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          Loan Marketplace 💰
        </h1>

        {/* SEARCH */}
        <div className="mt-3 relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search loan, bank, type..."
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 px-4 py-6">

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">No loans found 😕</p>
            <p className="text-sm text-gray-400 mt-1">
              Try personal, home, car or bank name
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {filtered.map((loan, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={loan.image}
                    alt={loan.name}
                    className="w-full h-44 object-cover"
                  />

                  {/* RATING */}
                  <span className="absolute top-2 right-2 bg-white text-yellow-600 text-xs px-2 py-1 rounded-full shadow">
                    ⭐ {loan.rating}
                  </span>

                  {/* TAG */}
                  <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {loan.type}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <h2 className="text-lg font-semibold text-gray-800">
                    {loan.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    🏦 {loan.bank}
                  </p>

                  {/* DETAILS */}
                  <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p>💰 Amount: {loan.amount}</p>
                    <p>📊 Interest: {loan.interest}</p>
                    <p>⏳ Tenure: {loan.tenure}</p>
                    <p>⚡ Approval: {loan.approval}</p>
                  </div>

                  <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2 rounded-xl hover:opacity-90 transition">
                    Apply Now
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}