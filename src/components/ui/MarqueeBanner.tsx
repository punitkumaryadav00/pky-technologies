"use client";

import React from "react";

interface MarqueeBannerProps {
  items?: string[];
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
  outlineText?: boolean;
}

const defaultItems = [
  "ENGINEER DIGITAL DOMINANCE",
  "SUB-SECOND PERFORMANCE",
  "ENTERPRISE AI AGENTS",
  "NEXT.JS 16 ARCHITECTURE",
  "10X REVENUE PIPELINE",
  "ZERO TECH DEBT",
  "CUSTOM LLM WORKFLOWS",
  "99+ LIGHTHOUSE SCORE",
];

export function MarqueeBanner({
  items = defaultItems,
  reverse = false,
  speed = "normal",
  className = "",
  outlineText = false,
}: MarqueeBannerProps) {
  // Duplicate list to achieve a seamless infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  const durationClass =
    speed === "fast"
      ? "animation-duration-[22s]"
      : speed === "slow"
      ? "animation-duration-[55s]"
      : "animation-duration-[35s]";

  return (
    <div className={`canny-marquee-wrapper py-3.5 border-y border-[var(--pky-border)] bg-[rgba(15,23,42,0.65)] backdrop-blur-md shadow-[0_0_25px_rgba(0,210,255,0.06)] ${className}`}>
      <div className={`canny-marquee-track ${reverse ? "reverse" : ""} ${durationClass}`}>
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span
              className={`text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase ${
                outlineText
                  ? "text-transparent [-webkit-text-stroke:1.2px_rgba(56,189,248,0.7)]"
                  : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}
            >
              {item}
            </span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--pky-cyan)] shadow-[0_0_12px_var(--pky-cyan)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

