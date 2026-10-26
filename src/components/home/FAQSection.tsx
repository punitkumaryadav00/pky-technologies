"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with a wide range of businesses including law firms, healthcare clinics, retail shops, restaurants, gyms, educational institutions, and startups. Our solutions are tailored to address the specific challenges and goals of each industry.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Timelines depend on the project scope and complexity. A standard business website typically takes 3–6 weeks from discovery to launch. Complex web applications, e-commerce platforms, or projects with custom integrations may take longer. We provide a clear timeline during our initial strategy call.",
  },
  {
    q: "Do you provide SEO and digital marketing services?",
    a: "Yes. We offer comprehensive search engine optimization (SEO), Google & Meta Ads management, content strategy, local SEO, and conversion optimization. Our approach focuses on sustainable, measurable results rather than quick-fix tactics.",
  },
  {
    q: "Can you build AI-powered chatbots and automation for my business?",
    a: "Absolutely. We develop custom AI chatbots for customer enquiries, lead qualification, and appointment booking. We also build automation workflows that reduce manual work, improve response times, and help your team focus on what matters most.",
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing varies based on project scope, complexity, and requirements. We offer transparent, project-based pricing with no hidden fees. The best way to get an accurate estimate is to schedule a strategy call where we can understand your needs and provide a tailored proposal.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes. We offer ongoing website maintenance, security monitoring, performance optimization, content updates, and technical support plans. We believe a website is a living platform that needs continuous care to perform at its best.",
  },
  {
    q: "How do I get started?",
    a: "The simplest way to get started is to book a free strategy call. We'll discuss your business goals, challenges, and requirements. From there, we'll create a tailored proposal outlining our recommended approach, timeline, and investment.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pky-section pky-section-darker" id="faq">
      <div className="pky-container max-w-3xl">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about our services, process, and working approach."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="border border-[var(--pky-border)] rounded-xl overflow-hidden bg-[var(--pky-bg-card)] hover:border-[var(--pky-border-hover)] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[var(--pky-text-muted)] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-[var(--pky-text-secondary)] leading-relaxed border-t border-[var(--pky-border)] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
