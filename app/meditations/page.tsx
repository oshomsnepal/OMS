import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { ContentCard } from "@/components/shared/ContentCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = { title: "Meditations", description: "Explore active and silent OSHO meditation practices at OSHO Mystery School Nepal." };

const stages = [
  ["01", "Chaotic Breathing", "Deep, fast, chaotic breathing breaks habitual patterns and awakens energy."],
  ["02", "Catharsis", "Let the body express whatever needs to be released—fully and without judgment."],
  ["03", "The Mantra ‘Hoo’", "Jump with raised arms, landing on the soles of the feet as the sound strikes deep."],
  ["04", "Silence", "Stop completely. Witness everything without adjusting the body."],
  ["05", "Celebration", "Dance, celebrate, and carry the freshness into the rest of the day."],
];

export default function MeditationsPage() {
  const meditations = getCollection("meditations");
  return (
    <>
      <PageHero title="OSHO Dynamic Meditation" copy="A powerful morning practice that uses breath, movement, catharsis, silence, and celebration to awaken awareness." label="Dynamic Meditation Hero" accent="terracotta" />
      <section className="border-b border-[var(--border)]/60 bg-[var(--surface-low)] py-10"><div className="container grid grid-cols-2 gap-7 text-center md:grid-cols-4">{[["Duration","60 minutes"],["Best time","Early morning"],["Intensity","High energy"],["Experience","No prior experience"]].map(([a,b])=><div key={a}><p className="eyebrow text-[var(--terracotta-bright)]">{a}</p><p className="mt-2 text-[var(--forest)]">{b}</p></div>)}</div></section>
      <section className="section container relative overflow-hidden bg-[linear-gradient(145deg,rgba(251,249,244,.7),rgba(233,238,230,.72))]">
        <SectionOrnament motif="mandala" position="bottom-right" tone="sage" opacity={0.3} />
        <SectionHeading eyebrow="The method" title="The Five Stages" copy="Each stage is designed to be practiced totally. The active phases prepare the ground for effortless stillness." center />
        <div className="relative z-10 grid gap-6 md:grid-cols-12">
          {stages.map(([number,title,copy], index)=><article key={title} className={`rounded-[8px] p-8 ${index === 3 ? "bg-[var(--forest)] text-white md:col-span-7" : index === 4 ? "bg-[#fd9171] text-[var(--forest)] md:col-span-5" : "bg-[var(--surface-high)] text-[var(--forest)] md:col-span-4"}`}><p className="eyebrow mb-10 opacity-70">Stage {number}</p><h3 className="text-3xl">{title}</h3><p className="mt-4 opacity-75">{copy}</p></article>)}
        </div>
      </section>
      <section className="section section-low relative overflow-hidden"><SectionOrnament motif="lotus" position="top-left" tone="terracotta" opacity={0.3}/><div className="container relative z-10 grid items-center gap-16 lg:grid-cols-2"><div><SectionHeading eyebrow="Why active?" title="Why Dynamic Meditation?" /><p className="lede">For many people, sitting silently is not the beginning—it is the destination. Dynamic Meditation meets the restless body and busy mind where they are.</p><p className="mt-5 text-[var(--muted)]">By moving through intensity consciously, the body can release tension and the watcher can emerge naturally.</p></div><ResponsiveImage label="Meditation Practice Image" aspect="4 / 3" placeholderTone="terracotta" className="rounded-[8px]" /></div></section>
      <section className="section container relative overflow-hidden"><SectionOrnament motif="botanical" position="top-right" tone="sage" opacity={0.3}/><div className="relative z-10"><SectionHeading eyebrow="Daily practice" title="More Meditations" copy="The schedule may include active, dancing, humming, and silent techniques." />{meditations.length ? <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{meditations.map(item=><ContentCard key={item.slug} item={item} label="Meditation Image" />)}</div> : <EmptyState message="Meditation details will be added soon." />}</div></section>
      <section className="section section-dark relative overflow-hidden text-center"><SectionOrnament motif="bloom" position="bottom-left" light opacity={0.3}/><div className="container relative z-10"><h2 className="headline text-white">Experience the Transformation</h2><p className="mx-auto mt-5 max-w-2xl text-white/70">Join a guided practice at the Mystery School and discover the difference between doing meditation and allowing meditation to happen.</p><Button href="/visit" className="mt-9">Plan Your Visit</Button></div></section>
    </>
  );
}
