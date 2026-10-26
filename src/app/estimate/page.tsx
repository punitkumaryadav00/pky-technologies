import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";
import { ProjectEstimator } from "@/components/estimate/ProjectEstimator";

export const metadata: Metadata = {
  title: "Project Estimator & Solution Finder | PKY Technologies",
  description:
    "Calculate your project parameters, technical architecture scope, sprint timeline, and estimated investment range with PKY Technologies’ interactive solution finder.",
  openGraph: {
    title: "Interactive Project Estimator — PKY Technologies",
    description:
      "Configure your web development, AI automation, and SEO scope in under 60 seconds.",
  },
};

export default function EstimatePage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>TRANSPARENT ARCHITECTURE PLANNING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Configure Your Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              Solution & Investment
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            Select your objectives, technical building blocks, and concurrency tier to calculate a provisional sprint roadmap and budget estimate in under 60 seconds.
          </p>
        </div>

        {/* The Estimator Wizard Component */}
        <div className="mb-20">
          <ProjectEstimator />
        </div>

        {/* Guarantees Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">Fixed-Scope Milestone Pricing</h4>
              <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                Zero surprise hourly billing or hidden maintenance markups.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">2–4 Hour SLA Brief</h4>
              <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                Receive an architect-reviewed technical proposal within 4 hours.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">Complete IP Ownership</h4>
              <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                You own 100% of the repository, design assets, and cloud deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
