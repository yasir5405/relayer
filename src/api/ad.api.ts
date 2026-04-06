import axios from "axios";
import api, { type ApiResponse } from "./api";

export type SavedAdAccount = {
  id: number;
  adAccountId: string;
  adAccountName: string;
  createdAt: Date;
  platform: "GOOGLE" | "META";
};

export type AdAccount = { id: string; name: string };

export type GoogleAdsTokens = {
  accessToken: string;
  refreshToken: string;
  expiryDate: number;
};

export type fetchGoogleAdsAccountsResponse = {
  accounts: AdAccount[];
  tokens: GoogleAdsTokens;
};

export const fetchGoogleAdsAccounts = async (
  code: string,
): Promise<ApiResponse<fetchGoogleAdsAccountsResponse>> => {
  try {
    const res = await api.get(`/google/accounts?code=${code}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "Logout failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "Logout failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};

export const saveGoogleAdsAccount = async (payload: {
  selectedAccounts: AdAccount[];
  tokens: GoogleAdsTokens;
}) => {
  try {
    const res = await api.post("/google/accounts/save", payload);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "Logout failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "Logout failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};

export const fetchConnectedGoogleAdAccounts = async (): Promise<
  ApiResponse<SavedAdAccount[]>
> => {
  try {
    const res = await api.get("/google/connected-accounts");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "Logout failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "Logout failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};
