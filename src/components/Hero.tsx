import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Play, Pause, Volume2, VolumeX, Eye, Layers } from "lucide-react";
import WordsPullUp from "./WordsPullUp";
import { brand } from "../data/content";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [cinemaMode, setCinemaMode] = useState(false);
  const [showTechNodes, setShowTechNodes] = useState(false);

  // Mouse tilt / parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="top"
      className={`min-h-screen w-full p-3 sm:p-4 md:p-6 bg-[#060709] relative flex flex-col box-border pt-16 sm:pt-20 transition-all duration-700 ${
        cinemaMode ? "bg-[#000000]" : ""
      }`}
    >
      {/* 3D Perspective Inset Container */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        className="relative w-full h-[calc(100vh-5.5rem)] min-h-[640px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#08090C] flex flex-col justify-between border border-white/[0.09] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95)]"
      >
        {/* Background Video (Sunset Urban Skyline & Park) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700 ${
            cinemaMode
              ? "filter brightness-[1.05] contrast-[1.08] scale-[1.02]"
              : "filter brightness-[0.94] contrast-[1.04]"
          }`}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
        />

        {/* Dynamic Interactive Cursor Glow Overlay */}
        <div
          className="noise-overlay absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none z-1"
          aria-hidden="true"
        />

        {/* Dynamic Gradient Depth Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none z-2 ${
            cinemaMode
              ? "bg-gradient-to-t from-black/80 via-black/20 to-black/40"
              : "bg-gradient-to-t from-[#060709] via-[#060709]/30 to-[#060709]/50"
          }`}
          aria-hidden="true"
        />

        {/* Top Interactive Bar */}
        <div className="relative z-20 p-5 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-primary/95 bg-[#08090C]/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-primary/25 shadow-lg">
              <Sparkles size={12} className="text-primary animate-pulse" />
              <span>DIRECT ENGINEERING STUDIO</span>
            </div>

            {/* Interactive Tech Nodes Trigger */}
            <button
              onClick={() => setShowTechNodes(!showTechNodes)}
              className={`hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider px-3 py-1.5 rounded-full border transition-all cursor-pointer backdrop-blur-md ${
                showTechNodes
                  ? "bg-primary text-black border-primary font-semibold"
                  : "bg-[#08090C]/60 text-gray-300 hover:text-white border-white/[0.08] hover:border-white/20"
              }`}
            >
              <Layers size={11} />
              <span>{showTechNodes ? "Hide Specs" : "Live Tech Specs"}</span>
            </button>
          </div>

          {/* Interactive Floating Video Controls Dock */}
          <div className="flex items-center gap-2 bg-[#08090C]/75 backdrop-blur-md p-1.5 rounded-full border border-white/[0.09] shadow-xl">
            <button
              onClick={togglePlay}
              title={isPlaying ? "Pause video" : "Play video"}
              className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-primary hover:text-black text-[#F0ECE1] flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              title={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-primary hover:text-black text-[#F0ECE1] flex items-center justify-center transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>

            <button
              onClick={() => setCinemaMode(!cinemaMode)}
              title={cinemaMode ? "Exit Cinema Focus" : "Cinema Focus Mode"}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                cinemaMode
                  ? "bg-primary text-black"
                  : "bg-white/[0.05] hover:bg-primary hover:text-black text-[#F0ECE1]"
              }`}
            >
              <Eye size={12} />
            </button>
          </div>
        </div>

        {/* Interactive Floating Live Specs Layer */}
        <AnimatePresence>
          {showTechNodes && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-6 sm:left-8 z-30 bg-[#08090C]/90 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-xs"
            >
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>Active Telemetry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-1.5 text-xs text-gray-300 font-mono">
                <div className="flex justify-between border-b border-white/[0.05] pb-1">
                  <span className="text-gray-500">Engine:</span>
                  <span>React 19 · Vite 8</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.05] pb-1">
                  <span className="text-gray-500">Streaming:</span>
                  <span>WebRTC 60fps</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.05] pb-1">
                  <span className="text-gray-500">Infra:</span>
                  <span>AWS Serverless</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Database:</span>
                  <span>PostgreSQL / Redis</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom-aligned Hero Content */}
        <div className="relative z-20 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-6 items-end">
            {/* Left 8 Columns: Giant Typography Heading */}
            <div className="lg:col-span-8 overflow-visible flex flex-col justify-end">
              <WordsPullUp
                text={brand.name}
                showAsterisk={true}
                className="text-[23vw] sm:text-[21vw] md:text-[19vw] lg:text-[17.5vw] xl:text-[16.5vw] font-medium leading-[0.82] tracking-[-0.07em] text-[#E6D5AC] select-none drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Right 4 Columns: Description + Interactive CTA */}
            <div className="lg:col-span-4 flex flex-col justify-end pb-1 sm:pb-3 md:pb-4 lg:pb-5">
              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[#F0ECE1]/90 text-xs sm:text-sm md:text-[15px] leading-[1.4] max-w-md font-normal"
              >
                {brand.name} is a senior-only digital product studio engineering high-throughput web applications, mobile platforms, and resilient cloud systems for visionary ventures.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contact"
                  className="bg-primary rounded-full pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 inline-flex items-center gap-2 hover:gap-3 text-black font-semibold text-xs sm:text-sm group cursor-pointer transition-all duration-300 shadow-[0_0_30px_-5px_rgba(230,213,172,0.45)] select-none hover:brightness-105"
                >
                  <span>Start a project</span>
                  <div className="bg-[#08090C] text-[#E6D5AC] rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={13} />
                  </div>
                </a>

                <a
                  href="#services"
                  className="bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-[#F0ECE1] text-xs font-medium px-4 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <span>Capabilities</span>
                  <ChevronDown size={13} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
