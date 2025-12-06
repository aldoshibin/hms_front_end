

import axios from "axios";
import { getToken } from "@/lib/storage";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.log("Unauthorized - Token expired");
      // redirect to login if needed
    }
    return Promise.reject(error);
  }
);
export default api;
