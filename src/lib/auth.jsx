import api from "./axios";
import { saveToken, removeToken } from "@/lib/storage";

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  if (res?.data?.token) {
    saveToken(res.data.token);
  }
  return res.data;
};

export const logoutUser = () => {
  removeToken();
};
