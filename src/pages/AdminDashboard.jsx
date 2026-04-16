

import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Menu } from "lucide-react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [stats, setStats] = useState({
    totalProperties: 0,
    totalUnits: 0,
    available: 0,
    booked: 0,
    revenue: 0,
  });

  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const properties =
      JSON.parse(localStorage.getItem("properties")) || [];

    let totalUnits = 0;
    let available = 0;
    let booked = 0;
    let revenue = 0;
    let recentBookings = [];

    properties.forEach((p) => {
      p.units?.forEach((u) => {
        totalUnits++;

        if (u.status === "available") available++;
        else {
          booked++;
          revenue += Number(u.price || 0);

          recentBookings.push({
            name: p.title,
            flat: u.flat,
            price: u.price,
          });
        }
      });
    });

    setStats({
      totalProperties: properties.length || 3, // fallback dummy
      totalUnits: totalUnits || 20,
      available: available || 12,
      booked: booked || 8,
      revenue: revenue || 1200000,
    });

    setRecent(
      recentBookings.length > 0
        ? recentBookings.slice(0, 5)
        : [
            { name: "Royal Keshava", flat: "101", price: "60L" },
            { name: "Sky Heights", flat: "202", price: "45L" },
          ]
    );
  }, []);

  const pieData = [
    { name: "Available", value: stats.available },
    { name: "Booked", value: stats.booked },
  ];

  const monthlyData = [
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 30000 },
    { month: "Apr", revenue: stats.revenue },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <div className="flex flex-1">

        {/* SIDEBAR */}
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* MAIN */}
        <div className="flex-1 md:ml-72 p-4 md:p-8">

          {/* MOBILE MENU */}
          <button
            className="md:hidden mb-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>

          <h1 className="text-3xl font-bold mb-6">
            📊 Dashboard Overview
          </h1>

          {/* 🔥 STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

            <Card title="Properties" value={stats.totalProperties} growth="+12%" />
            <Card title="Flats" value={stats.totalUnits} growth="+8%" />
            <Card title="Available" value={stats.available} growth="+5%" />
            <Card title="Booked" value={stats.booked} growth="+15%" />

          </div>

          {/* 💰 REVENUE */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow mb-8">
            <h2 className="font-bold mb-2">Total Revenue</h2>
            <p className="text-3xl font-bold">
              ₹ {stats.revenue.toLocaleString()}
            </p>
            <p className="text-sm mt-1 opacity-80">
              +18% growth this month
            </p>
          </div>

          {/* 📊 CHARTS */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* PIE */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold mb-4">Flat Status</h2>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value">
                    <Cell fill="#22c55e" />
                    <Cell fill="#ef4444" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* BAR */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold mb-4">Monthly Revenue</h2>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* 📋 RECENT BOOKINGS */}
          <div className="bg-white p-6 rounded-xl shadow mb-10">
            <h2 className="font-bold mb-4">Recent Bookings</h2>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2">Property</th>
                  <th>Flat</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {recent.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-2 font-medium">{r.name}</td>
                    <td>{r.flat}</td>
                    <td className="text-green-600 font-semibold">
                      ₹ {r.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}


// 🔥 CARD COMPONENT
function Card({ title, value, growth }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <div className="flex justify-between items-center mt-2">
        <p className="text-2xl font-bold">{value}</p>
        <span className="text-green-500 text-sm font-medium">
          {growth}
        </span>
      </div>
    </div>
  );
}