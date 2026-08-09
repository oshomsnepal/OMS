"use client";

import { useState } from "react";
import { oshoQuoteCategories, oshoQuotes } from "@/lib/osho-quotes";

const publishedQuotes = oshoQuotes
  .filter((item) => item.quote.trim())
  .slice(0, 100);

export function QuotesCollection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const availableCategories = oshoQuoteCategories.filter((category) =>
    publishedQuotes.some((item) => item.category === category),
  );
  const visibleQuotes = activeCategory === "all"
    ? publishedQuotes
    : publishedQuotes.filter((item) => item.category === activeCategory);

  if (!publishedQuotes.length) {
    return (
      <div className="rounded-[8px] border border-[var(--forest)]/10 bg-white px-6 py-16 text-center shadow-[0_12px_35px_rgba(26,36,26,.05)]">
        <p className="eyebrow text-[var(--terracotta-bright)]">Coming soon</p>
        <h3 className="mt-4 text-3xl text-[var(--forest)]">The quotation collection is being prepared.</h3>
        <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">Verified quotations and their original sources will be published here.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3" aria-label="Filter quotations by theme">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          aria-pressed={activeCategory === "all"}
          className={`label rounded-full border px-5 py-3 transition ${activeCategory === "all" ? "border-[var(--terracotta-bright)] bg-[var(--terracotta-bright)] text-white" : "border-[var(--forest)]/15 bg-white text-[var(--forest)] hover:border-[var(--terracotta-bright)]"}`}
        >
          All {publishedQuotes.length}
        </button>
        {availableCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`label rounded-full border px-5 py-3 transition ${activeCategory === category ? "border-[var(--terracotta-bright)] bg-[var(--terracotta-bright)] text-white" : "border-[var(--forest)]/15 bg-white text-[var(--forest)] hover:border-[var(--terracotta-bright)]"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mb-8 text-center text-sm text-[var(--muted)]" aria-live="polite">
        Showing {visibleQuotes.length} {visibleQuotes.length === 1 ? "quotation" : "quotations"}
      </p>

      <ol className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {visibleQuotes.map((item) => {
          const number = publishedQuotes.indexOf(item) + 1;
          return (
            <li key={`${item.quote}-${number}`} className="mb-6 break-inside-avoid rounded-[8px] border border-[var(--forest)]/8 bg-white p-8 shadow-[0_12px_35px_rgba(26,36,26,.07)]">
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow text-[var(--terracotta-bright)]">{String(number).padStart(3, "0")}</span>
                <span className="text-right text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--sage)]">{item.category}</span>
              </div>
              <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-[var(--forest)]">&ldquo;{item.quote}&rdquo;</blockquote>
              {(item.source || item.sourceUrl) && (
                <div className="mt-6 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
                  {item.sourceUrl ? (
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--gold)] underline-offset-4 hover:text-[var(--terracotta-bright)]">
                      {item.source || "View source"}
                    </a>
                  ) : item.source}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}

