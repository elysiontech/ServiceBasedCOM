import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 min-h-[720px] flex items-center">
      <div className="absolute inset-0 bg-grid-dots opacity-40 mask-fade-b" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violet/25 blur-[120px] animate-float-slow" aria-hidden="true" />
      <div className="absolute top-10 -right-32 w-[460px] h-[460px] rounded-full bg-cyan/15 blur-[110px] animate-float-slow" style={{ animationDelay: "-3s" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.08fr_.92fr] gap-14 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/25 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Senior team. Built around your goal.
          </div>

          <h1 className="font-display font-semibold text-[2.65rem] sm:text-6xl lg:text-[4.45rem] tracking-[-0.055em] leading-[0.98] text-balance">
            Build digital products
            <br />
            people <TypewriterHeadline />
          </h1>

          <p className="text-muted text-lg md:text-xl mt-7 max-w-xl leading-relaxed">
            We turn ambitious ideas into clear, high-performing web and mobile experiences — with strategy, design and engineering working as one team.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Tell us what you&apos;re building <ArrowUpRight size={17} />
            </a>
            <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-edge px-5 py-3.5 text-sm font-medium text-text/90 hover:border-cyan/60 hover:text-cyan transition-colors">
              How we work <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {["Direct collaboration", "Weekly visibility", "Code you own"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check size={15} className="text-cyan" /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} className="relative hidden lg:block">
          <ProductVisual />
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterHeadline() {
  const words = ["choose.", "trust.", "remember."];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const word = words[wordIndex];

  useEffect(() => {
    const complete = text.length === word.length;
    const timer = window.setTimeout(() => {
      if (complete) {
        setText("");
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + 1));
      }
    }, complete ? 1800 : 85);
    return () => window.clearTimeout(timer);
  }, [text, word]);

  return <span className="gradient-text animate-gradient-pan whitespace-nowrap">{text}<span className="inline-block w-[0.08em] h-[0.85em] ml-[0.08em] bg-cyan align-[-0.06em] animate-pulse" /></span>;
}

function ProductVisual() {
  const slides = [
    { label: "Your product, in motion", phase: "01 / 03", title: "From idea to impact", bars: [30, 48, 40, 67, 58, 86, 100], outcome: "A team that", accent: "owns the outcome.", points: ["A focused roadmap", "Visible progress", "A launch-ready product"] },
    { label: "Designed for real people", phase: "02 / 03", title: "Make every click count", bars: [42, 58, 72, 54, 88, 68, 96], outcome: "Experiences that", accent: "feel effortless.", points: ["Clear user journeys", "Thoughtful interface design", "Fast, accessible delivery"] },
    { label: "Ready to grow with you", phase: "03 / 03", title: "Built beyond launch", bars: [28, 46, 64, 82, 62, 92, 100], outcome: "A product made", accent: "to keep moving.", points: ["Solid technical foundations", "Room to scale", "Support after launch"] },
  ];
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const slide = slides[active];

  useEffect(() => {
    const interval = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  function moveCard(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientY - bounds.top) / bounds.height - 0.5) * -7, y: ((event.clientX - bounds.left) / bounds.width - 0.5) * 7 });
  }

  return (
    <div className="relative w-full max-w-[510px] mx-auto aspect-[.93]" style={{ perspective: "1200px" }} onMouseMove={moveCard} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="absolute inset-[7%] rounded-[2rem] bg-gradient-to-br from-violet/25 via-magenta/10 to-cyan/25 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 rounded-[2rem] border border-violet/25 -rotate-6" />
      <div className="absolute inset-0 rounded-[2rem] border border-cyan/20 rotate-3" />
      <AnimatePresence initial={false}>
      <motion.div
        key={active}
        initial={{ opacity: 0, x: 26, y: 8, rotate: 1.8, scale: 0.98, filter: "blur(5px)" }}
        animate={{ opacity: 1, x: 0, y: tilt.x ? -4 : 0, rotate: 0, scale: 1, rotateX: tilt.x, rotateY: tilt.y, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -22, y: -7, rotate: -1.8, scale: 0.98, filter: "blur(5px)" }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 glass p-5 md:p-6 overflow-hidden shadow-[0_35px_100px_-35px_rgba(59,39,150,.75)]"
      >
        <div className="flex items-center justify-between border-b border-edge pb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet via-magenta to-cyan grid place-items-center text-[#05060a]"><Sparkles size={17} /></div>
            <div><AnimatePresence mode="wait"><motion.div key={slide.title} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -7 }} transition={{ duration: 0.25 }} className="font-display font-semibold">{slide.title}</motion.div></AnimatePresence><div className="text-[10px] font-mono text-cyan tracking-[.16em] mt-0.5">PRODUCT BUILD SYSTEM</div></div>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_14px_3px_rgba(34,199,187,.45)]" />
        </div>

        <div className="mt-6 rounded-2xl border border-edge bg-bg/45 p-5 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet/25 blur-2xl" />
          <AnimatePresence mode="wait"><motion.div key={slide.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="annotation text-muted">{slide.label}</motion.div></AnimatePresence>
          <div className="mt-4 grid grid-cols-7 items-end gap-2 h-28">
            {slide.bars.map((height, index) => <div key={index} className="relative h-full flex items-end"><motion.div animate={{ height: `${height}%` }} transition={{ duration: 0.7, delay: index * 0.05 }} className={`w-full rounded-t-md ${index === 6 ? "bg-gradient-to-t from-cyan to-violet" : "bg-violet/30"}`} /></div>)}
          </div>
          <div className="mt-3 flex justify-between text-[10px] font-mono text-muted"><span>DISCOVER</span><span>DESIGN</span><span>BUILD</span><span>LAUNCH</span></div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-edge bg-surface/50 p-4"><div className="text-[10px] font-mono tracking-widest text-muted">WHAT YOU GET</div><AnimatePresence mode="wait"><motion.div key={slide.outcome} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -7 }} className="font-display text-xl mt-2">{slide.outcome}<br /><span className="gradient-text">{slide.accent}</span></motion.div></AnimatePresence></div>
          <div className="rounded-2xl bg-gradient-to-br from-violet/20 to-cyan/15 border border-cyan/20 p-4 flex flex-col justify-between"><div className="text-[10px] font-mono tracking-widest text-cyan">BUILT FOR CLARITY</div><AnimatePresence mode="wait"><motion.div key={slide.points[0]} initial={{ opacity: 0, x: 7 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -7 }} className="space-y-2">{slide.points.map((item) => <div key={item} className="text-xs flex gap-2 items-center"><span className="w-1 h-1 rounded-full bg-cyan" />{item}</div>)}</motion.div></AnimatePresence></div>
        </div>
        <div className="mt-5 flex items-center justify-between text-xs text-muted border-t border-edge pt-5"><span>Strategy • Design • Engineering</span><span className="text-cyan">{slide.phase}</span></div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
