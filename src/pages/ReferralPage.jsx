import { useEffect, useState } from "react";
import {
  Copy,
  Share2,
  Gift,
  Users,
  TrendingUp,
  Wallet,
  Trophy,
} from "lucide-react";

export default function ReferralPage() {
  const [refCode, setRefCode] = useState("");
  const [copied, setCopied] = useState(false);

  const [wallet, setWallet] = useState(0);
  const [referrals, setReferrals] = useState(0);

  const baseURL = "https://yourapp.com/signup?ref=";

  // 🔥 dummy leaderboard
  const [leaderboard] = useState([
    { name: "Aman", referrals: 12 },
    { name: "Ravi", referrals: 9 },
    { name: "You", referrals: 5 },
    { name: "Karan", referrals: 4 },
  ]);

  useEffect(() => {
    const code =
      "REF" + Math.random().toString(36).substring(2, 8).toUpperCase();

    setRefCode(code);

    // 🔥 dummy earnings
    const fakeReferrals = 5;
    setReferrals(fakeReferrals);
    setWallet(fakeReferrals * 50);
  }, []);

  const referralLink = baseURL + refCode;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const shareWhatsApp = () => {
    const msg = `🔥 Join & Earn Money!
    
Use my referral link:
${referralLink}

💰 Earn ₹50 per signup`;

    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-gray-100 p-6">

      {/* HERO */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-2xl shadow mb-6">

        <h1 className="text-3xl font-extrabold">
          🔗 Refer & Earn System
        </h1>

        <p className="text-sm mt-2 opacity-90">
          Invite friends & earn ₹50 per signup 💰
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">

        <StatCard icon={<Wallet />} title="Wallet" value={`₹${wallet}`} />
        <StatCard icon={<Users />} title="Referrals" value={referrals} />
        <StatCard icon={<TrendingUp />} title="Per Referral" value="₹50" />

      </div>

      {/* REF LINK */}
      <div className="bg-white p-5 rounded-2xl shadow mb-6">

        <p className="text-sm text-gray-500">Your Referral Code</p>

        <h2 className="text-xl font-bold">{refCode}</h2>

        <div className="bg-gray-100 p-2 mt-3 rounded-lg text-sm break-all">
          {referralLink}
        </div>

        <div className="flex gap-3 mt-4">

          <button
            onClick={copyLink}
            className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-xl font-bold"
          >
            <Copy size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>

          <button
            onClick={shareWhatsApp}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl font-bold"
          >
            <Share2 size={16} />
            WhatsApp
          </button>

        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white p-5 rounded-2xl shadow mb-6">

        <h2 className="font-bold text-lg mb-3">🧠 How It Works</h2>

        <div className="space-y-2 text-gray-700">

          <p>1️⃣ Share your referral link</p>
          <p>2️⃣ Friend signs up</p>
          <p>3️⃣ You earn ₹50 instantly</p>
          <p>4️⃣ Unlimited earning 💰</p>

        </div>
      </div>

     {/* LEADERBOARD */}
<div className="bg-white p-5 rounded-2xl shadow-lg mb-6">

  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
    <Trophy className="text-yellow-500" />
    Leaderboard
  </h2>

  <div className="space-y-3">
    {leaderboard.map((u, i) => (
      <div
        key={i}
        className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-pink-50 hover:shadow-md transition"
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* RANK BADGE */}
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full font-bold text-white
              ${
                i === 0
                  ? "bg-yellow-500"
                  : i === 1
                  ? "bg-gray-400"
                  : i === 2
                  ? "bg-orange-400"
                  : "bg-pink-500"
              }`}
          >
            {i + 1}
          </div>

          {/* NAME */}
          <div>
            <p className="font-bold text-gray-800">{u.name}</p>
            <p className="text-xs text-gray-500">Active Referrer</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="text-right">
          <p className="font-bold text-pink-600">{u.referrals}</p>
          <p className="text-xs text-gray-500">Referrals</p>
        </div>

      </div>
    ))}
  </div>

</div>
      {/* INFO BOX */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-green-700 font-semibold">
        🎉 Earn unlimited money by referring friends!
      </div>

    </div>
  );
}

/* CARD */
function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">

      <div className="text-pink-600">{icon}</div>

      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <h2 className="font-bold text-lg">{value}</h2>
      </div>

    </div>
  );
}