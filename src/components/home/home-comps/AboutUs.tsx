export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#050A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Training Africa&apos;s next generation of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                software engineers
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Shosanacodemia was founded on a single conviction: technical
                talent is everywhere in Africa, but world-class, structured
                training is scarce. We exist to close that gap.
              </p>
              <p>
                Our curriculum is built directly with hiring engineers — people
                who interview candidates, review pull requests, and architect
                systems at scale. Every module teaches what actually matters on
                the job, not just what looks good in a syllabus.
              </p>
              <p>
                We measure our success by one metric: did our graduates get
                hired, and did they thrive? With a 95% employment rate and
                alumni at Flutterwave, Paystack, Andela, and beyond, we believe
                the answer speaks for itself.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Accountability",
                "Real-world Skills",
                "Community",
                "Excellence",
              ].map((v) => (
                <span
                  key={v}
                  className="text-xs font-medium text-slate-300 border border-slate-700 px-3 py-1.5 rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 border border-slate-800 flex flex-col items-center justify-center gap-4">
              <div className="grid grid-cols-3 gap-3 p-8 w-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-slate-700/50 flex items-center justify-center text-2xl"
                  >
                    {["👩‍💻", "👨‍💻", "🧑‍💻", "👩‍🏫", "👨‍🏫", "🧑‍🎓", "👩‍🎓", "👨‍🎓", "🤝"][i]}
                  </div>
                ))}
              </div>
              <span className="absolute bottom-4 text-sm font-medium text-slate-400">
                Our Team
              </span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0D1629] border border-cyan-500/30 rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-black text-white">2020</div>
              <div className="text-xs text-slate-400 mt-0.5">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
