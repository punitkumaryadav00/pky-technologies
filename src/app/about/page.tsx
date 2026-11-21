import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Target,
  Cpu,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Terminal,
} from "lucide-react";
import { MovingOrbs } from "@/components/ui/MovingOrbs";
import { MarqueeBanner } from "@/components/ui/MarqueeBanner";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScanlineCard } from "@/components/ui/ScanlineCard";
import { Counter } from "@/components/ui/Counter";
import { FoundersSection } from "@/components/home/FoundersSection";

export const metadata: Metadata = {
  title: "About Us | PKY Technologies — Best Web Developers & Web Designing Agency",
  description:
    "Learn about PKY Technologies: our engineering philosophy, our founders Punit Kumar Yadav & Sneha Bishnoi, and why we are recognized among the best web developers, app developers, and web designing agencies.",
  keywords: [
    "About PKY Technologies",
    "PKY",
    "pky technologies",
    "Sneha Bishnoi",
    "Punit Kumar Yadav",
    "Sneha Bishnoi Co-Founder",
    "best web developers",
    "best web designing agencies",
    "best app developers",
    "leadership PKY Technologies",
  ],
  alternates: {
    canonical: "https://pkytechnologies.com/about",
  },
  openGraph: {
    title: "About PKY Technologies — Best Web Developers & Web Designing Agency",
    description:
      "Led by Punit Kumar Yadav and Sneha Bishnoi. Replacing legacy agency models with ultra-fast Next.js architecture, AI automation, and measurable revenue engineering.",
    url: "https://pkytechnologies.com/about",
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
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      {/* Radiant Ambient Floating Glowing Orbs */}
      <MovingOrbs variant="vivid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-md shadow-cyan-950/30">
            <Sparkles size={14} className="animate-spin text-[var(--pky-cyan)] [animation-duration:8s]" />
            <span>THE PKY TECHNOLOGIES ETHOS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
            We Don&apos;t Just Build Websites.
            <br />
            <span className="pky-gradient-text">
              We Build Digital Revenue Engines.
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] font-normal leading-relaxed">
            PKY Technologies was founded to bridge the painful chasm between sterile, generic dev agencies and hyper-commercial growth firms. We deliver modern, sub-second web platforms, bespoke AI automation, and relentless search dominance.
          </p>
        </div>
      </div>

      {/* Infinite Moving Marquee Ticker */}
      <div className="my-12">
        <MarqueeBanner
          items={[
            "LOOK 10X BIGGER",
            "SUB-SECOND ARCHITECTURE",
            "ENTERPRISE AI AGENTS",
            "MEASURABLE REVENUE GROWTH",
            "NEXT.JS 16 APPS",
            "ZERO TECH DEBT",
            "99+ LIGHTHOUSE SPEED",
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid with Animated Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 mb-2">
              &lt; 0.4s
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Average First Contentful Paint (FCP)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 mb-2">
              <Counter end={99} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Google PageSpeed Mobile &amp; Desktop
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 mb-2">
              <Counter end={100} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              On-Time Milestone Delivery Guarantee
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-center hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 mb-2">
              24/7
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Automated Uptime &amp; Infrastructure Monitoring
            </p>
          </div>
        </div>

        {/* The PKY Contrast Table with Cyber Laser Scanline Effect */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[var(--pky-cyan)] uppercase tracking-widest">
              THE HARD TRUTH ABOUT DIGITAL AGENCIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              Why 85% of Business Websites Fail to Generate Revenue
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-3">
              Most agencies build digital brochures and disappear. Here is how we fundamentally rethink your digital infrastructure.
            </p>
          </div>

          <ScanlineCard className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] shadow-2xl">
            <div className="grid grid-cols-12 bg-[var(--pky-bg-surface)] p-4 sm:p-5 border-b border-[var(--pky-border)] text-xs font-bold uppercase tracking-wider text-slate-300">
              <div className="col-span-3 sm:col-span-3">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-rose-300 flex items-center gap-1.5 font-bold">
                <XCircle size={16} />
                <span>The Legacy Agency Model</span>
              </div>
              <div className="col-span-5 sm:col-span-5 text-cyan-300 flex items-center gap-1.5 font-bold">
                <CheckCircle2 size={16} />
                <span>The PKY Technologies Standard</span>
              </div>
            </div>

            <div className="divide-y divide-[var(--pky-border)]">
              {comparison.map((item) => (
                <div
                  key={item.topic}
                  className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-white/[0.04] transition-colors"
                >
                  <div className="col-span-3 sm:col-span-3 font-semibold text-white pr-2">
                    {item.topic}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-rose-200/90 pr-3 leading-relaxed font-normal">
                    {item.traditional}
                  </div>
                  <div className="col-span-5 sm:col-span-5 text-cyan-200 font-medium leading-relaxed">
                    {item.pky}
                  </div>
                </div>
              ))}
            </div>
          </ScanlineCard>
        </div>

        {/* Core Architectural Pillars with Pointer Spotlight Cards */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[var(--pky-cyan)] uppercase tracking-widest">
              HOW WE ENGINEER VALUE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              Our 4 Engineering Pillars
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-2">
              Every system we architect is evaluated against these four non-negotiable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <SpotlightCard
                key={pillar.title}
                delay={idx * 0.1}
                cursorLabel="PILLAR"
                className="p-8 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center shadow-md shadow-cyan-950/30">
                    <pillar.icon size={24} />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/35 text-xs font-bold text-cyan-200 shadow-sm">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-cyan-300 font-semibold mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* The PKY Engineering Manifesto */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[var(--pky-cyan)] uppercase tracking-widest">
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
            {manifesto.map((item, idx) => (
              <SpotlightCard
                key={item.num}
                delay={idx * 0.1}
                cursorLabel="READ"
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white font-extrabold flex items-center justify-center text-sm shrink-0 shadow-lg shadow-indigo-500/25">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership & Founders Section */}
      <FoundersSection isDark={false} />

      {/* Reverse Outlined Marquee Banner before CTA */}
      <div className="my-16">
        <MarqueeBanner
          reverse={true}
          outlineText={true}
          speed="slow"
          items={[
            "OUT-ENGINEER YOUR RIVALS",
            "SUB-SECOND TTFB",
            "MAXIMIZE PIPELINE VELOCITY",
            "AUTONOMOUS BUSINESS BOT ARCHITECTURE",
            "NO COMPROMISE SECURITY",
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Closing CTA with Floating Radiant Orbs */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/95 via-indigo-950/90 to-slate-900/95 border-2 border-cyan-400/35 p-8 sm:p-14 text-center overflow-hidden shadow-[0_0_60px_rgba(0,210,255,0.15)]">
          <MovingOrbs variant="subtle" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10 drop-shadow-sm">
            Ready to Out-Engineer Your Competition?
          </h2>
          <p className="text-base text-[var(--pky-text-secondary)] max-w-2xl mx-auto mb-8 relative z-10 font-normal">
            Let&apos;s review your current digital footprint and map out a high-velocity development roadmap that unlocks measurable revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              data-cursor-label="TALK"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-bold text-sm hover:opacity-95 shadow-xl shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Schedule a Technical Discovery Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              data-cursor-label="EXPLORE"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-white font-semibold text-sm hover:border-cyan-400 transition-colors flex items-center justify-center"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
