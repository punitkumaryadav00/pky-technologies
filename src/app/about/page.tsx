import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Cpu,
  TrendingUp,
  Code2,
  Users,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | PKY Technologies — Engineering Digital Dominance",
  description:
    "Learn about PKY Technologies: our engineering philosophy, our senior multidisciplinary team, and why we build high-performance web applications, AI automations, and growth systems for ambitious businesses.",
  openGraph: {
    title: "About PKY Technologies — The Engineering-First Digital Partner",
    description:
      "We replace bloated legacy agency models with ultra-fast Next.js architecture, AI automation, and measurable revenue engineering.",
  },
};

const comparison = [
  {
    topic: "Architecture & Stack",
    traditional: "Bloated, slow WordPress templates with 30+ vulnerable plugins",
    pky: "Custom Next.js & React App Router, TypeScript, edge-rendered with sub-second TTFB",
  },
  {
    topic: "Business Focus",
    traditional: "Vanity metrics (pageviews, superficial impressions) with zero revenue correlation",
    pky: "Commercial CRO, pipeline conversion, customer lifetime value & tangible ROI",
  },
  {
    topic: "Execution & Talent",
    traditional: "Pitched by senior sales executives, handed off to offshore interns",
    pky: "Cross-functional squads led directly by senior product engineers & designers",
  },
  {
    topic: "AI & Innovation",
    traditional: "Generic ChatGPT wrappers or zero automation integration",
    pky: "Custom LLM agents, automated WhatsApp business funnels & autonomous workflows",
  },
  {
    topic: "Ownership & Security",
    traditional: "Proprietary lock-in, sluggish hosting, security vulnerabilities",
    pky: "100% clean IP ownership, edge-cached, SOC2-ready security best practices",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Sub-Second Performance",
    subtitle: "Speed is our baseline, not a feature",
    desc: "A 100ms delay drops conversions by 7%. We build on Next.js 16, server components, and global edge CDNs to guarantee 99+ Core Web Vitals on mobile and desktop.",
    badge: "99+ Lighthouse Score",
  },
  {
    icon: Target,
    title: "Revenue & Conversion (CRO)",
    subtitle: "Design that commands high-ticket decisions",
    desc: "We don't design for aesthetic applause alone; we design conversion pathways that address high-intent buyer psychologies and turn casual visitors into enterprise leads.",
    badge: "3.4x Avg. Pipeline Lift",
  },
  {
    icon: Cpu,
    title: "AI & Autonomous Engineering",
    subtitle: "Automate what drains your human capital",
    desc: "From 24/7 intelligent WhatsApp qualification bots to custom internal dashboards, we weave generative AI into your operational workflows to cut overhead by 60%+.",
    badge: "Zero-Latency Workflows",
  },
  {
    icon: Terminal,
    title: "Zero-Debt Engineering",
    subtitle: "Enterprise-grade code you actually own",
    desc: "Strict TypeScript, automated CI/CD pipelines, modular design systems, and rigorous semantic HTML. Clean architectures designed to scale effortlessly for decades.",
    badge: "100% Full IP Transfer",
  },
];

const stats = [
  { value: "< 0.4s", label: "Average First Contentful Paint (FCP)" },
  { value: "99+", label: "Google PageSpeed Mobile & Desktop" },
  { value: "100%", label: "On-Time Milestone Delivery Guarantee" },
  { value: "24/7", label: "Automated Uptime & Infrastructure Monitoring" },
];

const manifesto = [
  {
    num: "01",
    title: "Speed is an Unfair Competitive Advantage",
    desc: "When your platform loads in 300ms while your competitors take 4 seconds, you win the customer before they have time to reconsider.",
  },
  {
    num: "02",
    title: "Aesthetics Establish Immediate Authority",
    desc: "High-ticket enterprise clients judge your capability within 50 milliseconds of landing on your page. Premium design isn't vanity—it's credibility insurance.",
  },
  {
    num: "03",
    title: "Never Ship Code You Wouldn't Bet Your Own Business On",
    desc: "We test across every breakpoint, device class, network latency profile, and accessibility requirement. Zero shortcuts, zero tech debt.",
  },
  {
    num: "04",
    title: "Radical Transparency & Absolute Ownership",
    desc: "You own every single line of code, design file, and asset. No recurring hostage retainers, no hidden fees, no proprietary lock-ins.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>THE PKY TECHNOLOGIES ETHOS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            We Don’t Just Build Websites.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              We Build Digital Revenue Engines.
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            PKY Technologies was founded to bridge the painful chasm between sterile, generic dev agencies and hyper-commercial growth firms. We deliver modern, sub-second web platforms, bespoke AI automation, and relentless search dominance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                {s.value}
              </div>
              <p className="text-xs sm:text-sm text-[var(--pky-text-muted)] font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* The PKY Contrast Table: Why Traditional Agencies Fail */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              THE HARD TRUTH ABOUT DIGITAL AGENCIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              Why 85% of Business Websites Fail to Generate Revenue
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-3">
              Most agencies build digital brochures and disappear. Here is how we fundamentally rethink your digital infrastructure.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] shadow-xl">
            <div className="grid grid-cols-12 bg-[var(--pky-bg-surface)] p-4 sm:p-5 border-b border-[var(--pky-border)] text-xs font-bold uppercase tracking-wider text-[var(--pky-text-muted)]">
              <div className="col-span-3 sm:col-span-3">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-rose-400 flex items-center gap-1.5">
                <XCircle size={15} />
                <span>The Legacy Agency Model</span>
              </div>
              <div className="col-span-5 sm:col-span-5 text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 size={15} />
                <span>The PKY Technologies Standard</span>
              </div>
            </div>

            <div className="divide-y divide-[var(--pky-border)]">
              {comparison.map((item) => (
                <div
                  key={item.topic}
                  className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-3 sm:col-span-3 font-semibold text-white pr-2">
                    {item.topic}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-rose-300/80 pr-3 leading-relaxed">
                    {item.traditional}
                  </div>
                  <div className="col-span-5 sm:col-span-5 text-cyan-300 font-medium leading-relaxed">
                    {item.pky}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              OUR ARCHITECTURAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              Engineered for Maximum Commercial Leverage
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-3">
              Every system we build rests upon four non-negotiable engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="relative p-8 rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] hover:border-cyan-500/40 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <pillar.icon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-cyan-400/90 font-medium mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The PKY Engineering Manifesto */}
        <div className="rounded-3xl bg-gradient-to-b from-[var(--pky-bg-card)] to-[var(--pky-bg-surface)] border border-[var(--pky-border)] p-8 sm:p-14 mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              OUR INTERNAL CODE OF CONDUCT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              The PKY Engineering Manifesto
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-2">
              The internal rules that govern every sprint, pull request, and client deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manifesto.map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-extrabold flex items-center justify-center text-sm shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-950/40 border border-cyan-500/30 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to Out-Engineer Your Competition?
          </h2>
          <p className="text-base text-[var(--pky-text-secondary)] max-w-2xl mx-auto mb-8 relative z-10">
            Let’s review your current digital footprint and map out a high-velocity development roadmap that unlocks measurable revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Schedule a Technical Discovery Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-white font-semibold text-sm hover:border-cyan-500/50 transition-colors flex items-center justify-center"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
