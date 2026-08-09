import Link from "next/link";
import { BadgeCheck, Banknote, CalendarDays, Check, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { ContentCard } from "@/components/shared/ContentCard";
import { MarkdownContent } from "@/components/shared/MarkdownContent";
import { PageHero } from "@/components/shared/PageHero";
import { SectionOrnament } from "@/components/shared/SectionOrnament";
import { formatDate } from "@/lib/content";
import type { ContentEntry } from "@/lib/types";

type Props = {
  item: ContentEntry;
  related: ContentEntry[];
  kind: "Retreat" | "Event";
  basePath: "/retreats" | "/events";
};

function formatDateRange(startDate?: string, endDate?: string) {
  if (!startDate) return undefined;
  if (!endDate || endDate === startDate) return formatDate(startDate);
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

export function ProgramDetailPage({ item, related, kind, basePath }: Props) {
  const state = kind === "Retreat" ? item.availability : item.status;
  const dates = formatDateRange(item.startDate, item.endDate);
  const registrationHref = item.registrationLink || "/visit";
  const registrationLabel = state === "Full" || state === "Completed" ? "Ask About Future Dates" : kind === "Retreat" ? "Book This Retreat" : "Register for This Event";
  const facts = [
    { label: "Dates", value: dates, icon: CalendarDays },
    { label: "Duration", value: item.duration, icon: Clock3 },
    { label: "Location", value: item.location, icon: MapPin },
    { label: kind === "Retreat" ? "Availability" : "Status", value: state, icon: BadgeCheck },
    { label: "Contribution", value: item.price, icon: Banknote },
  ].filter((fact) => fact.value);

  return (
    <>
      <PageHero
        title={item.title}
        copy={item.shortDescription || `Discover this ${kind.toLowerCase()} at OSHO Mystery School Nepal.`}
        label={`${kind} Image`}
        image={item.image}
        imageAlt={item.alt ?? item.title}
        light={false}
        accent={kind === "Retreat" ? "gold" : "terracotta"}
        height="min-h-[680px]"
      />

      <section className="section relative overflow-hidden">
        <SectionOrnament motif="mandala" position="top-right" tone="sage" opacity={0.3} />
        <div className="container relative z-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Link href={basePath} className="label mb-9 inline-flex text-[var(--terracotta-bright)] hover:text-[var(--terracotta)]">← Back to {kind === "Retreat" ? "retreats & camps" : "events"}</Link>
            <p className="eyebrow text-[var(--terracotta-bright)]">About this {kind.toLowerCase()}</p>
            <h2 className="headline mt-4 text-[var(--forest)]">A Space for Direct Experience</h2>
            <div className="mt-8">
              {item.body ? <MarkdownContent>{item.body}</MarkdownContent> : <p className="lede">{item.shortDescription || "More details will be published as soon as the program is confirmed."}</p>}
            </div>

            {item.suitableFor && (
              <div className="mt-12 rounded-[10px] bg-[var(--surface-low)] p-8">
                <p className="eyebrow text-[var(--terracotta-bright)]">Who it is for</p>
                <p className="mt-4 leading-8 text-[var(--muted)]">{item.suitableFor}</p>
              </div>
            )}

            {item.schedule?.length ? (
              <section className="mt-14">
                <p className="eyebrow text-[var(--terracotta-bright)]">Program rhythm</p>
                <h2 className="mt-4 text-4xl text-[var(--forest)]">Schedule</h2>
                <ol className="mt-7 divide-y divide-[var(--border)]/60 border-y border-[var(--border)]/60">
                  {item.schedule.map((entry, index) => (
                    <li key={`${entry}-${index}`} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:items-start">
                      <span className="font-serif text-[var(--terracotta-bright)]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-[var(--muted)]">{entry}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {(item.included?.length || item.whatToBring?.length || item.accommodation) ? (
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {item.included?.length ? (
                  <section className="rounded-[10px] bg-[#dfe7dc] p-8">
                    <h2 className="text-3xl text-[var(--forest)]">What is included</h2>
                    <ul className="mt-6 space-y-3">
                      {item.included.map((entry) => <li key={entry} className="flex gap-3 text-[var(--muted)]"><Check className="mt-1 shrink-0 text-[var(--terracotta-bright)]" size={18} aria-hidden="true" /><span>{entry}</span></li>)}
                    </ul>
                  </section>
                ) : null}
                {item.whatToBring?.length ? (
                  <section className="rounded-[10px] bg-[#f7e7df] p-8">
                    <h2 className="text-3xl text-[var(--forest)]">What to bring</h2>
                    <ul className="mt-6 space-y-3">
                      {item.whatToBring.map((entry) => <li key={entry} className="flex gap-3 text-[var(--muted)]"><Check className="mt-1 shrink-0 text-[var(--terracotta-bright)]" size={18} aria-hidden="true" /><span>{entry}</span></li>)}
                    </ul>
                  </section>
                ) : null}
                {item.accommodation ? (
                  <section className="rounded-[10px] bg-[var(--surface-low)] p-8 md:col-span-2">
                    <h2 className="text-3xl text-[var(--forest)]">Accommodation</h2>
                    <p className="mt-5 leading-8 text-[var(--muted)]">{item.accommodation}</p>
                  </section>
                ) : null}
              </div>
            ) : null}
          </article>

          <aside className="rounded-[12px] border border-[var(--forest)]/8 bg-white p-7 shadow-[0_18px_50px_rgba(26,36,26,.08)] lg:sticky lg:top-28 lg:col-span-4 sm:p-9">
            <p className="eyebrow text-[var(--terracotta-bright)]">{kind} details</p>
            {facts.length ? (
              <dl className="mt-7 divide-y divide-[var(--border)]/60 border-y border-[var(--border)]/60">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="grid grid-cols-[2rem_1fr] gap-3 py-5">
                      <Icon className="mt-0.5 text-[var(--terracotta-bright)]" size={19} strokeWidth={1.7} aria-hidden="true" />
                      <div><dt className="label text-[var(--forest)]">{fact.label}</dt><dd className="mt-1 text-sm text-[var(--muted)]">{fact.value}</dd></div>
                    </div>
                  );
                })}
              </dl>
            ) : <p className="mt-5 text-sm text-[var(--muted)]">Dates and practical details will be announced soon.</p>}
            <Button href={registrationHref} className="mt-8 w-full">{registrationLabel}</Button>
            <p className="mt-5 text-center text-xs leading-relaxed text-[var(--muted)]">Have a question before registering? Contact the Mystery School and we will help you decide whether this program is right for you.</p>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section section-low relative overflow-hidden">
          <SectionOrnament motif="angles" position="bottom-left" tone="terracotta" opacity={0.3} />
          <div className="container relative z-10">
            <p className="eyebrow text-[var(--terracotta-bright)]">Continue exploring</p>
            <h2 className="mt-4 text-4xl text-[var(--forest)]">Other {kind === "Retreat" ? "retreats & camps" : "events"}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((entry) => <ContentCard key={entry.slug} item={entry} label={`${kind} Image`} href={`${basePath}/${entry.slug}`} />)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
