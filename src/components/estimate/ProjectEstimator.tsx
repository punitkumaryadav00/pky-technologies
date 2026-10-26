"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Globe,
  Bot,
  Search,
  Palette,
  Layers,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface ModuleOption {
  id: string;
  label: string;
  cost: number;
  weeks: number;
  desc: string;
}

const objectives = [
  {
    id: "web",
    title: "New High-Performance Web Platform",
    desc: "Sub-second Next.js architecture, bespoke UI/UX, and high-converting design.",
    icon: Globe,
  },
  {
    id: "growth",
    title: "Organic Search & GEO Domination",
    desc: "Rank #1 on Google, ChatGPT, Claude, and Perplexity for high-intent queries.",
    icon: Search,
  },
  {
    id: "ai",
    title: "AI Workflows & Autonomous Agents",
    desc: "24/7 intelligent WhatsApp bot, CRM automation, and internal tooling.",
    icon: Bot,
  },
  {
    id: "full",
    title: "Complete Digital Transformation",
    desc: "Full-stack web re-architecture, AI integration, and ongoing organic acquisition.",
    icon: Cpu,
  },
];

const moduleOptions: ModuleOption[] = [
  {
    id: "nextjs-core",
    label: "Custom Next.js 16 Web Architecture",
    cost: 75000,
    weeks: 2,
    desc: "App Router, TypeScript, sub-second edge deployment, and responsive UI.",
  },
  {
    id: "ai-whatsapp",
    label: "24/7 Autonomous WhatsApp AI Agent",
    cost: 50000,
    weeks: 1.5,
    desc: "Cloud API bot with custom knowledge base and CRM lead synchronization.",
  },
  {
    id: "geo-seo",
    label: "GEO & Technical SEO Package",
    cost: 45000,
    weeks: 1.5,
    desc: "Schema hierarchy, Core Web Vitals audit, and generative AI search indexing.",
  },
  {
    id: "headless-shop",
    label: "Headless E-Commerce / Custom Portal",
    cost: 65000,
    weeks: 2,
    desc: "Frictionless checkout, cart optimization, and inventory webhook sync.",
  },
  {
    id: "branding-design",
    label: "Brand Identity & 3D Interactive Graphics",
    cost: 40000,
    weeks: 1.5,
    desc: "Design system tokens, typography curation, logo refresh, and 3D visual elements.",
  },
  {
    id: "lead-funnel",
    label: "High-Ticket Lead Qualification Funnel",
    cost: 35000,
    weeks: 1,
    desc: "Multi-step interactive quiz, calendar booking integration, and automated email/SMS.",
  },
];

const scaleTiers = [
  {
    id: "startup",
    title: "Emerging Startup / High-Growth Boutique",
    multiplier: 1.0,
    desc: "Agile, focused MVP architecture with rapid speed-to-market.",
  },
  {
    id: "midmarket",
    title: "Established Mid-Market Enterprise",
    multiplier: 1.25,
    desc: "Advanced multi-branch logic, role permissions, and custom ERP integration.",
  },
  {
    id: "enterprise",
    title: "Large Scale Multi-Entity Corporation",
    multiplier: 1.6,
    desc: "High-concurrency infrastructure, strict enterprise security, and 24/7 SLAs.",
  },
];

