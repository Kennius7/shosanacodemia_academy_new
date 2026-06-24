import { ChevronRight } from "lucide-react";

function SectionHeader({
  title,
  action,
  actionLabel,
}: {
  title: string;
  action?: () => void;
  actionLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-bold text-white">{title}</h2>
      {action && (
        <button
          onClick={action}
          className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          {actionLabel ?? "See all"}{" "}
          {actionLabel !== "" && <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
