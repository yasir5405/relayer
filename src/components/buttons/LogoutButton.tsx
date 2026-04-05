import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { cn } from "@/lib/utils";

interface LogoutButtonProps {
  type?: "link" | "button";
  size?: "lg" | "sm" | "xs";
  className?: string;
}

const LogoutButton = ({
  type = "button",
  size,
  className,
}: LogoutButtonProps) => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutUser();

      // toast.success("Logged out successfully");
      navigate("/", { replace: true });
    } catch {
      toast.error("Error while logging out. Please try again");
    }
    setLoading(false);
  };
  if (type === "button") {
    return (
      <Button
        size={size}
        onClick={handleLogout}
        disabled={loading}
        className={cn("text-sm", className)}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2 text-sm">
            <Spinner />
            Logging out...
          </div>
        ) : (
          <>Logout</>
        )}
      </Button>
    );
  }
  return (
    <p
      className="text-sm text-muted-foreground hover:text-black cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </p>
  );
};

export default LogoutButton;
