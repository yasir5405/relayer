import axios from "axios";

export type ApiError = {
  code?: string;
  message: string;
};

export type ApiResponse<T> = {
  data: T | null;
  message: string;
  success: boolean;
  error?: ApiError;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default api;
