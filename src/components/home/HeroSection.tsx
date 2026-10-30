"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { MovingOrbs } from "@/components/ui/MovingOrbs";
import { TechConstellation3D } from "@/components/home/TechConstellation3D";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--pky-gradient-hero)]" />

      {/* Floating Ambient Glowing Mesh Orbs */}
      <MovingOrbs variant="vivid" />

      {/* Subtle Digital Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,210,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 pky-container pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left: Text & Pitch */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="pky-badge mb-6 shadow-md shadow-cyan-950/40">
                <span className="w-2 h-2 rounded-full bg-[var(--pky-cyan)] animate-pulse shadow-[0_0_8px_var(--pky-cyan)]" />
                Engineering Digital Dominance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pky-heading-display mb-6"
            >
              Your Business{" "}
              <span className="pky-gradient-text">Deserves More</span>{" "}
              Than Just a Website
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pky-body text-lg mb-8 max-w-xl font-normal leading-relaxed text-slate-200"
            >
              From high-performance websites and search visibility to AI-powered 
              automation and custom business software — we turn technology into 
              practical business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                data-cursor-label="TALK"
                className="pky-btn pky-btn-primary pky-btn-lg font-bold"
              >
                Book a Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                data-cursor-label="EXPLORE"
                className="pky-btn pky-btn-secondary pky-btn-lg font-semibold"
              >
                <Play size={16} />
                Explore Our Solutions
              </Link>
              <Link
                href="/estimate"
                data-cursor-label="CALC"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-cyan-500/15 border border-cyan-400/35 text-xs font-bold text-cyan-200 hover:bg-cyan-500/25 transition-all shadow-md shadow-cyan-950/30"
              >
                <span>⚡ Instant Scope &amp; Cost Estimator</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 pt-8 border-t border-[var(--pky-border)]"
            >
              <p className="text-xs text-slate-300 mb-3 uppercase tracking-wider font-semibold">
                Helping businesses grow with
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {["Websites", "SEO", "AI Automation", "Custom Software", "Digital Marketing"].map((item) => (
                  <span key={item} className="text-sm text-slate-200 font-medium hover:text-cyan-300 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Immersive 3D Scroll-Driven Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center w-full"
          >
            <TechConstellation3D />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--pky-bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
