import React from "react";

function ProgressBar({
  value,
  color = "from-cyan-500 to-blue-600",
  thin = false,
}: {
  value: number;
  color?: string;
  thin?: boolean;
}) {
  return (
    <div
      className={`w-full bg-slate-800 rounded-full overflow-hidden ${thin ? "h-1" : "h-1.5"}`}
    >
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
