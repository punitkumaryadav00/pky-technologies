"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Camera,
  Phone,
  Award,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function WhatsappIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 2c-5.506 0-9.986 4.471-9.986 9.974 0 1.764.464 3.489 1.344 5.013l-1.427 5.212 5.344-1.402c1.468.802 3.125 1.226 4.725 1.226h.005c5.505 0 9.985-4.472 9.985-9.976 0-2.666-1.039-5.174-2.927-7.061-1.888-1.887-4.398-2.926-7.063-2.926zm0 18.257c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.172.832.847-3.093-.2-.317a8.23 8.23 0 01-1.261-4.354c0-4.57 3.72-8.29 8.297-8.29 2.215 0 4.298.863 5.864 2.43 1.566 1.567 2.428 3.65 2.427 5.866-.002 4.572-3.722 8.276-8.228 8.276zm4.538-6.195c-.249-.125-1.472-.726-1.7-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.125-1.052-.388-2.003-1.237-.741-.661-1.241-1.477-1.387-1.726-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.872.851-.872 2.075 0 1.224.892 2.407 1.017 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.14.163 1.569.099.479-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z"/>
    </svg>
  );
}

interface Founder {
  name: string;
  slug: string;
  profileUrl: string;
  role: string;
  title: string;
  initials: string;
  image: string;
  svgFallback: string;
  bio: string;
  focus: string[];
  metrics: { label: string; value: string };
  links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    whatsapp?: string;
    phone?: string;
    email: string;
  };
}

const founders: Founder[] = [
  {
    name: "Punit Kumar Yadav",
    slug: "punit-kumar-yadav",
    profileUrl: "/team/punit-kumar-yadav",
    role: "Founder & Chief Executive Officer",
    title: "Chief Architect & Technology Lead",
    initials: "PKY",
    image: "/images/team/punit.jpg?v=2",
    svgFallback: "/images/team/punit.svg",
    bio: "Punit spearheads technical architecture and strategic innovation at PKY Technologies. With deep mastery in sub-second Next.js edge applications, AI autonomous bots, and custom enterprise software, he architects digital systems that directly accelerate pipeline revenue and commercial authority.",
    focus: [
      "Sub-Second Next.js 16",
      "Enterprise AI Agents",
      "System Architecture",
      "Cloud & Edge Infrastructure",
    ],
    metrics: { label: "Performance Score", value: "99+ Lighthouse" },
    links: {
      linkedin: "https://linkedin.com/in/punitkumaryadav",
      github: "https://github.com/punitkumaryadav00",
      whatsapp: "https://wa.me/917419161235?text=Hello%20Punit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies.",
      phone: "+91 74191 61235",
      email: "mailto:punit@pkytechnologies.com",
    },
  },
  {
    name: "Sneha Bishnoi",
    slug: "sneha-bishnoi",
    profileUrl: "/team/sneha-bishnoi",
    role: "Co-Founder & Head of Operations",
    title: "Product Delivery & Client Growth Lead",
    initials: "SB",
    image: "/images/team/sneha.jpg?v=2",
    svgFallback: "/images/team/sneha.svg",
    bio: "Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier. Sneha directs cross-functional delivery sprints, client success pipelines, and product growth execution at PKY Technologies, ensuring every client platform transitions from technical blueprint into market-ready deployment with zero tech debt and measurable conversion performance.",
    focus: [
      "Computer Engineering",
      "HSBTE State Board Topper",
      "DRDO CEPTAM Qualifier",
      "Agile Sprints & Delivery",
    ],
    metrics: { label: "Milestone Delivery", value: "100% On-Time" },
    links: {
      linkedin: "https://linkedin.com/in/snehabishnoi",
      twitter: "https://twitter.com/snehabishnoi",
      whatsapp: "https://wa.me/918708572286?text=Hello%20Sneha,%20I%20would%20like%20to%20discuss%20a%20project%20with%20PKY%20Technologies.",
      phone: "+91 87085 72286",
      email: "mailto:sneha@pkytechnologies.com",
    },
  },
];

