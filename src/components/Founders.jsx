import { motion } from "framer-motion";
import { founders } from "../data/content";
import { SectionHeading } from "./Services";

export default function Founders() {
  return (
    <section id="founders" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="The team"
          title="Four founders. No account managers."
          sub="Every project is staffed by the people who founded the studio — you're never handed off to a subcontractor. Hover a card to flip it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14" style={{ perspective: "1200px" }}>
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group h-72 [transform-style:preserve-3d] relative"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] glass p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-[11px] font-mono text-cyan tracking-widest mb-4">FOUNDER 0{i + 1}</div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet via-magenta to-cyan animate-gradient-pan grid place-items-center font-display text-lg text-[#05060a] font-bold mb-4">
                    {f.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.name}</h3>
                  <div className="text-xs text-muted mt-1">{f.role}</div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] glass p-6 flex flex-col justify-center">
                  <div className="text-[11px] font-mono text-cyan tracking-widest mb-3">{f.role}</div>
                  <p className="text-sm text-muted leading-relaxed">{f.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {f.focus.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-muted border border-edge rounded-full px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-mono text-muted mt-8 tracking-wide">
          NOTE — names &amp; initials are placeholders, swap in src/data/content.js
        </p>
      </div>
    </section>
  );
}
