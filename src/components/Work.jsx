import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { work } from "../data/content";
import { SectionHeading } from "./Services";

const artStyles = [
  "from-violet via-magenta to-cyan",
  "from-cyan via-violet to-magenta",
  "from-magenta via-cyan to-violet",
];

export default function Work() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % work.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const item = work[index];

  return (
    <section id="work" className="py-24 md:py-32 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Selected builds" title="Work" />

        <div
          className="mt-14 glass overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-2 min-h-[380px]">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${artStyles[index % artStyles.length]} animate-gradient-pan`}
                >
                  <div className="absolute inset-0 bg-grid-dots opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-3xl bg-black/10 backdrop-blur-md border border-white/20 rotate-6 animate-float" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-[11px] font-mono text-cyan tracking-widest">{item.tag}</span>
                  <h3 className="font-display text-2xl font-semibold mt-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed mt-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.stack.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-muted border border-edge rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={() => setIndex((i) => (i - 1 + work.length) % work.length)}
                  className="w-9 h-9 rounded-full border border-edge flex items-center justify-center hover:border-violet/60 hover:text-cyan transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-2">
                  {work.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to project ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-gradient-to-r from-violet to-cyan" : "w-1.5 bg-edge"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIndex((i) => (i + 1) % work.length)}
                  className="w-9 h-9 rounded-full border border-edge flex items-center justify-center hover:border-violet/60 hover:text-cyan transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-muted mt-6 tracking-wide">
          NOTE — case studies shown at summary level, replace visuals with real product screenshots once shipped
        </p>
      </div>
    </section>
  );
}
