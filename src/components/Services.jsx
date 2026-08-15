import { motion } from "framer-motion";
import { services } from "../data/content";

export function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center mx-auto" : ""}
    >
      <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan mb-4 ${center ? "justify-center" : ""}`}>
        <span className="w-6 h-px bg-cyan" />
        {eyebrow}
      </div>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-balance">{title}</h2>
      {sub && <p className={`mt-4 text-muted leading-relaxed max-w-xl ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="What we build" title="Services" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass glow-border p-7 group hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-muted">{s.code}</span>
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet/20 to-cyan/20 border border-edge grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-violet to-cyan" />
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {s.stack.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-muted border border-edge rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
