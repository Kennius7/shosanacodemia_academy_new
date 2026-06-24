import { benefits } from '@/data';

interface BenefitIconProps {
  name: string;
}

export function BenefitIcon({ name }: BenefitIconProps) {
  const icons: Record<string, React.ReactNode> = {
    '🎯': (
      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
      </svg>
    ),
    '🛠️': (
      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.343 3.94c.09.542-.056 1.096-.386 1.527L7.5 9H5a2 2 0 00-2 2v2a2 2 0 002 2h2.5l2.457 3.533c.33.431.476.985.386 1.527C10.15 21.04 9.193 22 8 22H7a7 7 0 01-7-7v-2a7 7 0 017-7h1c1.193 0 2.15.96 2.343 1.94zM14 7l6 10M20 7l-6 10" />
      </svg>
    ),
    '🚀': (
      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.04-.311.058a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.058-.311m-2.638 2.698a6 6 0 01-1.037-5.433" />
      </svg>
    ),
  };

  return (
    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
      {icons[name] ?? <span className="text-2xl">{name}</span>}
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#080F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Why Shosanacodemia?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We're not just another bootcamp. Everything here is designed to get you hired.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.id}
              className="relative bg-[#0D1629] border border-slate-800 rounded-2xl p-8 overflow-hidden group hover:border-cyan-500/20 transition-all duration-300"
            >
              {/* Number watermark */}
              <div className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <BenefitIcon name={benefit.icon} />
              <h3 className="text-xl font-bold text-white mt-5 mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '200+', label: 'Graduates' },
            { value: '95%', label: 'Hired within 3 months' },
            { value: '12+', label: 'Hiring partners' },
            { value: '3×', label: 'Average salary increase' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 bg-[#0D1629] border border-slate-800 rounded-2xl"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                {value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
