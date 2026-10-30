"use client";

interface MovingOrbsProps {
  className?: string;
  variant?: "hero" | "subtle" | "vivid";
}

export function MovingOrbs({ className = "", variant = "hero" }: MovingOrbsProps) {
  const opacityClass =
    variant === "subtle"
      ? "opacity-40"
      : variant === "vivid"
      ? "opacity-100"
      : "opacity-80";

  return (
    <div className={`canny-orbs ${opacityClass} ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}

