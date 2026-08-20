import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { founders } from "../data/content";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";

const headerSegments: TextSegment[] = [
  {
    text: "Engineers and product architects, not middlemen.",
    className: "text-[#F0ECE1] font-normal block w-full",
  },
  {
    text: "You collaborate directly with the seniors building your product.",
    className: "text-gray-400 font-normal block w-full mt-1.5",
  },
];

export const Founders: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="founders"
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
            Core Leadership
          </motion.div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* 4-Founder Grid: Blur-to-Focus Scale Reveal + 3D Tilt */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{
                opacity: 0,
                filter: "blur(12px)",
                scale: 0.86,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      filter: "blur(0px)",
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      filter: "blur(12px)",
                      scale: 0.86,
                    }
              }
              transition={{
                duration: 0.85,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="cinema-card p-6 sm:p-7 rounded-2xl md:rounded-3xl shadow-xl flex flex-col justify-between group cursor-default h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black/60 border border-primary/20 flex items-center justify-center text-primary font-mono text-sm font-semibold shadow-inner group-hover:bg-primary group-hover:text-black group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(230,213,172,0.4)] transition-all duration-300">
                        0{index + 1}
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                    </div>

                    <h3 className="card-title-hover text-primary font-medium text-lg tracking-tight">
                      {founder.name}
                    </h3>

                    <div className="text-gray-400 font-mono text-xs mt-1 group-hover:text-primary/90 transition-colors">
                      {founder.role}
                    </div>

                    <p className="text-gray-300/80 text-xs mt-4 leading-relaxed font-normal group-hover:text-white transition-colors">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] draw-line flex flex-wrap gap-1.5">
                    {founder.focus.map((tag) => (
                      <span
                        key={tag}
                        className="animated-tag text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/50 text-primary/90 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Founders;
