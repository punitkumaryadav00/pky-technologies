"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PKYLogoProps {
  variant?: "navbar" | "full" | "mark";
  className?: string;
  glow?: boolean;
  href?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Official PKY Technologies Brand Identity Logo
 * Uses the uploaded electric Lightning-P monogram with vibrant violet-to-cyan gradient
 * and integrated PKY typography.
 */
export function PKYLogoMark({
  className = "w-9 h-10",
  glow = true,
}: {
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {/* Ambient backlight glow */}
      {glow && (
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-400/30 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="relative w-full h-full z-10 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/pky-logo-clean.svg"
          alt="PKY Technologies Logo Mark"
          width={212}
          height={252}
          className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.35)]"
          priority
        />
      </div>
    </div>
  );
}

export function PKYLogo({
  variant = "navbar",
  className = "",
  glow = true,
  href = "/",
  size = "md",
}: PKYLogoProps) {
  const sizeClasses = {
    sm: "w-7 h-8",
    md: "w-9 h-10 sm:w-10 sm:h-11",
    lg: "w-14 h-16",
  }[size];

  const content = (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      <PKYLogoMark className={sizeClasses} glow={glow} />

      {variant === "mark" ? null : (
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            PKY
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-slate-300 group-hover:text-white transition-colors">
            Technologies
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none" aria-label="PKY Technologies Home">
        {content}
      </Link>
    );
  }

  return content;
}

