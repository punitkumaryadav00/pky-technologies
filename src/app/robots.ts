import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*"],
      },
      {
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
          "Cohere-ai",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
      },
    ],
    sitemap: "https://pkytechnologies.com/sitemap.xml",
    host: "https://pkytechnologies.com",
  };
}
