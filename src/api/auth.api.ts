import axios from "axios";
import type { ApiResponse } from "./api";
import api from "./api";

export type SignupParams = {
  name: string;
  email: string;
  password: string;
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
