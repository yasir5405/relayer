import {
  fetchConnectedGoogleAdAccounts,
  type SavedAdAccount,
} from "@/api/ad.api";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

type AdAccountContextType = {
  adAccounts: SavedAdAccount[];
  selectedAdAccount: SavedAdAccount | null;
  setSelectedAdAccount: (acc: SavedAdAccount) => void;
  refreshAdAccounts: () => Promise<void>;
  loading: boolean;
};

const AdAccountContext = createContext<AdAccountContextType | null>(null);

const AdAccountProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [adAccounts, setAdAccounts] = useState<SavedAdAccount[]>([]);
  const [selectedAdAccount, setSelectedAdAccount] =
    useState<SavedAdAccount | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshAdAccounts = async () => {
    try {
      const res = await fetchConnectedGoogleAdAccounts();

      if (res.success && res.data) {
        setAdAccounts(res.data);
        setLoading(false);
        return;
      } else {
        setAdAccounts([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      setAdAccounts([]);
      setSelectedAdAccount(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    refreshAdAccounts();
  }, [user]);

  useEffect(() => {
    if (adAccounts.length > 0) {
      setSelectedAdAccount((prev) => prev ?? adAccounts[0]);
    }
  }, [adAccounts, selectedAdAccount]);

  return (
    <AdAccountContext.Provider
      value={{
        adAccounts,
        loading,
        refreshAdAccounts,
        selectedAdAccount,
        setSelectedAdAccount,
      }}
    >
      {children}
    </AdAccountContext.Provider>
  );
};

export const useAdAccount = () => {
  const ctx = useContext(AdAccountContext);
  if (!ctx) {
    throw new Error("useAdaccount must be used inside AdAccountProvidor");
  }
  return ctx;
};

export default AdAccountProvider;
