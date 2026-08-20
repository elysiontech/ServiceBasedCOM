import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";

const headerSegments: TextSegment[] = [
  {
    text: "Studio-grade workflows for visionary creators.",
    className: "text-[#E1E0CC] font-normal block w-full",
  },
  {
    text: "Built for pure vision. Powered by art.",
    className: "text-gray-500 font-normal block w-full mt-1.5",
  },
];

export const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      className="min-h-screen bg-black relative py-20 md:py-28 px-4 md:px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Noise Texture */}
      <div
        className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header text */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 relative z-10 px-4">
        <WordsPullUpMultiStyle
          segments={headerSegments}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
        />
      </div>

      {/* 4-column card grid: Multi-directional Slide-In + 3D Tilt */}
      <div
        ref={ref}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-2 lg:gap-2.5 relative z-10"
      >
        {/* Card 1: Slide from LEFT (x: -90) */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <TiltCard maxTilt={8} className="h-full">
            <div className="relative min-h-[380px] lg:min-h-full rounded-2xl md:rounded-3xl flex flex-col justify-end p-6 md:p-8 border border-white/[0.06] shadow-xl overflow-hidden group cursor-pointer hover:border-primary/40 h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-[#E1E0CC] text-lg sm:text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  Your creative canvas.
                </h3>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 2: Slide from TOP (y: -70) */}
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -70 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <TiltCard maxTilt={8} className="h-full">
            <div className="cinema-card rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.05] shadow-xl min-h-[380px] lg:min-h-full group hover:border-primary/40 transition-colors cursor-default h-full">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center p-1 border border-white/5 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt="Project Storyboard Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-5">
                  <h3 className="card-title-hover text-primary font-medium text-lg sm:text-xl tracking-tight">
                    Project Storyboard.
                  </h3>
                  <span className="text-gray-500 font-mono text-xs group-hover:text-primary transition-colors">(01)</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Dynamic scene sequencing",
                    "Real-time asset syncing",
                    "Version timeline history",
                    "Collaborative markup notes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                      <Check size={15} className="text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] draw-line">
                <a
                  href="#storyboard"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group/link hover:underline"
                >
                  <span className="group-hover/link:text-white transition-colors">Learn more</span>
                  <ArrowRight
                    size={13}
                    className="-rotate-45 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-white"
                  />
                </a>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 3: Slide from BOTTOM (y: 70) */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <TiltCard maxTilt={8} className="h-full">
            <div className="cinema-card rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.05] shadow-xl min-h-[380px] lg:min-h-full group hover:border-primary/40 transition-colors cursor-default h-full">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center p-1 border border-white/5 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt="Smart Critiques Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-5">
                  <h3 className="card-title-hover text-primary font-medium text-lg sm:text-xl tracking-tight">
                    Smart Critiques.
                  </h3>
                  <span className="text-gray-500 font-mono text-xs group-hover:text-primary transition-colors">(02)</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "AI-driven composition analysis",
                    "Frame-by-frame creative notes",
                    "Native NLE & 3D tool integrations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                      <Check size={15} className="text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] draw-line">
                <a
                  href="#critiques"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group/link hover:underline"
                >
                  <span className="group-hover/link:text-white transition-colors">Learn more</span>
                  <ArrowRight
                    size={13}
                    className="-rotate-45 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-white"
                  />
                </a>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Card 4: Slide from RIGHT (x: 90) */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 90 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <TiltCard maxTilt={8} className="h-full">
            <div className="cinema-card rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.05] shadow-xl min-h-[380px] lg:min-h-full group hover:border-primary/40 transition-colors cursor-default h-full">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black/40 flex items-center justify-center p-1 border border-white/5 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt="Immersion Capsule Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-5">
                  <h3 className="card-title-hover text-primary font-medium text-lg sm:text-xl tracking-tight">
                    Immersion Capsule.
                  </h3>
                  <span className="text-gray-500 font-mono text-xs group-hover:text-primary transition-colors">(03)</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Deep focus notification silencing",
                    "Curated ambient soundscapes",
                    "Production schedule syncing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                      <Check size={15} className="text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] draw-line">
                <a
                  href="#capsule"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group/link hover:underline"
                >
                  <span className="group-hover/link:text-white transition-colors">Learn more</span>
                  <ArrowRight
                    size={13}
                    className="-rotate-45 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-white"
                  />
                </a>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