export function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState("web");
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "nextjs-core",
    "geo-seo",
  ]);
  const [selectedScale, setSelectedScale] = useState("startup");

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Calculation
  const baseCost = selectedModules.reduce((acc, modId) => {
    const mod = moduleOptions.find((m) => m.id === modId);
    return acc + (mod ? mod.cost : 0);
  }, 0);

  const totalWeeks = Math.max(
    2.5,
    selectedModules.reduce((acc, modId) => {
      const mod = moduleOptions.find((m) => m.id === modId);
      return acc + (mod ? mod.weeks * 0.75 : 0);
    }, 0)
  );

  const activeScale = scaleTiers.find((s) => s.id === selectedScale) || scaleTiers[0];
  const finalCost = Math.round((baseCost * activeScale.multiplier) / 5000) * 5000;
  const lowRange = Math.max(45000, Math.round((finalCost * 0.85) / 5000) * 5000);
  const highRange = Math.round((finalCost * 1.15) / 5000) * 5000;

  return (
    <div className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Progress Bar */}
      <div className="mb-8 relative z-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--pky-text-muted)] mb-2">
          <span>Step {step} of 3</span>
          <span className="text-cyan-400">
            {step === 1 && "Choose Primary Objective"}
            {step === 2 && "Select Architecture Modules"}
            {step === 3 && "Review Blueprint & Ballpark"}
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-[var(--pky-bg-surface)] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 relative z-10"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                What is your core business objective?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--pky-text-secondary)]">
                Select the primary transformation driver for your company.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {objectives.map((obj) => {
                const isSelected = selectedObjective === obj.id;
                return (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setSelectedObjective(obj.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-blue-900/30 to-cyan-950/20 border-cyan-500/60 shadow-lg shadow-cyan-500/15"
                        : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] hover:border-[var(--pky-border-hover)]"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-cyan-500 text-black font-bold"
                          : "bg-cyan-500/10 text-cyan-400"
                      }`}
                    >
                      <obj.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {obj.title}
                      </h4>
                      <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                        {obj.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Module Selection</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 relative z-10"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Select your required architectural modules
              </h3>
              <p className="text-xs sm:text-sm text-[var(--pky-text-secondary)]">
                Choose the technical building blocks for your solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {moduleOptions.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-blue-900/20 to-cyan-950/20 border-cyan-500/50 shadow-sm shadow-cyan-500/10"
                        : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] hover:border-[var(--pky-border-hover)]"
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {mod.label}
                      </h4>
                      <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? "bg-cyan-500 border-cyan-400 text-black font-bold text-xs"
                          : "border-[var(--pky-border)]"
                      }`}
                    >
                      {isSelected && "✓"}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Scale selection */}
            <div className="pt-2">
              <label className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                Select Business Scale & Concurrency Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleTiers.map((tier) => {
                  const isSelected = selectedScale === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedScale(tier.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "bg-cyan-500/15 border-cyan-500 text-white font-medium"
                          : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] text-[var(--pky-text-muted)] hover:text-white"
                      }`}
                    >
                      <div className="font-bold text-white mb-0.5">{tier.title}</div>
                      <div className="text-[10px] text-[var(--pky-text-muted)]">
                        {tier.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-[var(--pky-border)] text-white text-xs font-semibold hover:border-cyan-500/40 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={selectedModules.length === 0}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40"
              >
                <span>Generate Estimated Blueprint</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 relative z-10"
          >
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
                PROVISIONAL ARCHITECTURE ESTIMATE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Your Engineered Solution Blueprint
              </h3>
            </div>

            {/* Estimated Output Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-blue-950/40 border border-cyan-500/30">
              <div>
                <span className="text-[11px] font-semibold text-[var(--pky-text-muted)] uppercase tracking-wider block mb-1">
                  Estimated Investment Range
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  ₹{lowRange.toLocaleString("en-IN")} – ₹{highRange.toLocaleString("en-IN")}
                </div>
                <p className="text-[11px] text-[var(--pky-text-muted)] mt-1">
                  Transparent milestone pricing • Zero recurring agency lock-in
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[var(--pky-text-muted)] uppercase tracking-wider block mb-1">
                  Estimated Sprint Timeline
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  ~{Math.round(totalWeeks)} Weeks
                </div>
                <p className="text-[11px] text-[var(--pky-text-muted)] mt-1">
                  Agile weekly sprints with dedicated staging previews
                </p>
              </div>
            </div>

            {/* Included Modules Summary */}
            <div className="p-5 rounded-2xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)]">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                Selected Modules & Architecture Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedModules.map((modId) => {
                  const mod = moduleOptions.find((m) => m.id === modId);
                  if (!mod) return null;
                  return (
                    <div key={modId} className="flex items-center gap-2 text-xs text-[var(--pky-text-secondary)]">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{mod.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl border border-[var(--pky-border)] text-white text-xs font-semibold hover:border-cyan-500/40 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Adjust Parameters</span>
              </button>

              <Link
                href={`/contact?services=${encodeURIComponent(
                  selectedModules.join(",")
                )}&scale=${selectedScale}&budget=${encodeURIComponent(
                  `₹${lowRange.toLocaleString("en-IN")} – ₹${highRange.toLocaleString("en-IN")}`
                )}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Lock In This Scope & Request Formal RFP</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
