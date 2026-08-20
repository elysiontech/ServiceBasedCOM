import React from "react";
import { brand, nav } from "../data/content";
import { ArrowUp, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/[0.06] py-14 sm:py-18 px-4 md:px-6 relative z-10 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-primary font-semibold text-lg tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              {brand.name}
            </div>
            <p className="text-xs text-gray-500 mt-1 max-w-sm">
              {brand.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-normal">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#E1E0CC] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-primary/40 flex items-center justify-center text-primary transition-all duration-300 cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div>
            © {new Date().getFullYear()} {brand.name} Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
