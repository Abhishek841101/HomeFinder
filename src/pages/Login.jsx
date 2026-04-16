// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // ✅ Agar already login hai → home bhej do
//   useEffect(() => {
//     const isAuth = localStorage.getItem("token");
//     if (isAuth) {
//       navigate("/");
//     }
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (form.email && form.password) {
//       localStorage.setItem("token", "user123");

//       // ✅ FIX: dashboard nahi, HOME
//       navigate("/");
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">

//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-[350px]"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Login
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 border rounded-lg mb-4"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 border rounded-lg mb-4"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />

//         <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
//           Login
//         </button>

//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-blue-600">
//             Register
//           </Link>
//         </p>

//       </form>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 🔥 If already logged in → HOME
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    console.clear();

    if (!form.email || !form.password) {
      console.log("❌ EMPTY FIELDS");
      return;
    }

    // 🛠️ ADMIN LOGIN
    if (form.email === "admin@gmail.com" && form.password === "admin123") {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "admin");

      console.log("🔥 ADMIN LOGIN SUCCESS");
    }

    // 👤 USER LOGIN
    else {
      localStorage.setItem("token", "user-token");
      localStorage.setItem("role", "user");

      console.log("👤 USER LOGIN SUCCESS");
    }

    // 🚀 ALWAYS GO HOME
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}