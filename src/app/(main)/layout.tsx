"use client";

import Header from "@/components/home/home-comps/Header";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full m-auto h-[800px] bg-[#0D1629]">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen w-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
