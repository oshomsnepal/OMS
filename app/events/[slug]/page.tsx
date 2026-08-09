import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { getCollection, getSiteSettings } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCollection("events").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getCollection("events").find((item) => item.slug === slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: event.title,
    description: event.shortDescription || `Event at OSHO Mystery School Nepal: ${event.title}`,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      type: "website",
      images: event.image ? [{ url: event.image, alt: event.alt ?? event.title }] : undefined,
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const events = getCollection("events");
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  const settings = getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oshomysteryschoolnepal.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.shortDescription,
    url: new URL(`/events/${event.slug}`, siteUrl).toString(),
    image: event.image ? new URL(event.image, siteUrl).toString() : undefined,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location || "OSHO Mystery School Nepal",
      address: settings.address,
    },
    organizer: { "@type": "Organization", name: "OSHO Mystery School Nepal", url: siteUrl },
  };

  return (
    <>
      <ProgramDetailPage item={event} related={events.filter((item) => item.slug !== event.slug).slice(0, 3)} kind="Event" basePath="/events" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

