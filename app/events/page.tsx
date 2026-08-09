import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { ContentCard } from "@/components/shared/ContentCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { getCollection, getPage } from "@/lib/content";

export const metadata: Metadata = { title: "Events", description: "Meditation gatherings, celebrations, and events at OSHO Mystery School Nepal." };

export default function EventsPage() {
  const events = getCollection("events").sort((a, b) => (a.startDate ?? "9999").localeCompare(b.startDate ?? "9999"));
  const page = getPage("events");

  return (
    <>
      <PageHero title="Sacred Timing" copy="Join us in celebrating the rhythm of existence—from silent meditation days to music, dance, and seasonal gatherings." label="Events Hero Image" image={page.heroImage} imageAlt={page.heroAlt ?? "A celebration at OSHO Mystery School Nepal"} light={false} accent="gold" />
      <section className="section container relative overflow-hidden">
        <SectionOrnament motif="bloom" position="top-left" tone="terracotta" opacity={0.3} />
        <SectionOrnament motif="botanical" position="bottom-right" tone="sage" opacity={0.3} />
        <div className="relative z-10">
          <SectionHeading eyebrow="Gather with us" title="Events & Celebrations" copy="Open an event to see its complete schedule, location, practical details, and registration information." center />
          {events.length ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => <ContentCard key={event.slug} item={event} label="Event Image" href={`/events/${event.slug}`} />)}
            </div>
          ) : <EmptyState message="No events are currently published. Contact us for the latest meditation schedule." />}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"><Button href="/visit" variant="secondary">Ask About the Calendar</Button><Button href="/visit">Inquire About an Event</Button></div>
        </div>
      </section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#f7ede5,#f3efd9)] text-center">
        <SectionOrnament motif="angles" position="top-left" tone="terracotta" opacity={0.3} />
        <SectionOrnament motif="mandala" position="bottom-right" tone="sage" opacity={0.3} />
        <div className="container relative z-10"><div className="hairline mx-auto mb-8" /><blockquote className="mx-auto max-w-4xl text-4xl italic leading-tight text-[var(--forest)] md:text-5xl">Life should not only be lived, it should be celebrated.</blockquote></div>
      </section>
    </>
  );
}

