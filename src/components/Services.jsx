import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, CloudCog, Compass, LayoutPanelTop, Palette, Smartphone } from "lucide-react";
import { useState } from "react";
import { services } from "../data/content";

export function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className={center ? "text-center mx-auto" : ""}>
      <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan mb-4 ${center ? "justify-center" : ""}`}><span className="w-6 h-px bg-cyan" />{eyebrow}</div>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-balance">{title}</h2>
      {sub && <p className={`mt-4 text-muted leading-relaxed max-w-xl ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </motion.div>
  );
}

const serviceMeta = [
  { icon: LayoutPanelTop, label: "PRODUCTS & PLATFORMS" }, { icon: Smartphone, label: "MOBILE EXPERIENCES" },
  { icon: CloudCog, label: "SYSTEMS THAT LAST" }, { icon: BarChart3, label: "DATA THAT GUIDES" },
  { icon: Palette, label: "USEFUL BY DESIGN" }, { icon: Compass, label: "DECISIONS WITH DIRECTION" },
];

function ServiceCard({ service, index }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  const meta = serviceMeta[index];
  const Icon = meta.icon;

  function track(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y, rotateX: (y - 50) * -0.055, rotateY: (x - 50) * 0.055 });
  }

  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, delay: index * 0.06 }} onMouseMove={track} onMouseLeave={() => setPointer({ x: 50, y: 50, rotateX: 0, rotateY: 0 })} style={{ perspective: "900px" }} className="group">
      <motion.div animate={{ rotateX: pointer.rotateX, rotateY: pointer.rotateY }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="service-card relative h-full min-h-[264px] overflow-hidden rounded-[1.35rem] border border-edge p-6 md:p-7">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(34,199,187,.14), transparent 38%), radial-gradient(circle at 100% 0%, rgba(139,107,255,.16), transparent 42%)` }} />
        <div className="relative flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl border border-edge bg-bg/35 grid place-items-center text-cyan group-hover:border-cyan/50 transition-colors"><Icon size={19} strokeWidth={1.7} /></div>
          <span className="font-mono text-[11px] text-muted group-hover:text-cyan transition-colors">{service.code}</span>
        </div>
        <div className="relative mt-7">
          <div className="text-[10px] font-mono tracking-[.14em] text-muted">{meta.label}</div>
          <h3 className="font-display text-xl font-semibold mt-3 tracking-tight">{service.title}</h3>
          <p className="text-sm text-muted leading-relaxed mt-3">{service.desc}</p>
        </div>
        <div className="relative mt-5 flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">{service.stack.slice(0, 3).map((item) => <span key={item} className="text-[10px] font-mono text-muted border border-edge rounded-full px-2 py-1">{item}</span>)}</div>
          <a href="#contact" aria-label={`Discuss ${service.title}`} className="w-8 h-8 shrink-0 rounded-full border border-edge grid place-items-center text-muted opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#05060a] group-hover:bg-cyan group-hover:border-cyan transition-all"><ArrowUpRight size={15} /></a>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-[0.13] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_80%,transparent)]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
          <SectionHeading eyebrow="Capabilities" title="Everything your product needs to move." sub="Hover to explore. We bring the right mix of product thinking, design, and engineering to each engagement." />
          <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted pb-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" /> Move over a card</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">{services.map((service, index) => <ServiceCard key={service.code} service={service} index={index} />)}</div>
      </div>
    </section>
  );
}
