import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Zap,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry | PKY Technologies",
  description:
    "Partner with PKY Technologies to engineer your digital unfair advantage. Get a tailored project blueprint, architecture brief, and ROI estimate within 2–4 hours.",
  openGraph: {
    title: "Contact PKY Technologies — Custom Web, AI & Digital Engineering",
    description:
      "Schedule a consultation or request an engineering proposal with PKY Technologies.",
  },
};

const guarantees = [
  {
    icon: Clock,
    title: "2–4 Hour SLA Guarantee",
    desc: "Every project inquiry is reviewed by our lead system architects, not junior sales reps.",
  },
  {
    icon: ShieldCheck,
    title: "Mutual NDA by Default",
    desc: "Your product concepts, business workflows, and intellectual property remain 100% confidential.",
  },
  {
    icon: Zap,
    title: "Clear Commercial Blueprint",
    desc: "We provide an actionable scope, technology stack recommendation, and fixed deliverables.",
  },
];

const directChannels = [
  {
    icon: MessageSquare,
    title: "Founder Direct WhatsApp",
    desc: "Connect directly with Punit Kumar Yadav (Founder & CEO) for strategy & architecture.",
    action: "+91 74191 61235 (Chat Now)",
    href: "https://wa.me/917419161235?text=Hello%20Punit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies.",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Co-Founder Direct Line",
    desc: "Direct contact line for Sneha Bishnoi (Co-Founder & Head of Operations).",
    action: "+91 87085 72286",
    href: "tel:+918708572286",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Direct Engineering Email",
    desc: "Send your comprehensive RFP or project documentation directly to our inbox.",
    action: "contact@pkytechnologies.com",
    href: "mailto:contact@pkytechnologies.com",
    highlight: false,
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Initial Analysis & Scope Audit",
    time: "Within 2 Hours",
    desc: "Our engineering lead reviews your business goals, target audience, and current digital bottlenecks.",
  },
  {
    step: "02",
    title: "30-Min Strategic Discovery Call",
    time: "Day 1",
    desc: "A focused technical session to nail down deliverables, milestones, tech stack, and commercial ROI.",
  },
  {
    step: "03",
    title: "Custom Architecture & Proposal Brief",
    time: "Within 24 Hours",
    desc: "You receive a fixed-scope roadmap, interactive wireframe preview, and transparent milestone pricing.",
  },
  {
    step: "04",
    title: "Kickoff & Agile Sprints",
    time: "Day 3–4",
    desc: "We initiate development with dedicated sprint updates, weekly staging previews, and real-time slack access.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Background radial gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let’s Build Your Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              Unfair Advantage
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            Whether you need a world-class web platform, high-ranking search domination, or custom AI automations—tell us about your goals and receive a custom engineering roadmap within 4 hours.
          </p>
        </div>

        {/* Guarantees bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid: Form + Direct Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          {/* Interactive Form: 8 cols */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Direct channels & Office info: 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Connect Cards */}
            <div className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 space-y-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Zap size={16} className="text-cyan-400" />
                Prefer Instant Direct Contact?
              </h3>

              {directChannels.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block p-4 rounded-2xl border transition-all group ${
                    channel.highlight
                      ? "bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 hover:border-emerald-500/60"
                      : "bg-[var(--pky-bg-surface)] border-[var(--pky-border)] hover:border-cyan-500/40"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        channel.highlight
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-cyan-500/10 text-cyan-400"
                      }`}
                    >
                      <channel.icon size={18} />
                    </div>
                    <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {channel.title}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--pky-text-muted)] mb-3 leading-relaxed">
                    {channel.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>{channel.action}</span>
                    <ArrowRight size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* Response Commitment & Office */}
            <div className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Engineering HQ & Remote Hubs</h4>
                  <p className="text-xs text-[var(--pky-text-muted)]">Serving clients across India, UAE, UK, & USA</p>
                </div>
              </div>
              <div className="pt-3 border-t border-[var(--pky-border)] text-xs text-[var(--pky-text-muted)] space-y-1.5 leading-relaxed">
                <p>📍 Tech & Delivery Office: Cyber Hub, Sector 24, Gurugram / Delhi NCR</p>
                <p>🕒 Working Hours: Monday – Saturday, 9:00 AM – 8:00 PM IST</p>
                <p>⚡ Emergency / Critical Client SLA: 24/7 Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens Next Timeline */}
        <div className="rounded-3xl bg-gradient-to-b from-[var(--pky-bg-card)] to-[var(--pky-bg-surface)] border border-[var(--pky-border)] p-8 sm:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              OUR ENGAGEMENT PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              What Happens After You Reach Out?
            </h2>
            <p className="text-sm text-[var(--pky-text-secondary)] mt-2">
              We respect your time. Zero generic sales pitches—only actionable engineering clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-400">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--pky-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
