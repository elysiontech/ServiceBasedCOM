import { brand, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-14 border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-edge">
          <div>
            <div className="font-display font-semibold text-lg flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet via-magenta to-cyan grid place-items-center text-[11px] font-bold text-[#05060a]">
                {brand.name[0]}
              </span>
              {brand.name}
            </div>
            <p className="text-sm text-muted mt-2 max-w-xs">{brand.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-mono uppercase tracking-widest text-muted hover:text-cyan transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-muted">
            <div>{brand.email}</div>
            <div className="mt-1">{brand.location}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 text-xs font-mono uppercase tracking-widest text-muted">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Placeholder name &amp; content — replace before launch</span>
        </div>
      </div>
    </footer>
  );
}
