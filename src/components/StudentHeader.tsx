import { EnrolStatus } from "@/types";
import React from "react";
import TrackBanner from "./TrackBanner";
import { useAuth } from "@/context/AuthContext";

interface StudentHeaderProps {
  title: string;
  subtitle: string;
  enrolStatus: EnrolStatus;
}

function StudentHeader({ title, subtitle, enrolStatus }: StudentHeaderProps) {
  const { activeTrack } = useAuth();

  return (
    <div className="mb-6 flex justify-between items-end">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          {/* Welcome back, {name.split(" ")[0]} 👋 */}
          {title}
        </h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="flex flex-col justify-center items-end gap-1">
        <div className="text-sm text-slate-500 mt-1 py-0">
          Enrolment Status:
          <span
            className={`ml-2 ${
              enrolStatus === "Pending"
                ? "text-yellow-700"
                : enrolStatus === "Paid"
                  ? "text-cyan-500"
                  : enrolStatus === "Granted"
                    ? "text-blue-600"
                    : "text-orange-200"
            }`}
          >
            {enrolStatus}
          </span>
        </div>

        <TrackBanner
          track={activeTrack.name}
          gradColor={activeTrack.gradColor ?? "from-blue-500 to-cyan-600"}
          color={activeTrack.color ?? "text-cyan-600"}
        />
      </div>
    </div>
  );
}

export default StudentHeader;
