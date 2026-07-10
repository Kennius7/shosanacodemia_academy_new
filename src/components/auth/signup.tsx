"use client";

import { useAuth } from "@/context/AuthContext";
import { Courses } from "@/data";
// import Header from "@/components/home/home-comps/Header";
import { useApiMutation } from "@/hooks/useApiMutation";
import { registerUser } from "@/services/api";
import { RegisterUserProps } from "@/types";
import { Eye, EyeClosed, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const LEARNING_GOALS = [
  "Get a new job",
  "Advance my career",
  "Build a project",
  "Learn for fun",
  "Earn a certificate",
  "Improve my skills",
];

const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Beginner", desc: "Just starting out" },
  { value: "intermediate", label: "Intermediate", desc: "Some experience" },
  { value: "advanced", label: "Advanced", desc: "Confident practitioner" },
];

const STEPS = ["Account", "Goals", "Course"];

// ─── Step indicators ──────────────────────────────────────────────────────────

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                  transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-cyan-500 text-white"
                      : isActive
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-slate-800 border border-slate-700 text-slate-500"
                  }
                `}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
              </div>
              <span
                className={`text-[10px] font-medium uppercase tracking-wider transition-colors ${
                  isActive ? "text-cyan-400" : "text-slate-600"
                }`}
              >
                {label}
              </span>
            </div>

            {i < totalSteps - 1 && (
              <div
                className={`w-10 h-px mb-4 transition-all duration-500 ${
                  stepNum < currentStep ? "bg-cyan-500" : "bg-slate-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Account Info ─────────────────────────────────────────────────────

function StepAccount({
  data,
  onChange,
}: {
  data: RegisterUserProps;
  onChange: (fields: Partial<RegisterUserProps>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid gap-1.5">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ fullName: e.target.value })}
          placeholder="John Doe"
          className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
        />
      </div>

      <div className="grid gap-1.5">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors"
        />
      </div>

      <div className="grid gap-1.5 relative">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={data.password}
          onChange={(e) => onChange({ password: e.target.value })}
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-3 top-[54%] flex cursor-pointer items-center p-1"
        >
          {showPassword ? (
            <Eye className="h-5 w-5 text-slate-500 hover:text-slate-300 transition-colors" />
          ) : (
            <EyeClosed className="h-5 w-5 text-slate-500 hover:text-slate-300 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Step 2: Learning Goals + Experience ─────────────────────────────────────

function StepGoals({
  data,
  onChange,
}: {
  data: RegisterUserProps;
  onChange: (fields: Partial<RegisterUserProps>) => void;
}) {
  const toggleGoal = (goal: string) => {
    const current = data.learningGoals;
    onChange({
      learningGoals: current.includes(goal)
        ? current.filter((g) => g !== goal)
        : [...current, goal],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Learning Goals{" "}
          <span className="normal-case text-slate-600">
            (pick all that apply)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {LEARNING_GOALS.map((goal) => {
            const active = data.learningGoals.includes(goal);
            return (
              <button
                key={goal}
                type="button"
                onClick={() => toggleGoal(goal)}
                className={`
                  px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200
                  ${
                    active
                      ? "bg-cyan-500/20 border border-cyan-500/60 text-cyan-300"
                      : "bg-[#0A0F1E] border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                  }
                `}
              >
                {active && <span className="mr-1.5 text-cyan-400">✓</span>}
                {goal}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Experience Level
        </label>
        <div className="space-y-2">
          {EXPERIENCE_LEVELS.map(({ value, label, desc }) => {
            const active = data.experienceLevel === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange({ experienceLevel: value })}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                  ${
                    active
                      ? "bg-cyan-500/20 border border-cyan-500/60"
                      : "bg-[#0A0F1E] border border-slate-700 hover:border-slate-500"
                  }
                `}
              >
                <div className="text-left">
                  <p
                    className={`text-sm font-semibold ${active ? "text-cyan-300" : "text-slate-300"}`}
                  >
                    {label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    active ? "border-cyan-500 bg-cyan-500" : "border-slate-600"
                  }`}
                >
                  {active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Delivery Mode + Course + Discount ────────────────────────────────

function StepCourse({
  data,
  onChange,
}: {
  data: RegisterUserProps;
  onChange: (fields: Partial<RegisterUserProps>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          How do you want to learn?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(["online", "offline"] as const).map((mode) => {
            const active = data.deliveryMode === mode;
            const icon = mode === "online" ? "🌐" : "🏫";
            const desc =
              mode === "online" ? "Learn from anywhere" : "In-person classes";
            return (
              <button
                key={mode}
                type="button"
                onClick={() => onChange({ deliveryMode: mode })}
                className={`
                  flex flex-col items-center gap-2 px-4 py-5 rounded-xl transition-all duration-200
                  ${
                    active
                      ? "bg-cyan-500/20 border border-cyan-500/60"
                      : "bg-[#0A0F1E] border border-slate-700 hover:border-slate-500"
                  }
                `}
              >
                <span className="text-2xl">{icon}</span>
                <span
                  className={`text-sm font-semibold capitalize ${
                    active ? "text-cyan-300" : "text-slate-300"
                  }`}
                >
                  {mode}
                </span>
                <span className="text-xs text-slate-500">{desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Select a Course
        </label>
        <div className="space-y-2">
          {Courses.map((course) => {
            const active = data.selectedCourse === course.name;
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => onChange({ selectedCourse: course.name })}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200
                  ${
                    active
                      ? "bg-cyan-500/20 border border-cyan-500/60 text-cyan-300"
                      : "bg-[#0A0F1E] border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                  }
                `}
              >
                {course.name}
                {active && (
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Discount Code{" "}
          <span className="normal-case text-slate-600">(optional)</span>
        </label>
        <input
          type="text"
          value={data.discountCode}
          onChange={(e) => onChange({ discountCode: e.target.value })}
          placeholder="e.g. LEARN20"
          className="w-full px-4 py-3 bg-[#0A0F1E] border border-slate-700 focus:border-cyan-500 rounded-xl text-white placeholder-slate-600 text-sm outline-none transition-colors tracking-widest uppercase"
        />
      </div>
    </div>
  );
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validateStep(step: number, data: RegisterUserProps): string | null {
  if (step === 1) {
    if (!data.fullName.trim()) return "Please enter your name.";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
      return "Please enter a valid email address.";
    if (data.password.length < 8)
      return "Password must be at least 8 characters.";
  }
  if (step === 2) {
    if (data.learningGoals.length === 0)
      return "Please select at least one learning goal.";
    if (!data.experienceLevel) return "Please select your experience level.";
  }
  if (step === 3) {
    if (!data.deliveryMode) return "Please choose online or offline.";
    if (!data.selectedCourse) return "Please select a course.";
  }
  return null;
}

// ─── Main Component ───────────────────────────────────────────────────────────

function Register() {
  const router = useRouter();
  const { formData, setFormData } = useAuth();
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const update = (fields: Partial<RegisterUserProps>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    setError(null);
  };

  const { mutate: registerMutation, isPending } = useApiMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
    successMessage: "Account created successfully!",
    invalidateKeys: [],
    onSuccessCallback: () => router.push("/student"),
  });

  const handleNext = () => {
    const err = validateStep(step, formData);
    if (err) return setError(err);
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError(null);
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    const err = validateStep(step, formData);
    if (err) return setError(err);
    registerMutation(formData);
  };

  const STEP_TITLES = [
    { heading: "Create Account", sub: "Start your learning journey today" },
    { heading: "Your Goals", sub: "Help us personalise your experience" },
    { heading: "Pick a Course", sub: "Choose how and what you want to learn" },
  ];

  const { heading, sub } = STEP_TITLES[step - 1];

  return (
    <section>
      {/* <Header /> */}
      <div className="min-h-screen bg-[#080F1E] flex items-center justify-center py-10 px-4">
        <div className="relative w-full max-w-md bg-[#0D1629] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

          <div className="flex items-center gap-2 mt-5 pl-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 
                transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
              <p className="text-sm">Go Back</p>
            </button>
          </div>

          <div className="p-8">
            {/* Step indicator */}
            <StepIndicator currentStep={step} totalSteps={STEPS.length} />

            {/* Heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">{heading}</h2>
              <p className="text-sm text-slate-400 mt-1">{sub}</p>
            </div>

            {/* Step content */}
            <div className="min-h-[280px]">
              {step === 1 && <StepAccount data={formData} onChange={update} />}
              {step === 2 && <StepGoals data={formData} onChange={update} />}
              {step === 3 && <StepCourse data={formData} onChange={update} />}
            </div>

            {/* Inline error */}
            {error && (
              <p className="mt-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Navigation */}
            <div
              className={`mt-6 flex gap-3 ${step > 1 ? "justify-between" : "justify-end"}`}
            >
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isPending}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 text-sm font-semibold transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}

              {step < STEPS.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-sm ml-auto"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isPending}
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-sm ml-auto"
                >
                  {isPending ? "Creating account…" : "Create Account"}
                  {!isPending && <Check className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Sign in link */}
            <p className="mt-6 text-center text-xs text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
