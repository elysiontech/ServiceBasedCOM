import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Code2, Smartphone, Cloud, Database, Palette, Compass } from "lucide-react";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";
import TiltCard from "./TiltCard";
import { services } from "../data/content";

const headerSegments: TextSegment[] = [
  {
    text: "Engineered capabilities for ambitious ventures.",
    className: "text-[#F0ECE1] font-normal block w-full",
  },
  {
    text: "Built for pure performance. Powered by code & vision.",
    className: "text-gray-400 font-normal block w-full mt-1.5",
  },
];

const serviceIcons = [
  <Code2 className="w-5 h-5 text-primary" key="code" />,
  <Smartphone className="w-5 h-5 text-primary" key="phone" />,
  <Cloud className="w-5 h-5 text-primary" key="cloud" />,
  <Database className="w-5 h-5 text-primary" key="data" />,
  <Palette className="w-5 h-5 text-primary" key="palette" />,
  <Compass className="w-5 h-5 text-primary" key="compass" />,
];

// Card component with Staggered slide-up + Parallax Depth Layer + 3D Tilt
const ParallaxServiceCard: React.FC<{
  children: React.ReactNode;
  index: number;
  className?: string;
}> = ({ children, index, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const depthFactor = (index % 3) === 1 ? -22 : (index % 3) === 2 ? 18 : 0;
  const parallaxY = useTransform(scrollYProgress, [0, 1], [depthFactor, -depthFactor]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: parallaxY }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <TiltCard maxTilt={7} className="h-full">
        <div className={`rounded-2xl md:rounded-3xl overflow-hidden h-full ${className}`}>
          {children}
        </div>
      </TiltCard>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="ambient-glow-services min-h-screen relative py-24 md:py-32 px-4 md:px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Geometric Luxury Grid Pattern */}
      <div
        className="bg-grid-luxury absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Atmospheric Radial Light */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#D9A05B]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Header text */}
      <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3"
        >
          Our Capabilities
        </motion.div>
        <WordsPullUpMultiStyle
          segments={headerSegments}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
        />
      </div>

      {/* Grid: Staggered Slide-Up with Parallax Depth Layers + 3D Tilt */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-5 relative z-10">
        {/* Video Card: Live Canvas (Index 0) */}
        <ParallaxServiceCard
          index={0}
          className="relative min-h-[380px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8 border border-primary/30 shadow-2xl group bg-[#0A0D13] cursor-pointer"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-[0.95]"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D13]/95 via-[#0A0D13]/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-primary bg-[#08090C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 mb-3 shadow-md group-hover:border-primary/60 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>LIVE PRODUCTION CANVAS</span>
            </div>
            
            <h3 className="text-[#F0ECE1] text-xl sm:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">
              Your digital canvas.
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xs leading-relaxed">
              Every system is designed with custom architecture, high throughput, and zero-compromise aesthetics.
            </p>
          </div>
        </ParallaxServiceCard>

        {/* 5 Service Cards with 3D Tilt and Parallax */}
        {services.slice(0, 5).map((service, i) => (
          <ParallaxServiceCard
            key={service.code}
            index={i + 1}
            className="cinema-card p-6 sm:p-7 flex flex-col justify-between shadow-xl min-h-[380px] md:min-h-[420px] group cursor-default"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="icon-box-hover w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/60 flex items-center justify-center border border-white/[0.08] shadow-inner">
                  {serviceIcons[i]}
                </div>
                <span className="text-gray-500 font-mono text-xs font-medium group-hover:text-primary transition-colors">
                  ({service.code})
                </span>
              </div>

              <h3 className="card-title-hover text-primary font-medium text-lg sm:text-xl tracking-tight mt-5">
                {service.title}.
              </h3>

              <p className="text-gray-300/80 text-xs sm:text-sm mt-2 leading-relaxed font-normal group-hover:text-gray-200 transition-colors">
                {service.desc}
              </p>

              {/* Checklist items */}
              <ul className="mt-5 space-y-2">
                {service.features.slice(0, 3).map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-gray-300 group-hover:text-white transition-colors">
                    <Check size={14} className="text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] draw-line flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {service.stack.slice(0, 3).map((st) => (
                  <span
                    key={st}
                    className="animated-tag text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-gray-300/80 border border-white/5"
                  >
                    {st}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group/link hover:underline shrink-0 ml-2"
              >
                <span className="group-hover/link:text-white transition-colors">Inquire</span>
                <ArrowRight
                  size={12}
                  className="-rotate-45 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-white"
                />
              </a>
            </div>
          </ParallaxServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
