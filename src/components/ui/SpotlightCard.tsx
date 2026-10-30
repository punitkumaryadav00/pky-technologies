"use client";

import React, { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  cursorLabel?: string;
}

export function SpotlightCard({
  children,
  className = "",
  delay = 0,
  cursorLabel,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mx", `${x}%`);
    cardRef.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      data-cursor-label={cursorLabel}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`canny-spotlight-card rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] transition-colors hover:border-cyan-500/30 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

