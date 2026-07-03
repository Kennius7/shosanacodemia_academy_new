"use client";

import { useState } from "react";
import StudentHeader from "@/components/StudentHeader";
import SectionHeader from "@/components/SectionHeader";
import { EnrolStatus, Plan, PlanTier } from "@/types";
import {
  CheckCircle2,
  Shield,
  Zap,
  ChevronRight,
  BadgeCheck,
  Dot,
} from "lucide-react";
import { PLANS } from "@/data";
import { formatter } from "@/lib/utils";
import { useMain } from "@/context/MainContext";
import { useAuth } from "@/context/AuthContext";

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Current plan summary banner */
function CurrentPlanBanner() {
  const { selected } = useMain();
  const { activeTrack } = useAuth();
  const plan = PLANS.find((p) => p.id === selected)!;

  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden mb-8">
      <div className={`h-[2px] w-full bg-gradient-to-r ${plan.gradColor}`} />
      <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradColor} flex items-center justify-center flex-shrink-0`}
          >
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">
              Current Plan
            </p>
            <p className="text-lg font-bold text-white">{plan.label} Plan</p>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center">
              {formatter.format(plan.price)}/cohort{" "}
              <Dot className="w-4 h-4 text-cyan-300 mx-[1px]" /> Track:&nbsp;
              <span className="text-slate-300">{activeTrack.name}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Active</span>
          </div>
          {/* <button className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-xl transition-colors duration-150">
            <RefreshCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400">Cancel plan</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

/** Plan selection cards */
function PlanCards() {
  const { selected, setSelected } = useMain();
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>("Free");
  const [coursePlans] = useState<Plan[]>(PLANS);

  const handleSelectPlan = (selectedPlan: PlanTier) => {
    setSelected(selectedPlan);
    // setCoursePlans((prev) => {
    //   const transformdeData = PLANS.map((p) => {
    //     if (p.id === selectedPlan) {
    //     }
    //   });
    // });

    // setAllMerchants((prev) => {
    //   const existingIds = new Set(prev.map((i) => i._id));
    //   const uniqueNew = rawMerchants.filter(
    //     (i: any) => !existingIds.has(i._id),
    //   );
    //   return page === 1 ? rawMerchants : [...prev, ...uniqueNew];
    // });
  };

  return (
    <div className="mb-10">
      <SectionHeader title="Change Plan" actionLabel="" action={() => {}} />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {coursePlans.map((plan) => {
          const isActive = plan.id === selected;
          const isSelected = selectedPlan === plan.id;

          return (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative text-left bg-[#0D1629] rounded-2xl overflow-hidden border 
                transition-all duration-200 cursor-pointer flex flex-col justify-start
                ${
                  isSelected
                    ? "border-cyan-500/50 shadow-[0_0_24px_-4px_rgba(6,182,212,0.2)]"
                    : "border-slate-800 hover:border-slate-700"
                }
              `}
            >
              {/* Accent bar */}
              <div
                className={`h-[2px] w-full bg-gradient-to-r ${plan.gradColor}`}
              />

              <div className="p-5">
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-lg mb-3
                    bg-gradient-to-r ${plan.gradColor} text-white`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-bold text-white">{plan.label}</p>
                  {isActive && (
                    <span className="text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <p className="mb-4">
                  <span className="text-2xl font-extrabold text-white">
                    {formatter.format(plan.price)}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-xs text-slate-500 ml-1">
                      /{plan.period}
                    </span>
                  )}
                  {plan.price === 0 && (
                    <span className="text-xs text-slate-500 ml-1">
                      free forever
                    </span>
                  )}
                </p>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.accentColor}`}
                      />
                      <span className="text-xs text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <div
                  className={`mx-5 mb-4 flex items-center justify-center gap-2 py-2 
                    rounded-xl bg-gradient-to-r ${plan.gradColor}`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">
                    {isActive
                      ? "Selected (current)"
                      : selectedPlan === "Free"
                        ? "Not selectable"
                        : "Select plan"}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selected !== selectedPlan && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handleSelectPlan(selectedPlan)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r 
            from-cyan-500 to-blue-600 text-white text-sm font-semibold 
            hover:opacity-90 transition-opacity"
          >
            Upgrade to {selectedPlan} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function SecurityNote() {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl mb-6">
      <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
      <p className="text-xs text-slate-500 leading-relaxed">
        Payments are processed securely via{" "}
        <span className="text-slate-300 font-medium">Paystack</span>. Your card
        details are encrypted and never stored on our servers. Cancel or change
        your plan anytime.
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StudentPayment() {
  const [enrolStatus] = useState<EnrolStatus>("Enrolled");

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <StudentHeader
            title="Billing & Payments"
            subtitle="Manage your subscription, payment methods, and download invoices"
            enrolStatus={enrolStatus}
          />

          <CurrentPlanBanner />
          <PlanCards />
          {/* <PaymentMethods />
          <BillingHistory /> */}
          <SecurityNote />
        </main>
      </div>
    </div>
  );
}
