"use client";

import { useMain } from "@/context/MainContext";
import { NavRouteType } from "@/types";
import { useRouter } from "next/navigation";

function HomeSectionHeader({
  text,
  isRoutable = false,
  route = "Curriculum",
  textColor = "text-cyan-400",
  bgColor = "bg-cyan-400/10",
  borderColor = "border-cyan-400/20",
}: {
  text: string;
  isRoutable: boolean;
  route: NavRouteType;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
}) {
  const router = useRouter();
  const { setSelectedNavRoute } = useMain();
  const lowerCaseRoute = route.toLowerCase();

  const handleRouting = (isRouting: boolean, route: NavRouteType) => {
    if (isRouting) {
      setSelectedNavRoute(route);
      router.push(`/${lowerCaseRoute}`);
    } else {
      console.log("No route available...");
    }
  };

  return (
    <button
      onClick={() => handleRouting(isRoutable, route)}
      className={`inline-block text-xs font-semibold border px-3 py-1 
        rounded-full uppercase tracking-widest mb-4 cursor-pointer 
        ${textColor} ${bgColor} ${borderColor}`}
    >
      {text}
    </button>
  );
}

export default HomeSectionHeader;
