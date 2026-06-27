"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  TooltipContentProps,
} from "recharts";
import { cn } from "@/lib/utils";

// Chart config type
export type ChartConfig = {
  [key: string]: {
    label: string;
    color?: string;
  };
};

// Container for wrapping charts
export function ChartContainer({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full h-[300px] rounded-2xl border bg-white shadow-sm p-2",
        className,
      )}
    >
      {React.isValidElement(children) && (
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      )}
    </div>
  );
}

// Tooltip wrapper
// export function ChartTooltip<ValueType extends number | string = number, NameType extends string | number = string>({
//     content,
// }: {
//     content: (props: TooltipContentProps<ValueType, NameType>) => React.ReactNode
// }) {
//     return (
//         <RechartsTooltip<ValueType, NameType>
//             content={(props) => (
//                 <div className="rounded-lg border bg-white p-2 shadow-md text-sm">
//                     {content(props)}
//                 </div>
//             )}
//         />
//     )
// }

// Default tooltip content renderer
export function ChartTooltipContent({
  label,
  value,
  color,
}: {
  label?: string;
  value?: string | number;
  color?: string;
}) {
  if (!label && !value) return null;

  return (
    <div className="flex items-center space-x-2">
      {color && (
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
      <span className="font-medium">{label}</span>
      {value !== undefined && (
        <span className="text-muted-foreground">{value}</span>
      )}
    </div>
  );
}
