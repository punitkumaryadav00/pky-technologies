"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Presence & Websites",
    href: "/services/web-development",
    desc: "High-performance business websites",
  },
  {
    title: "SEO & Client Acquisition",
    href: "/services/seo",
    desc: "Search visibility & lead generation",
  },
  {
    title: "Branding & Content",
    href: "/services/branding",
    desc: "Brand identity & content strategy",
  },
  {
    title: "AI & Custom Technology",
    href: "/services/ai-automation",
    desc: "AI chatbots, automation & custom tools",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: services },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Estimator", href: "/estimate" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-[rgba(9,9,11,0.85)] border-b border-[var(--pky-border)]"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="pky-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-10" aria-label="PKY Technologies Home">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--pky-accent)] to-[var(--pky-cyan)] flex items-center justify-center font-bold text-white text-sm overflow-hidden">
              <span className="relative z-10">P</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pky-accent-dark)] to-[var(--pky-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              PKY<span className="text-[var(--pky-text-secondary)] font-normal"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="pky-btn-ghost flex items-center gap-1 text-sm"
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 p-2 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col gap-0.5 p-3 rounded-lg hover:bg-[var(--pky-bg-card-hover)] transition-colors"
                          >
                            <span className="text-sm font-medium text-[var(--pky-text-primary)]">
                              {child.title}
                            </span>
                            <span className="text-xs text-[var(--pky-text-muted)]">
                              {child.desc}
                            </span>
                          </Link>
                        ))}
                        <div className="mt-1 p-3 border-t border-[var(--pky-border)]">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 text-sm text-[var(--pky-accent-light)] hover:text-[var(--pky-accent-lighter)] font-medium"
                          >
                            View All Services <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="pky-btn-ghost text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 z-10">
            <Link
              href="/estimate"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              <span>⚡ Cost Estimator</span>
            </Link>
            <Link href="/contact" className="hidden sm:inline-flex pky-btn pky-btn-primary text-sm">
              Book a Strategy Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--pky-bg-primary)] pt-24 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium rounded-lg hover:bg-[var(--pky-bg-card)] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 px-4 text-[var(--pky-text-secondary)] hover:text-[var(--pky-text-primary)] rounded-lg hover:bg-[var(--pky-bg-card)] transition-colors"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-lg font-medium rounded-lg hover:bg-[var(--pky-bg-card)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="pky-btn pky-btn-primary pky-btn-lg w-full justify-center"
                >
                  Book a Strategy Call
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
