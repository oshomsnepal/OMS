import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  label?: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  placeholderTone?: "neutral" | "sage" | "terracotta" | "gold" | "forest";
};

export function ResponsiveImage({
  src,
  alt = "",
  label = "Image",
  aspect = "4 / 3",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "center",
  placeholderTone = "neutral",
}: Props) {
  const placeholderBackgrounds = {
    neutral: "linear-gradient(145deg, #e9e6de, #d7dbd2)",
    sage: "radial-gradient(circle at 25% 20%, #eef1e7 0, transparent 34%), linear-gradient(145deg, #cbd6c5, #90a78f)",
    terracotta: "radial-gradient(circle at 72% 22%, #ffd8c7 0, transparent 35%), linear-gradient(145deg, #e9a382, #ad563d)",
    gold: "radial-gradient(circle at 28% 18%, #fff4c9 0, transparent 33%), linear-gradient(145deg, #dfc46c, #b17a3b)",
    forest: "radial-gradient(circle at 70% 20%, #657865 0, transparent 34%), linear-gradient(145deg, #354b39, #17251c)",
  };
  return (
    <div
      className={`relative overflow-hidden bg-[var(--surface-high)] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          style={{ objectPosition }}
        />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center ${placeholderTone === "forest" ? "text-white" : "text-[var(--forest)]"}`} style={{ background: placeholderBackgrounds[placeholderTone] }}>
          <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_28%_24%,rgba(255,255,255,.9),transparent_25%),linear-gradient(155deg,transparent_45%,rgba(45,59,45,.08))]" />
          <span className="label relative rounded-sm border border-current/20 bg-[var(--surface)]/55 px-4 py-2 backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
