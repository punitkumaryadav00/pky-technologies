"use client";

import React, { useRef, useEffect, useState, type ReactNode } from "react";

interface ScanlineCardProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export function ScanlineCard({
  children,
  className = "",
  active = true,
}: ScanlineCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(500);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setContainerHeight(height);
        containerRef.current.style.setProperty("--scan-h", `${height}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ "--scan-h": `${containerHeight}px` } as React.CSSProperties}
      className={`relative overflow-hidden ${className}`}
    >
      {active && <i className="canny-scan" aria-hidden="true" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

