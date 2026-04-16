


// import { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import Footer from "../components/Footer";
// import { Menu, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function AddListing() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     type: "Resale Flat",
//     title: "",
//     address: "",
//     state: "",
//     city: "",
//     area: "",
//     price: "",
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const propertyTypes = [
//     "Resale Flat",
//     "Plot",
//     "House",
//     "Villa",
//     "Godown",
//   ];

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // ✅ VALIDATION
//   const validate = () => {
//     if (!form.title || !form.address || !form.city) {
//       alert("⚠️ Please fill all required fields");
//       return false;
//     }
//     if (form.phone.length < 10) {
//       alert("⚠️ Enter valid phone number");
//       return false;
//     }
//     return true;
//   };

//   // ✅ CONTINUE (NEXT PAGE)
//   const handleContinue = () => {
//     if (!validate()) return;

//     localStorage.setItem("tempProperty", JSON.stringify(form));
//     navigate("/add-listing-details");
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-50">

//       {/* SIDEBAR */}
//       <AdminSidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       {/* MAIN */}
//       <div className="flex-1 md:ml-72 flex flex-col">

//         {/* MOBILE MENU */}
//         <div className="md:hidden p-4">
//           <button onClick={() => setSidebarOpen(true)}>
//             <Menu />
//           </button>
//         </div>

//         <div className="max-w-6xl mx-auto p-4 md:p-8 flex-grow">

//           {/* HEADER */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold">
//               ➕ Add Property Listing
//             </h1>
//             <p className="text-gray-500 text-sm mt-1">
//               Fill basic details to create your listing
//             </p>
//           </div>

//           <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm space-y-8">

//             {/* 🔥 PROPERTY TYPE */}
//             <Section title="Property Type">
//               <div className="flex flex-wrap gap-3">
//                 {propertyTypes.map((type) => (
//                   <button
//                     key={type}
//                     onClick={() => setForm({ ...form, type })}
//                     className={`px-4 py-2 rounded-full border text-sm transition
//                     ${
//                       form.type === type
//                         ? "bg-blue-600 text-white shadow"
//                         : "hover:bg-blue-50"
//                     }`}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </Section>

//             {/* 🔥 BASIC */}
//             <Section title="Basic Details">
//               <Input
//                 label="Property Name"
//                 name="title"
//                 required
//                 value={form.title}
//                 onChange={handleChange}
//               />
//             </Section>

//             {/* 🔥 LOCATION */}
//             <Section title="Location">
//               <div className="grid md:grid-cols-3 gap-4">

//                 <Input
//                   label="Address"
//                   name="address"
//                   required
//                   value={form.address}
//                   onChange={handleChange}
//                 />

//                 <Input
//                   label="State"
//                   name="state"
//                   required
//                   value={form.state}
//                   onChange={handleChange}
//                 />

//                 <Input
//                   label="City"
//                   name="city"
//                   required
//                   value={form.city}
//                   onChange={handleChange}
//                 />

//               </div>
//             </Section>

//             {/* 🔥 AREA */}
//             <Section title="Property Area">
//               <div className="relative">
//                 <input
//                   name="area"
//                   placeholder="Enter area"
//                   value={form.area}
//                   onChange={handleChange}
//                   className="input pr-16"
//                 />
//                 <span className="absolute right-3 top-3 text-gray-500 text-sm">
//                   sq.ft
//                 </span>
//               </div>
//             </Section>

//             {/* 🔥 PRICE */}
//             <Section title="Pricing">
//               <Input
//                 label="Expected Price"
//                 name="price"
//                 required
//                 placeholder="₹ 50,00,000"
//                 value={form.price}
//                 onChange={handleChange}
//               />
//             </Section>

//             {/* 🔥 CONTACT */}
//             <Section title="Contact Details">
//               <div className="grid md:grid-cols-3 gap-4">

//                 <Input
//                   label="Name"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                 />

//                 <div>
//                   <label className="text-sm text-gray-600">
//                     Phone <span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex mt-1">
//                     <span className="px-3 flex items-center border border-r-0 rounded-l-lg bg-gray-100">
//                       +91
//                     </span>
//                     <input
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       className="input rounded-l-none"
//                     />
//                   </div>
//                 </div>

//                 <Input
//                   label="Email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                 />

//               </div>
//             </Section>

//             {/* 🔥 BUTTON */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleContinue}
//                 className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
//               >
//                 Continue <ArrowRight size={18} />
//               </button>
//             </div>

//           </div>
//         </div>

//         <Footer />
//       </div>

//       {/* STYLES */}
//       <style>
//         {`
//           .input {
//             width: 100%;
//             padding: 12px;
//             border: 1px solid #e2e8f0;
//             border-radius: 10px;
//             transition: 0.2s;
//           }

//           .input:focus {
//             outline: none;
//             border-color: #3b82f6;
//             box-shadow: 0 0 0 2px rgba(59,130,246,0.25);
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// /* 🔥 COMPONENTS */

// function Section({ title, children }) {
//   return (
//     <div>
//       <h2 className="font-semibold mb-3 text-gray-800">
//         {title} <span className="text-red-500">*</span>
//       </h2>
//       {children}
//     </div>
//   );
// }

// function Input({ label, required, ...props }) {
//   return (
//     <div>
//       <label className="text-sm text-gray-600">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input {...props} className="input mt-1" />
//     </div>
//   );
// }





import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import { Menu, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: "Resale Flat",
    title: "",
    address: "",
    state: "",
    city: "",
    area: "",
    price: "",
    name: "",
    phone: "",
    email: "",
  });

  const propertyTypes = ["Resale Flat", "Plot", "House", "Villa", "Godown"];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.title || !form.address || !form.city) {
      alert("⚠️ Please fill required fields");
      return false;
    }
    if (form.phone.length < 10) {
      alert("⚠️ Enter valid phone number");
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    if (!validate()) return;
    localStorage.setItem("tempProperty", JSON.stringify(form));
    navigate("/add-listing-details");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-white to-pink-100">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 md:ml-72 flex flex-col">

        {/* MOBILE */}
        <div className="md:hidden p-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-pink-600" />
          </button>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-8 flex-grow">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-pink-600">
              ➕ Add Property Listing
            </h1>
            <p className="text-gray-500 mt-1">
              Fill details to create listing
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-pink-100 space-y-8">

            {/* PROPERTY TYPE */}
            <Section title="Property Type">
              <div className="flex flex-wrap gap-3">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm({ ...form, type })}
                    className={`px-4 py-2 rounded-full font-semibold transition
                    ${
                      form.type === type
                        ? "bg-pink-500 text-white shadow-md"
                        : "bg-pink-50 text-pink-600 hover:bg-pink-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </Section>

            {/* BASIC */}
            <Section title="Basic Details">
              <Input
                label="Property Name"
                name="title"
                required
                value={form.title}
                onChange={handleChange}
              />
            </Section>

            {/* LOCATION */}
            <Section title="Location">
              <div className="grid md:grid-cols-3 gap-4">
                <Input label="Address" name="address" required value={form.address} onChange={handleChange} />
                <Input label="State" name="state" required value={form.state} onChange={handleChange} />
                <Input label="City" name="city" required value={form.city} onChange={handleChange} />
              </div>
            </Section>

            {/* AREA */}
            <Section title="Area">
              <div className="relative">
                <input
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="Enter area"
                  className="input"
                />
                <span className="absolute right-4 top-3 text-pink-500 font-semibold text-sm">
                  sq.ft
                </span>
              </div>
            </Section>

            {/* PRICE */}
            <Section title="Price">
              <Input
                label="Expected Price"
                name="price"
                required
                placeholder="₹ 50,00,000"
                value={form.price}
                onChange={handleChange}
              />
            </Section>

            {/* CONTACT */}
            <Section title="Contact Details">
              <div className="grid md:grid-cols-3 gap-4">

                <Input label="Name" name="name" required value={form.name} onChange={handleChange} />

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Phone <span className="text-pink-500">*</span>
                  </label>

                  <div className="flex mt-1">
                    <span className="px-3 flex items-center bg-pink-100 text-pink-600 font-bold rounded-l-lg border border-r-0">
                      +91
                    </span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="input rounded-l-none"
                    />
                  </div>
                </div>

                <Input label="Email" name="email" value={form.email} onChange={handleChange} />

              </div>
            </Section>

            {/* BUTTON */}
            <div className="flex justify-end">
              <button
                onClick={handleContinue}
                className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                Continue <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

        <Footer />
      </div>

      {/* STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #fbcfe8;
          background: white;
          font-weight: 600;
          color: #111827;
          transition: 0.2s;
        }

        .input:focus {
          outline: none;
          border-color: #ec4899;
          box-shadow: 0 0 0 3px rgba(236,72,153,0.2);
        }
      `}</style>
    </div>
  );
}

/* SECTION */
function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-gray-900 font-extrabold mb-3 text-lg">
        {title}
      </h2>
      {children}
    </div>
  );
}

/* INPUT */
function Input({ label, required, ...props }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-pink-500">*</span>}
      </label>
      <input {...props} className="input mt-1" />
    </div>
  );
}