/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
// import AuthModal from "../../../modals/AuthModal";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
// import { capitalize } from "@/lib/utils";

export default function Header() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null);

  const navLinks = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Benefits", href: "#benefits" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050A14]/90 backdrop-blur-md border-b border-cyan-500/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-0 group">
              <span
                className="text-2xl font-light text-slate-300 
                group-hover:text-white transition-colors"
              >
                Shosan
              </span>
              <span
                className="text-2xl font-black bg-gradient-to-r from-cyan-400 
                to-blue-500 bg-clip-text text-transparent pb-[2px]"
              >
                acodemia
              </span>
            </a>

            {/* Desktop Nav */}
            {!user && (
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide uppercase"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {loading ? (
                <div className="w-20 h-9 bg-slate-800 animate-pulse rounded-lg" />
              ) : user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400 max-w-[140px] truncate">
                    Hi,{" "}
                    {
                      ((user && user?.fullName) || "Shosan Boggs")?.split(
                        " ",
                      )[0]
                    }
                  </span>
                  {/* <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-200"
                  >
                    Logout
                  </button> */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Bell className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      <span
                        className="absolute -top-[6px] -right-[6px] w-4 h-4 rounded-full text-xs 
                        text-white flex items-center justify-center bg-gradient-to-r from-cyan-500 
                        via-blue-500 to-purple-600"
                      >
                        {/* {notificationCount} */}2
                      </span>
                    </div>

                    <div
                      // onClick={handleUserProfileDetails}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Avatar className="h-10 w-10 bg-[#050A14] border border-gray-600">
                        <AvatarImage
                          src={user?.avatar || "/placeholder.svg"}
                          alt={(user && user?.fullName) || "Shosan Boggs"}
                        />
                        <AvatarFallback>
                          {((user && user?.fullName) || "Shosan Boggs")
                            ?.split(" ")
                            ?.map((n: any) => n[0])
                            ?.join("")
                            ?.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    // onClick={() => setAuthModal("signin")}
                    onClick={() => router.push("/login")}
                    className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    // onClick={() => setAuthModal("signup")}
                    onClick={() => router.push("/signup")}
                    className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-slate-800/50 overflow-hidden 
            transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-4 space-y-3 bg-[#050A14]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-slate-400 hover:text-cyan-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              {user ? (
                <>
                  <span className="text-sm text-slate-400 truncate">
                    {user.email}
                  </span>
                  <button
                    onClick={logout}
                    className="w-full py-2.5 text-sm font-medium text-red-400 border border-red-900 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      // setAuthModal("signin");
                      router.push("/login");
                      setMenuOpen(false);
                    }}
                    className="w-full py-2.5 text-sm font-medium text-slate-300 border border-slate-700 rounded-lg"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      // setAuthModal("signup");
                      router.push("/signup");
                      setMenuOpen(false);
                    }}
                    className="w-full py-2.5 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onSwitchMode={(mode) => setAuthModal(mode)}
        />
      )} */}
    </>
  );
}
