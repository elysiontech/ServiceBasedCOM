import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { process } from "../data/content";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";

const headerSegments: TextSegment[] = [
  {
    text: "From initial brief to production deploy.",
    className: "text-[#F0ECE1] font-normal block w-full",
  },
  {
    text: "Transparent weekly sprints with zero black-box surprises.",
    className: "text-gray-400 font-normal block w-full mt-1.5",
  },
];

export const Process: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
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
            Execution Framework
          </motion.div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* 5-Phase Flow Grid: Horizontal Domino Cascade + 3D Tilt */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {process.map((step, index) => (
            <motion.div
              key={step.code}
              initial={{ opacity: 0, x: -50, scale: 0.92 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -50, scale: 0.92 }
              }
              transition={{
                duration: 0.65,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="cinema-card p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col justify-between group border border-white/[0.07] hover:border-primary/40 relative overflow-hidden cursor-default h-full">
                  {/* Progressive glowing beam */}
                  <div className="process-beam" />

                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] draw-line">
                      <span className="text-primary font-mono text-xs font-semibold tracking-wider group-hover:text-white transition-colors">
                        {step.code}
                      </span>
                      <span className="text-gray-400 font-mono text-[11px] bg-white/[0.04] px-2.5 py-0.5 rounded-full group-hover:bg-primary group-hover:text-black group-hover:font-semibold transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
                        Step {step.step}
                      </span>
                    </div>

                    <h3 className="card-title-hover text-primary font-medium text-base sm:text-lg tracking-tight mt-5">
                      {step.title}
                    </h3>

                    <p className="text-gray-300/80 text-xs mt-3 leading-relaxed font-normal group-hover:text-gray-200 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-3 flex items-center justify-between border-t border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase group-hover:text-primary transition-colors">
                        Phase {step.step}
                      </span>
                    </div>
                    <span className="text-gray-500 font-mono text-[10px] group-hover:text-gray-300 transition-colors">0{index + 1}/05</span>
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

export default Process;
