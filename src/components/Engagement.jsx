import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { engagementModels, testimonials } from "../data/content";
import { SectionHeading } from "./Services";

export default function Engagement() {
  return (
    <section id="engagement" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet/10 blur-[140px]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Ways to work together"
          title="Engagement models"
          sub="No published rate card — every quote is scoped to the actual build. Tell us what you need and we'll come back with a number."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {engagementModels.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glow-border p-8 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
            >
              <h3 className="font-display text-xl font-semibold">{m.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-3 flex-1">{m.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-text/80">
                    <Check size={15} className="text-cyan mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-7 border-l-2 border-l-violet"
            >
              <p className="text-lg text-text/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-xs font-mono text-cyan tracking-widest mt-4">
                {t.name} — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <p className="text-xs font-mono text-muted mt-6 tracking-wide">
          NOTE — testimonials placeholder until first clients are signed
        </p>
      </div>
    </section>
  );
}
