interface TrackBannerType {
  track: string;
  gradColor: string;
  color: string;
}

export default function TrackBanner({
  track,
  gradColor,
  color,
}: TrackBannerType) {
  return (
    <div className="bg-[#080F1E]/90 backdrop-blur-sm py-0">
      <div className="flex items-center gap-3">
        <div
          className={`h-3 w-3 rounded-full bg-gradient-to-br ${gradColor} flex-shrink-0`}
        />
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-medium flex-shrink-0">
            Active Track
          </span>
          <span className="text-slate-500">·</span>
          <span className={`text-sm font-semibold ${color} truncate`}>
            {track}
          </span>
        </div>
      </div>
    </div>
  );
}
