"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import type { ContentEntry } from "@/lib/types";

const categories = ["All", "Meditation", "Celebration", "Nature", "Retreats", "Community", "Our Space"];

export function GalleryClient({ items }: { items: ContentEntry[] }) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const filtered = useMemo(() => category === "All" ? items : items.filter((item) => item.category === category), [category, items]);
  const close = useCallback(() => setActive(null), []);
  const move = useCallback((direction: number) => setActive((current) => current === null ? null : (current + direction + filtered.length) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButton.current?.focus();
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, close, move]);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-x-3 gap-y-2" role="group" aria-label="Filter gallery">
        {categories.map((name) => <button key={name} onClick={() => { setCategory(name); setActive(null); }} className={`label border-b-2 px-3 py-2 transition ${category === name ? "border-[var(--terracotta-bright)] text-[var(--terracotta-bright)]" : "border-transparent text-[var(--muted)] hover:text-[var(--terracotta-bright)]"}`}>{name}</button>)}
      </div>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <button key={item.slug} onClick={() => setActive(index)} className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-[6px] text-left" aria-label={`Open ${item.title} in gallery viewer`}>
            <ResponsiveImage src={item.image} alt={item.alt ?? item.title} label="Gallery Image" aspect={item.aspect ?? (index % 3 === 1 ? "4 / 5" : index % 3 === 2 ? "1 / 1" : "3 / 2")} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-sm text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">{item.title}</span>
          </button>
        ))}
      </div>
      {active !== null && filtered[active] && (
        <div role="dialog" aria-modal="true" aria-label="Gallery image viewer" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10" onTouchStart={(event)=>{touchStart.current=event.touches[0].clientX}} onTouchEnd={(event)=>{if(touchStart.current===null)return;const delta=event.changedTouches[0].clientX-touchStart.current;if(Math.abs(delta)>50)move(delta<0?1:-1);touchStart.current=null}}>
          <button ref={closeButton} onClick={close} aria-label="Close gallery viewer" className="absolute right-5 top-5 rounded-full p-3 text-white hover:bg-white/10"><X /></button>
          <button onClick={() => move(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:bg-white/10 sm:left-8"><ChevronLeft size={32}/></button>
          <div className="w-full max-w-5xl"><ResponsiveImage src={filtered[active].image} alt={filtered[active].alt ?? filtered[active].title} label="Gallery Image" aspect={filtered[active].aspect ?? "16 / 10"} sizes="100vw" className="max-h-[78vh] bg-black"/><div className="mt-5 text-center text-white"><p className="text-xl">{filtered[active].title}</p>{filtered[active].caption && <p className="mt-1 text-sm text-white/60">{filtered[active].caption}</p>}</div></div>
          <button onClick={() => move(1)} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:bg-white/10 sm:right-8"><ChevronRight size={32}/></button>
        </div>
      )}
    </>
  );
}
