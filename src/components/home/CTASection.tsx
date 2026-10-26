"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pky-section pky-section-dark relative overflow-hidden" id="cta">
      {/* Glow */}
      <div className="pky-glow-orb w-[600px] h-[600px] bg-[var(--pky-accent)] opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="pky-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pky-label inline-block mb-4">Ready to Grow?</span>
          <h2 className="pky-heading-1 mb-6">
            Let&apos;s Build Something{" "}
            <span className="pky-gradient-text">Extraordinary</span>
          </h2>
          <p className="pky-body text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a stunning website, better search visibility, AI-powered automation,
            or a complete digital transformation — we&apos;re ready to help your business grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">
              Book a Strategy Call
              <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="pky-btn pky-btn-secondary pky-btn-lg">
              Explore Our Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
