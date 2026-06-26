
"use client";

import { useState } from "react";
import StudentHeader from "@/components/StudentHeader";
import SectionHeader from "@/components/SectionHeader";
import { EnrolStatus } from "@/types";
import {
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Shield,
  Zap,
  ChevronRight,
  Lock,
  BadgeCheck,
  Plus,
  Trash2,
  RefreshCcw,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanTier = "Free" | "Pro" | "Elite";
type InvoiceStatus = "Paid" | "Pending" | "Failed";
type CardBrand = "Visa" | "Mastercard" | "Verve";

interface Plan {
  id: PlanTier;
  label: string;
  price: number;
  period: string;
  features: string[];
  gradColor: string;
  accentColor: string;
  badge?: string;
}

interface SavedCard {
  id: string;
  brand: CardBrand;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface Invoice {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
  {
    id: "Free",
    label: "Free",
    price: 0,
    period: "forever",
    features: [
      "Access to 3 beginner courses",
      "Community forum access",
      "Weekly coding challenges",
    ],
    gradColor: "from-slate-500 to-slate-600",
    accentColor: "text-slate-400",
  },
  {
    id: "Pro",
    label: "Pro",
    price: 12,
    period: "month",
    badge: "Most Popular",
    features: [
      "Unlimited course access",
      "Live mentor sessions (4/mo)",
      "Project reviews & feedback",
      "Completion certificates",
      "Priority support",
    ],
    gradColor: "from-cyan-500 to-blue-600",
    accentColor: "text-cyan-400",
  },
  {
    id: "Elite",
    label: "Elite",
    price: 29,
    period: "month",
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions (2/mo)",
      "Career placement support",
      "Portfolio reviews",
      "Access to private cohorts",
      "Lifetime certificate archive",
    ],
    gradColor: "from-violet-500 to-purple-700",
    accentColor: "text-violet-400",
  },
];

const SAVED_CARDS: SavedCard[] = [
  { id: "c1", brand: "Visa", last4: "4242", expiry: "08/27", isDefault: true },
  { id: "c2", brand: "Mastercard", last4: "9013", expiry: "02/26", isDefault: false },
];

const INVOICES: Invoice[] = [
  { id: "INV-2024-06", description: "Pro Plan — June 2025", amount: 12, date: "Jun 1, 2025", status: "Paid" },
  { id: "INV-2024-05", description: "Pro Plan — May 2025", amount: 12, date: "May 1, 2025", status: "Paid" },
  { id: "INV-2024-04", description: "Pro Plan — Apr 2025", amount: 12, date: "Apr 1, 2025", status: "Paid" },
  { id: "INV-2024-03", description: "Pro Plan — Mar 2025", amount: 12, date: "Mar 1, 2025", status: "Failed" },
  { id: "INV-2024-02", description: "Pro Plan — Feb 2025", amount: 12, date: "Feb 1, 2025", status: "Paid" },
];

const CURRENT_PLAN: PlanTier = "Pro";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const brandColor: Record<CardBrand, string> = {
  Visa: "text-blue-400",
  Mastercard: "text-orange-400",
  Verve: "text-green-400",
};

const statusConfig: Record<InvoiceStatus, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  Paid:    { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", label: "Paid" },
  Pending: { icon: Clock,        color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20",    label: "Pending" },
  Failed:  { icon: AlertCircle,  color: "text-red-400",     bg: "bg-red-500/10 border-red-500/20",        label: "Failed" },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Current plan summary banner */
function CurrentPlanBanner() {
  const plan = PLANS.find((p) => p.id === CURRENT_PLAN)!;
  const nextBillDate = "Jul 1, 2025";

  return (
    <div className="bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden mb-8">
      <div className={`h-[2px] w-full bg-gradient-to-r ${plan.gradColor}`} />
      <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradColor} flex items-center justify-center flex-shrink-0`}>
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Current Plan</p>
            <p className="text-lg font-bold text-white">{plan.label} Plan</p>
            <p className="text-xs text-slate-400 mt-0.5">
              ${plan.price}/mo · Renews <span className="text-slate-300">{nextBillDate}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Active</span>
          </div>
          <button className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-xl transition-colors duration-150">
            <RefreshCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400">Cancel plan</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/** Plan selection cards */
function PlanCards() {
  const [selected, setSelected] = useState<PlanTier>(CURRENT_PLAN);

  return (
    <div className="mb-10">
      <SectionHeader title="Change Plan" actionLabel="" action={() => {}} />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLANS.map((plan) => {
          const isActive = plan.id === CURRENT_PLAN;
          const isSelected = selected === plan.id;

          return (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`relative text-left bg-[#0D1629] rounded-2xl overflow-hidden border transition-all duration-200 cursor-pointer
                ${isSelected ? "border-cyan-500/50 shadow-[0_0_24px_-4px_rgba(6,182,212,0.2)]" : "border-slate-800 hover:border-slate-700"}`}
            >
              {/* Accent bar */}
              <div className={`h-[2px] w-full bg-gradient-to-r ${plan.gradColor}`} />

              <div className="p-5">
                {/* Badge */}
                {plan.badge && (
                  <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-lg mb-3
                    bg-gradient-to-r ${plan.gradColor} text-white`}>
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
                  <span className="text-2xl font-extrabold text-white">${plan.price}</span>
                  {plan.price > 0 && <span className="text-xs text-slate-500 ml-1">/{plan.period}</span>}
                  {plan.price === 0 && <span className="text-xs text-slate-500 ml-1">free forever</span>}
                </p>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.accentColor}`} />
                      <span className="text-xs text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <div className={`mx-5 mb-4 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r ${plan.gradColor}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">
                    {isActive ? "Selected (current)" : "Select plan"}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selected !== CURRENT_PLAN && (
        <div className="mt-4 flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Upgrade to {selected} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

/** Saved payment methods */
function PaymentMethods() {
  const [cards, setCards] = useState<SavedCard[]>(SAVED_CARDS);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state
  const [newCard, setNewCard] = useState({ number: "", name: "", expiry: "", cvv: "" });

  function setDefault(id: string) {
    setCards((prev) => prev.map((c) => ({ ...c, isDefault: c.id === id })));
  }

  function removeCard(id: string) {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }

  function formatCardNumber(value: string) {
    return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  }

  return (
    <div className="mb-10">
      <SectionHeader title="Payment Methods" actionLabel="" action={() => {}} />

      <div className="mt-5 space-y-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#0D1629] border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-200"
          >
            {/* Card icon */}
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
              <CreditCard className={`w-5 h-5 ${brandColor[card.brand]}`} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm font-semibold text-white">
                  {card.brand} •••• {card.last4}
                </p>
                {card.isDefault && (
                  <span className="text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                    Default
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">Expires {card.expiry}</p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {!card.isDefault && (
                <button
                  onClick={() => setDefault(card.id)}
                  className="text-xs text-slate-400 hover:text-cyan-400 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors duration-150"
                >
                  Set default
                </button>
              )}
              <button
                onClick={() => removeCard(card.id)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-colors duration-150"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add card CTA */}
      {!showAddForm ? (
        <button
          onClick={() => setShowAddForm(true)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-dashed border-slate-700 hover:border-cyan-500/40 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          <Plus className="w-4 h-4" /> Add payment method
        </button>
      ) : (
        <div className="mt-4 bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Lock className="w-4 h-4 text-cyan-400" />
              <p className="text-sm font-semibold text-white">Add new card</p>
              <span className="ml-auto text-xs text-slate-500 flex items-center gap-1">
                <Shield className="w-3 h-3" /> SSL encrypted
              </span>
            </div>

            <div className="space-y-4">
              {/* Card number */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Card number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={newCard.number}
                    onChange={(e) => setNewCard({ ...newCard, number: formatCardNumber(e.target.value) })}
                    className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150 pr-10"
                  />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Name on card</label>
                <input
                  type="text"
                  placeholder="Shosan Adeola"
                  value={newCard.name}
                  onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                  className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
                />
              </div>

              {/* Expiry + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Expiry date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={newCard.expiry}
                    onChange={(e) => setNewCard({ ...newCard, expiry: formatExpiry(e.target.value) })}
                    className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">CVV</label>
                  <input
                    type="password"
                    placeholder="•••"
                    maxLength={3}
                    value={newCard.cvv}
                    onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) })}
                    className="w-full bg-[#080F1E] border border-slate-700 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-150"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    if (newCard.number.length > 0) {
                      const last4 = newCard.number.replace(/\s/g, "").slice(-4);
                      setCards((prev) => [
                        ...prev,
                        { id: `c${Date.now()}`, brand: "Visa", last4, expiry: newCard.expiry || "12/29", isDefault: false },
                      ]);
                      setNewCard({ number: "", name: "", expiry: "", cvv: "" });
                      setShowAddForm(false);
                    }
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Save card
                </button>
                <button
                  onClick={() => { setShowAddForm(false); setNewCard({ number: "", name: "", expiry: "", cvv: "" }); }}
                  className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-400 text-sm hover:text-white hover:bg-slate-800 transition-colors duration-150"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Billing history / invoices */
function BillingHistory() {
  return (
    <div className="mb-10">
      <SectionHeader title="Billing History" actionLabel="" action={() => {}} />

      <div className="mt-5 bg-[#0D1629] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-blue-600" />

        {/* Table header */}
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-3 border-b border-slate-800">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Description</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Date</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Amount</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Status</span>
        </div>

        {INVOICES.map((inv, i) => {
          const cfg = statusConfig[inv.status];
          const Icon = cfg.icon;

          return (
            <div
              key={inv.id}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-4 items-center transition-colors duration-150 hover:bg-slate-800/40
                ${i < INVOICES.length - 1 ? "border-b border-slate-800/60" : ""}`}
            >
              <div>
                <p className="text-sm text-white font-medium">{inv.description}</p>
                <p className="text-xs text-slate-600 mt-0.5">{inv.id}</p>
              </div>
              <p className="text-sm text-slate-400 whitespace-nowrap">{inv.date}</p>
              <p className="text-sm text-white font-semibold">${inv.amount}.00</p>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${cfg.bg}`}>
                  <Icon className={`w-3 h-3 ${cfg.color}`} />
                  <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
                </div>
                <button className="p-1.5 rounded-lg text-slate-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-150">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Trust / security footer note */
function SecurityNote() {
  return (
    <div className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl mb-6">
      <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
      <p className="text-xs text-slate-500 leading-relaxed">
        Payments are processed securely via{" "}
        <span className="text-slate-300 font-medium">Paystack</span>. Your card details are encrypted and never stored on our servers.
        Cancel or change your plan anytime.
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
          <PaymentMethods />
          <BillingHistory />
          <SecurityNote />
        </main>
      </div>
    </div>
  );
}
