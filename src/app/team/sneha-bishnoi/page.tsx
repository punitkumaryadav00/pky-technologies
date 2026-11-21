import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Compass,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Sneha Bishnoi — Co-Founder & Head of Operations | PKY Technologies",
  description:
    "Sneha Bishnoi is the Co-Founder and Head of Operations at PKY Technologies. Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier leading agile delivery, product strategy, and client growth.",
  keywords: [
    "Sneha Bishnoi",
    "Sneha Bishnoi PKY",
    "Sneha Bishnoi PKY Technologies",
    "Sneha Bishnoi Co-Founder",
    "Sneha Bishnoi DRDO CEPTAM",
    "Sneha Bishnoi HSBTE Topper",
    "Sneha Bishnoi Computer Engineer",
    "PKY Technologies Leadership",
    "PKY Technologies Co-Founder",
  ],
  openGraph: {
    title: "Sneha Bishnoi — Co-Founder & Head of Operations | PKY Technologies",
    description:
      "Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier. Sneha Bishnoi leads operational excellence, agile sprints, and client success at PKY Technologies.",
    url: "https://pkytechnologies.com/team/sneha-bishnoi",
    siteName: "PKY Technologies",
    images: [
      {
        url: "https://pkytechnologies.com/images/team/sneha.jpg",
        width: 800,
        height: 800,
        alt: "Sneha Bishnoi - Co-Founder & Head of Operations at PKY Technologies",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Bishnoi — Co-Founder & Head of Operations | PKY Technologies",
    description:
      "Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier leading operations and product growth at PKY Technologies.",
    images: ["https://pkytechnologies.com/images/team/sneha.jpg"],
  },
  alternates: {
    canonical: "https://pkytechnologies.com/team/sneha-bishnoi",
  },
};

const credentials = [
  {
    icon: Award,
    title: "HSBTE State Topper",
    desc: "Achieved top academic distinction across the state board in Computer Engineering.",
  },
  {
    icon: ShieldCheck,
    title: "DRDO CEPTAM Qualifier",
    desc: "Qualified the prestigious national defense technical examination for premier R&D standards.",
  },
  {
    icon: GraduationCap,
    title: "Computer Engineer",
    desc: "Deep engineering foundation blending algorithmic discipline with production execution.",
  },
  {
    icon: Briefcase,
    title: "Operations & Delivery Lead",
    desc: "Steering cross-functional development squads to maintain a 100% on-time milestone delivery record.",
  },
];

const expertise = [
  "Agile Sprint Delivery & Milestone Management",
  "Product Lifecycle & Roadmap Execution",
  "High-Performance Web & Mobile System Architectures",
  "Client Success & Commercial ROI Pipelines",
  "Cross-Functional Squad Leadership",
  "Quality Assurance & Zero-Technical-Debt Standards",
];

export default function SnehaBishnoiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://pkytechnologies.com/team/sneha-bishnoi#person",
    name: "Sneha Bishnoi",
    alternateName: ["Sneha", "Er. Sneha Bishnoi", "Sneha Bishnoi Co-Founder"],
    jobTitle: "Co-Founder & Head of Operations",
    worksFor: {
      "@type": "Organization",
      "@id": "https://pkytechnologies.com/#organization",
      name: "PKY Technologies",
      url: "https://pkytechnologies.com",
    },
    image: "https://pkytechnologies.com/images/team/sneha.jpg",
    url: "https://pkytechnologies.com/team/sneha-bishnoi",
    sameAs: [
      "https://linkedin.com/in/snehabishnoi",
      "https://twitter.com/snehabishnoi",
    ],
    alumniOf: "Computer Engineering (HSBTE)",
    award: [
      "HSBTE State Board Topper",
      "DRDO CEPTAM National Qualifier",
    ],
    knowsAbout: [
      "Operations Management",
      "Computer Engineering",
      "Product Strategy",
      "Agile Development",
      "Client Growth Strategy",
      "High-Performance Web Design",
      "App Development Sprints",
    ],
    description:
      "Sneha Bishnoi is the Co-Founder and Head of Operations at PKY Technologies. Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier directing product growth, engineering operations, and client success.",
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
        {/* Glow Effects */}
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
                Sneha Bishnoi
              </li>
            </ol>
          </nav>

          {/* Hero Profile Header */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            {/* Founder Image Card */}
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/60 p-2 shadow-2xl shadow-cyan-950/30 group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/team/sneha.jpg"
                    alt="Sneha Bishnoi - Co-Founder & Head of Operations at PKY Technologies"
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
                      Co-Founder & Head of Operations
                    </span>
                  </div>
                </div>

                {/* Quick Contact & Links */}
                <div className="p-4 space-y-3">
                  <a
                    href="https://wa.me/918708572286?text=Hello%20Sneha,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-all text-xs font-semibold"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="https://linkedin.com/in/snehabishnoi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:sneha@pkytechnologies.com"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                    >
                      Email
                    </a>
                    <a
                      href="tel:+918708572286"
                      className="py-2 px-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 text-center text-xs font-medium transition-all"
                      title="Direct Phone Call"
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Bio & Title Details */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 mb-4 w-fit">
                <Sparkles size={14} />
                <span>EXECUTIVE LEADERSHIP PROFILE</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2"
                itemProp="name"
              >
                Sneha Bishnoi
              </h1>

              <p
                className="text-lg text-cyan-400 font-medium mb-6"
                itemProp="jobTitle"
              >
                Co-Founder & Head of Operations, PKY Technologies
              </p>

              <div
                className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8"
                itemProp="description"
              >
                <p>
                  <strong>Sneha Bishnoi</strong> is a distinguished <strong>Computer Engineer</strong>, 
                  <strong> HSBTE State Board Topper</strong>, and <strong>DRDO CEPTAM Qualifier</strong>. 
                  As the <strong>Co-Founder & Head of Operations</strong> at <strong>PKY Technologies</strong>, 
                  she directs end-to-end product delivery cycles, agile development sprints, and client success operations.
                </p>
                <p>
                  Sneha bridges high-level technical engineering with pragmatic operational execution. Under her 
                  leadership, PKY Technologies maintains an exceptional <strong>100% on-time milestone delivery rate</strong>, 
                  ensuring complex web platforms, custom mobile applications, and AI automation systems transition seamlessly from 
                  architectural blueprints into market-ready, high-converting digital products.
                </p>
                <p>
                  Her engineering rigor guarantees zero technical debt, rigorous automated quality gates, and platforms built 
                  to scale effortlessly for high-growth enterprises worldwide.
                </p>
              </div>

              {/* Direct Booking CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="pky-btn pky-btn-primary pky-btn-md font-bold text-xs sm:text-sm"
                >
                  <span>Book Consultation With Sneha</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services/web-development"
                  className="pky-btn pky-btn-ghost pky-btn-md text-xs sm:text-sm"
                >
                  <span>Explore Web Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Credentials & Distinctions Grid */}
          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-cyan-400" size={24} />
              <span>Academic & Operational Distinctions</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {credentials.map((cred) => (
                <SpotlightCard
                  key={cred.title}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                    <cred.icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{cred.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cred.desc}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Operational & Technical Mastery */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 sm:p-10 mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
                Operational Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Sneha Drives High-Velocity Engineering at PKY Technologies
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-200 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Leadership & Agency Overview */}
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
