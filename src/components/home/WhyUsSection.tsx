"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Brain, Workflow, LineChart, Shield, Sparkles, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Every solution starts with understanding your business goals. Technology is our tool — your growth is the objective.",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "We leverage artificial intelligence to automate repetitive tasks, improve customer interactions, and unlock actionable insights.",
  },
  {
    icon: Workflow,
    title: "End-to-End Solutions",
    description: "From brand strategy and web design to SEO, automation, and ongoing support — we cover the entire digital journey.",
  },
  {
    icon: LineChart,
    title: "Measurable Results",
    description: "We set clear KPIs, implement proper tracking, and deliver regular reports so you always know how your investment is performing.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "We build with security best practices, maintain uptime, and protect your data as if it were our own.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "Technology evolves rapidly. We stay ahead of trends and proactively recommend improvements to keep your business competitive.",
  },
];

export function WhyUsSection() {
  return (
    <section className="pky-section pky-section-dark" id="why-us">
      <div className="pky-container">
        <SectionHeader
          label="Why PKY Technologies"
          title="Technology That Solves Real Business Problems"
          description="We combine deep technical expertise with a genuine understanding of business challenges to deliver solutions that make a measurable difference."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedCard key={v.title} index={i} className="group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--pky-accent-glow)] to-transparent border border-[var(--pky-border-accent)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <v.icon size={20} className="text-[var(--pky-accent-light)]" />
              </div>
              <h3 className="text-base font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-[var(--pky-text-muted)] leading-relaxed">
                {v.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
