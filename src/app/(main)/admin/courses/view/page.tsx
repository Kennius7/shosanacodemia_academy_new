import CourseDetails from "@/components/admin/course-management/course-details/page";
import { Suspense } from "react";

export default function AdminViewCourseLayout() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <CourseDetails />
    </Suspense>
  );
}
