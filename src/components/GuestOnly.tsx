import { useAuth } from "@/context/AuthContext";
import { Spinner } from "./ui/spinner";
import { Navigate, Outlet } from "react-router-dom";

const GuestOnly = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Spinner /> Loading...
      </div>
    );
  }

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return <Outlet />;
};

export default GuestOnly;
