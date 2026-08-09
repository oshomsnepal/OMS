import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { getCollection } from "@/lib/content";
import type { ContentEntry } from "@/lib/types";
import { SectionOrnament } from "@/components/shared/SectionOrnament";

export const metadata: Metadata = { title: "Gallery", description: "Meditation, celebration, nature, and community at OSHO Mystery School Nepal." };

const developmentItems: ContentEntry[] = [
  { slug:"gallery-placeholder-01", title:"Morning Meditation", category:"Meditation", caption:"Development placeholder", displayOrder:1, aspect:"3 / 2" },
  { slug:"gallery-placeholder-02", title:"Among the Trees", category:"Nature", caption:"Development placeholder", displayOrder:2, aspect:"4 / 5" },
  { slug:"gallery-placeholder-03", title:"Celebration", category:"Celebration", caption:"Development placeholder", displayOrder:3, aspect:"1 / 1" },
  { slug:"gallery-placeholder-04", title:"The Meditation Hall", category:"Our Space", caption:"Development placeholder", displayOrder:4, aspect:"4 / 5" },
  { slug:"gallery-placeholder-05", title:"A Shared Moment", category:"Community", caption:"Development placeholder", displayOrder:5, aspect:"3 / 2" },
  { slug:"gallery-placeholder-06", title:"Retreat Life", category:"Retreats", caption:"Development placeholder", displayOrder:6, aspect:"1 / 1" },
];

export default function GalleryPage() {
  const cmsItems = getCollection("gallery");
  const items = cmsItems.length ? cmsItems : developmentItems;
  return (
    <>
      <PageHero title="Life at the Mystery School" copy="A glimpse into meditation, celebration, silence, nature, and the moments we share together." label="Gallery Hero Image" accent="terracotta" />
      <section className="section container relative overflow-hidden"><SectionOrnament motif="bloom" position="top-left" tone="terracotta" opacity={0.3}/><SectionOrnament motif="botanical" position="bottom-right" tone="sage" opacity={0.3}/><div className="relative z-10"><GalleryClient items={items}/></div></section>
      <section className="relative my-[var(--section)] flex min-h-[520px] items-center justify-center overflow-hidden"><ResponsiveImage label="Featured Gallery Story" aspect="16 / 7" placeholderTone="forest" className="absolute inset-0 h-full w-full rounded-none" sizes="100vw"/><div className="absolute inset-0 bg-[var(--forest)]/55"/><SectionOrnament motif="angles" position="top-right" light opacity={0.3}/><div className="container relative z-10 text-center text-white"><h2 className="headline">Morning Silence</h2><p className="mx-auto mt-5 max-w-xl text-white/80">The mountains slowly appear through the mist while the Mystery School begins another day with meditation.</p></div></section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#f4eee2,#e9eee6)] text-center"><SectionOrnament motif="mandala" position="top-left" tone="terracotta" opacity={0.3}/><SectionOrnament motif="lotus" position="bottom-right" tone="sage" opacity={0.3}/><div className="container relative z-10"><h2 className="headline text-[var(--forest)]">Some Things Have to Be Experienced</h2><p className="lede mx-auto mt-5 max-w-2xl">Photographs can show you the place. The experience begins when you arrive.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Button href="/visit">Plan Your Visit</Button><Button href="/retreats" variant="secondary">Explore Retreats</Button></div></div></section>
    </>
  );
}
