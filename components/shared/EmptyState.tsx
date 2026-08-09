export function EmptyState({ message }: { message: string }) {
  return <p className="rounded-md bg-[var(--surface-high)] p-8 text-center text-[var(--muted)]">{message}</p>;
}
