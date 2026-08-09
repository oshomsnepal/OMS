type Props = { eyebrow?: string; title: string; copy?: string; center?: boolean };

export function SectionHeading({ eyebrow, title, copy, center = false }: Props) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <p className="eyebrow mb-5 text-[var(--terracotta-bright)]">{eyebrow}</p>}
      <h2 className="headline text-[var(--forest)]">{title}</h2>
      {copy && <p className="lede mt-5">{copy}</p>}
    </div>
  );
}
