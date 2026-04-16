
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LandingPage from "./pages/LandingPage";
// import Properties from "./pages/Properties";
// import Login from "./pages/Login";

// import Profile from "./pages/UserProfile";  // ✅ FIX

// import AdminDashboard from "./pages/AdminDashboard";
// import AddProperty from "./pages/AddProperty";
// import AdminProfile from "./pages/AdminProfile";
// import AddListing from "./pages/AddListing";
// import About from "./pages/About";        // ✅ ADD
// import Contact from "./pages/Contact";    // ✅ ADD
// import AddListingDetails from "./pages/AddListingDetails";
// import AdminRoute from "./components/AdminRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🌍 PUBLIC ROUTES */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/properties" element={<Properties />} />
//         <Route path="/about" element={<About />} />       {/* ✅ FIX */}
//         <Route path="/contact" element={<Contact />} />   {/* ✅ FIX */}
//         <Route path="/login" element={<Login />} />
// <Route path="/add-listing" element={<AddListing />} />
// <Route path="/add-listing-details" element={<AddListingDetails />} />
//         {/* 👤 USER PROFILE */}
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />

//         {/* 🛠️ ADMIN DASHBOARD */}
//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />

//         {/* 🛠️ ADMIN PROFILE */}
//         <Route
//           path="/admin/profile"
//           element={
//             <AdminRoute>
//               <AdminProfile />
//             </AdminRoute>
//           }
//         />

//         {/* ➕ ADD PROPERTY (ADMIN ONLY) */}
//         <Route
//           path="/add-property"
//           element={
//             <AdminRoute>
//               <AddProperty />
//             </AdminRoute>
//           }
//         />

//         {/* ❌ 404 */}
//         <Route
//           path="*"
//           element={
//             <div className="h-screen flex items-center justify-center text-xl">
//               404 - Page Not Found
//             </div>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

/* 🌍 PUBLIC */
import LandingPage from "./pages/LandingPage";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

/* 👤 USER */
import UserProfile from "./pages/UserProfile";
import UserDashboard from "./pages/UserDashboard";
import PricingSection from "./components/PricingSection";

/* 🛠️ ADMIN */
import AdminDashboard from "./pages/AdminDashboard";
import AddProperty from "./pages/AddProperty";
import AdminProfile from "./pages/AdminProfile";

/* 📦 PROPERTY */
import AddListing from "./pages/AddListing";
import AddListingDetails from "./pages/AddListingDetails";

/* 🔐 ROUTES */
import AdminRoute from "./components/AdminRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Subscription from "./pages/Subscription"; 


import Checkout from "./pages/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
<Route path="/checkout" element={<Checkout />} />
        {/* 🏠 PROPERTY LISTING */}
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/add-listing-details" element={<AddListingDetails />} />
<Route path="/subscription" element={<Subscription />} />
        {/* 👤 USER ROUTES */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <PricingSection />
            </ProtectedRoute>
          }
        />

        {/* 🛠️ ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* 🛠️ ADMIN PROFILE */}
        <Route
          path="/admin/profile"
          element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }
        />

        {/* ➕ ADD PROPERTY (ADMIN ONLY) */}
        <Route
          path="/add-property"
          element={
            <AdminRoute>
              <AddProperty />
            </AdminRoute>
          }
        />

        {/* ❌ 404 */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-xl">
              404 - Page Not Found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;