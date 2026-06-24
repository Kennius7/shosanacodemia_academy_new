export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Program: ["Curriculum", "Benefits", "Pricing", "FAQ"],
    Company: ["About Us", "Blog", "Careers", "Press"],
    Connect: ["LinkedIn", "Twitter", "Instagram", "YouTube"],
  };

  return (
    <footer className="bg-[#030710] border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-1 mb-4">
              {/* <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shosana
              </span>
              <span className="text-2xl font-light tracking-wide text-slate-400">codemia</span> */}
              <span className="text-2xl font-light text-slate-300 group-hover:text-white transition-colors">
                Shosan
              </span>
              <span
                className="text-2xl tracking-wider font-black tracking-tighter 
                bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                acodemia
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Training the next generation of software engineers across Africa.
              World-class skills, real-world outcomes.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "Twitter", icon: "𝕏" },
                { label: "LinkedIn", icon: "in" },
                { label: "GitHub", icon: "<>" },
                { label: "YouTube", icon: "▶" },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-cyan-400 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} Shosanacodemia. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
