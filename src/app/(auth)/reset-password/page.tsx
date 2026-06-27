import ResetPassword from "@/components/auth/reset-password";
import { Suspense } from "react";

function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <ResetPassword />
    </Suspense>
  );
}

export default ResetPasswordPage;
