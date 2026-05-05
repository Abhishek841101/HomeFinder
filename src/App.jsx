

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
import PopularAllPage from "./pages/PopularAllPage";
import B2BList from "./pages/B2BList";
import Doctors from "./pages/Doctors";
import Travel from "./pages/Travel";
import TravelList from "./pages/TravelList";
import CarHire from "./pages/CarHire";
import CarList from "./pages/CarList";
import Beauty from "./pages/Beauty";
import BeautyList from "./pages/BeautyList";
import Wedding from "./pages/Wedding";
import Gym from "./pages/Gym";
import GymList from "./pages/GymList";
import Education from "./pages/Education";
import EducationList from "./pages/EducationList";
import Packers from "./pages/Packers";
import Repairs from "./pages/Repairs";
import Rent from "./pages/Rent";
import Jobs from "./pages/Jobs";
import Loans from "./pages/Loans";
import RealEstate from "./pages/RealEstate";
import PGHostel from "./pages/PGHostel";
import ShowMore from "./pages/ShowMore";
import DoctorsList from "./pages/DoctorsList";
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
        <Route path="/all" element={<PopularAllPage />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/b2b/:category" element={<B2BList />} />
        <Route path="/doctors" element={<Doctors />} />
         <Route path="/doctors/:category" element={<DoctorsList />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/travel/:category" element={<TravelList />} />
        <Route path="/car-hire" element={<CarHire />} />
        <Route path="/cars/:slug" element={<CarList />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/beauty/:category" element={<BeautyList />} />
        <Route path="/wedding-planning" element={<Wedding />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/gym/:category" element={<GymList />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/:category" element={<EducationList />} />
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