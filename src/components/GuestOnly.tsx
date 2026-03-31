import { useAuth } from "@/context/AuthContext";
import { Spinner } from "./ui/spinner";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const GuestOnly = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const from = location.state?.from ?? "/dashboard";

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Spinner /> Loading...
      </div>
    );
  }

  if (user) {
    return <Navigate to={from} replace />;
  }
  return <Outlet />;
};

export default GuestOnly;
