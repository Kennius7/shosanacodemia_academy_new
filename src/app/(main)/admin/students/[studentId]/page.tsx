import StudentDetails from "@/components/admin/student-management/student-details/page";
import { Suspense } from "react";

export default function AdminViewStudentLayout() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <StudentDetails />
    </Suspense>
  );
}
