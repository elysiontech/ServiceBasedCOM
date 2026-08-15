import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";
import { SectionHeading } from "./Services";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-soft">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Before you ask" title="Frequently asked" center />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span className="font-display font-medium">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-cyan transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted leading-relaxed px-6 pb-5">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
