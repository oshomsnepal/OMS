import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ContentEntry, SiteSettings } from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content");

export function getCollection(folder: string): ContentEntry[] {
  const directory = path.join(contentRoot, folder);
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? data.name ?? "Untitled"),
        ...data,
        body: content.trim(),
      } as ContentEntry;
    })
    .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
}

export function getSiteSettings(): SiteSettings {
  const file = path.join(contentRoot, "settings", "site.md");
  if (!fs.existsSync(file)) return {};
  return matter(fs.readFileSync(file, "utf8")).data as SiteSettings;
}

export function getPage(slug: string): Record<string, string> {
  const file = path.join(contentRoot, "pages", `${slug}.md`);
  if (!fs.existsSync(file)) return {};
  return matter(fs.readFileSync(file, "utf8")).data as Record<string, string>;
}

export function formatDate(date?: string): string {
  if (!date) return "Date to be announced";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(parsed);
}
