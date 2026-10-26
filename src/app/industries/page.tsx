import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Scale,
  Stethoscope,
  ShoppingBag,
  Building2,
  Cpu,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions | PKY Technologies",
  description:
    "Tailored digital architectures, AI automations, and search domination systems built for Law Firms, Healthcare Clinics, E-Commerce Brands, B2B SaaS, and Real Estate.",
  openGraph: {
    title: "Industry Solutions — PKY Technologies",
    description:
      "Sector-specific engineering blueprints designed around your industry’s regulatory compliance, customer psychologies, and commercial dynamics.",
  },
};

const industries = [
  {
    id: "legal",
    icon: Scale,
    title: "Legal & Corporate Law Firms",
    subtitle: "Litigation, Corporate, M&A & Intellectual Property",
    problem:
      "Relying on inconsistent word-of-mouth referrals while paying exorbitant PPC fees for low-intent legal inquiries. Sluggish websites that fail to reflect prestigious firm stature.",
    solution:
      "High-authority practice area hubs, encrypted confidential intake forms, Local GEO / AEO ranking domination, and sub-second corporate portal architectures.",
    features: [
      "Encrypted Conflict-Check & Client Intake Funnels",
      "Practice Area Search Dominance (GEO / AEO)",
      "Senior Partner Credibility & Matter Directories",
      "Enterprise Uptime & Bank-Grade SSL Encryption",
    ],
    metric: "+320% Qualified Corporate Retainers",
    badge: "High-Ticket Client Acquisition",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare, Specialty Clinics & MedTech",
    subtitle: "Multi-Specialty Hospitals, Dental Chains & Diagnostic Labs",
    problem:
      "Front-desk staff suffocated by hundreds of daily appointment calls, high patient no-show rates, and outdated portals that frustrate patients seeking urgent care.",
    solution:
      "Autonomous 24/7 WhatsApp & Web scheduling agent connected with your EHR/EMR, streamlined doctor directories, and automated 1-click consultation reminders.",
    features: [
      "Autonomous 24/7 WhatsApp Appointment Engine",
      "HIPAA / Data Privacy-Compliant Patient Portals",
      "Instant Doctor Roster & Slot Availability",
      "Automated SMS/WhatsApp No-Show Minimizers",
    ],
    metric: "68% Reduction in Desk Call Load",
    badge: "HIPAA-Ready & Automated",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Direct-to-Consumer & Luxury E-Commerce",
    subtitle: "Fashion, Home Architecture, Electronics & Lifestyle Brands",
    problem:
      "Bloated Shopify/WooCommerce themes loading in 4+ seconds, frustrating mobile shoppers and driving mobile checkout abandonment rates over 75%.",
    solution:
      "Headless Next.js storefronts with instant edge caching, streamlined 2-step checkout (UPI, Apple Pay, Stripe), and personalized dynamic merchandising.",
    features: [
      "Sub-400ms Headless Next.js Storefronts",
      "Instant 1-Click Mobile Checkout Optimization",
      "Interactive 3D / Room Visualizer Integrations",
      "Real-time Inventory & ERP Webhooks",
    ],
    metric: "2.7x Mobile Conversion Rate Lift",
    badge: "Headless Speed Architecture",
  },
  {
    id: "saas",
    icon: Cpu,
    title: "B2B SaaS & Tech Startups",
    subtitle: "Cloud Platforms, DevTools, FinTech & Enterprise Software",
    problem:
      "Confusing technical jargon that bounces prospective buyers, low demo-booking rates, and lack of self-serve interactive calculators.",
    solution:
      "Interactive product demo visualizers, self-serve ROI calculators, frictionless demo booking funnels, and search authority clusters that capture in-market enterprise buyers.",
    features: [
      "Self-Serve Interactive ROI & Pricing Calculators",
      "Frictionless Demo Booking & Calendar Integrations",
      "High-Converting Developer & Enterprise Landing Pages",
      "Automated HubSpot / Salesforce CRM Syncing",
    ],
    metric: "+215% Demo Pipeline Velocity",
    badge: "Pipeline & Demo Acceleration",
  },
  {
    id: "realestate",
    icon: Building2,
    title: "Real Estate Developers & Luxury Brokerages",
    subtitle: "Commercial Towers, Residential Enclaves & Investment Funds",
    problem:
      "Flooded with unqualified broker inquiries, slow PDF floor plan downloads, and inability to showcase premium architectural developments digitally.",
    solution:
      "Immersive architectural presentation portals with interactive master plans, unit availability visualizers, WhatsApp buyer qualification, and local investor SEO.",
    features: [
      "Interactive Master Plan & Floorplan Explorers",
      "Automated WhatsApp Investor Verification Bot",
      "Virtual 3D Video Tour Integrations",
      "Local & International High-Net-Worth SEO",
    ],
    metric: "80% Increase in Verified Buyer Leads",
    badge: "High-Ticket Real Estate",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education, Universities & EdTech",
    subtitle: "Private Academies, Professional Institutes & E-Learning",
    problem:
      "Chaotic admission inquiry handling, manual paperwork bottlenecks, and fragmented course information that causes prospective students to abandon application.",
    solution:
      "Frictionless digital admissions portal with automated eligibility quiz, 24/7 admissions chatbot, and instant digital fee payment gateways.",
    features: [
      "Step-by-Step Admissions Application Funnel",
      "24/7 WhatsApp Course Advisory Bot",
      "Automated Recurring Fee Payment Integration",
      "Student Portal & LMS Course Directory",
    ],
    metric: "75% Self-Serve Admission Inquiries",
    badge: "Frictionless Enrollment",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-xs font-semibold text-[var(--pky-cyan)] mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>VERTICAL-SPECIFIC DIGITAL ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineered For Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)]">
              Specific Commercial Dynamics
            </span>
          </h1>
          <p className="text-lg text-[var(--pky-text-secondary)] leading-relaxed">
            Generic website templates fail because every industry operates under unique customer psychologies, regulatory constraints, and unit economics. We build dedicated architectures tailored to your exact market.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="rounded-3xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all group shadow-xl relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <ind.icon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-[var(--pky-text-muted)] font-medium mb-6">
                  {ind.subtitle}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-xs leading-relaxed">
                    <strong className="text-rose-400 block mb-1">Common Industry Bottleneck:</strong>
                    <span className="text-[var(--pky-text-secondary)]">{ind.problem}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-xs leading-relaxed">
                    <strong className="text-cyan-400 block mb-1">The PKY Engineered Solution:</strong>
                    <span className="text-[var(--pky-text-secondary)]">{ind.solution}</span>
                  </div>
                </div>

                {/* Core Features list */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pky-text-muted)]">
                    Architectural Inclusions:
                  </span>
                  {ind.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[var(--pky-text-secondary)]">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-[var(--pky-border)] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[var(--pky-text-muted)] uppercase tracking-wider block">
                    Observed Impact
                  </span>
                  <span className="text-sm font-bold text-emerald-400">
                    {ind.metric}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--pky-bg-surface)] border border-[var(--pky-border)] text-white text-xs font-semibold hover:border-cyan-500/50 transition-colors group-hover:bg-cyan-500/10"
                >
                  <span>Request Scope</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-950/40 border border-cyan-500/30 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            Don’t See Your Exact Sector Listed?
          </h2>
          <p className="text-base text-[var(--pky-text-secondary)] max-w-2xl mx-auto mb-8 relative z-10">
            Our engineering methodologies apply to any company seeking sub-second performance, automated customer workflows, and measurable commercial conversion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--pky-accent)] to-[var(--pky-cyan)] text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Schedule a Custom Strategy Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--pky-bg-card)] border border-[var(--pky-border)] text-white font-semibold text-sm hover:border-cyan-500/50 transition-colors flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
