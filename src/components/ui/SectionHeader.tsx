"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, title, description, center = true, light = false }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 sm:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <span className="pky-label inline-block mb-4">{label}</span>
      )}
      <h2
        className={`pky-heading-2 mb-4 ${
          light ? "text-[var(--pky-text-dark)]" : "text-[var(--pky-text-primary)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`pky-body max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-[var(--pky-text-dark-secondary)]" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
