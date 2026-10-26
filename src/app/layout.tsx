import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pkytechnologies.com"),
  title: {
    default: "PKY Technologies — Your Digital Growth & Technology Partner",
    template: "%s | PKY Technologies",
  },
  description:
    "We help businesses build a powerful digital presence, acquire more customers, and grow through technology, AI-powered solutions, and strategic digital marketing.",
  keywords: [
    "website development",
    "digital marketing",
    "SEO services",
    "AI automation",
    "custom software",
    "digital growth partner",
    "PKY Technologies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pkytechnologies.com",
    siteName: "PKY Technologies",
    title: "PKY Technologies — Your Digital Growth & Technology Partner",
    description:
      "From high-performance websites and search visibility to AI-powered automation and custom business software, we turn technology into practical business growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PKY Technologies — Your Digital Growth & Technology Partner",
    description:
      "From high-performance websites and search visibility to AI-powered automation and custom business software, we turn technology into practical business growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://pkytechnologies.com/#organization",
                  name: "PKY Technologies",
                  url: "https://pkytechnologies.com",
                  logo: "https://pkytechnologies.com/favicon.ico",
                  description:
                    "Enterprise digital growth and engineering partner specializing in sub-second Next.js web applications, AI automation, Generative Engine Optimization (GEO), and bespoke software.",
                  email: "contact@pkytechnologies.com",
                  sameAs: [
                    "https://linkedin.com/company/pky-technologies",
                    "https://twitter.com/pkytechnologies",
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://pkytechnologies.com/#service",
                  name: "PKY Technologies Digital Engineering",
                  provider: {
                    "@id": "https://pkytechnologies.com/#organization",
                  },
                  areaServed: ["IN", "US", "GB", "AE"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Transformation Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Custom Web Application & Next.js Development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SEO & Generative Engine Optimization (GEO)",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Enterprise WhatsApp & Workflow AI Automation",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Brand Strategy, UI/UX & Digital Positioning",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--pky-bg-primary)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
