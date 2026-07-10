import { partners } from "@/data";

export default function Partners() {
  return (
    <section className="py-16 bg-[#050A14] border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-600 uppercase tracking-widest mb-10">
          Trusted By Leading African Tech Companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group aspect-[2/1] bg-[#0D1629] border border-slate-800 
              hover:border-slate-600 rounded-xl flex items-center justify-center 
              transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="text-center px-3">
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: partner.color }}
                />
                <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
