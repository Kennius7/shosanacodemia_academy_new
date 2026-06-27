/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import Header from "@/components/home/home-comps/Header";
import { useApiMutation } from "@/hooks/useApiMutation";
import { forgotPassword } from "@/services/api";
import { Mail } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ForgotPassword() {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const clearError = setTimeout(() => {
      setError("");
      console.log("Error message cleared");
    }, 5000);

    return () => clearTimeout(clearError);
  }, [setError]);

  const {
    mutate: forgotPasswordMutation,
    isPending: isPendingForgotPasswordMutation,
    isError: isErrorForgotPasswordMutation,
    error: errorForgotPasswordMutation,
  } = useApiMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPassword,
    successMessage: "Email sent successfully!",
    invalidateKeys: [],
  });

  console.log("isErrorForgotPasswordMutation", isErrorForgotPasswordMutation);
  console.log(
    "errorForgotPasswordMutation",
    (
      errorForgotPasswordMutation as {
        response?: { data?: { message?: string } };
      }
    )?.response?.data?.message || (errorForgotPasswordMutation as any)?.message,
  );

  const handleRequest = () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return setError("Please enter a valid email address.");
    }

    setError(null);
    forgotPasswordMutation(email);

    if (isErrorForgotPasswordMutation) {
      const message =
        errorForgotPasswordMutation instanceof Error
          ? (
              errorForgotPasswordMutation as {
                response?: { data?: { message?: string } };
              }
            ).response?.data?.message || errorForgotPasswordMutation.message
          : "Something went wrong. Please try again.";
      return setError(message);
    }
  };

  return (
    <section>
      <div className="min-h-screen bg-[#080F1E] flex items-center justify-center py-12 px-4">
        <div className="relative w-full max-w-md bg-[#0D1629] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">
                Forgot Password?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Enter your email address to reset your password.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid gap-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  placeholder="you@example.com"
                  onKeyDown={(e) => e.key === "Enter" && handleRequest()}
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Inline error */}
            {error && (
              <p className="mt-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* ── Actions ── */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleRequest}
                disabled={isPendingForgotPasswordMutation}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r 
                from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 
                disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all 
                duration-200 shadow-lg shadow-cyan-500/20 text-sm"
              >
                {isPendingForgotPasswordMutation ? (
                  "Sending…"
                ) : (
                  <>
                    <Mail className="w-4 h-4" /> Send Reset Code
                  </>
                )}
              </button>
            </div>

            {/* Login link */}
            <p className="mt-6 text-center text-xs text-slate-500">
              Remembered your password?{" "}
              <a
                href="/login"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
