import { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import { Menu, Upload, X } from "lucide-react";

export default function AddListingDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    parking: "",
    water: "",
    furnishing: "",
    powerBackup: "",
    nearby: [],
    features: [],
  });

  // 🔥 LOAD BASIC DATA
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("tempProperty"));
    if (temp) {
      setForm((prev) => ({ ...prev, ...temp }));
    }
  }, []);

  // 🔥 IMAGE UPLOAD
  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    const urls = files.map((file) => URL.createObjectURL(file));

    setImages([...images, ...urls].slice(0, 3));
  };

  const removeImage = (i) => {
    setImages(images.filter((_, index) => index !== i));
  };

  // 🔥 CHECKBOX HANDLER
  const toggle = (field, value) => {
    setForm((prev) => {
      const list = prev[field] || [];

      if (list.includes(value)) {
        return {
          ...prev,
          [field]: list.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [field]: [...list, value],
        };
      }
    });
  };

  // 🔥 FINAL SUBMIT
  const handleSubmit = () => {
    const existing =
      JSON.parse(localStorage.getItem("properties")) || [];

    const finalData = {
      id: Date.now(),
      ...form,
      images,
    };

    localStorage.setItem(
      "properties",
      JSON.stringify([finalData, ...existing])
    );

    localStorage.removeItem("tempProperty");

    alert("✅ Property Added Successfully");
    window.location.href = "/properties";
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 md:ml-72 flex flex-col">

        <div className="md:hidden p-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu />
          </button>
        </div>

        <div className="max-w-5xl mx-auto p-4 md:p-8 flex-grow">

          <h1 className="text-3xl font-bold mb-6">
            🏗️ Property Details
          </h1>

          <div className="bg-white p-6 rounded-2xl shadow space-y-8">

            {/* 🔥 IMAGE UPLOAD */}
            <div>
              <h2 className="font-semibold mb-2">
                Add Images (Max 3)
              </h2>

              <label className="border-2 border-dashed border-blue-300 p-10 flex flex-col items-center justify-center rounded-xl cursor-pointer">
                <Upload />
                <p>Click to upload images</p>
                <p className="text-sm text-gray-400">
                  JPG, PNG | Max 500kb
                </p>

                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImage}
                />
              </label>

              {/* PREVIEW */}
              <div className="flex gap-3 mt-4">
                {images.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={img}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <button
                      onClick={() => removeImage(i)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔥 FEATURES */}
            <SelectBox
              title="Parking"
              field="parking"
              options={["Available", "Not Available"]}
              form={form}
              setForm={setForm}
            />

            <SelectBox
              title="Water Supply"
              field="water"
              options={["24x7", "Limited"]}
              form={form}
              setForm={setForm}
            />

            <SelectBox
              title="Furnishing"
              field="furnishing"
              options={["Fully", "Semi", "None"]}
              form={form}
              setForm={setForm}
            />

            {/* 🔥 NEARBY */}
            <MultiSelect
              title="Nearby Places"
              field="nearby"
              options={[
                "Hospital",
                "School",
                "Park",
                "Airport",
                "Mall",
              ]}
              toggle={toggle}
              form={form}
            />

            {/* 🔥 FEATURES */}
            <MultiSelect
              title="Extra Features"
              field="features"
              options={[
                "Lift",
                "Security",
                "Power Backup",
                "Gym",
                "Swimming Pool",
              ]}
              toggle={toggle}
              form={form}
            />

            {/* SUBMIT */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                🚀 Submit Property
              </button>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

// 🔥 SELECT BOX
function SelectBox({ title, field, options, form, setForm }) {
  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>

      <div className="flex gap-3 flex-wrap">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => setForm({ ...form, [field]: o })}
            className={`px-4 py-2 rounded-full border
            ${
              form[field] === o
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-50"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

// 🔥 MULTI SELECT
function MultiSelect({ title, field, options, toggle, form }) {
  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => toggle(field, o)}
            className={`px-4 py-2 rounded-full border
            ${
              form[field]?.includes(o)
                ? "bg-green-500 text-white"
                : "hover:bg-green-50"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}