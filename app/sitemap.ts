import type { MetadataRoute } from "next";
import { getCollection } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oshomysteryschoolnepal.com";
  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/quotes", "/retreats", "/stay", "/gallery", "/events", "/visit"].map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
  const retreatRoutes: MetadataRoute.Sitemap = getCollection("retreats").map((item) => ({
    url: `${base}/retreats/${item.slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
  }));
  const eventRoutes: MetadataRoute.Sitemap = getCollection("events").map((item) => ({
    url: `${base}/events/${item.slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...retreatRoutes, ...eventRoutes];
}
