"use client";

import SectionHeader from "@/components/SectionHeader";
import {
  CheckCircle2,
  Users,
  PercentCircle,
  LucideDollarSign,
  CircleDollarSign,
} from "lucide-react";
import AdminHeader from "@/components/AdminHeader";
import { INVOICES, PLANS } from "@/data";
import { formatter } from "@/lib/utils";
import PaymentsTable from "@/components/PaymentsTable";
import { useRouter } from "next/navigation";

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatsRow() {
  const totalPayments = 40000000;
  const pendingPayments = 1500000;
  const stats = [
    {
      label: "Total Revenue",
      value: formatter.format(totalPayments),
      icon: CircleDollarSign,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500",
    },
    {
      label: "Pending Payments",
      value: formatter.format(pendingPayments),
      icon: LucideDollarSign,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20 hover:border-violet-500",
    },
    {
      label: "Enrol success rate",
      value: `${((totalPayments - pendingPayments) / totalPayments) * 100}%`,
      icon: PercentCircle,
      bg: "bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-500",
      color: "text-yellow-400",
    },
    {
      label: "Total No. Of Students",
      value: "50",
      icon: Users,
      color: "text-violet-400",
      bg: "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
      {stats.map(({ label, value, icon: Icon, color, bg }) => (
        <div
          key={label}
          className={`flex items-center gap-3 px-4 h-28 rounded-xl 
            border ${bg} bg-[#0D1629] cursor-pointer transition-all duration-500`}
        >
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center ${bg} border`}
          >
            <Icon className={`w-4.5 h-4.5 ${color}`} />
          </div>
          <div>
            <p className="text-xl font-bold text-white leading-none">{value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlanCards() {
  return (
    <div className="mb-10">
      <SectionHeader
        title="Plan Listing"
        actionLabel="Edit plans"
        action={() => {}}
      />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLANS.map((plan) => {
          //   const isActive = plan.id === CURRENT_PLAN;
          //   const isSelected = selected === plan.id;

          return (
            <button
              key={plan.id}
              //   onClick={() => setSelected(plan.id)}
              className={`relative text-left bg-[#0D1629] rounded-2xl overflow-hidden border 
                transition-all duration-1000 cursor-pointer flex flex-col justify-start 
                border-cyan-500/50 shadow-[0_0_24px_-4px_rgba(6,182,212,0.2)]`}
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
                  {/* {isActive && (
                    <span className="text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )} */}
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
              {/* {isSelected && (
                <div
                  className={`mx-5 mb-4 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r ${plan.gradColor}`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">
                    {isActive ? "Selected (current)" : "Select plan"}
                  </span>
                </div>
              )} */}
            </button>
          );
        })}
      </div>

      {/* {selected !== CURRENT_PLAN && (
        <div className="mt-4 flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Upgrade to {selected} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default function AdminPaymentPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AdminHeader
            title="Payments Admin"
            subtitle="View and manage payments, and invoices"
          />
          <StatsRow />
          <PlanCards />

          <div>
            <SectionHeader
              title={"Payment history" + ` (${INVOICES.length})`}
              action={() => router.push("/admin/payments/history")}
              actionLabel="View payment history"
            />

            <PaymentsTable isDashboardView={true} />
          </div>
        </main>
      </div>
    </div>
  );
}
