import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oshomysteryschoolnepal.com";
  return ["", "/about", "/meditations", "/retreats", "/stay", "/gallery", "/events", "/visit"].map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .8 }));
}
