import type { Metadata } from "next";
import { QuotesCollection } from "@/components/quotes/QuotesCollection";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { oshoQuotes } from "@/lib/osho-quotes";

const quoteCount = oshoQuotes.filter((item) => item.quote.trim()).slice(0, 100).length;

export const metadata: Metadata = {
  title: "100 OSHO Quotes",
  description: "A curated collection of OSHO quotations on awareness, meditation, love, freedom, joy, and everyday life.",
};

export default function QuotesPage() {
  return (
    <>
      <PageHero
        title="100 OSHO Quotes"
        copy="A curated collection of provocations, invitations, and reminders for living with greater awareness."
        label="OSHO Quotes Hero Image"
        imageAlt="A contemplative setting at OSHO Mystery School Nepal"
        light={false}
        accent="gold"
      />

      <section className="section container relative overflow-hidden text-center">
        <SectionOrnament motif="mandala" position="top-left" tone="terracotta" opacity={0.3} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="eyebrow text-[var(--terracotta-bright)]">Words as doorways</p>
          <h2 className="headline mt-5 text-[var(--forest)]">Read Slowly. Keep What Resonates.</h2>
          <p className="lede mt-6">These words are offered as invitations to pause and look within, not as beliefs to collect. Every published quotation will retain its entered wording and source information.</p>
        </div>
      </section>

      <section className="section section-low relative overflow-hidden">
        <SectionOrnament motif="bloom" position="top-right" tone="terracotta" opacity={0.3} />
        <SectionOrnament motif="botanical" position="bottom-left" tone="sage" opacity={0.3} />
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <p className="eyebrow text-[var(--terracotta-bright)]">The collection</p>
            <h2 className="mt-3 text-4xl text-[var(--forest)]">{quoteCount} of 100 quotations</h2>
          </div>
          <QuotesCollection />
        </div>
      </section>

      <section className="section section-dark relative overflow-hidden text-center">
        <SectionOrnament motif="lotus" position="bottom-right" light opacity={0.3} />
        <div className="container relative z-10"><h2 className="headline text-white">Move from Words to Experience</h2><p className="mx-auto mt-5 max-w-2xl text-white/70">Meditation begins where borrowed answers end. Visit the Mystery School and experience the practices directly.</p><Button href="/visit" className="mt-9">Plan Your Visit</Button></div>
      </section>
    </>
  );
}

