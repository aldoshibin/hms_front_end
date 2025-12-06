"use client";

import { createContext, useEffect, useState, useContext } from "react";
import api from "./axios";
import { ENDPOINTS } from "./endpoints";
import { saveToken, getToken, removeToken } from "@/utils/storage";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load logged-in user
  const loadUser = async () => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get(ENDPOINTS.PROFILE);
      setUser(res.data);
    } catch (error) {
      removeToken();
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  // Login function
  const login = async (credentials) => {
    const res = await api.post(ENDPOINTS.LOGIN, credentials);

    if (res.data.token) {
      saveToken(res.data.token);
      await loadUser();
      router.push("/"); // redirect after login
    }
  };

  // Logout
  const logout = () => {
    removeToken();
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
