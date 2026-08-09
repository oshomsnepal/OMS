import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { getPage } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "Discover the philosophy and atmosphere of OSHO Mystery School Nepal." };

const philosophy = [
  ["Active Meditations", "Movement and expression create space for stillness in the contemporary mind."],
  ["Catharsis First", "Releasing accumulated tension can become the doorway to genuine relaxation."],
  ["Celebration", "Joy, dance, and creativity are part of the inner journey—not separate from it."],
  ["In the World", "A space to meet life totally, with awareness in both silence and everyday activity."],
];

export default function AboutPage() {
  const page = getPage("about");
  return (
    <>
      <PageHero title="A School for the Inner Journey" copy="Meditation without belief, awareness without doctrine, and a living invitation to experience for yourself." label="About Hero Image" image={page.heroImage} imageAlt={page.heroAlt ?? "OSHO Mystery School Nepal"} accent="sage" />
      <section className="section container grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Our story" title="The Mystery School Story" />
          <p className="lede">OSHO Mystery School Nepal is a space for people to slow down, become present, and explore meditation in a direct, experiential way.</p>
          <p className="mt-5 max-w-2xl text-[var(--muted)]">The school brings together active meditation, silence, nature, creativity, and community. Visitors are welcome to arrive exactly as they are—curious, tired, joyful, uncertain—and discover their own way inward.</p>
        </div>
        <div className="lg:col-span-5"><ResponsiveImage src={page.schoolImage} alt={page.schoolImageAlt ?? "The Mystery School and its natural surroundings"} label="Mystery School Image" aspect="3 / 4" className="rounded-[8px]" /></div>
      </section>
      <section className="section section-low relative overflow-hidden">
        <SectionOrnament motif="angles" position="bottom-left" tone="sage" opacity={0.3} />
        <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <ResponsiveImage src={page.oshoPortraitImage} alt={page.oshoPortraitAlt ?? "OSHO"} label="OSHO Portrait" aspect="1 / 1" className="rounded-[8px]" />
          <div>
            <SectionHeading eyebrow="The vision" title="Who is OSHO?" />
            <p className="lede">OSHO was a contemporary mystic whose approach invited people to move beyond borrowed beliefs and discover truth through their own awareness.</p>
            <p className="mt-5 text-[var(--muted)]">His active meditation methods begin with the realities of modern life—stress, speed, and restlessness—and use movement, breath, sound, and expression as bridges toward silence.</p>
          </div>
        </div>
      </section>
      <section className="section container relative overflow-hidden bg-[linear-gradient(145deg,rgba(245,232,225,.62),rgba(233,238,230,.68))]">
        <SectionOrnament motif="bloom" position="top-right" tone="terracotta" opacity={0.3} />
        <div className="relative z-10">
        <SectionHeading eyebrow="Our philosophy" title="Meditation for the Modern Mind" copy="The approach is practical, embodied, and rooted in direct experience." />
        <div className="grid gap-6 md:grid-cols-3 md:auto-rows-[340px]">
          {philosophy.map(([title, copy], index) => (
            <article key={title} className={`flex flex-col justify-end rounded-[8px] p-8 ${index === 1 ? "bg-[var(--forest)] text-white md:row-span-2" : index === 2 ? "bg-[#fd9171] text-[var(--forest)]" : "bg-[var(--surface-high)] text-[var(--forest)]"} ${index === 3 ? "md:col-span-2" : ""}`}>
              <h3 className="text-3xl">{title}</h3><p className={`mt-4 ${index === 1 ? "text-white/70" : "text-[var(--muted)]"}`}>{copy}</p>
            </article>
          ))}
        </div></div>
      </section>
      <section className="section section-low relative overflow-hidden text-center"><SectionOrnament motif="botanical" position="bottom-right" tone="sage" opacity={0.3}/><div className="container relative z-10"><h2 className="headline text-[var(--forest)]">Begin Your Journey</h2><p className="lede mx-auto mt-5 max-w-2xl">Come for a meditation, stay for a retreat, and discover what changes when you make room for silence.</p><Button href="/visit" className="mt-9">Plan Your Visit</Button></div></section>
    </>
  );
}
