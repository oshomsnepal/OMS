import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { ContentEntry } from "@/lib/types";

export function ContentCard({ item, label, href }: { item: ContentEntry; label: string; href: string }) {
  return (
    <article className="card-lift group h-full overflow-hidden rounded-[6px] bg-white">
      <Link href={href} className="flex h-full flex-col" aria-label={`View details for ${item.title}`}>
        <ResponsiveImage src={item.image} alt={item.alt ?? item.title} label={label} aspect="4 / 3" className="w-full" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="flex flex-1 flex-col p-7">
          {(item.category || item.duration || item.status || item.availability) && (
            <p className="eyebrow mb-4 text-[var(--terracotta-bright)]">{item.category ?? item.duration ?? item.status ?? item.availability}</p>
          )}
          <h3 className="text-2xl leading-tight text-[var(--forest)]">{item.title}</h3>
          {item.shortDescription && <p className="mt-4 flex-1 text-[var(--muted)]">{item.shortDescription}</p>}
          <span className="label mt-7 inline-flex items-center gap-2 text-[var(--terracotta-bright)]">
            View details <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
