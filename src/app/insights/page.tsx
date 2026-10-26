import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Clock,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Search,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { NewsletterForm } from "@/components/insights/NewsletterForm";

export const metadata: Metadata = {
  title: "Insights & Technical Authority | PKY Technologies",
  description:
    "Engineering insights, web architecture analyses, Generative Engine Optimization (GEO) guides, and AI automation playbooks for founders and enterprise leaders.",
  openGraph: {
    title: "PKY Technologies Insights — Engineering & Growth Intelligence",
    description:
      "Actionable engineering and digital growth perspectives written by senior practitioners.",
  },
};

const articles = [
  {
    slug: "conversion-rate-optimization-playbook",
    title: "Why 85% of Business Websites Fail to Convert (And the 4 Fixes That Drive 3x More Pipeline)",
    excerpt:
      "Most corporate websites act as expensive digital brochures. Here is the exact psychological and structural blueprint to turn passive visitors into high-intent inbound inquiries.",
    tag: "CONVERSION (CRO)",
    readTime: "6 min read",
    date: "October 2026",
    author: "PKY Architecture Team",
    highlights: [
      "Eliminating the 3-second decision freeze",
      "Sub-second TTFB impact on high-ticket conversion",
      "Dynamic proof placement above the mobile fold",
    ],
  },
  {
    slug: "nextjs-headless-architecture-guide",
    title: "Next.js & Server Components vs Legacy CMS: The Financial Case for Headless Architecture",
    excerpt:
      "Why high-growth enterprises are aggressively abandoning monolithic WordPress setups for Next.js edge-rendered architectures, and the tangible ROI on hosting, security, and developer velocity.",
    tag: "WEB ARCHITECTURE",
    readTime: "8 min read",
    date: "October 2026",
    author: "Senior Frontend Architect",
    highlights: [
      "Zero-hydration server components",
      "Cutting cloud hosting costs by 45%",
      "Eradicating security vulnerabilities and plugin bloat",
    ],
  },
  {
    slug: "generative-engine-optimization-geo-guide",
    title: "Generative Engine Optimization (GEO): How to Get Recommended by ChatGPT, Claude, and Perplexity",
    excerpt:
      "Search is no longer just blue links on Google. Learn how large language models discover, cite, and recommend authoritative businesses, and how to structure your digital footprint for AI citation.",
    tag: "AI & GEO SEARCH",
    readTime: "7 min read",
    date: "September 2026",
    author: "Search & Growth Lead",
    highlights: [
      "Entity-based semantic schema hierarchy",
      "Optimizing brand mentions for LLM latent space",
      "The death of keyword stuffing in generative search",
    ],
  },
  {
    slug: "whatsapp-ai-agents-automation-playbook",
    title: "Automating 70% of Client Inquiries: Deploying Enterprise WhatsApp AI Agents with Zero Hallucinations",
    excerpt:
      "A deep dive into integrating WhatsApp Business Cloud API with structured knowledge bases to resolve client scheduling, FAQs, and lead qualification 24/7 without losing the personal touch.",
    tag: "AI AUTOMATION",
    readTime: "5 min read",
    date: "September 2026",
    author: "AI Systems Engineer",
    highlights: [
      "Deterministic guardrails vs creative LLMs",
      "Seamless human-in-the-loop handoff triggers",
      "Connecting WhatsApp with internal ERP/CRM data",
    ],
  },
  {
    slug: "technical-debt-trap-cheap-templates",
    title: "The ₹10 Lakh Technical Debt Trap: Why Cheap Website Templates Cost 5x More in 12 Months",
    excerpt:
      "An honest teardown of what happens when businesses choose generic offshore templates over clean engineering—broken plugins, security breaches, lost SEO equity, and painful emergency rebuilds.",
    tag: "BUSINESS STRATEGY",
    readTime: "6 min read",
    date: "August 2026",
    author: "Managing Director",
    highlights: [
      "The hidden cost of unoptimized third-party JS",
      "Google Core Web Vitals ranking penalties",
      "Why clean code is an appreciating asset",
    ],
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>ENGINEERING & GROWTH PLAYBOOKS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Digital Architecture &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              Commercial Intelligence
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            No fluff. No generic agency thought leadership. Only technical frameworks, conversion blueprints, and AI deployment guides from our engineering team.
          </p>
        </div>

        {/* Featured Article Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[var(--pky-bg-card)] via-[var(--pky-bg-surface)] to-[var(--pky-bg-card)] border border-[var(--pky-border)] p-8 sm:p-12 mb-16 relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="max-w-3xl relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-bold text-cyan-400">
                FEATURED PLAYBOOK
              </span>
              <span className="text-xs text-[var(--pky-text-muted)] flex items-center gap-1.5">
                <Clock size={14} />
                <span>8 min read</span>
              </span>
              <span className="text-xs text-[var(--pky-text-muted)]">• October 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors leading-tight">
              {articles[1].title}
            </h2>
            <p className="text-base text-[var(--pky-text-secondary)] mb-6 leading-relaxed">
              {articles[1].excerpt}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {articles[1].highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all group-hover:translate-x-1"
            >
              <span>Discuss Modern Architecture For Your Firm</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-300">
                    {art.tag}
                  </span>
                  <span className="text-xs text-[var(--pky-text-muted)] flex items-center gap-1">
                    <Clock size={13} />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--pky-text-secondary)] mb-6 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-[var(--pky-border)]">
                  {art.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[var(--pky-text-muted)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--pky-border)] flex items-center justify-between">
                <span className="text-xs text-[var(--pky-text-muted)] font-medium">
                  By {art.author}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                >
                  <span>Consult An Engineer</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Digest Newsletter Box */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-950/40 border border-cyan-500/30 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6">
            <Mail size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Subscribe to the PKY Architecture Brief
          </h2>
          <p className="text-sm text-[var(--pky-text-secondary)] max-w-lg mx-auto mb-8 leading-relaxed">
            Bi-weekly engineering dissections, Core Web Vitals breakdowns, and AI deployment case studies delivered directly to your inbox. No spam, ever.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
