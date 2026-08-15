import { motion } from "framer-motion";
import { process } from "../data/content";
import { SectionHeading } from "./Services";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-bg-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-30" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="How a build runs" title="Process" sub="Five stages, the same for a two-week fix or a six-month platform build." />

        <div className="mt-16 grid md:grid-cols-5 gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-violet/40 via-cyan/40 to-magenta/40" />
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 md:block">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-mono text-cyan shrink-0 relative z-10 shadow-[0_0_20px_-4px_rgba(34,199,187,0.6)]">
                  {i + 1}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted md:mt-5">{p.step}</div>
              </div>
              <h3 className="font-display text-lg font-semibold mt-3">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
