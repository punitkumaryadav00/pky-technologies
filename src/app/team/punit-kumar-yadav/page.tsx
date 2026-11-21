import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  Globe,
  Phone,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Punit Kumar Yadav (PKY) — Founder & CEO | PKY Technologies",
  description:
    "Punit Kumar Yadav is the Founder and CEO of PKY Technologies. Chief Software Architect specializing in Next.js, sub-second web performance, custom app development, and AI automation.",
  keywords: [
    "Punit Kumar Yadav",
    "PKY",
    "Punit Yadav",
    "Founder of PKY Technologies",
    "PKY Technologies CEO",
    "Chief Architect PKY",
    "Next.js Developer India",
    "Best Web Developers PKY",
    "Best App Developers",
  ],
  openGraph: {
    title: "Punit Kumar Yadav (PKY) — Founder & CEO | PKY Technologies",
    description:
      "Chief Software Architect and Founder of PKY Technologies. Engineering sub-second Next.js web applications, custom enterprise platforms, and AI systems.",
    url: "https://pkytechnologies.com/team/punit-kumar-yadav",
    siteName: "PKY Technologies",
    images: [
      {
        url: "https://pkytechnologies.com/images/team/punit.jpg",
        width: 800,
        height: 800,
        alt: "Punit Kumar Yadav - Founder & CEO of PKY Technologies",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punit Kumar Yadav (PKY) — Founder & CEO | PKY Technologies",
    description:
      "Chief Software Architect and Founder of PKY Technologies. Specializing in Next.js, AI automation, and bespoke software systems.",
    images: ["https://pkytechnologies.com/images/team/punit.jpg"],
  },
  alternates: {
    canonical: "https://pkytechnologies.com/team/punit-kumar-yadav",
  },
};

const pillars = [
  {
    icon: Zap,
    title: "Sub-Second Performance",
    desc: "Architecting edge-rendered Next.js platforms that guarantee 99+ Lighthouse performance.",
  },
  {
    icon: Cpu,
    title: "AI Autonomous Systems",
    desc: "Deploying custom LLM bots, WhatsApp funnels, and enterprise process automation.",
  },
  {
    icon: Code2,
    title: "Zero-Technical Debt",
    desc: "Strict TypeScript discipline, modular UI design systems, and robust API architectures.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial Engineering",
    desc: "Designing conversion-first user pathways that convert high-ticket business leads.",
  },
];

export default function PunitKumarYadavPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://pkytechnologies.com/team/punit-kumar-yadav#person",
    name: "Punit Kumar Yadav",
    alternateName: ["PKY", "Punit Yadav", "Punit Kumar"],
    jobTitle: "Founder & Chief Executive Officer",
    worksFor: {
      "@type": "Organization",
      "@id": "https://pkytechnologies.com/#organization",
      name: "PKY Technologies",
      url: "https://pkytechnologies.com",
    },
    image: "https://pkytechnologies.com/images/team/punit.jpg",
    url: "https://pkytechnologies.com/team/punit-kumar-yadav",
    sameAs: [
      "https://linkedin.com/in/punitkumaryadav",
      "https://github.com/punitkumaryadav00",
      "https://twitter.com/pkytechnologies",
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "Next.js App Router",
      "Custom Mobile & Web App Engineering",
      "AI Automation Workflows",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Cloud Infrastructure & Edge CDNs",
    ],
    description:
      "Punit Kumar Yadav is the Founder and CEO of PKY Technologies. Chief Software Architect specializing in Next.js, AI automation, and high-performance commercial web systems.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        className="pt-32 pb-24 relative overflow-hidden"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="pky-container relative z-10 max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-[var(--pky-text-muted)]">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>/</li>
              <li className="text-cyan-400 font-semibold" aria-current="page">
                Punit Kumar Yadav
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/60 p-2 shadow-2xl shadow-cyan-950/30 group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/team/punit.jpg"
                    alt="Punit Kumar Yadav - Founder & CEO of PKY Technologies"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[11px] font-mono font-semibold text-cyan-300">
                      <Sparkles size={12} />
                      Founder & Chief Executive Officer
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <a
                    href="https://wa.me/917419161235?text=Hello%20Punit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-all text-xs font-semibold"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="https://linkedin.com/in/punitkumaryadav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/punitkumaryadav00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="mailto:punit@pkytechnologies.com"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 mb-4 w-fit">
                <Sparkles size={14} />
                <span>CHIEF ARCHITECT PROFILE</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2"
                itemProp="name"
              >
                Punit Kumar Yadav
              </h1>

              <p
                className="text-lg text-cyan-400 font-medium mb-6"
                itemProp="jobTitle"
              >
                Founder & Chief Executive Officer, PKY Technologies
              </p>

              <div
                className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8"
                itemProp="description"
              >
                <p>
                  <strong>Punit Kumar Yadav (PKY)</strong> is the <strong>Founder & Chief Executive Officer</strong> of 
                  <strong> PKY Technologies</strong>. Serving as Chief Software Architect, Punit leads the engineering vision 
                  and system infrastructure behind some of the fastest, most resilient digital platforms on the modern web.
                </p>
                <p>
                  Specializing in <strong>Next.js 16, edge computing, AI automation agents, and custom enterprise software</strong>, 
                  Punit builds technology that directly converts traffic into tangible business revenue. Under his technical leadership, 
                  PKY Technologies has established a benchmark of sub-second page loads, 99+ Core Web Vitals, and zero-latency user experiences.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="pky-btn pky-btn-primary pky-btn-md font-bold text-xs sm:text-sm"
                >
                  <span>Schedule Call with Punit</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  className="pky-btn pky-btn-ghost pky-btn-md text-xs sm:text-sm"
                >
                  <span>View Technical Portfolio</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Architectural Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {pillars.map((item) => (
              <SpotlightCard
                key={item.title}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                  <item.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about#leadership"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              <span>← View All PKY Technologies Leadership</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
