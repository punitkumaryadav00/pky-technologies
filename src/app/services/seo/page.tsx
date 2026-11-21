import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, MapPin, BarChart3, FileText, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Generative Engine Optimization (GEO) Services | PKY Technologies",
  description:
    "Dominate Google rankings and AI search engines (ChatGPT, Gemini, Perplexity) with PKY Technologies' enterprise SEO and Generative Engine Optimization (GEO) strategies.",
  keywords: [
    "SEO services",
    "Generative Engine Optimization",
    "GEO services",
    "Google ranking agency",
    "AI search optimization",
    "PKY Technologies SEO",
    "best SEO agency",
    "local SEO Google Business",
  ],
  alternates: {
    canonical: "https://pkytechnologies.com/services/seo",
  },
  openGraph: {
    title: "SEO & Generative Engine Optimization (GEO) Services | PKY Technologies",
    description:
      "Rank #1 on Google and get cited first by ChatGPT, Gemini, and AI search engines with PKY Technologies' technical SEO & GEO frameworks.",
    url: "https://pkytechnologies.com/services/seo",
  },
};

const services = [
  {
    icon: Search, title: "Search Engine Optimization (SEO)",
    problem: "Your website exists but doesn't appear when potential customers search for your services.",
    who: "Any business that wants to attract organic, high-intent traffic from search engines.",
    includes: ["Keyword research", "On-page optimization", "Technical SEO audit", "Content recommendations", "Link building strategy", "Monthly reporting"],
    value: "Sustainable, long-term visibility that brings qualified leads without paying for every click.",
  },
  {
    icon: MapPin, title: "Local SEO & Google Business Profile",
    problem: "Customers in your area can't find you when they search for local services.",
    who: "Local businesses, clinics, restaurants, shops, and service providers with a physical presence.",
    includes: ["Google Business Profile setup", "Local citation building", "Review strategy", "Local keyword targeting", "Map pack optimization", "NAP consistency"],
    value: "Higher visibility in local searches, more phone calls, direction requests, and walk-in customers.",
  },
  {
    icon: Target, title: "Google Ads & Meta Ads",
    problem: "You need immediate visibility and leads but organic growth takes time.",
    who: "Businesses launching new services, entering new markets, or needing fast lead generation.",
    includes: ["Campaign strategy", "Ad creation", "Audience targeting", "Budget optimization", "Landing page alignment", "Performance reporting"],
    value: "Immediate, targeted traffic with clear ROI tracking and continuous optimization.",
  },
  {
    icon: FileText, title: "Content Strategy & SEO Content",
    problem: "Your website lacks the content depth needed to rank well and educate potential customers.",
    who: "Businesses that want to build authority, answer customer questions, and attract search traffic.",
    includes: ["Content audit", "Topic research", "Editorial calendar", "SEO copywriting", "Blog management", "Content performance tracking"],
    value: "A growing library of useful content that attracts, educates, and converts your target audience.",
  },
  {
    icon: BarChart3, title: "Analytics & Performance Measurement",
    problem: "You're investing in digital marketing but can't tell what's working.",
    who: "Businesses that want data-driven decision making and clear marketing ROI.",
    includes: ["Google Analytics setup", "Conversion tracking", "Custom dashboards", "Monthly reports", "Goal setting", "Recommendations"],
    value: "Clear visibility into what drives results, enabling smarter marketing investments.",
  },
  {
    icon: TrendingUp, title: "Conversion Optimization",
    problem: "Your website gets traffic but visitors leave without taking action.",
    who: "Businesses with existing traffic that want to improve their conversion rates.",
    includes: ["UX analysis", "CTA optimization", "Form improvements", "A/B testing strategy", "Heat mapping", "Funnel analysis"],
    value: "More leads and customers from the same amount of traffic — improving ROI on every marketing channel.",
  },
];

export default function SEOPage() {
  return (
    <div className="pt-28">
      <section className="pky-section pky-section-dark relative overflow-hidden">
        <div className="pky-glow-orb w-[400px] h-[400px] bg-[var(--pky-cyan)] opacity-[0.1] top-0 right-0" />
        <div className="pky-container relative z-10 max-w-4xl">
          <Link href="/services" className="pky-label inline-flex items-center gap-1 mb-4 hover:text-[var(--pky-accent-lighter)]">← All Services</Link>
          <h1 className="pky-heading-1 mb-5">SEO & <span className="pky-gradient-text">Client Acquisition</span></h1>
          <p className="pky-body text-lg max-w-2xl mb-8">
            Get found by the right people at the right time. Our search visibility and lead generation strategies turn online presence into business growth.
          </p>
          <Link href="/contact" className="pky-btn pky-btn-primary">Discuss Your SEO Goals <ArrowRight size={16} /></Link>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={`pky-section ${i % 2 === 0 ? "pky-section-darker" : "pky-section-dark"}`}>
          <div className="pky-container max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pky-cyan-glow)] to-transparent border border-[rgba(6,182,212,0.2)] flex items-center justify-center shrink-0">
                <s.icon size={22} className="text-[var(--pky-cyan)]" />
              </div>
              <h2 className="pky-heading-2">{s.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div><h3 className="text-sm font-semibold text-[var(--pky-cyan)] mb-2">The Problem</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.problem}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-cyan)] mb-2">Who Benefits</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.who}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-cyan)] mb-2">Expected Business Value</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.value}</p></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--pky-cyan)] mb-4">What&apos;s Included</h3>
                <div className="space-y-2.5">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--pky-text-secondary)]">
                      <CheckCircle2 size={16} className="text-[var(--pky-cyan)] shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pky-section pky-section-dark text-center">
        <div className="pky-container max-w-2xl">
          <h2 className="pky-heading-2 mb-4">Ready to Get Found Online?</h2>
          <p className="pky-body mb-8">Let&apos;s audit your current visibility and build a strategy that brings qualified customers to your business.</p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">Get a Free SEO Audit <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
