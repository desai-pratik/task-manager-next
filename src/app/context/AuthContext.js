"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authUser"));
    if (userData) setUser(userData);
    setLoading(false);
  }, []);

  const login = (data) => {
    localStorage.setItem("authUser", JSON.stringify(data));
    setUser(data);
    router.push("/tasks");
  };

  const register = (data) => {
    localStorage.setItem("authUser", JSON.stringify(data));
    setUser(data);
    router.push("/login");
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
