interface ProgressRingType {
  progress: number;
  size?: number;
  gradColor1: string;
  gradColor2: string;
}

export default function ProgressRing({
  progress,
  size = 40,
  gradColor1 = "#804BE9",
  gradColor2 = "#1855E6",
}: ProgressRingType) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#1e293b"
        strokeWidth={3}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="url(#ringGrad)"
        strokeWidth={3}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={gradColor1} />
          <stop offset="100%" stopColor={gradColor2} />
        </linearGradient>
      </defs>
    </svg>
  );
}
