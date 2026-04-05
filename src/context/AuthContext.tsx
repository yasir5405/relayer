import { fetchUser, logout, type User } from "@/api/auth.api";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logoutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const token = localStorage.getItem("access-token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetchUser();
      if (res.success) {
        setUser(res.data);
        setLoading(false);
        return;
      } else if (res.error?.code === 401) {
        setUser(null);
        localStorage.removeItem("access-token");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
    setLoading(false);
    localStorage.removeItem("access-token");
  };

  useEffect(() => {
    (async () => {
      await refreshUser();
    })();
  }, []);
  return (
    <AuthContext.Provider value={{ loading, refreshUser, user, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvidor");
  }
  return ctx;
};
