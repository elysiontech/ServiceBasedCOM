import React, { useState, useEffect } from "react";
import { nav, brand } from "../data/content";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-[94%] max-w-5xl">
      <nav
        aria-label="Main Navigation"
        className={`bg-[#08090C]/85 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/[0.09] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9)] flex items-center justify-between transition-all duration-300 ${
          scrolled ? "border-primary/25 bg-[#08090C]/95" : ""
        }`}
      >
        {/* Brand logo / title */}
        <a
          href="#top"
          className="text-xs sm:text-sm font-semibold tracking-wider text-primary flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block transition-transform group-hover:scale-125 duration-300" />
          <span className="tracking-tight font-medium">{brand.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setActiveItem(item.label)}
              onMouseLeave={() => setActiveItem(null)}
              style={{
                color:
                  activeItem === item.label
                    ? "#E6D5AC"
                    : "rgba(240, 236, 225, 0.75)",
              }}
              className="text-xs font-normal tracking-wide transition-all duration-200 cursor-pointer hover:opacity-100 relative py-1"
            >
              {item.label}
              {activeItem === item.label && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Direct Action Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-300 bg-[#0F1218] px-2.5 py-1 rounded-full border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>
          <a
            href="#contact"
            className="bg-primary text-black text-xs font-semibold px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer shadow-sm"
          >
            <span>Start</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-1 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 bg-[#0F1218]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.1] p-5 shadow-2xl flex flex-col gap-3"
          >
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#F0ECE1]/80 hover:text-primary py-1.5 border-b border-white/[0.05] last:border-none flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={14} className="text-gray-400" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 bg-primary text-black text-center text-xs font-semibold rounded-xl"
            >
              Start a project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
