"use client";

import AdminHeader from "@/components/AdminHeader";
import CourseTable from "@/components/CourseTable";
import SectionHeader from "@/components/SectionHeader";
import StudentsTable from "@/components/StudentsTable";
import { useMain } from "@/context/MainContext";
import { STUDENTS_DATA } from "@/data";
import { BookA, BookCheck, Calendar, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const USER = {
  name: "Shosan Boggs",
  avatar: "SB",
  streak: 12,
  xp: 3240,
  level: 8,
  nextLevelXp: 4000,
};

function StatsRow() {
  const stats = [
    {
      label: "Current Cohort",
      value: "June 2026",
      icon: Calendar,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      label: "No. Of Student Enrolled",
      value: "18",
      icon: Users,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
    {
      label: "No. Of Tracks Offered",
      value: "4",
      icon: BookA,
      bg: "bg-yellow-500/10 border-yellow-500/20",
      color: "text-yellow-400",
    },
    {
      label: "Total No. Of Courses Offered",
      value: "18",
      icon: BookCheck,
      bg: "bg-emerald-500/10 border-emerald-500/20",
      color: "text-emerald-400",
    },
    {
      label: "Total No. Of Cohorts",
      value: "4",
      icon: Calendar,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      label: "Total No. Of Students",
      value: "50",
      icon: Users,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {stats.map(({ label, value, icon: Icon, color, bg }) => (
        <div
          key={label}
          className={`flex items-center gap-3 p-4 rounded-xl border ${bg} bg-[#0D1629]`}
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

export default function AdminDashboard() {
  const router = useRouter();
  const { liveResources } = useMain();

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AdminHeader
            title={"Hi, " + USER.name}
            subtitle="View and manage your admin console"
          />

          <div className="mb-12">
            <StatsRow />
          </div>

          <div className="mb-6">
            <SectionHeader
              title={"Students enrolled" + ` (${STUDENTS_DATA.length})`}
              action={() => router.push("/admin/students")}
              actionLabel="Manage Students"
            />

            <StudentsTable isDashboardView={true} />
          </div>

          <div className="mb-6">
            <SectionHeader
              title={"Courses Offered" + ` (${liveResources.length})`}
              action={() => router.push("/admin/courses")}
              actionLabel="Manage Courses"
            />

            <CourseTable isDashboardView={true} />
          </div>
        </main>
      </div>
    </div>
  );
}
