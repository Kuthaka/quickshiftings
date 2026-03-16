import { MetadataRoute } from "next";

const CITY_SLUGS = [
  "nellore", "tirupati", "hyderabad", "bangalore", "chennai",
  "vijayawada", "visakhapatnam", "coimbatore", "kochi", "mysuru",
  "madurai", "hubballi", "warangal", "salem", "thiruvananthapuram",
  "thrissur", "karimnagar", "mangalore", "guntur", "kakinada",
  "ongole", "rajahmundry", "kozhikode",
];

const BASE_URL = "https://www.packershub.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/services`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`,         lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
  ];

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/${slug}-packers-and-movers`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    // Nellore HQ gets highest priority among city pages
    priority: slug === "nellore" ? 0.95 : 0.9,
  }));

  // Known blog posts — add new posts here when published:
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/peace-of-mind-packers-and-movers-in-bangalore-and-interstate`,
      lastModified: new Date("2026-02-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/trusted-packers-and-movers-in-vijayawada-for-door-to-door-house-shifting`,
      lastModified: new Date("2026-02-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/affordable-packers-and-movers-in-vijayawada-visakhapatnam-chennai-bangalore-and-hyderabad`,
      lastModified: new Date("2026-02-06"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [...staticPages, ...cityPages, ...blogPages];
}
