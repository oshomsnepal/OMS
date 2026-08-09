type Props = {
  embedUrl: string;
  mapsLink: string;
  title?: string;
};

export function MapEmbed({ embedUrl, mapsLink, title = "OSHO Mystery School Nepal location" }: Props) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-[var(--forest)]/10 bg-[var(--surface-high)] shadow-[0_18px_50px_rgba(26,36,26,.1)]">
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="label absolute bottom-4 right-4 z-10 rounded-[4px] bg-white/95 px-5 py-3 text-[var(--forest)] shadow-lg backdrop-blur-sm transition hover:bg-white"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
