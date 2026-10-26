import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Search, Palette, Bot, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore PKY Technologies' full range of digital services — website development, SEO, branding, AI automation, and custom software solutions.",
};

const categories = [
  {
    icon: Globe,
    title: "Digital Presence & Website Solutions",
    description:
      "We build high-performance, conversion-optimized websites that establish credibility, attract customers, and grow your business online.",
    services: [
      "Business Website Development",
      "Premium Corporate & Professional Websites",
      "Website Redesign & Modernization",
      "Landing Pages & Lead-Generation Websites",
      "Portfolio & Personal-Brand Websites",
      "Website Maintenance, Speed & Security",
      "E-Commerce & Online Ordering Solutions",
    ],
    href: "/services/web-development",
    color: "var(--pky-accent)",
  },
  {
    icon: Search,
    title: "Digital Visibility & Client Acquisition",
    description:
      "We help your business get found online, attract the right audience, and convert visitors into paying customers through proven strategies.",
    services: [
      "Search Engine Optimization (SEO)",
      "Local SEO & Google Business Profile",
      "Technical SEO & On-Page Optimization",
      "Content Strategy & Website Content",
      "Google Ads & Meta Ads Management",
      "Conversion Optimization & Lead Strategy",
      "AI Search Visibility (GEO)",
      "Analytics, Reporting & Measurement",
    ],
    href: "/services/seo",
    color: "var(--pky-cyan)",
  },
  {
    icon: Palette,
    title: "Branding & Content",
    description:
      "We craft compelling brand identities and content strategies that build recognition, trust, and emotional connection with your audience.",
    services: [
      "Brand Identity & Digital Presentation",
      "Social Media Management",
      "Content Writing & Website Copywriting",
      "Video & AI-Assisted Video Content",
      "Marketing Creatives & Campaign Assets",
      "Translation & Localization",
      "PR & Digital Reputation Support",
    ],
    href: "/services/branding",
    color: "var(--pky-accent-light)",
  },
  {
    icon: Bot,
    title: "AI, Automation & Custom Technology",
    description:
      "We build intelligent solutions that automate workflows, enhance customer interactions, and give your business a genuine competitive advantage.",
    services: [
      "AI-Powered Website Chatbots",
      "Customer Enquiry & Lead Automation",
      "WhatsApp Business Automation",
      "Custom Web Applications & Tools",
      "Business Dashboards & Reporting",
      "Inventory & Workflow Management",
      "Third-Party API Integrations",
      "Ongoing Software Support",
    ],
    href: "/services/ai-automation",
    color: "var(--pky-indigo)",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pky-section pky-section-dark text-center relative overflow-hidden">
        <div className="pky-glow-orb w-[500px] h-[500px] bg-[var(--pky-accent)] opacity-[0.08] top-0 left-1/2 -translate-x-1/2" />
        <div className="pky-container relative z-10">
          <span className="pky-label inline-block mb-4">Our Services</span>
          <h1 className="pky-heading-1 mb-5 max-w-3xl mx-auto">
            Comprehensive Digital Solutions for{" "}
            <span className="pky-gradient-text">Business Growth</span>
          </h1>
          <p className="pky-body text-lg max-w-2xl mx-auto mb-8">
            From your first website to AI-powered automation, we provide everything your
            business needs to succeed in the digital landscape.
          </p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          className={`pky-section ${i % 2 === 0 ? "pky-section-darker" : "pky-section-dark"}`}
        >
          <div className="pky-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}22, transparent)`,
                    border: `1px solid ${cat.color}33`,
                  }}
                >
                  <cat.icon size={26} style={{ color: cat.color }} />
                </div>
                <h2 className="pky-heading-2 mb-4">{cat.title}</h2>
                <p className="pky-body mb-6">{cat.description}</p>
                <Link
                  href={cat.href}
                  className="pky-btn pky-btn-secondary inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-3">
                {cat.services.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] hover:border-[var(--pky-border-hover)] transition-colors"
                  >
                    <CheckCircle2 size={18} style={{ color: cat.color }} className="shrink-0" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="pky-section pky-section-dark text-center">
        <div className="pky-container max-w-2xl">
          <h2 className="pky-heading-2 mb-4">Not Sure Where to Start?</h2>
          <p className="pky-body mb-8">
            Book a free strategy call and we&apos;ll help you identify the right solutions for your business goals and budget.
          </p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">
            Book a Free Strategy Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
