import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Cpu, Gauge } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Portfolio | PKY Technologies",
  description:
    "Explore how PKY Technologies engineers unfair competitive advantages for modern enterprises through sub-second Next.js web applications, AI automation, and relentless search dominance.",
  openGraph: {
    title: "Case Studies & Work Portfolio — PKY Technologies",
    description:
      "Real-world digital transformations, technical architecture breakdowns, and commercial ROI metrics.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>ENGINEERED RESULTS & CASE ARCHITECTURES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Proven Engineering.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              Verifiable Commercial ROI.
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            We don’t build digital vanity projects. Every platform, automation agent, and SEO campaign we engineer is strictly calibrated around pipeline velocity, conversion rate optimization, and operational efficiency.
          </p>
        </div>

        {/* Global Impact Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-5 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              0.38s
            </div>
            <div className="text-xs text-[var(--pky-text-muted)] mt-1 font-medium">
              Average LCP Speed
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              +340%
            </div>
            <div className="text-xs text-[var(--pky-text-muted)] mt-1 font-medium">
              Avg. Organic Inbound Growth
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              60%+
            </div>
            <div className="text-xs text-[var(--pky-text-muted)] mt-1 font-medium">
              Inquiries Automated with AI
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              100%
            </div>
            <div className="text-xs text-[var(--pky-text-muted)] mt-1 font-medium">
              IP & Code Ownership
            </div>
          </div>
        </div>

        {/* Interactive Case Studies Grid */}
        <div className="mb-20">
          <PortfolioGrid />
        </div>

        {/* Compliance / Transparency Notice */}
        <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] max-w-4xl mx-auto mb-20 flex items-start gap-4">
          <ShieldCheck size={22} className="text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
            <strong className="text-white block mb-1">Architecture & Data Integrity Commitment:</strong>
            Case studies displayed above illustrate proprietary engineering methodologies, speed benchmarks, and conversion architectures built for our clients and representative industry archetypes. In strict compliance with our standard Non-Disclosure Agreements (NDAs), proprietary client credentials, trade secrets, and internal databases remain strictly confidential.
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-950/40 border border-cyan-500/30 p-8 sm:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            Have a Specific Architectural Vision?
          </h2>
          <p className="text-base text-[var(--pky-text-secondary)] max-w-2xl mx-auto mb-8 relative z-10">
            Send us your functional requirements, wireframes, or business bottlenecks. We will deliver a technical feasibility audit and milestone pricing within 4 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Request a Custom Solution Brief</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-white font-semibold text-sm hover:border-cyan-500/50 transition-colors flex items-center justify-center"
            >
              Review Core Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
