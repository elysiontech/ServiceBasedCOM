import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { engagementModels } from "../data/content";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";

const headerSegments: TextSegment[] = [
  {
    text: "Flexible engagement models tailored to your stage.",
    className: "text-[#E1E0CC] font-normal block w-full",
  },
  {
    text: "Transparent milestones, predictable delivery, and no lock-in.",
    className: "text-gray-500 font-normal block w-full mt-1.5",
  },
];

export const Engagement: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="engagement"
      className="bg-black py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3"
          >
            Collaboration Modes
          </motion.div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* 3 Model Cards: Elastic Spring Bounce-In + 3D Tilt */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{
                opacity: 0,
                scale: 0.72,
                y: 40,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.72,
                      y: 40,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 14,
                mass: 0.8,
                delay: index * 0.15,
              }}
              className="h-full"
            >
              <TiltCard maxTilt={7} className="h-full">
                <div
                  className={`p-7 md:p-8 rounded-2xl md:rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 group cursor-default h-full ${
                    model.highlight
                      ? "bg-[#12151C] border-primary/50 ring-1 ring-primary/30 shadow-[0_20px_50px_-15px_rgba(230,213,172,0.15)] relative hover:border-primary hover:shadow-[0_30px_90px_-10px_rgba(230,213,172,0.25)]"
                      : "cinema-card hover:border-primary/40"
                  }`}
                >
                  <div>
                    {model.highlight && (
                      <span className="absolute -top-3 right-6 text-[10px] font-mono tracking-widest uppercase bg-primary text-black font-semibold px-3.5 py-1 rounded-full shadow-md float-soft group-hover:scale-110 transition-transform">
                        Most Popular
                      </span>
                    )}

                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] draw-line">
                      <h3 className="card-title-hover text-primary font-medium text-xl tracking-tight">
                        {model.title}
                      </h3>
                      <span className="text-gray-500 font-mono text-xs font-semibold group-hover:text-primary transition-colors">
                        ({model.badge})
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed font-normal group-hover:text-gray-200 transition-colors">
                      {model.desc}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {model.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                          <Check size={15} className="text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <a
                      href="#contact"
                      className={`w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        model.highlight
                          ? "bg-primary text-black hover:opacity-90 font-semibold shadow-[0_0_25px_-5px_rgba(230,213,172,0.3)] group-hover:shadow-[0_0_35px_rgba(230,213,172,0.5)] group-hover:scale-[1.02]"
                          : "bg-white/[0.06] text-primary hover:bg-primary hover:text-black border border-white/[0.08] group-hover:border-primary/50 group-hover:bg-white/[0.12]"
                      }`}
                    >
                      <span>Select {model.title}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

export default Engagement;
