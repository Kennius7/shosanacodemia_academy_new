"use client";

import CourseTable from "@/components/CourseTable";
import SectionHeader from "@/components/SectionHeader";
import { ResourceList } from "@/data";

export default function AdminCourseManagement() {
  return (
    <div className="min-h-screen flex pt-20">
      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mb-6">
            <SectionHeader
              title={"Courses Offered" + ` (${ResourceList.length})`}
            />

            <CourseTable isDashboardView={false} />
          </div>
        </main>
      </div>
    </div>
  );
}
