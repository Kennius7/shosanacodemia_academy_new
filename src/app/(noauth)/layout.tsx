"use client";

import NavHeader from "@/components/home/home-comps/NavHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#0D1629]">
        <NavHeader />
        {children}
      </div>
    </>
  );
}
