"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  Globe,
  Cpu,
  TrendingUp,
  Smartphone,
  Cloud,
  Database,
  Sparkles,
} from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  glow: string;
  x: number;
  y: number;
  z: number;
}

// Pre-calculated fixed integer coordinates (Radius = 155px)
// Eliminates runtime floating-point discrepancies between SSR & Client
const techNodes: NodeData[] = [
  {
    id: "web",
    label: "Web",
    sub: "Next.js 16 Edge",
    icon: Globe,
    color: "#00d2ff",
    glow: "rgba(0, 210, 255, 0.5)",
    x: 155,
    y: -35,
    z: 0,
  },
  {
    id: "ai",
    label: "AI",
    sub: "Autonomous Bots",
    icon: Cpu,
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.5)",
    x: 78,
    y: 25,
    z: 134,
  },
  {
    id: "seo",
    label: "SEO",
    sub: "GEO #1 Rank",
    icon: TrendingUp,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.5)",
    x: -78,
    y: -50,
    z: 134,
  },
  {
    id: "apps",
    label: "Apps",
    sub: "Enterprise SaaS",
    icon: Smartphone,
    color: "#818cf8",
    glow: "rgba(129, 140, 248, 0.5)",
    x: -155,
    y: 35,
    z: 0,
  },
  {
    id: "cloud",
    label: "Cloud",
    sub: "Serverless Edge",
    icon: Cloud,
    color: "#00e5ff",
    glow: "rgba(0, 229, 255, 0.5)",
    x: -78,
    y: -25,
    z: -134,
  },
  {
    id: "data",
    label: "Data",
    sub: "Realtime Flow",
    icon: Database,
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.5)",
    x: 78,
    y: 40,
    z: -134,
  },
];

export function TechConstellation3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // 1. Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  // 2. Scroll tracking from top of page
  const { scrollY } = useScroll();

  // 3. Scroll-driven 3D transforms
  const rawScrollRotation = useTransform(scrollY, [0, 900], [0, 540]);
  const smoothScrollRotation = useSpring(rawScrollRotation, {
    stiffness: 85,
    damping: 25,
    mass: 0.8,
  });

  const rawScrollTiltX = useTransform(scrollY, [0, 450, 900], [12, -18, 22]);
  const smoothScrollTiltX = useSpring(rawScrollTiltX, {
    stiffness: 90,
    damping: 24,
  });

  const rawScrollScale = useTransform(scrollY, [0, 400, 900], [1, 1.1, 0.9]);
  const smoothScrollScale = useSpring(rawScrollScale, {
    stiffness: 90,
    damping: 24,
  });

  // 4. Inverse transforms for billboarding nodes (declared at TOP LEVEL, never inside loops)
  const inverseScrollRotation = useTransform(smoothScrollRotation, (v) => -v);
  const inverseScrollTiltX = useTransform(smoothScrollTiltX, (v) => -v);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(x * 12);
    mouseY.set(y * -12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none overflow-visible"
      style={{
        perspective: 1100,
      }}
    >
      {/* Dynamic 3D Stage that rotates on scroll and tilts on mouse move */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          rotateY: smoothScrollRotation,
          rotateX: smoothScrollTiltX,
          scale: smoothScrollScale,
        }}
      >
        {/* Mouse parallax stage layer */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothMouseY,
            rotateY: smoothMouseX,
          }}
        >
          {/* Orbital Gimbal Ring 1 - Equator */}
          <div
            className="absolute rounded-full border-2 border-dashed border-cyan-400/30 w-[340px] h-[340px] pointer-events-none"
            style={{
              transform: "rotateX(75deg)",
              transformStyle: "preserve-3d",
              boxShadow: "0 0 30px rgba(0, 210, 255, 0.15)",
            }}
          />

          {/* Orbital Gimbal Ring 2 - Polar Inclined */}
          <div
            className="absolute rounded-full border border-indigo-400/35 w-[300px] h-[300px] pointer-events-none"
            style={{
              transform: "rotateY(55deg) rotateX(40deg)",
              transformStyle: "preserve-3d",
              boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)",
            }}
          />

          {/* Orbital Gimbal Ring 3 - Counter Tilted */}
          <div
            className="absolute rounded-full border border-purple-400/25 w-[380px] h-[380px] pointer-events-none"
            style={{
              transform: "rotateX(30deg) rotateY(-45deg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Central 3D Quantum Core */}
          <div
            className="relative flex items-center justify-center pointer-events-none"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(0px)",
            }}
          >
            {/* Pulsating radiant halo */}
            <div
              className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 blur-xl opacity-75"
              style={{
                animation: "pky-pulse-glow 4s ease-in-out infinite",
              }}
            />

            {/* Core sphere */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-cyan-400/50 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              <Sparkles size={20} className="text-cyan-300 animate-pulse mb-0.5" />
              <span className="text-[10px] font-black tracking-widest text-white uppercase">
                PKY TECH
              </span>
              <span className="text-[8px] font-mono font-bold text-cyan-300 tracking-wider">
                3D CORE
              </span>
            </div>
          </div>

          {/* 3D Floating Orbiting Tech Nodes */}
          {techNodes.map((node) => {
            const isHovered = activeNode === node.id;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px)`,
                }}
              >
                {/* Counter-billboard: uses top-level hooks inverseScrollRotation & inverseScrollTiltX */}
                <motion.div
                  style={{
                    transformStyle: "preserve-3d",
                    rotateY: inverseScrollRotation,
                    rotateX: inverseScrollTiltX,
                  }}
                  whileHover={{ scale: 1.15, z: 30 }}
                  className="relative group"
                >
                  {/* Energy connection filament to core */}
                  <div
                    className="absolute w-px h-10 bg-gradient-to-t from-transparent via-cyan-400/40 to-transparent pointer-events-none -top-10 left-1/2 -translate-x-1/2"
                    style={{ opacity: isHovered ? 1 : 0.35 }}
                  />

                  {/* 3D Glassmorphic Node Card */}
                  <div
                    className={`relative px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl backdrop-blur-xl border transition-all duration-300 flex items-center gap-2.5 ${
                      isHovered
                        ? "bg-slate-900/95 border-cyan-400 shadow-[0_0_30px_rgba(0,210,255,0.6)]"
                        : "bg-slate-900/85 border-slate-700/80 hover:border-cyan-400/60 shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? `0 0 25px ${node.glow}`
                        : "0 6px 18px rgba(0,0,0,0.45)",
                    }}
                  >
                    {/* Glowing Icon Orb */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${node.color}18`,
                        borderColor: `${node.color}45`,
                        color: node.color,
                        boxShadow: `0 0 12px ${node.color}35`,
                      }}
                    >
                      <node.icon size={16} />
                    </div>

                    {/* Node Text & Details */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
                          {node.label}
                        </span>
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: node.color,
                            boxShadow: `0 0 8px ${node.color}`,
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-mono font-medium text-slate-300 whitespace-nowrap">
                        {node.sub}
                      </span>
                    </div>

                    {/* Ambient corner light */}
                    <div
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full blur-[2px] opacity-75"
                      style={{ backgroundColor: node.color }}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Floating 3D Depth Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00d2ff]"
            style={{
              top: `${15 + i * 14}%`,
              left: `${12 + (i * 15) % 76}%`,
            }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Interactive 3D Scroll Hint Pill */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 uppercase tracking-widest pointer-events-none flex items-center gap-1.5 shadow-lg shadow-black/40">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Scroll to Rotate 3D Space</span>
      </div>
    </div>
  );
}
