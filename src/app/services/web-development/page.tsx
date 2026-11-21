import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Monitor, ShoppingCart, Rocket, Wrench, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Web Developers & Web Designing Agencies | PKY Technologies",
  description:
    "Ranked among the best web developers and best web designing agencies. PKY Technologies builds high-performance Next.js websites, custom e-commerce, web applications, and landing pages.",
  keywords: [
    "best web developers",
    "best web designing agencies",
    "web designing",
    "best app developers",
    "website development services",
    "Next.js web developers",
    "custom web development",
    "PKY Technologies",
    "PKY",
  ],
  alternates: {
    canonical: "https://pkytechnologies.com/services/web-development",
  },
  openGraph: {
    title: "Best Web Developers & Web Designing Agencies | PKY Technologies",
    description:
      "Enterprise Next.js web applications, custom websites, and digital experiences engineered for sub-second performance.",
    url: "https://pkytechnologies.com/services/web-development",
  },
};

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    problem: "Your business lacks a professional online presence, losing potential customers who search for services like yours.",
    who: "Small businesses, professionals, and service providers who need a credible, functional website.",
    includes: ["Custom design", "Mobile-responsive layout", "Contact forms", "SEO foundation", "Speed optimization", "SSL security"],
    value: "Establish credibility, appear in search results, and give potential customers a reason to choose you over competitors.",
  },
  {
    icon: Monitor,
    title: "Premium Corporate Websites",
    problem: "Your current website doesn't reflect the quality of your business or inspire confidence in enterprise clients.",
    who: "Established companies, professional firms, and organizations that need a website matching their market position.",
    includes: ["Brand-aligned design", "Multi-page architecture", "Team profiles", "Service showcases", "Case studies", "Advanced SEO"],
    value: "A digital presence that matches your reputation and convinces high-value clients to engage with your business.",
  },
  {
    icon: Rocket,
    title: "Landing Pages & Lead Generation",
    problem: "Your marketing campaigns drive traffic but visitors don't convert because there's no focused destination.",
    who: "Businesses running ads, launching products, or promoting specific services.",
    includes: ["Conversion-focused design", "A/B testing ready", "Form integration", "Analytics tracking", "Fast loading", "Mobile optimized"],
    value: "Higher conversion rates from your marketing spend, turning ad clicks into qualified leads and sales.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    problem: "You want to sell products online but don't have a reliable, user-friendly platform.",
    who: "Retailers, product businesses, and entrepreneurs who want to reach customers beyond their physical location.",
    includes: ["Product catalog", "Secure checkout", "Payment integration", "Inventory management", "Order tracking", "Mobile shopping"],
    value: "A new revenue channel that's open 24/7, reaching customers you couldn't serve through a physical store alone.",
  },
  {
    icon: Wrench,
    title: "Website Redesign & Modernization",
    problem: "Your existing website is outdated, slow, or doesn't work well on mobile devices.",
    who: "Businesses with an existing website that no longer represents their brand or performs well.",
    includes: ["UX audit", "Modern redesign", "Content migration", "SEO preservation", "Performance optimization", "Responsive layout"],
    value: "Revived user experience, improved search rankings, and a website your team is proud to share.",
  },
  {
    icon: Gauge,
    title: "Website Maintenance & Speed Optimization",
    problem: "Your website is slow, vulnerable to security threats, or falls behind without regular updates.",
    who: "Any business that wants their website to remain fast, secure, and up-to-date.",
    includes: ["Security updates", "Performance monitoring", "Regular backups", "Speed optimization", "Content updates", "Uptime monitoring"],
    value: "Peace of mind knowing your website is maintained by professionals, always performing at its best.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="pky-section pky-section-dark relative overflow-hidden">
        <div className="pky-glow-orb w-[400px] h-[400px] bg-[var(--pky-accent)] opacity-[0.1] top-0 right-0" />
        <div className="pky-container relative z-10 max-w-4xl">
          <Link href="/services" className="pky-label inline-flex items-center gap-1 mb-4 hover:text-[var(--pky-accent-lighter)]">
            ← All Services
          </Link>
          <h1 className="pky-heading-1 mb-5">
            Digital Presence &{" "}
            <span className="pky-gradient-text">Website Solutions</span>
          </h1>
          <p className="pky-body text-lg max-w-2xl mb-8">
            We build websites that don&apos;t just look great — they establish credibility,
            attract the right audience, and convert visitors into customers.
          </p>
          <Link href="/contact" className="pky-btn pky-btn-primary">
            Discuss Your Website Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((s, i) => (
        <section key={s.title} className={`pky-section ${i % 2 === 0 ? "pky-section-darker" : "pky-section-dark"}`}>
          <div className="pky-container max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pky-accent-glow)] to-transparent border border-[var(--pky-border-accent)] flex items-center justify-center shrink-0">
                <s.icon size={22} className="text-[var(--pky-accent-light)]" />
              </div>
              <h2 className="pky-heading-2">{s.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">The Problem</h3>
                  <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">Who Benefits</h3>
                  <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.who}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">Expected Business Value</h3>
                  <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.value}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-4">What&apos;s Included</h3>
                <div className="space-y-2.5">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--pky-text-secondary)]">
                      <CheckCircle2 size={16} className="text-[var(--pky-accent-light)] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Related Services */}
      <section className="pky-section pky-section-dark">
        <div className="pky-container max-w-4xl">
          <h2 className="pky-heading-3 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "SEO & Client Acquisition", href: "/services/seo" },
              { title: "Branding & Content", href: "/services/branding" },
              { title: "AI & Automation", href: "/services/ai-automation" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="pky-card flex items-center justify-between group"
              >
                <span className="text-sm font-medium">{r.title}</span>
                <ArrowRight size={16} className="text-[var(--pky-text-muted)] group-hover:text-[var(--pky-accent-light)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pky-section pky-section-darker text-center">
        <div className="pky-container max-w-2xl">
          <h2 className="pky-heading-2 mb-4">Ready to Build Your Website?</h2>
          <p className="pky-body mb-8">
            Tell us about your project and we&apos;ll create a tailored proposal with clear timelines and pricing.
          </p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">
            Get a Free Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
