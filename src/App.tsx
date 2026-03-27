import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import { Home, Login } from "./pages";
import AuthLayout from "./layouts/AuthLayout";
const App = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth Pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
