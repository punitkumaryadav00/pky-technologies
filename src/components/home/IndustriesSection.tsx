"use client";

import Link from "next/link";
import { ArrowRight, Scale, Stethoscope, ShoppingBag, UtensilsCrossed, Dumbbell, GraduationCap, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

const industries = [
  {
    icon: Scale,
    title: "Law Firms",
    description: "Professional websites, practice-area pages, client enquiry forms, and appointment scheduling.",
    href: "/industries/law-firms",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description: "Patient-friendly websites, appointment requests, clinic information, and communication workflows.",
    href: "/industries/healthcare",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Shops",
    description: "E-commerce, inventory management, customer engagement, and online ordering solutions.",
    href: "/industries/retail",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Digital menus, online ordering, table reservations, and delivery integration.",
    href: "/industries/restaurants",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    description: "Membership management, class scheduling, enquiry handling, and renewal reminders.",
    href: "/industries/gyms",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Information portals, admissions enquiry workflows, and administrative system support.",
    href: "/industries/education",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "MVP development, landing pages, brand identity, and growth-focused digital strategies.",
    href: "/industries/startups",
  },
];

export function IndustriesSection() {
  return (
    <section className="pky-section pky-section-dark" id="industries">
      <div className="pky-container">
        <SectionHeader
          label="Who We Serve"
          title="Industry-Specific Digital Solutions"
          description="We understand that every industry has unique challenges. Our solutions are tailored to address the specific needs of your business sector."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <AnimatedCard key={industry.title} index={i} className="group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--pky-accent-glow)] to-transparent border border-[var(--pky-border-accent)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon size={20} className="text-[var(--pky-accent-light)]" />
              </div>
              <h3 className="text-base font-semibold mb-2">{industry.title}</h3>
              <p className="text-sm text-[var(--pky-text-muted)] leading-relaxed mb-4">
                {industry.description}
              </p>
              <Link
                href={industry.href}
                className="inline-flex items-center gap-1 text-sm text-[var(--pky-accent-light)] hover:text-[var(--pky-accent-lighter)] font-medium group-hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
