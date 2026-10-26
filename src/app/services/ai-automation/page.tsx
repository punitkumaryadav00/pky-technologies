import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bot, MessageSquare, Workflow, LayoutDashboard, Code2, Plug } from "lucide-react";

export const metadata: Metadata = {
  title: "AI, Automation & Custom Software",
  description: "AI chatbots, workflow automation, custom web applications, dashboards, and API integrations by PKY Technologies.",
};

const services = [
  { icon: Bot, title: "AI-Powered Website Chatbots", problem: "You're losing potential customers outside business hours or can't respond to all enquiries quickly enough.", who: "Service businesses, clinics, law firms, and any business receiving frequent customer enquiries.", includes: ["Custom AI training", "Website integration", "Lead qualification", "FAQ handling", "Human handoff", "Analytics dashboard"], value: "24/7 customer engagement, faster response times, and qualified leads while your team focuses on high-value work." },
  { icon: MessageSquare, title: "Customer Enquiry & Lead Automation", problem: "Manual follow-ups are slow, inconsistent, and leads slip through the cracks.", who: "Sales teams and businesses that receive enquiries through multiple channels.", includes: ["Auto-responses", "Lead scoring", "CRM integration", "Email sequences", "Notification system", "Pipeline tracking"], value: "No lead goes unattended, response times drop to seconds, and your sales pipeline stays organized." },
  { icon: Workflow, title: "WhatsApp Business Automation", problem: "You want to use WhatsApp for business but can't scale personal responses.", who: "Businesses where WhatsApp is a primary communication channel with customers.", includes: ["Auto-replies", "Menu-based flows", "Appointment booking", "Order updates", "Broadcast messages", "Analytics"], value: "Professional, scalable WhatsApp communication that handles high volumes while maintaining a personal touch. Subject to WhatsApp Business API policies." },
  { icon: Code2, title: "Custom Web Applications", problem: "Off-the-shelf software doesn't fit your specific business processes.", who: "Businesses with unique workflows that need tailored software solutions.", includes: ["Requirements analysis", "Custom development", "User interface design", "Testing & QA", "Deployment", "Documentation"], value: "Software built exactly for your needs, improving efficiency and giving you capabilities competitors don't have." },
  { icon: LayoutDashboard, title: "Business Dashboards & Reporting", problem: "Your business data is scattered across spreadsheets and tools, making it hard to see the big picture.", who: "Business owners and managers who need real-time visibility into their operations.", includes: ["Data integration", "Custom dashboards", "Real-time metrics", "Automated reports", "User access control", "Mobile access"], value: "Clear, actionable insights that help you make better decisions faster." },
  { icon: Plug, title: "API Integrations & Workflow Tools", problem: "Your business tools don't talk to each other, creating manual work and data silos.", who: "Businesses using multiple software tools that need to work together seamlessly.", includes: ["API assessment", "Custom connectors", "Data synchronization", "Error handling", "Monitoring", "Documentation"], value: "Connected systems that eliminate manual data entry, reduce errors, and save your team hours every week." },
];

export default function AIAutomationPage() {
  return (
    <div className="pt-28">
      <section className="pky-section pky-section-dark relative overflow-hidden">
        <div className="pky-glow-orb w-[400px] h-[400px] bg-[var(--pky-indigo)] opacity-[0.1] top-0 right-0" />
        <div className="pky-container relative z-10 max-w-4xl">
          <Link href="/services" className="pky-label inline-flex items-center gap-1 mb-4 hover:text-[var(--pky-accent-lighter)]">← All Services</Link>
          <h1 className="pky-heading-1 mb-5">AI, Automation & <span className="pky-gradient-text">Custom Technology</span></h1>
          <p className="pky-body text-lg max-w-2xl mb-8">Intelligent solutions that automate repetitive work, enhance customer interactions, and give your business a competitive edge through technology.</p>
          <Link href="/contact" className="pky-btn pky-btn-primary">Discuss Your Project <ArrowRight size={16} /></Link>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={`pky-section ${i % 2 === 0 ? "pky-section-darker" : "pky-section-dark"}`}>
          <div className="pky-container max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(99,102,241,0.15)] to-transparent border border-[rgba(99,102,241,0.2)] flex items-center justify-center shrink-0">
                <s.icon size={22} className="text-[var(--pky-indigo)]" />
              </div>
              <h2 className="pky-heading-2">{s.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div><h3 className="text-sm font-semibold text-[var(--pky-indigo)] mb-2">The Problem</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.problem}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-indigo)] mb-2">Who Benefits</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.who}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-indigo)] mb-2">Expected Business Value</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.value}</p></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--pky-indigo)] mb-4">What&apos;s Included</h3>
                <div className="space-y-2.5">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--pky-text-secondary)]"><CheckCircle2 size={16} className="text-[var(--pky-indigo)] shrink-0" />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pky-section pky-section-dark text-center">
        <div className="pky-container max-w-2xl">
          <h2 className="pky-heading-2 mb-4">Ready to Automate & Innovate?</h2>
          <p className="pky-body mb-8">Let&apos;s explore how AI and custom technology can transform your business operations.</p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">Book a Discovery Call <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
