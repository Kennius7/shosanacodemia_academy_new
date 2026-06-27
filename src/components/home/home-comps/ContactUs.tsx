"use client";

import { useState } from "react";
import { ContactFormData } from "@/types";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactUs() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): boolean {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <section id="contact" className="py-24 bg-[#080F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Have questions about the curriculum, cohort dates, or financing
              options? Drop us a message and we&apos;ll get back to you within
              24 hours.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "hello@shosanacodemia.com",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Lagos, Nigeria (Remote-first)",
                },
                { icon: "📞", label: "Phone", value: "+234 800 000 0000" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-sm text-slate-300 font-medium">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0D1629] border border-slate-800 rounded-2xl p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 text-sm font-medium border border-slate-700 text-slate-300 rounded-xl hover:border-cyan-500/50 hover:text-white transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Chidi Eze"
                    className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.name ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="chidi@example.com"
                    className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.email ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about yourself and your goals…"
                    className={`w-full px-4 py-3 bg-[#0A0F1E] border ${errors.message ? "border-red-500" : "border-slate-700 focus:border-cyan-500"} rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  {status === "loading" ? "Sending…" : "Send Message →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
