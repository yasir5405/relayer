import LogoutButton from "@/components/buttons/LogoutButton";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      Welcome, {user?.name} <LogoutButton className=""/>
    </div>
  );
};

export default Dashboard;
