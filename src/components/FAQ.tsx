import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import { faqs, testimonials } from "../data/content";
import WordsPullUpMultiStyle, { TextSegment } from "./WordsPullUpMultiStyle";

const headerSegments: TextSegment[] = [
  {
    text: "Frequently asked questions.",
    className: "text-[#E1E0CC] font-normal block w-full",
  },
  {
    text: "Everything you need to know about working with our studio.",
    className: "text-gray-500 font-normal block w-full mt-1.5",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-black py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Testimonials Banner: Gentle Float-Up with Opacity Fade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-[#0E1117] p-6 sm:p-7 rounded-2xl md:rounded-3xl border border-white/[0.07] shadow-lg flex flex-col justify-between"
            >
              <div>
                <Quote size={20} className="text-primary/40 mb-3" />
                <p className="text-[#DEDBC8] text-xs sm:text-sm leading-relaxed italic font-normal">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.05]">
                <div className="text-primary font-medium text-xs sm:text-sm">
                  {t.name}
                </div>
                <div className="text-gray-500 font-mono text-[11px] mt-0.5">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium mb-3"
          >
            Common Inquiries
          </motion.div>
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center"
          />
        </div>

        {/* Accordion List: Gentle Float-Up with Opacity Fade */}
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#11141C] border-primary/30 shadow-lg"
                    : "bg-[#0A0D13] border-white/[0.06] hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-primary font-medium text-sm sm:text-base tracking-tight">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-7 h-7 rounded-full bg-black/50 border border-white/5 flex items-center justify-center text-primary shrink-0"
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-4 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
