import axios from "axios";
import type { ApiResponse } from "./api";
import api from "./api";

export type SignupParams = {
  name: string;
  email: string;
  password: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type User = {
  name: string;
  email: string;
  currency: string;
  isPro: boolean;
  proExpiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  profileImage?: string;
};

export type ForgotPasswordParams = {
  email: string;
};

export type ResetPasswordParams = {
  email: string;
  otp: string;
  newPassword: string;
};

export const signup = async (
  data: SignupParams,
): Promise<ApiResponse<null>> => {
  try {
    const res = await api.post("/auth/signup", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "Account creation failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "Account creation failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};

export const login = async (
  data: LoginParams,
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "Login failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "Login failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};

export const fetchUser = async (): Promise<ApiResponse<User>> => {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          data: null,
          message: "User data fetching failed",
          success: false,
          error: {
            message: "Server did not respond",
          },
        }
      );
    }

    return {
      data: null,
      message: "User data fetching failed",
      success: false,
      error: {
        message: "Server did not respond",
      },
    };
  }
};

export const logout = async (): Promise<ApiResponse<null>> => {
  try {
    const res = await api.post("/auth/logout");
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

export const sendResetPasswordOtp = async (
  data: ForgotPasswordParams,
): Promise<ApiResponse<null>> => {
  try {
    const res = await api.post("/auth/forgot-password", data);
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

export const resetPassword = async (
  data: ResetPasswordParams,
): Promise<ApiResponse<null>> => {
  try {
    const res = await api.post("/auth/reset-password", data);
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

export const loginWithGoogle = async (
  code: string,
): Promise<ApiResponse<LoginResponse>> => {
  try {
    const res = await api.get(`/google?code=${code}`);
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
