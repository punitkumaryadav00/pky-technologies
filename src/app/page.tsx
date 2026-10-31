import { VoxelHero3D } from "@/components/home/VoxelHero3D";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { MarqueeBanner } from "@/components/ui/MarqueeBanner";

export default function HomePage() {
  return (
    <>
      {/* Cannyworx 3D Voxel Exploding & Scaling Hero */}
      <VoxelHero3D />

      {/* Moving Line / Marquee Banner placed BELOW Hero Section */}
      <div className="py-6 relative z-20 bg-[var(--pky-bg-primary)] border-y border-[var(--pky-border)]">
        <MarqueeBanner
          items={[
            "YOUR DIGITAL GROWTH PARTNER",
            "HIGH-PERFORMANCE NEXT.JS SITES",
            "AI AUTOMATION & WORKFLOWS",
            "SEO & GENERATIVE OPTIMIZATION",
            "CUSTOM BUSINESS PLATFORMS",
            "SUB-SECOND SPEED",
          ]}
        />
      </div>

      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <IndustriesSection />
      <FoundersSection />
      <div className="py-8">
        <MarqueeBanner
          reverse={true}
          outlineText={true}
          speed="slow"
          items={[
            "ENGINEER DIGITAL DOMINANCE",
            "MODERN ENTERPRISE STACK",
            "MEASURABLE COMMERCIAL ROI",
            "ZERO TECHNICAL DEBT",
            "RAPID SPRINT DELIVERY",
          ]}
        />
      </div>
      <FAQSection />
      <CTASection />
    </>
  );
}
