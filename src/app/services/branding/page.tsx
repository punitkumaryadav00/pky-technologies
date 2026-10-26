import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Palette, PenTool, Video, Share2, Languages, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Branding & Content Services",
  description: "Brand identity, social media management, content writing, video production, and creative services by PKY Technologies.",
};

const services = [
  { icon: Palette, title: "Brand Identity & Digital Presentation", problem: "Your brand lacks consistency or doesn't reflect your market position.", who: "New businesses, rebranding companies, and professionals upgrading their image.", includes: ["Logo design", "Color palette", "Typography system", "Brand guidelines", "Business card design", "Social templates"], value: "A cohesive, professional brand that builds recognition and trust with every interaction." },
  { icon: Share2, title: "Social Media Management", problem: "You know social media matters but can't maintain a consistent, engaging presence.", who: "Businesses wanting to build community, brand awareness, and drive engagement online.", includes: ["Content planning", "Post creation", "Community management", "Analytics reports", "Platform strategy", "Campaign support"], value: "An active, professional social presence that keeps your brand top-of-mind with your audience." },
  { icon: PenTool, title: "Content Writing & Copywriting", problem: "Your website and marketing materials don't effectively communicate your value.", who: "Businesses that need compelling, SEO-friendly content that converts.", includes: ["Website copy", "Blog articles", "Service descriptions", "Email sequences", "Ad copy", "SEO optimization"], value: "Clear, persuasive content that speaks to your audience and drives action." },
  { icon: Video, title: "Video & AI-Assisted Content", problem: "You want to use video but production seems expensive and complicated.", who: "Businesses looking to leverage video for marketing, training, or brand storytelling.", includes: ["Video strategy", "Script writing", "AI-assisted production", "Social video clips", "Thumbnail design", "Distribution plan"], value: "Professional video content that engages audiences across platforms without enterprise budgets." },
  { icon: Megaphone, title: "Marketing Creatives & Campaigns", problem: "Your marketing materials look inconsistent or don't match your brand standards.", who: "Businesses running campaigns across multiple channels who need cohesive visuals.", includes: ["Ad creatives", "Social graphics", "Email templates", "Presentation designs", "Print-ready files", "Campaign assets"], value: "Professional, on-brand marketing materials that strengthen every campaign you run." },
  { icon: Languages, title: "Translation & Localization", problem: "You want to reach audiences in different languages or cultural contexts.", who: "Businesses expanding to multilingual markets or diverse regions.", includes: ["Website translation", "Content localization", "Cultural adaptation", "Multilingual SEO", "Quality assurance", "CMS integration"], value: "Authentic, culturally relevant content that resonates with your target audience across languages." },
];

export default function BrandingPage() {
  return (
    <div className="pt-28">
      <section className="pky-section pky-section-dark relative overflow-hidden">
        <div className="pky-glow-orb w-[400px] h-[400px] bg-[var(--pky-accent-light)] opacity-[0.08] top-0 right-0" />
        <div className="pky-container relative z-10 max-w-4xl">
          <Link href="/services" className="pky-label inline-flex items-center gap-1 mb-4 hover:text-[var(--pky-accent-lighter)]">← All Services</Link>
          <h1 className="pky-heading-1 mb-5">Branding & <span className="pky-gradient-text">Content</span></h1>
          <p className="pky-body text-lg max-w-2xl mb-8">Build a brand that stands out and content that connects. We create compelling identities and stories that resonate with your audience.</p>
          <Link href="/contact" className="pky-btn pky-btn-primary">Discuss Your Brand <ArrowRight size={16} /></Link>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={`pky-section ${i % 2 === 0 ? "pky-section-darker" : "pky-section-dark"}`}>
          <div className="pky-container max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(167,139,250,0.15)] to-transparent border border-[rgba(167,139,250,0.2)] flex items-center justify-center shrink-0">
                <s.icon size={22} className="text-[var(--pky-accent-light)]" />
              </div>
              <h2 className="pky-heading-2">{s.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div><h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">The Problem</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.problem}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">Who Benefits</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.who}</p></div>
                <div><h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-2">Expected Business Value</h3><p className="text-sm text-[var(--pky-text-secondary)] leading-relaxed">{s.value}</p></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--pky-accent-light)] mb-4">What&apos;s Included</h3>
                <div className="space-y-2.5">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--pky-text-secondary)]"><CheckCircle2 size={16} className="text-[var(--pky-accent-light)] shrink-0" />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pky-section pky-section-dark text-center">
        <div className="pky-container max-w-2xl">
          <h2 className="pky-heading-2 mb-4">Ready to Build Your Brand?</h2>
          <p className="pky-body mb-8">Let&apos;s create a brand identity and content strategy that sets you apart from the competition.</p>
          <Link href="/contact" className="pky-btn pky-btn-primary pky-btn-lg">Start Your Brand Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
