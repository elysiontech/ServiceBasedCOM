import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import { brand } from "../data/content";

const bodyText =
  "Over the last decade, our partners have engineered platforms with scale-ups, venture-backed tech startups, and enterprise studios across the globe. Together, we craft software that combines relentless technical rigor with effortless, award-winning visual experiences.";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  index,
  totalChars,
  progress,
}) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

// Inline multi-style heading for About — words flow naturally within a single paragraph
function AboutHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <h2
      ref={ref}
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-[1.1] sm:leading-[1.05] text-center"
    >
      <motion.span
        initial={{ y: 18, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        className="inline text-[#F0ECE1] font-normal"
      >
        We are {brand.name},{" "}
      </motion.span>
      <motion.span
        initial={{ y: 18, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="inline font-serif italic text-primary"
      >
        a dedicated engineering &amp; design studio.{" "}
      </motion.span>
      <motion.span
        initial={{ y: 18, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="inline text-[#F0ECE1] font-normal"
      >
        We specialize in full-stack web platforms, mobile ecosystems, and cloud architectures.
      </motion.span>
    </h2>
  );
}

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "40+", label: "Platforms Shipped" },
  { value: "99.9%", label: "Uptime Standard" },
  { value: "0", label: "Vendor Lock-in" },
];

export const About: React.FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const totalChars = bodyText.length;

  return (
    <section id="about" className="bg-[#08090C] py-16 sm:py-24 md:py-32 px-4 md:px-6 flex justify-center items-center">
      {/* Inner Card */}
      <div className="bg-[#0F1218] rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center max-w-6xl w-full border border-white/[0.06] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden">
        {/* Subtle background glow matching warm sunset amber/emerald tone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/[0.025] rounded-full blur-[140px] pointer-events-none" />

        {/* Small Label */}
        <div className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-6 sm:mb-8">
          Our Philosophy &amp; Story
        </div>

        {/* Main Heading with mixed styles flowing inline */}
        <AboutHeading />

        {/* Scroll-Linked Opacity Reveal Paragraph */}
        <p
          ref={paragraphRef}
          className="text-[#D6D1C4] text-xs sm:text-sm md:text-base max-w-3xl mx-auto mt-10 sm:mt-12 md:mt-16 leading-relaxed font-normal"
        >
          {bodyText.split("").map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              totalChars={totalChars}
              progress={scrollYProgress}
            />
          ))}
        </p>

        {/* Metric Badges */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
