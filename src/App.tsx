import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import {
  AllCampaigns,
  Dashboard,
  DashboardOverview,
  Home,
  Login,
  PrivacyPolicy,
  ResetPassword,
  Signup,
} from "./pages";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestOnly from "./components/GuestOnly";
const App = () => {
  return (
    <Routes>
      <Route element={<GuestOnly />}>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>

      <Route element={<LandingLayout />}>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path="all-campaigns" element={<AllCampaigns />} />
        </Route>
      </Route>

      {/* Auth Pages */}
      <Route element={<AuthLayout />}>
        <Route element={<GuestOnly />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
