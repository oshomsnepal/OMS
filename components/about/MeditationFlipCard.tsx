"use client";

import { useState, type KeyboardEvent } from "react";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { ContentEntry } from "@/lib/types";

type Props = {
  item: ContentEntry;
  index: number;
};

const backSurfaces = ["bg-[var(--forest)]", "bg-[var(--terracotta)]", "bg-[#6f775c]"];

export function MeditationFlipCard({ item, index }: Props) {
  const [flipped, setFlipped] = useState(false);
  const details = item.body || item.shortDescription || "More details will be added soon.";

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFlipped(true);
    }
    if (event.key === "Escape") setFlipped(false);
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={flipped}
      aria-label={`${flipped ? "Details about" : "Show details about"} ${item.title}`}
      className="group h-[440px] cursor-pointer rounded-[10px] outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-[var(--terracotta-bright)] focus-visible:ring-offset-4"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(true)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[10px] bg-[var(--surface-high)] [backface-visibility:hidden]" aria-hidden={flipped}>
          <ResponsiveImage src={item.image} alt={item.alt ?? item.title} label="Meditation Image" aspect="4 / 5" className="absolute inset-0 h-full w-full rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/95 via-[var(--forest)]/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white">
            <p className="eyebrow text-[#ffd4c5]">Meditation {String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">{item.title}</h3>
            <p className="mt-4 text-[8px] uppercase tracking-[.16em] text-white/65">Hover, focus, or tap to discover more</p>
          </div>
        </div>

        <div className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[10px] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${backSurfaces[index % backSurfaces.length]}`} aria-hidden={!flipped}>
          <div>
            <p className="eyebrow text-white/65">The practice</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">{item.title}</h3>
            <p className="mt-5 leading-relaxed text-white/80">{item.shortDescription}</p>
            {details !== item.shortDescription && <p className="mt-4 text-sm leading-relaxed text-white/65">{details}</p>}
          </div>
          <div className="flex flex-wrap gap-2">
            {item.duration && <span className="rounded-full border border-white/25 px-3 py-1 text-xs">{item.duration}</span>}
            {item.energyLevel && <span className="rounded-full border border-white/25 px-3 py-1 text-xs">{item.energyLevel} energy</span>}
          </div>
        </div>
      </div>
    </article>
  );
}
