"use client";

// import Header from "@/components/home/home-comps/Header";
import { useApiMutation } from "@/hooks/useApiMutation";
import { persistToken, persistUser } from "@/lib/utils";
import { loginUser } from "@/services/api";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

function Login() {
  const router = useRouter();
  const { setUser, setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate: loginMutation, isPending: isPendingLogin } = useApiMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    successMessage: "Logged in successfully!",
    invalidateKeys: [],
    onSuccessCallback: (userData: any) => {
      console.log(userData);
      persistUser(userData.user, setUser);
      persistToken(userData.token, setToken);
      router.push("/student");
    },
  });

  const handleSubmit = () => {
    console.log("Submitting...");
    const payload = { email, password };
    loginMutation(payload);
  };

  return (
    <section>
      {/* <Header /> */}
      <div className="min-h-screen bg-[#080F1E] flex items-center justify-center pt-4">
        <div className="relative w-full max-w-md bg-[#0D1629] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

          <div className="p-8">
            {/* Header */}
            <div className="flex flex-col gap-4 items-start justify-center mb-8">
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-300 
                  transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <p className="text-sm">Back to home</p>
                </Link>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Sign in to your account
                </p>
              </div>
            </div>

            {/* Error */}
            {/* {error && (
              <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )} */}

            {/* Fields */}
            <div className="space-y-4">
              <div className="grid gap-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
              </div>

              <div className="grid gap-1.5 relative">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-[54%] flex cursor-pointer items-center px-2"
                >
                  {!showPassword ? (
                    <EyeClosed className="h-5 w-5 text-slate-500 hover:text-slate-300 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-500 hover:text-slate-300 transition-colors" />
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isPendingLogin}
              className="mt-6 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed 
              text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              {isPendingLogin ? "Please wait…" : "Sign In"}
            </button>

            {/* Sign in link */}
            <p className="mt-6 text-center text-xs text-slate-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Sign up
              </a>
            </p>

            {/* Forget Password link */}
            <p className="mt-2 text-center text-xs text-slate-500">
              Forgot password?{" "}
              <a
                href="/forgot-password"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Forgot Password
              </a>
            </p>

            {/* Reset Password link */}
            <p className="mt-2 text-center text-xs text-slate-500">
              Reset password?{" "}
              <a
                href="/reset-password"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
