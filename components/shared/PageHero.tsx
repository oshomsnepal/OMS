import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import type { ReactNode } from "react";

type Props = {
  title: string;
  copy: string;
  label: string;
  children?: ReactNode;
  light?: boolean;
  height?: string;
  vibrant?: boolean;
  accent?: "sage" | "terracotta" | "gold" | "forest";
};

export function PageHero({ title, copy, label, children, light = true, height = "min-h-[760px]", vibrant = false, accent }: Props) {
  const accentOverlays = {
    sage: light
      ? "linear-gradient(125deg, rgba(26,36,26,.68), rgba(77,103,78,.44), rgba(138,154,138,.3))"
      : "linear-gradient(125deg, rgba(251,249,244,.84), rgba(183,199,178,.42), rgba(251,249,244,.68))",
    terracotta: light
      ? "linear-gradient(125deg, rgba(26,36,26,.7), rgba(154,68,42,.45), rgba(191,91,63,.3))"
      : "linear-gradient(125deg, rgba(251,249,244,.84), rgba(232,163,130,.38), rgba(251,249,244,.68))",
    gold: light
      ? "linear-gradient(125deg, rgba(26,36,26,.7), rgba(124,93,42,.42), rgba(212,175,55,.28))"
      : "linear-gradient(125deg, rgba(251,249,244,.84), rgba(224,196,108,.36), rgba(251,249,244,.68))",
    forest: light
      ? "linear-gradient(125deg, rgba(15,27,18,.76), rgba(45,70,50,.48), rgba(138,154,138,.24))"
      : "linear-gradient(125deg, rgba(251,249,244,.86), rgba(138,154,138,.32), rgba(251,249,244,.72))",
  };
  return (
    <section className={`relative flex ${height} items-center justify-center overflow-hidden pt-24`}>
      <ResponsiveImage label={label} aspect="16 / 9" priority placeholderTone={accent ?? "neutral"} className="absolute inset-0 h-full w-full rounded-none" sizes="100vw" />
      <div
        className={`absolute inset-0 ${vibrant ? "bg-[linear-gradient(125deg,rgba(26,36,26,.74)_4%,rgba(154,68,42,.4)_54%,rgba(212,175,55,.25)_100%)]" : accent ? "" : light ? "bg-gradient-to-b from-[var(--forest)]/20 via-[var(--forest)]/25 to-[var(--forest)]/55" : "bg-[var(--surface)]/30"}`}
        style={accent ? { background: accentOverlays[accent] } : undefined}
      />
      {vibrant && (
        <>
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,231,169,.2),rgba(212,175,55,.055)_46%,transparent_70%)] blur-sm" />
          <SectionOrnament motif="mandala" position="top-right" light opacity={0.3} className="ornament-breathe right-[5%] top-[18%] scale-125" />
        </>
      )}
      <div className={`container relative z-10 max-w-5xl text-center ${light ? "text-white" : "text-[var(--forest)]"}`}>
        <h1 className="display text-balance">{title}</h1>
        <p className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${light ? "text-white/90" : "text-[var(--muted)]"}`}>{copy}</p>
        {children && <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
