import type { Metadata } from "next";
import { Activity, Globe2, Sparkles, Wind, type LucideIcon } from "lucide-react";
import { MeditationFlipCard } from "@/components/about/MeditationFlipCard";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { getCollection, getPage } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "Discover the philosophy and atmosphere of OSHO Mystery School Nepal." };

type PhilosophyCard = {
  title: string;
  copy: string;
  icon: LucideIcon;
  cardClass: string;
  iconClass: string;
  copyClass: string;
};

const philosophy: PhilosophyCard[] = [
  {
    title: "Active Meditations",
    copy: "Movement and expression create space for stillness in the contemporary mind.",
    icon: Activity,
    cardClass: "border-[var(--terracotta-bright)]/15 bg-white/85 text-[var(--forest)]",
    iconClass: "bg-[var(--terracotta-bright)]/10 text-[var(--terracotta-bright)]",
    copyClass: "text-[var(--muted)]",
  },
  {
    title: "Catharsis First",
    copy: "Releasing accumulated tension can become the doorway to genuine relaxation.",
    icon: Wind,
    cardClass: "border-[var(--forest)] bg-[var(--forest)] text-white",
    iconClass: "bg-white/10 text-[#f2cb61]",
    copyClass: "text-white/70",
  },
  {
    title: "Celebration",
    copy: "Joy, dance, and creativity are part of the inner journey—not separate from it.",
    icon: Sparkles,
    cardClass: "border-[#ed7958]/30 bg-[#fd9171] text-[var(--forest)]",
    iconClass: "bg-white/35 text-[var(--forest)]",
    copyClass: "text-[var(--forest)]/70",
  },
  {
    title: "In the World",
    copy: "A space to meet life totally, with awareness in both silence and everyday activity.",
    icon: Globe2,
    cardClass: "border-[var(--sage)]/20 bg-[#dfe7dc] text-[var(--forest)]",
    iconClass: "bg-white/55 text-[var(--forest-soft)]",
    copyClass: "text-[var(--muted)]",
  },
];

export default function AboutPage() {
  const page = getPage("about");
  const meditations = getCollection("meditations");
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
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,rgba(245,232,225,.62),rgba(233,238,230,.68))]">
        <SectionOrnament motif="bloom" position="top-right" tone="terracotta" opacity={0.3} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Our philosophy" title="Meditation for the Modern Mind" copy="The approach is practical, embodied, and rooted in direct experience." />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`card-lift group relative flex min-h-[270px] overflow-hidden rounded-[12px] border p-7 sm:min-h-[300px] sm:p-9 ${item.cardClass}`}>
                  <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-current opacity-[.06] transition duration-500 group-hover:scale-110" />
                  <div className="relative flex w-full flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${item.iconClass}`}>
                        <Icon aria-hidden="true" size={26} strokeWidth={1.6} />
                      </div>
                      <span className="font-serif text-sm opacity-45">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-auto pt-10">
                      <h3 className="text-3xl">{item.title}</h3>
                      <p className={`mt-4 max-w-xl leading-relaxed ${item.copyClass}`}>{item.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section relative overflow-hidden bg-[linear-gradient(145deg,#f7efe8,#eef1e9)]">
        <SectionOrnament motif="lotus" position="bottom-left" tone="terracotta" opacity={0.3} />
        <div className="container relative z-10">
          <SectionHeading eyebrow="Daily practice" title="Meditations We Practice" copy="Each method meets a different moment of the day and a different quality of energy. Hover, focus, or tap a card to discover more." center />
          {meditations.length ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {meditations.map((item, index) => <MeditationFlipCard key={item.slug} item={item} index={index} />)}
            </div>
          ) : <p className="mx-auto max-w-xl text-center text-[var(--muted)]">Meditation details will be added soon.</p>}
          <div className="mt-12 text-center"><Button href="/visit" variant="secondary">Ask About the Meditation Schedule</Button></div>
        </div>
      </section>
      <section className="section section-low relative overflow-hidden text-center"><SectionOrnament motif="botanical" position="bottom-right" tone="sage" opacity={0.3}/><div className="container relative z-10"><h2 className="headline text-[var(--forest)]">Begin Your Journey</h2><p className="lede mx-auto mt-5 max-w-2xl">Come for a meditation, stay for a retreat, and discover what changes when you make room for silence.</p><Button href="/visit" className="mt-9">Plan Your Visit</Button></div></section>
    </>
  );
}
