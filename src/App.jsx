// import { BrowserRouter, Routes, Route } from "react-router-dom";

// /* 🌍 PUBLIC */
// import LandingPage from "./pages/LandingPage";
// import Properties from "./pages/Properties";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ReferralPage from "./pages/ReferralPage";
// import Checkout from "./pages/Checkout";
// import ServiceDynamic from "./pages/ServiceDynamic";
// /* 👤 USER */
// import UserProfile from "./pages/UserProfile";
// import UserDashboard from "./pages/UserDashboard";
// import Subscription from "./pages/Subscription";

// /* 🛠️ ADMIN */
// import AdminDashboard from "./pages/AdminDashboard";
// import AddProperty from "./pages/AddProperty";
// import AdminProfile from "./pages/AdminProfile";

// /* 📦 PROPERTY */
// import AddListing from "./pages/AddListing";
// import AddListingDetails from "./pages/AddListingDetails";
// import PropertyDetails from "./pages/PropertyDetails";
// /* 🔐 ROUTES */
// import AdminRoute from "./components/AdminRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🌍 PUBLIC */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/properties" element={<Properties />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
// <Route path="/service/:name" element={<ServiceDynamic />} />
//         {/* PAYMENT */}
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/referral" element={<ReferralPage />} />

//         {/* PROPERTY */}
//         <Route path="/add-listing" element={<AddListing />} />
//         <Route path="/add-listing-details" element={<AddListingDetails />} />
// <Route path="/property/:id" element={<PropertyDetails />} />
//         {/* SUBSCRIPTION */}
//         <Route path="/subscription" element={<Subscription />} />

//         {/* 👤 USER */}
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/user/dashboard"
//           element={
//             <ProtectedRoute>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* 🛠️ ADMIN */}
//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/profile"
//           element={
//             <AdminRoute>
//               <AdminProfile />
//             </AdminRoute>
//           }
//         />

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
//             <div className="h-screen flex items-center justify-center text-xl font-bold">
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
import Register from "./pages/Register";
import ReferralPage from "./pages/ReferralPage";
import Checkout from "./pages/Checkout";

/* 🆕 SERVICE PAGES */
import B2B from "./pages/B2B";
import Doctors from "./pages/Doctors";
import Travel from "./pages/Travel";
import CarHire from "./pages/CarHire";
import Beauty from "./pages/Beauty";
import Wedding from "./pages/Wedding";
import Gym from "./pages/Gym";
import Education from "./pages/Education";
import Packers from "./pages/Packers";
import Repairs from "./pages/Repairs";
import Rent from "./pages/Rent";
import Jobs from "./pages/Jobs";
import Loans from "./pages/Loans";
import RealEstate from "./pages/RealEstate";
import PGHostel from "./pages/PGHostel";
import ShowMore from "./pages/ShowMore";

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

        {/* 💳 PAYMENT */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/referral" element={<ReferralPage />} />

        {/* 🧭 SERVICES (MAIN PART) */}
        <Route path="/b2b" element={<B2B />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/car-hire" element={<CarHire />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/wedding-planning" element={<Wedding />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/education" element={<Education />} />
        <Route path="/packers-movers" element={<Packers />} />
        <Route path="/repairs-services" element={<Repairs />} />
        <Route path="/rent-hire" element={<Rent />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/pg-hostel" element={<PGHostel />} />
        <Route path="/more" element={<ShowMore />} />

        {/* 📦 PROPERTY */}
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/add-listing-details" element={<AddListingDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

        {/* 💼 SUBSCRIPTION */}
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