"use client";
import { useAuth } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && !["/login", "/register", "/"].includes(pathname)) {
      router.push("/");
    }
  }, [user, pathname]);

  return children;
}
