import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delayOffset?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  containerClassName = "",
  delayOffset = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Each segment is rendered as a full line/block with its own animation
  return (
    <div
      ref={ref}
      className={containerClassName}
    >
      {segments.map((segment, segIndex) => (
        <motion.span
          key={`segment-${segIndex}`}
          initial={{ y: 18, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: delayOffset + segIndex * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`block ${segment.className || ""}`}
        >
          {segment.text}
        </motion.span>
      ))}
    </div>
  );
};

export default WordsPullUpMultiStyle;
