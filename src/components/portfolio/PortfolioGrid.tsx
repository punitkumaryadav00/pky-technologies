"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  TrendingUp,
  Gauge,
  CheckCircle2,
  Layers,
  Bot,
  Globe,
  Search,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "web" | "ai" | "seo" | "branding";
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  tags: string[];
  metricsHighlight: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "apex-capital",
    title: "Apex Capital Advisory — High-Ticket FinTech & Investor Portal",
    category: "web",
    clientType: "Private Wealth & Institutional Advisory",
    industry: "Financial Services / FinTech",
    challenge:
      "Legacy website loaded in 4.8 seconds with a 72% bounce rate among high-net-worth visitors, failing to convert accredited investor traffic into confidential consultation requests.",
    solution:
      "Engineered an ultra-secure, headless Next.js 16 portal with server components, real-time portfolio returns visualizer, automated KYC qualification funnel, and sub-second edge caching.",
    results: [
      { label: "Core Web Vitals LCP", value: "0.38s" },
      { label: "Qualified Lead Volume", value: "+310%" },
      { label: "New Pipeline Generated", value: "$4.2M+" },
    ],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare Edge"],
    metricsHighlight: "+310% High-Intent Lead Inflow",
  },
  {
    id: "lumina-health",
    title: "Lumina Health & Wellness — Telemedicine & Clinical Booking Engine",
    category: "ai",
    clientType: "Multi-Location Specialty Clinic",
    industry: "Healthcare & MedTech",
    challenge:
      "Front-desk staff was overwhelmed with 400+ daily booking calls, leading to a 34% drop-off in patient reservations and high no-show rates.",
    solution:
      "Deployed an autonomous WhatsApp scheduling agent integrated with electronic health records (EHR), coupled with a lightning-fast doctor directory and automated 1-click consultation reminders.",
    results: [
      { label: "Booking Drop-Off Reduction", value: "-68%" },
      { label: "Patient No-Show Rate", value: "< 4.5%" },
      { label: "24/7 Automated Bookings", value: "82% Share" },
    ],
    tags: ["WhatsApp Business API", "Python LLM Agent", "Next.js", "PostgreSQL", "HIPAA-Ready"],
    metricsHighlight: "82% Automated Self-Bookings",
  },
  {
    id: "veritas-legal",
    title: "Veritas Legal Partners — Corporate Litigation Practice Portal & GEO",
    category: "seo",
    clientType: "Commercial Litigation & Arbitration Firm",
    industry: "Legal & Professional Services",
    challenge:
      "Zero organic visibility on search engines for high-ticket commercial litigation keywords, relying entirely on expensive referrals with erratic client acquisition.",
    solution:
      "Executed a comprehensive Technical SEO, Generative Engine Optimization (GEO) overhaul, schema structured data hierarchy, and authority content clustering for 50+ key business law queries.",
    results: [
      { label: "Top-3 Google Rankings", value: "48 Keywords" },
      { label: "Organic Search Inquiries", value: "+420%" },
      { label: "Cost Per Client Acquisition", value: "-62%" },
    ],
    tags: ["Technical SEO", "Schema.org", "GEO / AEO", "Semantic Content", "Core Web Vitals"],
    metricsHighlight: "+420% Organic Search Retainers",
  },
  {
    id: "aura-living",
    title: "Aura Living — Direct-to-Consumer Luxury Home & Interior E-Commerce",
    category: "web",
    clientType: "Premium Architectural Home Decor",
    industry: "Luxury E-Commerce & Retail",
    challenge:
      "Sluggish Shopify theme with bloated script tags caused severe mobile checkout abandonment (checkout completion rate under 1.6%).",
    solution:
      "Built a headless Next.js storefront powered by Shopify Storefront API with instant page transitions, dynamic room visualizer, and streamlined 2-step Apple Pay / UPI checkout.",
    results: [
      { label: "Mobile Checkout Rate", value: "4.3% (Up from 1.6%)" },
      { label: "Average Order Value (AOV)", value: "+38%" },
      { label: "Mobile Performance Score", value: "98/100" },
    ],
    tags: ["Headless Next.js", "Shopify GraphQL", "Tailwind CSS", "Vercel Edge", "Stripe / Razorpay"],
    metricsHighlight: "2.7x Mobile Conversion Lift",
  },
  {
    id: "nexus-logistics",
    title: "Nexus Global Freight — AI-Powered Consignment Tracking & WhatsApp Desk",
    category: "ai",
    clientType: "International B2B Freight Forwarder",
    industry: "Logistics & Supply Chain",
    challenge:
      "Customer support team spent 6+ hours daily replying to routine container status, customs clearance, and delivery ETA inquiries via phone and email.",
    solution:
      "Engineered an automated WhatsApp Business AI bot connected directly to port APIs and internal ERP, providing real-time multimodal container status updates in seconds.",
    results: [
      { label: "Support Ticket Deflection", value: "74%" },
      { label: "Average Response Time", value: "< 8 Seconds" },
      { label: "Annual Operational Savings", value: "₹24,00,000+" },
    ],
    tags: ["FastAPI", "OpenAI / Claude Agents", "WhatsApp API", "Redis Caching", "Docker"],
    metricsHighlight: "74% Inquiries Resolved Autonomously",
  },
  {
    id: "monolith-branding",
    title: "Monolith Robotics — Brand Strategy, Visual Identity & Investor Deck",
    category: "branding",
    clientType: "Autonomous Industrial Warehouse Automation",
    industry: "DeepTech / Robotics",
    challenge:
      "Inconsistent branding and technical jargon made it hard to pitch Tier-1 enterprise logistics directors and Series-A institutional venture investors.",
    solution:
      "Architected a sleek cyberpunk/industrial visual design system, 3D interactive product rendering, brand guidelines, and an investor-grade pitch deck narrative.",
    results: [
      { label: "Series A Capital Raised", value: "$6.5M" },
      { label: "Enterprise Inbound Inquiries", value: "+180%" },
      { label: "Brand Recall Lift", value: "94% Score" },
    ],
    tags: ["Brand Identity", "Design System", "3D Web Graphics", "Figma Design", "Investor Deck"],
    metricsHighlight: "$6.5M Venture Funding Unlocked",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Architecture" },
  { id: "ai", label: "AI & Automation" },
  { id: "seo", label: "SEO & Growth" },
  { id: "branding", label: "Brand Identity" },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white shadow-lg shadow-cyan-500/25"
                  : "bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-[var(--pky-text-secondary)] hover:text-white hover:border-[var(--pky-border-hover)]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all group shadow-xl relative overflow-hidden"
            >
              {/* Background subtle gradient glow on hover */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
                    {study.industry}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-[var(--pky-text-muted)] font-mono">
                    ARCHETYPE CASE STUDY
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs text-[var(--pky-text-muted)] mb-6 font-medium">
                  Client Profile: {study.clientType}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)]/70 border border-[var(--pky-border)] text-xs leading-relaxed">
                    <strong className="text-rose-400 block mb-1">The Bottleneck:</strong>
                    <span className="text-[var(--pky-text-secondary)]">{study.challenge}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)]/70 border border-[var(--pky-border)] text-xs leading-relaxed">
                    <strong className="text-cyan-400 block mb-1">The PKY Architecture:</strong>
                    <span className="text-[var(--pky-text-secondary)]">{study.solution}</span>
                  </div>
                </div>

                {/* Highlight Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-950/30 to-cyan-950/20 border border-cyan-500/20 mb-6">
                  {study.results.map((res) => (
                    <div key={res.label} className="text-center">
                      <div className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-[var(--pky-text-muted)] mt-0.5 leading-tight">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-[var(--pky-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--pky-border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>{study.metricsHighlight}</span>
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Similar Build</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
