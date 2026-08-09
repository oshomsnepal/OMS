import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { formatDate, getCollection } from "@/lib/content";
import { SectionOrnament } from "@/components/shared/SectionOrnament";

export const metadata: Metadata = { title: "Events", description: "Meditation gatherings, celebrations, and events at OSHO Mystery School Nepal." };

export default function EventsPage() {
  const events = getCollection("events").sort((a,b)=>(a.startDate ?? "9999").localeCompare(b.startDate ?? "9999"));
  return (
    <>
      <PageHero title="Sacred Timing" copy="Join us in celebrating the rhythm of existence—from silent meditation days to music, dance, and seasonal gatherings." label="Events Hero Image" light={false} accent="gold" />
      <section className="section container relative overflow-hidden"><SectionOrnament motif="bloom" position="top-left" tone="terracotta" opacity={0.3}/><SectionOrnament motif="botanical" position="bottom-right" tone="sage" opacity={0.3}/><div className="relative z-10"><div className="mb-12 flex flex-wrap justify-center gap-3">{["All","Festival","Intensive","Meditation Day","Celebration"].map((label,index)=><span key={label} className={`label rounded-full px-5 py-2 ${index===0 ? "bg-[var(--surface-high)]" : "bg-[var(--sage)]/15"}`}>{label}</span>)}</div>{events.length ? <div className="grid gap-8 md:grid-cols-12">{events.map((event,index)=><article key={event.slug} className={`group overflow-hidden rounded-[8px] bg-white ${index===0 ? "md:col-span-12 md:grid md:grid-cols-2" : "md:col-span-6 lg:col-span-4"}`}><ResponsiveImage src={event.image} alt={event.alt ?? event.title} label="Event Image" aspect={index===0 ? "16 / 9" : "4 / 3"}/><div className="flex flex-col p-8"><div className="mb-5 flex items-center justify-between gap-3"><span className="eyebrow text-[var(--terracotta-bright)]">{event.status ?? "Schedule update"}</span><span className="text-xs text-[var(--muted)]">{formatDate(event.startDate)}</span></div><h2 className="text-3xl text-[var(--forest)]">{event.title}</h2><p className="mt-4 flex-1 text-[var(--muted)]">{event.shortDescription}</p>{event.location && <p className="label mt-6 text-[var(--forest)]">{event.location}</p>}</div></article>)}</div> : <EmptyState message="No events are currently published. Contact us for the latest meditation schedule." />}<div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"><Button href="/visit" variant="secondary">Ask About the Calendar</Button><Button href="/visit">Inquire About an Event</Button></div></div></section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#f7ede5,#f3efd9)] text-center"><SectionOrnament motif="angles" position="top-left" tone="terracotta" opacity={0.3}/><SectionOrnament motif="mandala" position="bottom-right" tone="sage" opacity={0.3}/><div className="container relative z-10"><div className="hairline mx-auto mb-8"/><blockquote className="mx-auto max-w-4xl text-4xl italic leading-tight text-[var(--forest)] md:text-5xl">Life should not only be lived, it should be celebrated.</blockquote></div></section>
    </>
  );
}
