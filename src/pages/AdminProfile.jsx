

import { useState, useEffect } from "react";
import { Menu, Edit, Camera } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";

export default function AdminProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [stats, setStats] = useState({
    properties: 0,
    flats: 0,
    booked: 0,
    revenue: 0,
  });

  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    phone: "9876543210",
    role: "Admin",
    address: "Bangalore, India",
    bio: "Managing real estate platform.",
    image: "",
    linkedin: "",
    website: "",
    joined: "2025",
  });

  // 🔥 LOAD PROFILE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("adminProfile"));
    if (saved) setProfile(saved);

    const properties =
      JSON.parse(localStorage.getItem("properties")) || [];

    let flats = 0;
    let booked = 0;
    let revenue = 0;

    properties.forEach((p) => {
      p.units?.forEach((u) => {
        flats++;
        if (u.status === "booked") {
          booked++;
          revenue += Number(u.price || 0);
        }
      });
    });

    setStats({
      properties: properties.length,
      flats,
      booked,
      revenue,
    });
  }, []);

  const handleSave = () => {
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    setEditMode(false);
    alert("✅ Profile Updated");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <div className="flex flex-1">

        {/* 🔥 SIDEBAR */}
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* 🔥 MAIN */}
        <div className="flex-1 md:ml-72 p-4 md:p-8">

          {/* MOBILE MENU */}
          <button
            className="md:hidden mb-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>

          <h1 className="text-3xl font-bold mb-6">
            👤 Admin Profile
          </h1>

          {/* 🔥 PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">

            {/* TOP */}
            <div className="flex items-center gap-6 mb-6">

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={
                    profile.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  className="w-24 h-24 rounded-full object-cover border"
                />

                {editMode && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer">
                    <Camera size={16} />
                    <input
                      type="text"
                      placeholder="Image URL"
                      className="hidden"
                      onChange={(e) =>
                        setProfile({ ...profile, image: e.target.value })
                      }
                    />
                  </label>
                )}
              </div>

              {/* INFO */}
              <div>
                <h2 className="text-xl font-bold">
                  {profile.name}
                </h2>
                <p className="text-gray-500">
                  {profile.email}
                </p>
                <p className="text-sm text-gray-400">
                  Joined: {profile.joined}
                </p>
              </div>

              <div className="ml-auto">
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-blue-600 flex gap-2 items-center"
                  >
                    <Edit size={16} /> Edit
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                )}
              </div>

            </div>

            {/* 🔥 FORM */}
            <div className="grid md:grid-cols-2 gap-4">

              <Input label="Name" value={profile.name} edit={editMode}
                onChange={(v) => setProfile({ ...profile, name: v })} />

              <Input label="Email" value={profile.email} edit={editMode}
                onChange={(v) => setProfile({ ...profile, email: v })} />

              <Input label="Phone" value={profile.phone} edit={editMode}
                onChange={(v) => setProfile({ ...profile, phone: v })} />

              <Input label="Address" value={profile.address} edit={editMode}
                onChange={(v) => setProfile({ ...profile, address: v })} />

              <Input label="LinkedIn" value={profile.linkedin} edit={editMode}
                onChange={(v) => setProfile({ ...profile, linkedin: v })} />

              <Input label="Website" value={profile.website} edit={editMode}
                onChange={(v) => setProfile({ ...profile, website: v })} />

            </div>

            {/* BIO */}
            <div className="mt-4">
              <label className="text-sm text-gray-500">Bio</label>

              {editMode ? (
                <textarea
                  className="w-full border rounded-lg p-2 mt-1"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                />
              ) : (
                <p className="mt-1 text-gray-700">
                  {profile.bio}
                </p>
              )}
            </div>

          </div>

          {/* 🔥 STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Card title="Properties" value={stats.properties} />
            <Card title="Flats" value={stats.flats} />
            <Card title="Booked" value={stats.booked} />
            <Card title="Revenue" value={`₹ ${stats.revenue}`} />

          </div>

        </div>
      </div>

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}


// 🔥 INPUT
function Input({ label, value, edit, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>

      {edit ? (
        <input
          className="w-full border rounded-lg p-2 mt-1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <p className="mt-1 font-medium">{value}</p>
      )}
    </div>
  );
}

// 🔥 CARD
function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}