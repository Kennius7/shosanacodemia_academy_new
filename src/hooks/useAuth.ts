"use client";

import { useState, useCallback } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   User,
// } from "firebase/auth";
import { LoginUserProps, RegisterUserProps, User } from "@/types";
// import { auth } from '@/lib/firebase/client';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  register: (payload: RegisterUserProps) => Promise<void>;
  login: (payload: LoginUserProps) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   if (!auth) {
  //     setLoading(false);
  //     return;
  //   }
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     setUser(firebaseUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const signUp = useCallback(async (email: string, password: string) => {
  //   if (!auth) return;
  //   try {
  //     setError(null);
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err: unknown) {
  //     const message = err instanceof Error ? err.message : 'Sign up failed';
  //     setError(message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, '').trim());
  //     throw err;
  //   }
  // }, []);

  // const signIn = useCallback(async (email: string, password: string) => {
  //   if (!auth) return;
  //   try {
  //     setError(null);
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (err: unknown) {
  //     const message = err instanceof Error ? err.message : 'Sign in failed';
  //     setError(message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, '').trim());
  //     throw err;
  //   }
  // }, []);

  // const logout = useCallback(async () => {
  //   if (!auth) return;
  //   try {
  //     setError(null);
  //     await signOut(auth);
  //   } catch (err: unknown) {
  //     const message = err instanceof Error ? err.message : 'Logout failed';
  //     setError(message);
  //   }
  // }, []);

  const register = async (payload: RegisterUserProps) => {
    // const res = await registerUser(payload);
    // console.log("User registered successfully:>>>>>>>>>>>>", res);
  };

  const login = async (payload: LoginUserProps) => {
    // const res = await loginUser(payload);
    // console.log("User logged in successfully:>>>>>>>>>>>>", res);
    // // localStorage.setItem(SESSION_KEY, res.user.id);
    // const loggedInUser = JSON.stringify(res.user);
    // localStorage.setItem("userAccessToken", res.token.accessToken);
    // localStorage.setItem("userRefreshToken", res.token.refreshToken);
    // localStorage.setItem("currentUser", loggedInUser);
    // setUser(res.user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const clearError = useCallback(() => setError(null), []);

  return { user, loading, error, register, login, logout, clearError };
}
