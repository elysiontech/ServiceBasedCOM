import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-bg/70 backdrop-blur-xl border-b border-edge" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-lg flex items-center gap-2.5">
          <span className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-violet via-magenta to-cyan animate-gradient-pan grid place-items-center text-[11px] font-bold text-[#05060a]">
            {brand.name[0]}
          </span>
          {brand.name}
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted hover:text-text transition-colors">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="btn-primary text-sm">
            Start a project
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-text"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-edge px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-muted">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm text-center"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
