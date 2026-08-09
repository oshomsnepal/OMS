import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { getCollection, getSiteSettings } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCollection("retreats").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getCollection("retreats").find((item) => item.slug === slug);
  if (!retreat) return { title: "Retreat Not Found" };

  return {
    title: retreat.title,
    description: retreat.shortDescription || `Retreat at OSHO Mystery School Nepal: ${retreat.title}`,
    alternates: { canonical: `/retreats/${retreat.slug}` },
    openGraph: {
      title: retreat.title,
      description: retreat.shortDescription,
      type: "website",
      images: retreat.image ? [{ url: retreat.image, alt: retreat.alt ?? retreat.title }] : undefined,
    },
  };
}

export default async function RetreatDetailPage({ params }: Props) {
  const { slug } = await params;
  const retreats = getCollection("retreats");
  const retreat = retreats.find((item) => item.slug === slug);
  if (!retreat) notFound();

  const settings = getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oshomysteryschoolnepal.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: retreat.title,
    description: retreat.shortDescription,
    url: new URL(`/retreats/${retreat.slug}`, siteUrl).toString(),
    image: retreat.image ? new URL(retreat.image, siteUrl).toString() : undefined,
    startDate: retreat.startDate,
    endDate: retreat.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: retreat.location || "OSHO Mystery School Nepal",
      address: settings.address,
    },
    organizer: { "@type": "Organization", name: "OSHO Mystery School Nepal", url: siteUrl },
  };

  return (
    <>
      <ProgramDetailPage item={retreat} related={retreats.filter((item) => item.slug !== retreat.slug).slice(0, 3)} kind="Retreat" basePath="/retreats" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

