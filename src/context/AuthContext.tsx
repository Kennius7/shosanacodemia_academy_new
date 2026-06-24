"use client";

import { Courses } from "@/data";
import { persistToken, persistUser } from "@/lib/utils";
import { Course, User } from "@/types";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  logout: () => Promise<void>;
  activeTrack: Course;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const activeTrack = Courses[1];

  // On mount, try to restore a previous session from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(storedUser));
    }
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // ------------------------------------------------------------------
  // Authentication methods (replace with real API calls)
  // ------------------------------------------------------------------

  const logout = async () => {
    setLoading(true);
    try {
      // Optional: call logout endpoint on your backend
      await new Promise((resolve) => setTimeout(resolve, 300));
      persistUser(null, setUser);
      persistToken(null, setToken);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    setUser,
    token,
    setToken,
    loading,
    logout,
    activeTrack,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
