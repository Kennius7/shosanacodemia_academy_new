"use client";

import { useState } from "react";
import { courses } from "@/data";
import { RegistrationFormData } from "@/types";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Registration() {
  const [form, setForm] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): boolean {
    const newErrors: Partial<RegistrationFormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.course) newErrors.course = "Please select a course.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Registration failed. Please try again.");
      }

      setStatus("success");
      setForm({ fullName: "", email: "", phone: "", course: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  function handleChange(field: keyof RegistrationFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <section id="register" className="py-24 bg-[#050A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Enroll Now
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Register for the Next Cohort
            </h2>
            <p className="text-slate-400 text-lg">
              Seats are limited. Secure your spot before the cohort fills up.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

            <div className="p-8">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    You&apos;re Registered!
                  </h3>
                  <p className="text-slate-400 mb-2">
                    Welcome to Shosanacodemia. Check your inbox for next steps.
                  </p>
                  <p className="text-sm text-slate-500 mb-8">
                    Our team will contact you within 48 hours with orientation
                    details.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-sm font-medium border border-slate-700 text-slate-300 rounded-xl hover:border-cyan-500/50 hover:text-white transition-all"
                  >
                    Register Again
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {status === "error" && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Amara Okonkwo"
                      className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.fullName ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="amara@example.com"
                      className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.email ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Phone Number{" "}
                      <span className="text-slate-600 normal-case font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                      className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.course ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-sm outline-none transition-colors ${form.course ? "text-white" : "text-slate-600"}`}
                    >
                      <option value="" disabled>
                        Select a course…
                      </option>
                      {courses.map((course) => (
                        <option
                          key={course.id}
                          value={course.name}
                          className="bg-[#0D1629] text-white"
                        >
                          {course.icon} {course.name} — {course.duration}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.course}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/20 text-base"
                  >
                    {status === "loading" ? "Submitting…" : "Secure My Spot →"}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    By registering you agree to our terms. No payment required
                    to apply.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
