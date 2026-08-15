import { motion } from "framer-motion";
import { brand } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36">
      <div className="absolute inset-0 bg-grid-dots opacity-40 mask-fade-b" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violet/25 blur-[120px] animate-float-slow" aria-hidden="true" />
      <div className="absolute top-10 -right-32 w-[460px] h-[460px] rounded-full bg-cyan/15 blur-[110px] animate-float-slow" style={{ animationDelay: "-3s" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-magenta/10 blur-[100px] animate-pulse-glow" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/25 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Four founders · One studio
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-balance">
            We engineer software
            <br />
            that feels <span className="gradient-text animate-gradient-pan">inevitable.</span>
          </h1>

          <p className="text-muted text-lg mt-6 max-w-lg leading-relaxed">
            {brand.name} is a four-person studio — each of us an engineer, none of us a
            middleman. Web, mobile, cloud and data, shipped by the people who founded it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#work" className="text-sm font-medium text-text/90 hover:text-cyan transition-colors border-b border-edge hover:border-cyan pb-1">
              See our work →
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            {[["4", "Founders"], ["6", "Service lines"], ["0", "Middlemen"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl gradient-text">{n}</div>
                <div className="text-xs text-muted mt-1 leading-tight uppercase tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <OrbitVisual />
        </motion.div>
      </div>
    </section>
  );
}

function OrbitVisual() {
  const nodes = [
    { label: "WEB", angle: 0 },
    { label: "MOBILE", angle: 90 },
    { label: "CLOUD", angle: 180 },
    { label: "DATA", angle: 270 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full border border-dashed border-cyan/25 animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-dashed border-violet/25 animate-spin-slower" />
      <div className="absolute inset-16 rounded-full border border-edge" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="glass w-32 h-32 rounded-full grid place-items-center relative z-10 shadow-[0_0_60px_-10px_rgba(139,107,255,0.5)]">
          <div className="text-center">
            <div className="font-display font-bold text-xl gradient-text">{brand.name}</div>
            <div className="text-[10px] text-muted mt-1 tracking-widest">CORE</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "22s" }}>
        {nodes.map((n) => (
          <div key={n.label} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transform: `rotate(${n.angle}deg) translateX(190px)` }}>
            <div className="animate-spin-slower glass rounded-2xl px-4 py-3 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: "22s" }}>
              <div className="text-[10px] font-mono tracking-widest text-cyan whitespace-nowrap">{n.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-amber animate-float" aria-hidden="true" />
      <div className="absolute bottom-10 left-2 w-2 h-2 rounded-full bg-magenta animate-float" style={{ animationDelay: "-2s" }} aria-hidden="true" />
    </div>
  );
}
