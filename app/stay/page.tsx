import type { Metadata } from "next";
import { BookOpen, Salad, Shirt, Wifi } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { getCollection, getPage } from "@/lib/content";
import type { ContentEntry } from "@/lib/types";

export const metadata: Metadata = { title: "Stay", description: "Stay at OSHO Mystery School Nepal and experience the daily rhythm of the meditation center." };

const defaults: ContentEntry[] = [
  { slug:"room", title:"Guest Rooms", shortDescription:"Simple, quiet spaces designed for rest between meditations.", aspect:"16 / 9" },
  { slug:"forest", title:"Forest-side Rooms", shortDescription:"Rooms close to trees and the sounds of the surrounding landscape.", aspect:"4 / 5" },
  { slug:"shared", title:"Shared Living", shortDescription:"Comfortable shared spaces for people who enjoy community life.", aspect:"4 / 5" },
  { slug:"long", title:"Longer Stays", shortDescription:"A steady home base for those who want to deepen their practice.", aspect:"16 / 9" },
];

export default function StayPage() {
  const cmsItems = getCollection("stay");
  const items = cmsItems.length ? cmsItems : defaults;
  const page = getPage("stay");
  const amenities = [[Salad,"Vegetarian Meals","Nourishing meals shared in community."],[Shirt,"Practical Comfort","Simple support for an uncomplicated stay."],[Wifi,"Designated Wi-Fi","Connection available in selected common areas."],[BookOpen,"Library","Space for reading, listening, and quiet study."]];
  return (
    <>
      <PageHero title="Stay Close to Silence" copy="Wake with the mountain light, meditate with the community, and let the day unfold at a gentler pace." label="Stay Hero Image" image={page.heroImage} imageAlt={page.heroAlt ?? "Accommodation at OSHO Mystery School Nepal"} accent="forest"><Button href="/visit">Inquire About a Stay</Button></PageHero>
      <section className="section container text-center"><SectionHeading eyebrow="A different rhythm" title="More Than a Room" copy="Staying at the Mystery School means becoming part of the daily flow—meditation, meals, rest, nature, and shared moments." center /></section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#f2f3ed,#f8eee7)]"><SectionOrnament motif="botanical" position="bottom-left" tone="terracotta" opacity={0.3}/><div className="container relative z-10"><SectionHeading eyebrow="Accommodation" title="Spaces to Rest" copy="Availability and room details are confirmed personally when you contact the school." center /><div className="grid gap-6 md:grid-cols-12 md:auto-rows-[360px]">{items.slice(0,4).map((item,index)=><article key={item.slug} className={`group relative overflow-hidden rounded-[8px] ${index===0 || index===3 ? "md:col-span-7" : "md:col-span-5"}`}><ResponsiveImage src={item.image} alt={item.alt ?? item.title} label="Stay Image" aspect={item.aspect ?? "4 / 3"} className="absolute inset-0 h-full w-full"/><div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-white"><h3 className="text-3xl">{item.title}</h3><p className="mt-3 max-w-lg text-white/75">{item.shortDescription}</p></div></article>)}</div></div></section>
      <section className="section container relative space-y-28 overflow-hidden"><SectionOrnament motif="lotus" position="top-left" tone="sage" opacity={0.3}/><div className="relative z-10 grid items-center gap-16 lg:grid-cols-2"><div><SectionHeading eyebrow="Shared practice" title="Meditation Spaces" /><p className="lede">The heart of the school is its meditation space—a place for energetic morning practices, music, dancing, and deep evening silence.</p></div><ResponsiveImage src={page.meditationHallImage} alt={page.meditationHallImageAlt ?? "Meditation hall at OSHO Mystery School Nepal"} label="Meditation Hall Image" aspect="1 / 1" placeholderTone="sage" className="rounded-[8px]" /></div><div className="relative z-10 grid items-center gap-16 lg:grid-cols-2"><ResponsiveImage src={page.gardenDiningImage} alt={page.gardenDiningImageAlt ?? "Gardens and shared dining spaces"} label="Garden and Dining Image" aspect="4 / 3" className="rounded-[8px] lg:order-1" /><div className="lg:order-2"><SectionHeading eyebrow="Everyday life" title="Gardens, Meals & Community" /><p className="lede">Unhurried meals and outdoor spaces create natural opportunities to meet people—or simply be alone.</p></div></div></section>
      <section className="section section-dark relative overflow-hidden"><SectionOrnament motif="angles" position="top-right" light opacity={0.3}/><div className="container relative z-10"><SectionHeading eyebrow="Included in the rhythm" title="Simple Things, Thoughtfully Held" center /><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">{amenities.map(([Icon,title,copy])=>{const AmenityIcon=Icon as typeof Salad;return <div key={String(title)} className="text-center"><AmenityIcon className="mx-auto text-[#fd9171]"/><h3 className="mt-5 text-xl text-white">{String(title)}</h3><p className="mt-3 text-sm text-white/60">{String(copy)}</p></div>})}</div></div></section>
      <section className="section section-low relative overflow-hidden text-center"><SectionOrnament motif="himalaya" position="bottom-right" tone="sage" opacity={0.3}/><div className="container relative z-10"><h2 className="display text-[var(--forest)]">Make Space for Yourself</h2><p className="lede mx-auto mt-6 max-w-xl">Tell us when you are thinking of coming, and we will help you understand the available options.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Button href="/visit">Plan Your Stay</Button><Button href="/retreats" variant="secondary">View Retreats</Button></div></div></section>
    </>
  );
}
