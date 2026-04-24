import { BrowserRouter, Routes, Route } from "react-router-dom";

/* 🌍 PUBLIC */
import LandingPage from "./pages/LandingPage";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReferralPage from "./pages/ReferralPage";
import Checkout from "./pages/Checkout";

/* 👤 USER */
import UserProfile from "./pages/UserProfile";
import UserDashboard from "./pages/UserDashboard";
import Subscription from "./pages/Subscription";

/* 🛠️ ADMIN */
import AdminDashboard from "./pages/AdminDashboard";
import AddProperty from "./pages/AddProperty";
import AdminProfile from "./pages/AdminProfile";

/* 📦 PROPERTY */
import AddListing from "./pages/AddListing";
import AddListingDetails from "./pages/AddListingDetails";
import PropertyDetails from "./pages/PropertyDetails";
/* 🔐 ROUTES */
import AdminRoute from "./components/AdminRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PAYMENT */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/referral" element={<ReferralPage />} />

        {/* PROPERTY */}
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/add-listing-details" element={<AddListingDetails />} />
<Route path="/property/:id" element={<PropertyDetails />} />
        {/* SUBSCRIPTION */}
        <Route path="/subscription" element={<Subscription />} />

        {/* 👤 USER */}
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

        {/* 🛠️ ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }
        />

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
            <div className="h-screen flex items-center justify-center text-xl font-bold">
              404 - Page Not Found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;