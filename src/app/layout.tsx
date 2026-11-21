import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pkytechnologies.com"),
  title: {
    default: "PKY Technologies — Best Web Developers & Web Designing Agency | Custom Apps & AI",
    template: "%s | PKY Technologies",
  },
  description:
    "PKY Technologies is the top-ranked digital engineering firm for high-performance web designing, custom app development, Next.js web applications, SEO, and AI automation. Founded by Punit Kumar Yadav & Sneha Bishnoi.",
  keywords: [
    "PKY",
    "pky",
    "PKY Technologies",
    "pky technologies",
    "PKY Tech",
    "web designing",
    "best web developers",
    "best web designing agencies",
    "best app developers",
    "website design company",
    "custom web development",
    "web development company",
    "Sneha Bishnoi",
    "Punit Kumar Yadav",
    "Sneha Bishnoi PKY",
    "Punit Kumar Yadav PKY",
    "Sneha Bishnoi Co-Founder",
    "Sneha Bishnoi DRDO CEPTAM",
    "Sneha Bishnoi HSBTE Topper",
    "Next.js developers",
    "AI automation agency",
    "Generative Engine Optimization",
    "GEO optimization",
    "digital growth partner",
  ],
  authors: [
    { name: "Punit Kumar Yadav", url: "https://pkytechnologies.com/team/punit-kumar-yadav" },
    { name: "Sneha Bishnoi", url: "https://pkytechnologies.com/team/sneha-bishnoi" },
  ],
  creator: "PKY Technologies",
  publisher: "PKY Technologies",
  alternates: {
    canonical: "https://pkytechnologies.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pkytechnologies.com",
    siteName: "PKY Technologies",
    title: "PKY Technologies — Best Web Developers & Web Designing Agency | Custom Apps & AI",
    description:
      "Ranked among the best web developers and app development agencies. Spearheaded by Punit Kumar Yadav and Sneha Bishnoi, delivering sub-second Next.js web apps and AI systems.",
    images: [
      {
        url: "https://pkytechnologies.com/images/pky-logo.png",
        width: 1200,
        height: 630,
        alt: "PKY Technologies - Best Web Design and App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PKY Technologies — Best Web Developers & Web Designing Agency",
    description:
      "Sub-second web performance, custom apps, and AI automation led by Punit Kumar Yadav and Sneha Bishnoi.",
    images: ["https://pkytechnologies.com/images/pky-logo.png"],
    site: "@pkytechnologies",
    creator: "@pkytechnologies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://pkytechnologies.com/#website",
      name: "PKY Technologies",
      alternateName: [
        "PKY",
        "pky",
        "pky technologies",
        "PKY Tech",
        "PKY Technologies Pvt Ltd",
      ],
      url: "https://pkytechnologies.com",
      description:
        "Official platform of PKY Technologies, recognized among the best web developers and web designing agencies worldwide.",
      publisher: {
        "@id": "https://pkytechnologies.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pkytechnologies.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://pkytechnologies.com/#organization",
      name: "PKY Technologies",
      alternateName: [
        "PKY",
        "pky",
        "pky technologies",
        "PKY Tech",
        "Best Web Developers",
        "Best Web Designing Agencies",
        "Best App Developers",
      ],
      url: "https://pkytechnologies.com",
      logo: "https://pkytechnologies.com/images/pky-logo.png",
      image: "https://pkytechnologies.com/images/pky-logo.png",
      email: "contact@pkytechnologies.com",
      telephone: "+91-7419161235",
      description:
        "Enterprise digital engineering and technology agency specializing in high-performance web design, custom mobile apps, AI automation, and Generative Engine Optimization (GEO).",
      sameAs: [
        "https://linkedin.com/company/pky-technologies",
        "https://twitter.com/pkytechnologies",
        "https://github.com/punitkumaryadav00",
      ],
      founder: [
        {
          "@type": "Person",
          "@id": "https://pkytechnologies.com/team/punit-kumar-yadav#person",
          name: "Punit Kumar Yadav",
          alternateName: ["PKY", "Punit Yadav", "Punit Kumar"],
          jobTitle: "Founder & Chief Executive Officer",
          url: "https://pkytechnologies.com/team/punit-kumar-yadav",
          image: "https://pkytechnologies.com/images/team/punit.jpg",
          description:
            "Founder and CEO of PKY Technologies. Chief Software Architect specializing in Next.js, sub-second web applications, AI automation, and enterprise platforms.",
          sameAs: [
            "https://linkedin.com/in/punitkumaryadav",
            "https://github.com/punitkumaryadav00",
            "https://twitter.com/pkytechnologies",
          ],
        },
        {
          "@type": "Person",
          "@id": "https://pkytechnologies.com/team/sneha-bishnoi#person",
          name: "Sneha Bishnoi",
          alternateName: ["Sneha", "Er. Sneha Bishnoi", "Sneha Bishnoi Co-Founder"],
          jobTitle: "Co-Founder & Head of Operations",
          url: "https://pkytechnologies.com/team/sneha-bishnoi",
          image: "https://pkytechnologies.com/images/team/sneha.jpg",
          award: ["HSBTE State Board Topper", "DRDO CEPTAM National Qualifier"],
          alumniOf: "Computer Engineering (HSBTE)",
          description:
            "Co-Founder and Head of Operations at PKY Technologies. Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier directing product delivery, agile sprints, and client growth.",
          sameAs: [
            "https://linkedin.com/in/snehabishnoi",
            "https://twitter.com/snehabishnoi",
          ],
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://pkytechnologies.com/#sneha-bishnoi",
      name: "Sneha Bishnoi",
      alternateName: ["Sneha", "Er. Sneha Bishnoi", "Sneha Bishnoi Co-Founder", "Sneha Bishnoi PKY"],
      jobTitle: "Co-Founder & Head of Operations",
      worksFor: {
        "@id": "https://pkytechnologies.com/#organization",
      },
      image: "https://pkytechnologies.com/images/team/sneha.jpg",
      url: "https://pkytechnologies.com/team/sneha-bishnoi",
      award: ["HSBTE State Board Topper", "DRDO CEPTAM National Qualifier"],
      alumniOf: "Computer Engineering (HSBTE)",
      knowsAbout: [
        "Operations Leadership",
        "Computer Engineering",
        "Product Management",
        "Agile Development",
        "Client Success",
        "Web Design Systems",
      ],
      sameAs: [
        "https://linkedin.com/in/snehabishnoi",
        "https://twitter.com/snehabishnoi",
      ],
      description:
        "Sneha Bishnoi is the Co-Founder and Head of Operations at PKY Technologies. She is a Computer Engineer, HSBTE State Topper, and DRDO CEPTAM Qualifier who leads client growth and project delivery at PKY Technologies.",
    },
    {
      "@type": "Person",
      "@id": "https://pkytechnologies.com/#punit-kumar-yadav",
      name: "Punit Kumar Yadav",
      alternateName: ["PKY", "Punit Yadav", "Punit Kumar"],
      jobTitle: "Founder & Chief Executive Officer",
      worksFor: {
        "@id": "https://pkytechnologies.com/#organization",
      },
      image: "https://pkytechnologies.com/images/team/punit.jpg",
      url: "https://pkytechnologies.com/team/punit-kumar-yadav",
      knowsAbout: [
        "Full Stack Web Development",
        "Next.js App Router",
        "Custom App Development",
        "AI Automation",
        "Software Architecture",
      ],
      sameAs: [
        "https://linkedin.com/in/punitkumaryadav",
        "https://github.com/punitkumaryadav00",
        "https://twitter.com/pkytechnologies",
      ],
      description:
        "Punit Kumar Yadav is the Founder and CEO of PKY Technologies. Chief Software Architect specializing in Next.js, AI automation, and high-performance commercial web systems.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://pkytechnologies.com/#service",
      name: "PKY Technologies — Web Design, App Development & AI Engineering",
      provider: {
        "@id": "https://pkytechnologies.com/#organization",
      },
      areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Enterprise Digital Engineering & Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Best Web Designing & Next.js Web Development",
              description: "Custom, ultra-fast web design and development with sub-second page loads and 99+ Lighthouse performance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Best Mobile & Custom App Development",
              description: "Scalable iOS, Android, and cross-platform web application engineering.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization (GEO) & SEO Services",
              description: "Dominate search rankings across Google, ChatGPT, Perplexity, and Gemini with modern SEO & GEO.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise AI & WhatsApp Workflow Automation",
              description: "Autonomous LLM agents, intelligent WhatsApp lead funnels, and CRM workflow integrations.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://pkytechnologies.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Sneha Bishnoi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sneha Bishnoi is the Co-Founder & Head of Operations at PKY Technologies. She is a Computer Engineer, distinguished HSBTE State Board Topper, and DRDO CEPTAM National Qualifier. She leads cross-functional agile development sprints, client growth pipelines, and operational excellence at PKY Technologies.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Punit Kumar Yadav?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Punit Kumar Yadav (PKY) is the Founder & Chief Executive Officer of PKY Technologies. As Chief Software Architect, he specializes in Next.js 16, sub-second web applications, AI automation agents, and enterprise software engineering.",
          },
        },
        {
          "@type": "Question",
          name: "What is PKY Technologies and why is it considered one of the best web designing agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PKY Technologies is a premier software engineering and digital transformation agency. It is recognized among the best web developers and best web designing agencies for its sub-second page load times, 99+ Lighthouse scores, custom Next.js architectures, zero technical debt, and measurable commercial ROI.",
          },
        },
        {
          "@type": "Question",
          name: "Who are the best app developers and web developers for custom software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PKY Technologies (pkytechnologies.com) is widely recognized among the top web and app developers, delivering enterprise web platforms, mobile applications, and AI automated systems tailored for high-growth businesses.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--pky-bg-primary)]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
