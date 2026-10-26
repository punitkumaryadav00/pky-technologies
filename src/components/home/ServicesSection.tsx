"use client";

import { Globe, Search, Palette, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Digital Presence & Websites",
    description:
      "High-performance business websites, e-commerce, landing pages, and web applications that convert visitors into customers.",
    features: ["Business Websites", "E-Commerce", "Landing Pages", "Website Redesign", "Speed Optimization"],
    href: "/services/web-development",
    color: "var(--pky-accent)",
    colorGlow: "var(--pky-accent-glow)",
  },
  {
    icon: Search,
    title: "SEO & Client Acquisition",
    description:
      "Search engine optimization, Google & Meta Ads, local SEO, and conversion strategies to help you attract and convert more customers.",
    features: ["Technical SEO", "Local SEO", "Google Ads", "Content Strategy", "Analytics"],
    href: "/services/seo",
    color: "var(--pky-cyan)",
    colorGlow: "var(--pky-cyan-glow)",
  },
  {
    icon: Palette,
    title: "Branding & Content",
    description:
      "Brand identity, social media management, copywriting, and content creation that builds recognition and trust with your audience.",
    features: ["Brand Identity", "Social Media", "Content Writing", "Video Content", "Marketing Creatives"],
    href: "/services/branding",
    color: "var(--pky-accent-light)",
    colorGlow: "rgba(167, 139, 250, 0.2)",
  },
  {
    icon: Bot,
    title: "AI, Automation & Custom Tech",
    description:
      "AI chatbots, workflow automation, custom business applications, dashboards, and integrations that improve efficiency and reduce manual work.",
    features: ["AI Chatbots", "Lead Automation", "Custom Apps", "Dashboards", "API Integrations"],
    href: "/services/ai-automation",
    color: "var(--pky-indigo)",
    colorGlow: "rgba(99, 102, 241, 0.2)",
  },
];

export function ServicesSection() {
  return (
    <section className="pky-section pky-section-dark" id="services">
      <div className="pky-container">
        <SectionHeader
          label="What We Build"
          title="Solutions That Drive Real Business Growth"
          description="We don't just build websites — we create comprehensive digital solutions that solve specific business problems and generate measurable results."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedCard key={service.title} index={i} className="group relative">
              {/* Top glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: service.color, filter: "blur(8px)" }}
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.colorGlow}, transparent)`,
                    border: `1px solid ${service.colorGlow}`,
                  }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>
                <div>
                  <h3 className="pky-heading-3 mb-1">{service.title}</h3>
                  <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.04)] text-[var(--pky-text-muted)] border border-[var(--pky-border)]"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                style={{ color: service.color }}
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
