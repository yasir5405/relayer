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

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
