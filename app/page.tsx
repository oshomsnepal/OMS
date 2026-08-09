import { Heart, Music2, Trees, Wind } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { Quote } from "@/components/shared/Quote";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { SectionWave } from "@/components/shared/SectionWave";
import { getPage } from "@/lib/content";

const journey = [
  { title: "Meditate", copy: "Active and silent techniques created for the modern mind.", icon: Wind, aspect: "4 / 5", tone: "terracotta" as const, surface: "bg-[#f5e8e1]", imageKey: "meditateImage", altKey: "meditateImageAlt" },
  { title: "Go Within", copy: "Cultivate deep silence and a clear, witnessing awareness.", icon: Heart, aspect: "1 / 1", tone: "sage" as const, surface: "bg-[#e9eee6]", imageKey: "goWithinImage", altKey: "goWithinImageAlt" },
  { title: "Celebrate", copy: "Express life through dance, music, creativity, and joy.", icon: Music2, aspect: "4 / 5", tone: "gold" as const, surface: "bg-[#f5edcf]", imageKey: "celebrateImage", altKey: "celebrateImageAlt" },
  { title: "Rest in Nature", copy: "Slow down among trees, open sky, and mountain air.", icon: Trees, aspect: "1 / 1", tone: "forest" as const, surface: "bg-[#e4ebe5]", imageKey: "restInNatureImage", altKey: "restInNatureImageAlt" },
];

export default function HomePage() {
  const page = getPage("home");
  return (
    <>
      <HomeHero
        title={page.heroTitle ?? "Come Back to Yourself"}
        subtitle={page.heroSubtitle ?? "A mountain sanctuary near Kathmandu for meditation, awareness, celebration, and the simple joy of being alive."}
        image={page.heroImage}
        imageAlt={page.heroAlt ?? "OSHO Mystery School Nepal in the foothills near Kathmandu"}
      />
      <section className="section relative overflow-hidden bg-[radial-gradient(circle_at_12%_20%,rgba(253,145,113,.14),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(138,154,138,.16),transparent_30%),var(--surface)]">
        <SectionOrnament motif="bloom" position="top-right" tone="terracotta" opacity={0.3} className="md:scale-110" />
        <SectionOrnament motif="angles" position="bottom-left" tone="sage" opacity={0.3} className="scale-90" />
        <div className="container relative z-10 grid items-center gap-14 md:grid-cols-2">
        <div className="relative z-10">
          <p className="eyebrow mb-5 text-[var(--terracotta-bright)]">OSHO Mystery School Nepal</p>
          <h2 className="headline text-[var(--forest)]">A place to pause, breathe, and remember</h2>
          <p className="lede mt-7">{page.intro ?? "In the peaceful foothills near Kathmandu, life takes on a quieter rhythm. Here, meditation meets nature, silence meets celebration, and each day offers space to explore what is essential."}</p>
          <p className="mt-5 text-[var(--muted)]">Come for a morning meditation, a residential retreat, or simply a few days away from the noise.</p>
        </div>
        <ResponsiveImage src={page.introImage} alt={page.introImageAlt ?? "The natural surroundings of OSHO Mystery School Nepal"} label="Nature Image" aspect="3 / 4" placeholderTone="sage" className="relative z-10 rounded-[8px] shadow-[0_26px_70px_rgba(26,36,26,.15)]" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </section>
      <section id="journey" className="section relative overflow-hidden bg-[linear-gradient(145deg,#f1f2eb_0%,#f8efe8_52%,#f6efd8_100%)] pb-44 md:pb-52">
        <SectionOrnament motif="lotus" position="bottom-left" tone="terracotta" opacity={0.3} className="md:scale-110" />
        <SectionOrnament motif="botanical" position="top-right" tone="sage" opacity={0.3} className="scale-90" />
        <div className="container relative z-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="eyebrow mb-5 text-[var(--terracotta-bright)]">The experience</p>
            <h2 className="headline text-[var(--forest)]">Your Journey Here</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {journey.map(({ title, copy, icon: Icon, aspect, tone, surface, imageKey, altKey }) => (
              <article key={title} className={`group overflow-hidden rounded-[8px] ${surface} shadow-[0_16px_45px_rgba(45,59,45,.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(45,59,45,.15)]`}>
                <ResponsiveImage src={page[imageKey]} alt={page[altKey] ?? `${title} at OSHO Mystery School Nepal`} label={`${title} Image`} aspect={aspect} placeholderTone={tone} className="w-full" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="p-6">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/65 text-[var(--terracotta-bright)]"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="text-2xl text-[var(--forest)]">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <SectionWave />
      </section>
      <Quote dark>Be realistic: Plan for a miracle.</Quote>
    </>
  );
}
