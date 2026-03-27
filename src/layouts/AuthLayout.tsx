import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-dvh w-full relative">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
