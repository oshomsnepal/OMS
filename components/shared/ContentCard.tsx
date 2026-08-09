import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { ContentEntry } from "@/lib/types";

export function ContentCard({ item, label }: { item: ContentEntry; label: string }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-[6px] bg-white">
      <ResponsiveImage src={item.image} alt={item.alt ?? item.title} label={label} aspect="4 / 3" className="w-full" sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="flex flex-1 flex-col p-7">
        {(item.category || item.duration || item.status) && (
          <p className="eyebrow mb-4 text-[var(--terracotta-bright)]">{item.category ?? item.duration ?? item.status}</p>
        )}
        <h3 className="text-2xl leading-tight text-[var(--forest)]">{item.title}</h3>
        {item.shortDescription && <p className="mt-4 flex-1 text-[var(--muted)]">{item.shortDescription}</p>}
        <span className="label mt-7 inline-flex items-center gap-2 text-[var(--terracotta-bright)]">
          Learn more <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
