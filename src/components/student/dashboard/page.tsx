"use client";

import ProgressBar from "@/components/ProgressBar";
import SectionHeader from "@/components/SectionHeader";
import StudentHeader from "@/components/StudentHeader";
import { CONTINUE_COURSES, ENROLLED_COURSES } from "@/data";
import { EnrolStatus } from "@/types";
import {
  BookOpen,
  Clock,
  ChevronRight,
  Play,
  TrendingUp,
  BookA,
  BookCheck,
} from "lucide-react";
import { useState } from "react";

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const USER = {
  name: "Alex Johnson",
  avatar: "AJ",
  streak: 12,
  xp: 3240,
  level: 8,
  nextLevelXp: 4000,
};

// ─── Sections ─────────────────────────────────────────────────────────────────

function StatsRow() {
  const stats = [
    {
      label: "Courses Enrolled",
      value: "4",
      icon: BookOpen,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      label: "No. Of Total Course Topics",
      value: "64",
      icon: BookA,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
    {
      label: "No. Of Course Topics Covered",
      value: "4",
      icon: BookCheck,
      bg: "bg-yellow-500/10 border-yellow-500/20",
      color: "text-yellow-400",
    },
    {
      label: "Avg. Completion",
      value: "49%",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(({ label, value, icon: Icon, color, bg }) => (
        <div
          key={label}
          className={`flex items-center gap-3 p-4 rounded-2xl border ${bg} bg-[#0D1629]`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${bg} border`}
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

function ContinueLearning() {
  return (
    <div>
      <SectionHeader
        title="Continue Learning"
        actionLabel="All courses"
        action={() => {}}
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {CONTINUE_COURSES.map((c) => (
          <div
            key={c.id}
            className="group relative bg-[#0D1629] border border-slate-800 hover:border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-200"
          >
            {/* Gradient thumb */}
            <div className={`h-2 w-full bg-gradient-to-r ${c.color}`} />
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {c.thumbnail}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {c.module}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{c.progress}% complete</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {c.duration}
                  </span>
                </div>
                <ProgressBar value={c.progress} color={c.color} />
              </div>

              <button
                className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${c.color} hover:opacity-90 text-white text-xs font-semibold transition-all duration-200`}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Resume Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnrolledCourses() {
  return (
    <div>
      <SectionHeader title="Enrolled Courses" action={() => {}} />
      <div className="space-y-2.5">
        {ENROLLED_COURSES.slice(0, 2).map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-4 p-4 bg-[#0D1629] border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-200 group cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
            >
              {c.tag}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <p className="text-sm font-semibold text-white truncate">
                  {c.title}
                </p>
                <span className="text-xs text-slate-500 flex-shrink-0">
                  {c.completed}/{c.modules} modules
                </span>
              </div>
              <ProgressBar value={c.progress} color={c.color} thin />
              <p className="text-xs text-slate-600 mt-1.5">{c.instructor}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-slate-400 flex-shrink-0 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [enrolStatus, setEnrolStatus] = useState<EnrolStatus>("Enrolled");

  return (
    <div className="min-h-screen bg-[#080F1E] flex pt-20">
      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <StudentHeader
            title={"Welcome back, " + USER.name + "👋"}
            subtitle="Pick up where you left off."
            enrolStatus={enrolStatus}
          />

          {/* Stats row */}
          <div className="mb-6">
            <StatsRow />
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-6">
            {/* Left column */}
            <div className="space-y-8">
              <ContinueLearning />
              {/* <RecommendedCourses /> */}
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <EnrolledCourses />
              {/* <WeeklyActivity />
              <Certificates />
              <ActivityFeed /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
