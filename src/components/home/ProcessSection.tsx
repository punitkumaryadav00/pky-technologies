"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { MessageSquare, Search, Zap, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We listen to understand your business, challenges, audience, and goals. Together, we define a clear digital roadmap.",
    color: "var(--pky-accent)",
  },
  {
    icon: Search,
    number: "02",
    title: "Design & Architecture",
    description:
      "We design experiences that align with your brand and resonate with your customers, while building on a solid technical foundation.",
    color: "var(--pky-cyan)",
  },
  {
    icon: Zap,
    number: "03",
    title: "Build & Launch",
    description:
      "We develop, test, and deploy your solution with attention to performance, SEO, accessibility, and security from day one.",
    color: "var(--pky-accent-light)",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Grow & Optimize",
    description:
      "We monitor, measure, and continuously improve your digital presence to drive ongoing growth and business results.",
    color: "var(--pky-indigo)",
  },
];

export function ProcessSection() {
  return (
    <section className="pky-section pky-section-darker" id="process">
      <div className="pky-container">
        <SectionHeader
          label="How We Work"
          title="From Business Problem to Digital Solution"
          description="A proven, transparent process designed to deliver measurable outcomes without surprises."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[var(--pky-accent-glow)] via-[var(--pky-border)] to-[var(--pky-accent-glow)]" />

          {steps.map((step, i) => (
            <AnimatedCard key={step.number} index={i} className="text-center relative">
              {/* Step number */}
              <div
                className="inline-flex w-14 h-14 rounded-full items-center justify-center mb-5 text-xl font-bold relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${step.color}22, transparent)`,
                  border: `2px solid ${step.color}44`,
                  color: step.color,
                }}
              >
                {step.number}
              </div>

              <h3 className="pky-heading-3 mb-3">{step.title}</h3>
              <p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="pky-btn pky-btn-secondary inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
