import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = "",
  showAsterisk = false,
  delayOffset = 0,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={`inline-flex flex-wrap items-baseline ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-visible mr-[0.2em] last:mr-0 relative"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delayOffset + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block relative"
            >
              {word}
              {isLastWord && showAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] select-none font-normal leading-none">
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
};

export default WordsPullUp;
