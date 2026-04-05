import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-dvh w-full relative dark:bg-[url('/background-auth.webp.png')] dark:bg-cover dark:bg-center dark:bg-no-repeat">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