export function FoundersSection({ isDark = true }: { isDark?: boolean }) {
  return (
    <section className={`pky-section relative overflow-hidden ${isDark ? "pky-section-dark" : ""}`} id="leadership">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="pky-container relative z-10">
        <SectionHeader
          label="LEADERSHIP & VISION"
          title="Meet the Minds Behind PKY Technologies"
          description="We founded PKY Technologies to replace slow, bloated legacy agency retainers with cutting-edge engineering, bespoke AI automation, and measurable business growth."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-16">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>

        {/* Founders Quote / Commitment Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-cyan-400/30 p-8 sm:p-10 shadow-2xl shadow-cyan-950/20 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-mono font-semibold text-cyan-300 mb-4">
            <Sparkles size={14} />
            <span>FOUNDERS&apos; COMMITMENT</span>
          </div>
          <blockquote className="text-base sm:text-xl font-medium text-slate-200 italic mb-6 leading-relaxed max-w-2xl mx-auto">
            &ldquo;When you work with PKY Technologies, you collaborate directly with senior architects and founders who bet their reputation on your system&apos;s speed and commercial ROI.&rdquo;
          </blockquote>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="pky-btn pky-btn-primary pky-btn-md font-bold text-xs sm:text-sm"
            >
              <span>Schedule Strategy Call with Founders</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const [currentSrc, setCurrentSrc] = useState(founder.image);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  const handleError = () => {
    if (currentSrc !== founder.svgFallback) {
      setCurrentSrc(founder.svgFallback);
    } else {
      setHasFailedAll(true);
    }
  };

  return (
    <div id={founder.slug} itemScope itemType="https://schema.org/Person" className="h-full">
      <SpotlightCard
        delay={index * 0.15}
        cursorLabel="LEADERSHIP"
        className="p-6 sm:p-8 relative group h-full flex flex-col justify-between"
      >
        <div>
          {/* Large Prominent Executive Portrait Photo Section */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 p-[2px] bg-gradient-to-tr from-cyan-400/40 via-indigo-500/30 to-purple-600/40 border border-cyan-400/30 group-hover:border-cyan-400/60 shadow-xl shadow-cyan-950/40 transition-all duration-500">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-950 relative flex items-center justify-center">
              {!hasFailedAll ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentSrc}
                  alt={`${founder.name} - ${founder.role} at PKY Technologies`}
                  onError={handleError}
                  itemProp="image"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                /* Sleek Cyber Monogram Fallback */
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-center">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-tight mb-2">
                    {founder.initials}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 tracking-wider">
                    PKY TECHNOLOGIES
                  </span>
                </div>
              )}

              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Top Status Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700 text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>ACTIVE LEADERSHIP</span>
              </div>

              {/* Bottom Role Pill */}
              <div className="absolute bottom-3 left-3">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-xs font-mono font-bold tracking-wide shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span itemProp="jobTitle">{founder.role}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Name & Titles with Link to Executive Profile */}
          <div className="mb-4">
            <div className="flex items-center justify-between gap-2">
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight"
                itemProp="name"
              >
                {founder.name}
              </h3>
              <Link
                href={founder.profileUrl}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
                title={`View ${founder.name}'s Profile`}
              >
                <span>Profile</span>
                <ExternalLink size={12} />
              </Link>
            </div>
            <p className="text-sm text-cyan-300 font-semibold mt-1">
              {founder.title}
            </p>
          </div>

          {/* Bio */}
          <p
            className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5"
            itemProp="description"
          >
            {founder.bio}
          </p>

          {/* Core Expertise Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {founder.focus.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Profile CTA Button */}
          <div className="mb-5">
            <Link
              href={founder.profileUrl}
              className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-xs font-semibold transition-all group/cta"
            >
              <span>View Full Credentials & Biography</span>
              <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* WhatsApp / Phone Direct Button */}
          {founder.links.whatsapp && founder.links.phone ? (
            <div className="mb-6">
              <a
                href={founder.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-xs font-mono font-semibold transition-all group/wa"
                title={`Chat with ${founder.name} on WhatsApp`}
              >
                <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400 group-hover/wa:scale-110 transition-transform" />
                <span>WhatsApp: {founder.links.phone}</span>
              </a>
            </div>
          ) : founder.links.phone ? (
            <div className="mb-6">
              <a
                href={`tel:${founder.links.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 text-xs font-mono font-medium transition-colors"
                title={`Call ${founder.name}`}
              >
                <Phone size={13} className="text-cyan-400" />
                <span>Contact: {founder.links.phone}</span>
              </a>
            </div>
          ) : null}
        </div>

        {/* Footer Metrics & Social Links */}
        <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <CheckCircle2 size={15} />
            <span className="font-mono">{founder.metrics.value}</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {founder.links.whatsapp && (
              <a
                href={founder.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all"
                aria-label={`WhatsApp ${founder.name}`}
                title={`WhatsApp: ${founder.links.phone || ""}`}
              >
                <WhatsappIcon />
              </a>
            )}
            {founder.links.linkedin && (
              <a
                href={founder.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                aria-label={`${founder.name} LinkedIn`}
              >
                <LinkedinIcon />
              </a>
            )}
            {founder.links.github && (
              <a
                href={founder.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                aria-label={`${founder.name} GitHub`}
              >
                <GithubIcon />
              </a>
            )}
            {founder.links.twitter && (
              <a
                href={founder.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                aria-label={`${founder.name} Twitter`}
              >
                <TwitterIcon />
              </a>
            )}
            <a
              href={founder.links.email}
              className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
              aria-label={`Email ${founder.name}`}
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
