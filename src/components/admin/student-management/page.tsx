"use client";

import SectionHeader from "@/components/SectionHeader";
import StudentsTable from "@/components/StudentsTable";
import { useMain } from "@/context/MainContext";

export default function AdminStudentsManagement() {
  const { liveResources } = useMain();

  return (
    <div className="min-h-screen flex pt-20">
      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="mb-6">
            <SectionHeader
              title={"Students enrolled" + ` (${liveResources.length})`}
            />

            <StudentsTable isDashboardView={false} />
          </div>
        </main>
      </div>
    </div>
  );
}
