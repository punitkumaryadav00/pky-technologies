import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  Zap,
  Palette,
  Bot,
} from "lucide-react";
import { PKYLogoMark } from "@/components/ui/PKYLogo";

const serviceLinks = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "SEO & Search Visibility", href: "/services/seo" },
  { label: "Branding & Content", href: "/services/branding" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Custom Software", href: "/services/ai-automation#custom-software" },
  { label: "Google & Meta Ads", href: "/services/seo#paid-ads" },
];

const industryLinks = [
  { label: "Law Firms", href: "/industries/law-firms" },
  { label: "Healthcare & Clinics", href: "/industries/healthcare" },
  { label: "Retail & Shops", href: "/industries/retail" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Gyms & Fitness", href: "/industries/gyms" },
  { label: "Education", href: "/industries/education" },
  { label: "Startups", href: "/industries/startups" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Sneha Bishnoi (Co-Founder)", href: "/team/sneha-bishnoi" },
  { label: "Punit Kumar Yadav (Founder)", href: "/team/punit-kumar-yadav" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights & Blog", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="pky-section-darker border-t border-[var(--pky-border)]">
      <div className="pky-container">
        {/* Top CTA Band */}
        <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 mb-16 bg-gradient-to-br from-[var(--pky-accent-dark)] via-[var(--pky-accent)] to-[var(--pky-indigo)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 max-w-lg">
                Let&apos;s discuss how technology can solve your specific business challenges and drive measurable growth.
              </p>
            </div>
            <Link
              href="/contact"
              className="pky-btn pky-btn-lg bg-white text-[var(--pky-accent-dark)] font-semibold hover:bg-white/90 shrink-0"
            >
              Book a Strategy Call
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-[var(--pky-text-primary)]">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--pky-text-muted)] hover:text-[var(--pky-accent-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-[var(--pky-text-primary)]">
              Industries
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--pky-text-muted)] hover:text-[var(--pky-accent-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-[var(--pky-text-primary)]">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--pky-text-muted)] hover:text-[var(--pky-accent-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-5 text-[var(--pky-text-primary)]">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@pkytechnologies.com"
                  className="flex items-center gap-2 text-sm text-[var(--pky-text-muted)] hover:text-[var(--pky-accent-light)] transition-colors"
                >
                  <Mail size={14} />
                  <span>contact@pkytechnologies.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917419161235?text=Hello%20Punit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--pky-text-muted)] hover:text-emerald-400 transition-colors"
                >
                  <Phone size={14} />
                  <span>Founder WhatsApp: +91 74191 61235</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918708572286"
                  className="flex items-center gap-2 text-sm text-[var(--pky-text-muted)] hover:text-[var(--pky-accent-light)] transition-colors"
                >
                  <Phone size={14} />
                  <span>Co-Founder: +91 87085 72286</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--pky-text-muted)]">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Cyber Hub, Sector 24, Gurugram / Delhi NCR</span>
              </li>
            </ul>

            {/* Capabilities Icons */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--pky-border)]">
              <div className="w-9 h-9 rounded-lg bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-center justify-center" title="Web Development">
                <Globe size={16} className="text-[var(--pky-accent-light)]" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-center justify-center" title="Digital Marketing">
                <Zap size={16} className="text-[var(--pky-cyan)]" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-center justify-center" title="Branding">
                <Palette size={16} className="text-[var(--pky-accent-light)]" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-center justify-center" title="AI Solutions">
                <Bot size={16} className="text-[var(--pky-cyan)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--pky-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <PKYLogoMark className="w-7 h-8" />
            <span className="text-sm text-[var(--pky-text-muted)]">
              © 2026 PKY Technologies. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--pky-text-muted)]">
            <Link href="/privacy" className="hover:text-[var(--pky-text-secondary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--pky-text-secondary)] transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[var(--pky-text-secondary)] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
