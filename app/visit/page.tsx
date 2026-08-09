import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/shared/Button";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getPage, getSiteSettings } from "@/lib/content";
import { SectionOrnament } from "@/components/shared/SectionOrnament";

export const metadata: Metadata = { title: "Visit Us", description: "Plan a visit to OSHO Mystery School Nepal near Kathmandu." };

export default function VisitPage() {
  const settings = getSiteSettings();
  const page = getPage("visit");
  const mapsLink = settings.mapsLink ?? "https://maps.app.goo.gl/zFBfTXpDaBDnhgJu9";
  const mapEmbedUrl = settings.mapEmbedUrl ?? "https://www.google.com/maps?q=27.7860343,85.2989932&z=16&output=embed";
  const contacts: Array<[LucideIcon, string, string | undefined, string]> = [
    [MessageCircle,"WhatsApp",settings.whatsapp,"Fastest response for retreat inquiries"],
    [Mail,"Email",settings.email,"Write to us with your questions"],
    [Phone,"Phone",settings.phone,"Call when you need to speak with us"],
    [MapPin,"Address",settings.address,"Kathmandu, Nepal"],
  ];
  return (
    <>
      <PageHero title="Come as You Are" copy="Whether you are planning a retreat or simply curious about a day visit, we would be happy to help you find your way here." label="Visit Hero Image" image={page.heroImage} imageAlt={page.heroAlt ?? "The journey to OSHO Mystery School Nepal"} light={false} accent="sage"/>
      <section className="section container relative overflow-hidden"><SectionOrnament motif="bloom" position="top-right" tone="terracotta" opacity={0.3}/><div className="relative z-10 grid gap-16 lg:grid-cols-12"><div className="lg:col-span-5"><SectionHeading eyebrow="Contact" title="Let’s Begin a Conversation" /><div className="space-y-8">{contacts.map(([Icon,title,value,note])=>{const ContactIcon=Icon as typeof Mail; return <div key={String(title)} className="flex gap-5"><ContactIcon className="mt-1 shrink-0 text-[var(--terracotta-bright)]"/><div><h3 className="label text-[var(--forest)]">{String(title)}</h3><p className="mt-1 text-[var(--muted)]">{value || "To be confirmed"}</p><p className="mt-1 text-xs text-[var(--muted)]/70">{String(note)}</p></div></div>})}</div></div><div className="rounded-[8px] bg-[var(--surface-low)] p-8 sm:p-12 lg:col-span-7"><h2 className="text-3xl text-[var(--forest)]">Send a Message</h2><ContactForm /></div></div></section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#eef2eb,#f7efe7)]"><SectionOrnament motif="himalaya" position="bottom-left" tone="sage" opacity={0.3}/><div className="container relative z-10 grid items-center gap-16 lg:grid-cols-2"><div><SectionHeading eyebrow="Getting here" title="In the Foothills Near Kathmandu" /><p className="lede">Contact the school before travelling so we can share the current directions and help coordinate your arrival.</p><p className="mt-5 text-[var(--muted)]">Travel times vary with Kathmandu traffic and your point of departure. We will provide practical, up-to-date guidance when your visit is confirmed.</p><Button href={mapsLink} variant="secondary" className="mt-9">Open Map</Button></div><MapEmbed embedUrl={mapEmbedUrl} mapsLink={mapsLink} /></div></section>
      <section className="section container relative overflow-hidden"><SectionOrnament motif="lotus" position="bottom-right" tone="terracotta" opacity={0.3}/><div className="relative z-10"><SectionHeading eyebrow="Before you come" title="A Few Useful Answers" center/><div className="grid gap-8 md:grid-cols-3">{[["Prior Experience?","No previous meditation experience is necessary. Come with curiosity and comfortable clothes."],["What to Bring?","For day mediation you would need maroon robes and for evening meditation we would need a white robes."],["Day Visits?","Please contact us first so we can tell you which meditations and visiting times are available."]].map(([title,copy])=><article key={title} className="rounded-[8px] bg-[var(--surface-high)] p-8"><h3 className="text-2xl text-[var(--forest)]">{title}</h3><p className="mt-4 text-[var(--muted)]">{copy}</p></article>)}</div></div></section>
      <section className="section section-low text-center"><div className="container"><h2 className="display text-[var(--forest)]">Your Journey Can Begin Here</h2><p className="lede mx-auto mt-6 max-w-xl">Send us a message and we will help you understand the simplest next step.</p><Button href={settings.bookingLink ?? "/retreats"} className="mt-9">Book a Retreat</Button></div></section>
    </>
  );
}
