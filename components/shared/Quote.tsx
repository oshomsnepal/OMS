export function Quote({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <section className={`section relative flex flex-col items-center overflow-hidden px-[var(--page-x)] text-center ${dark ? "bg-[var(--forest)]" : "container"}`}>
      {dark && <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,.1),transparent_42%)]" />}
      <div className={`hairline relative mb-8 ${dark ? "bg-[var(--gold)]" : ""}`} />
      <blockquote className={`display relative max-w-4xl italic ${dark ? "text-[var(--surface)]" : "text-[var(--forest)]"}`}>“{children}”</blockquote>
      <p className={`eyebrow relative mt-7 ${dark ? "text-[var(--gold)]" : "text-[var(--muted)]"}`}>— OSHO</p>
    </section>
  );
}
