import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pkytechnologies.com";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/team/sneha-bishnoi`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/team/punit-kumar-yadav`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/seo`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/services/branding`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/ai-automation`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/estimate`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];

  return routes;
}
