// import { createFileRoute, Link } from "@tanstack/react-router";
// import { SiteNav } from "@/components/site/SiteNav";
// import { SiteFooter } from "@/components/site/SiteFooter";

import Link from "next/link";

// export const Route = createFileRoute("/pricing")({
//   head: () => ({
//     meta: [
//       { title: "Pricing — Shosanacodemia" },
//       { name: "description", content: "Pay per course or subscribe to the full library." },
//       { property: "og:title", content: "Pricing — Shosanacodemia" },
//       { property: "og:description", content: "Two simple ways to access the catalog." },
//     ],
//   }),
//   component: PricingPage,
// });

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#080F1E]">
      {/* <SiteNav /> */}
      <header className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
            Pricing
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Two ways in.
          </h1>
          <p className="text-muted-foreground">
            Buy what you need, or subscribe to everything.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Per course
            </div>
            <div className="mb-1 text-4xl font-extrabold">$129–199</div>
            <p className="mb-8 text-sm text-muted-foreground">
              One-time. Lifetime access to that course.
            </p>
            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-primary">✓</span> Lifetime access
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> Source code and
                exercises
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> Certificate of
                completion
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> 14-day refund
              </li>
            </ul>
            <Link
              href="/courses"
              className="block w-full rounded-lg border border-border py-3 
                text-center font-medium transition-colors hover:bg-white/5"
            >
              Browse courses
            </Link>
          </div>
          <div className="rounded-xl border border-primary/40 bg-primary/[0.04] p-8 ring-1 ring-primary/20">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              Full library
            </div>
            <div className="mb-1 text-4xl font-extrabold">
              $29
              <span className="text-base font-medium text-muted-foreground">
                /mo
              </span>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Every current and future course.
            </p>
            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-primary">✓</span> All courses, all tracks
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> New courses included
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> Certificates on
                completion
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span> Cancel anytime
              </li>
            </ul>
            <button className="block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110">
              Start subscription
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
