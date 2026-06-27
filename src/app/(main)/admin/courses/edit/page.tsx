import EditCourse from "@/components/admin/course-management/edit-course/page";
import { Suspense } from "react";

export default function AdminEditCourseLayout() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <EditCourse />
    </Suspense>
  );
}
