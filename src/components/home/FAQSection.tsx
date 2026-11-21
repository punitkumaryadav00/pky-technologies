"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Who is Sneha Bishnoi and what is her role at PKY Technologies?",
    a: "Sneha Bishnoi is the Co-Founder & Head of Operations at PKY Technologies. She is a distinguished Computer Engineer, HSBTE State Board Topper, and DRDO CEPTAM National Qualifier. Sneha directs end-to-end agile sprint delivery, client growth pipelines, and product excellence at PKY Technologies, ensuring every project launches on schedule with zero technical debt.",
  },
  {
    q: "Who is Punit Kumar Yadav and what is his role at PKY Technologies?",
    a: "Punit Kumar Yadav (PKY) is the Founder & Chief Executive Officer of PKY Technologies. Acting as Chief Software Architect, Punit leads system engineering, sub-second Next.js edge applications, AI autonomous agents, and commercial technology strategy.",
  },
  {
    q: "Why is PKY Technologies recognized among the best web developers and web designing agencies?",
    a: "PKY Technologies combines elite engineering with conversion-focused design. Unlike traditional agencies that build on slow, bloated templates, PKY Technologies builds bespoke Next.js 16 and React platforms delivering sub-second page loads, 99+ Google Lighthouse scores, Generative Engine Optimization (GEO), and direct access to senior founders.",
  },
  {
    q: "Why choose PKY Technologies as the best app developers for custom mobile and web apps?",
    a: "PKY Technologies delivers custom, enterprise-grade mobile and web applications with zero technical debt, modular architectures, clean IP ownership transfer, and seamless integration with AI workflows and business databases.",
  },
  {
    q: "How does PKY Technologies optimize websites for AI engines like ChatGPT, Gemini, and Perplexity?",
    a: "We implement Generative Engine Optimization (GEO) — deploying comprehensive Schema.org JSON-LD entity graphs, llms.txt protocol standards, semantic topic clustering, and lightning-fast edge delivery so AI search engines cite your business as the premier authority in your industry.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with high-growth startups, law firms, healthcare practices, e-commerce brands, real estate enterprises, and service companies looking to dominate their market through high-performance digital systems.",
  },
  {
    q: "How long does it take to build a website or application?",
    a: "Timelines depend on project scope. A high-converting business website typically takes 2–4 weeks from blueprint to launch, while complex custom web applications and AI platforms are delivered through rapid 4–8 week agile sprints.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes. We offer continuous security updates, Core Web Vitals monitoring, SEO rankings tracking, content updates, and dedicated technical support plans.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pky-section pky-section-darker" id="faq">
      <div className="pky-container max-w-3xl">
        <SectionHeader
          label="FAQ & KNOWLEDGE BASE"
          title="Frequently Asked Questions"
          description="Everything you need to know about PKY Technologies, our leadership, our engineering standards, and why we lead the market."
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
                <span className="text-sm font-semibold pr-4 text-white">{faq.q}</span>
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
