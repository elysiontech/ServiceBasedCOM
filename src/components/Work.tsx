import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { work } from "../data/content";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";

const headerSegments: TextSegment[] = [
  {
    text: "Selected production casework.",
    className: "text-[#F0ECE1] font-normal block w-full",
  },
  {
    text: "Real platforms running in production with verified metrics.",
    className: "text-gray-400 font-normal block w-full mt-1.5",
  },
];

const projectMetrics = [
  "5 Properties · Real-time Sync",
  "10M+ Daily Rows · <80ms",
  "WebRTC Core · 60fps Video",
];

export const Work: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      className="ambient-glow-section py-24 md:py-32 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Subtle Luxury Grid Pattern */}
      <div
        className="bg-grid-luxury absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3"
          >
            Case Studies
          </motion.div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* 3-Project Grid: Flip-in from Y-Axis Rotation + 3D Tilt */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          style={{ perspective: 1200 }}
        >
          {work.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                rotateY: 45,
                scale: 0.9,
                x: index === 0 ? -20 : index === 2 ? 20 : 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      rotateY: 0,
                      scale: 1,
                      x: 0,
                    }
                  : {
                      opacity: 0,
                      rotateY: 45,
                      scale: 0.9,
                      x: index === 0 ? -20 : index === 2 ? 20 : 0,
                    }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="cinema-card p-7 md:p-8 rounded-2xl md:rounded-3xl shadow-xl flex flex-col justify-between group cursor-default h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="animated-tag inline-block text-[10px] font-mono tracking-widest text-primary uppercase px-2.5 py-1 rounded-full bg-black/60 border border-primary/20 group-hover:border-primary/60 group-hover:bg-primary/10 transition-colors">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-primary transition-colors">
                        {projectMetrics[index]}
                      </span>
                    </div>

                    <h3 className="card-title-hover text-primary font-medium text-xl tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-300/80 text-xs sm:text-sm mt-3.5 leading-relaxed font-normal group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06] draw-line flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="animated-tag text-[10px] font-mono px-2.5 py-0.5 rounded bg-black/50 text-gray-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-black/60 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(230,213,172,0.4)]"
                    >
                      <ArrowRight
                        size={14}
                        className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
