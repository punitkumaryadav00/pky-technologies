"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--pky-gradient-hero)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="pky-glow-orb w-[500px] h-[500px] bg-[var(--pky-accent)] opacity-[0.12] -top-40 -right-40" 
        style={{ animation: 'pky-pulse-glow 6s ease-in-out infinite' }} />
      <div className="pky-glow-orb w-[400px] h-[400px] bg-[var(--pky-cyan)] opacity-[0.08] bottom-0 left-[-200px]"
        style={{ animation: 'pky-pulse-glow 8s ease-in-out infinite 2s' }} />
      <div className="pky-glow-orb w-[300px] h-[300px] bg-[var(--pky-indigo)] opacity-[0.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animation: 'pky-pulse-glow 5s ease-in-out infinite 1s' }} />

      {/* Hero Content */}
      <div className="relative z-10 pky-container pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="pky-badge mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--pky-accent-light)] animate-pulse" />
                Your Digital Growth Partner
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
              className="pky-body text-lg mb-8 max-w-xl"
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
              <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">
                Book a Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="pky-btn pky-btn-secondary pky-btn-lg">
                <Play size={16} />
                Explore Our Solutions
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all"
              >
                <span>⚡ Instant Scope & Cost Estimator</span>
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
              <p className="text-xs text-[var(--pky-text-muted)] mb-3 uppercase tracking-wider">
                Helping businesses grow with
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {["Websites", "SEO", "AI Automation", "Custom Software", "Digital Marketing"].map((item) => (
                  <span key={item} className="text-sm text-[var(--pky-text-secondary)] font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D-like Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Orbiting rings */}
              <div className="absolute inset-0 rounded-full border border-[var(--pky-border)] opacity-40"
                style={{ animation: 'pky-spin-slow 20s linear infinite' }} />
              <div className="absolute inset-8 rounded-full border border-[var(--pky-border-accent)] opacity-30"
                style={{ animation: 'pky-spin-slow 15s linear infinite reverse' }} />
              <div className="absolute inset-16 rounded-full border border-[var(--pky-accent-glow)] opacity-25"
                style={{ animation: 'pky-spin-slow 12s linear infinite' }} />

              {/* Central glowing sphere */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--pky-accent)] to-[var(--pky-cyan)] opacity-80 blur-sm"
                  style={{ animation: 'pky-pulse-glow 4s ease-in-out infinite' }} />
                <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[var(--pky-accent-light)] to-[var(--pky-cyan)] opacity-90" />
              </div>

              {/* Floating nodes */}
              {[
                { label: "Web", x: "10%", y: "20%", delay: 0 },
                { label: "SEO", x: "80%", y: "15%", delay: 0.5 },
                { label: "AI", x: "85%", y: "70%", delay: 1 },
                { label: "Ads", x: "15%", y: "75%", delay: 1.5 },
                { label: "Data", x: "50%", y: "5%", delay: 2 },
                { label: "CRM", x: "50%", y: "90%", delay: 2.5 },
              ].map((node) => (
                <motion.div
                  key={node.label}
                  className="absolute"
                  style={{ left: node.x, top: node.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + node.delay * 0.3 }}
                >
                  <div className="relative" style={{ animation: `pky-float 5s ease-in-out infinite ${node.delay}s` }}>
                    <div className="w-12 h-12 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border-accent)] flex items-center justify-center shadow-lg">
                      <span className="text-xs font-semibold pky-gradient-text">{node.label}</span>
                    </div>
                    {/* Connection line to center */}
                    <div className="absolute w-px h-8 bg-gradient-to-b from-[var(--pky-accent-glow)] to-transparent -bottom-8 left-1/2 -translate-x-1/2 opacity-40" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--pky-bg-primary)] to-transparent" />
    </section>
  );
}
