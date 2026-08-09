type Ornament = "mandala" | "lotus" | "angles" | "bloom" | "botanical" | "himalaya";
type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Props = {
  motif?: Ornament;
  position?: Position;
  light?: boolean;
  tone?: "forest" | "terracotta" | "sage";
  opacity?: number;
  className?: string;
};

const positions: Record<Position, string> = {
  "top-left": "-left-8 top-6 md:-left-12 md:top-10",
  "top-right": "-right-8 top-6 md:-right-12 md:top-10",
  "bottom-left": "-bottom-8 -left-6 md:-bottom-12 md:-left-10",
  "bottom-right": "-bottom-8 -right-6 md:-bottom-12 md:-right-10",
};

export function SectionOrnament({ motif = "mandala", position = "top-right", light = false, tone = "forest", opacity = 0.3, className = "" }: Props) {
  const colors = {
    forest: "text-[var(--forest)]",
    terracotta: "text-[var(--terracotta-bright)]",
    sage: "text-[var(--sage)]",
  };
  const color = light ? "text-white" : colors[tone];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none ${positions[position]} ${color} ${className}`}
      style={{ opacity }}
    >
      {motif === "mandala" && <Mandala />}
      {motif === "lotus" && <Lotus />}
      {motif === "angles" && <Angles />}
      {motif === "bloom" && <Bloom />}
      {motif === "botanical" && <Botanical />}
      {motif === "himalaya" && <Himalaya />}
    </div>
  );
}

function Mandala() {
  return (
    <svg viewBox="0 0 320 320" className="h-56 w-56 md:h-80 md:w-80" fill="none" stroke="currentColor" strokeWidth="1.15">
      <circle cx="160" cy="160" r="116" />
      <circle cx="160" cy="160" r="78" />
      <circle cx="160" cy="160" r="27" />
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation} 160 160)`}>
            <path d="M160 44C187 77 187 111 160 144C133 111 133 77 160 44Z" />
            <path d="M160 78C176 99 176 120 160 142C144 120 144 99 160 78Z" />
          </g>
        ))}
      </g>
      <g strokeDasharray="2 8">
        <circle cx="160" cy="160" r="137" />
        <circle cx="160" cy="160" r="96" />
      </g>
    </svg>
  );
}

function Lotus() {
  return (
    <svg viewBox="0 0 300 220" className="h-44 w-60 md:h-56 md:w-80" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M150 174C108 145 104 92 150 35C196 92 192 145 150 174Z" />
      <path d="M142 176C95 168 60 128 68 73C116 83 145 122 142 176Z" />
      <path d="M158 176C205 168 240 128 232 73C184 83 155 122 158 176Z" />
      <path d="M121 180C76 185 40 163 24 122C72 115 110 137 121 180Z" />
      <path d="M179 180C224 185 260 163 276 122C228 115 190 137 179 180Z" />
      <path d="M37 190C95 205 205 205 263 190" />
      <path d="M76 204C121 214 179 214 224 204" strokeDasharray="3 7" />
    </svg>
  );
}

function Angles() {
  return (
    <svg viewBox="0 0 260 260" className="h-52 w-52 md:h-72 md:w-72" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M24 108L24 24L108 24" />
      <path d="M50 120L50 50L120 50" />
      <path d="M76 132L76 76L132 76" />
      <path d="M236 152L236 236L152 236" />
      <path d="M210 140L210 210L140 210" />
      <path d="M184 128L184 184L128 184" />
      <circle cx="130" cy="130" r="18" />
      <path d="M130 96V164M96 130H164" strokeDasharray="2 7" />
    </svg>
  );
}

function Bloom() {
  return (
    <svg viewBox="0 0 300 300" className="h-56 w-56 md:h-72 md:w-72" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="150" cy="150" r="22" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
        <g key={rotation} transform={`rotate(${rotation} 150 150)`}>
          <path d="M150 126C128 98 132 68 150 44C168 68 172 98 150 126Z" />
          <path d="M150 102C139 87 141 70 150 58C159 70 161 87 150 102Z" />
        </g>
      ))}
      <circle cx="150" cy="150" r="78" strokeDasharray="1 8" />
      <circle cx="150" cy="150" r="112" strokeDasharray="3 10" />
    </svg>
  );
}

function Botanical() {
  return (
    <svg viewBox="0 0 280 330" className="h-64 w-52 md:h-80 md:w-64" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M58 302C86 250 109 206 135 157C156 116 176 76 218 31" />
      <path d="M94 239C65 231 45 211 37 181C67 180 92 196 106 216" />
      <path d="M121 184C91 170 76 144 78 112C108 120 128 140 134 163" />
      <path d="M150 130C150 96 166 71 194 55C199 88 185 115 158 136" />
      <path d="M78 267C51 270 29 257 15 232C43 226 66 235 84 252" />
      <path d="M175 90C172 63 185 42 208 28" strokeDasharray="3 7" />
      <circle cx="57" cy="301" r="6" />
    </svg>
  );
}

function Himalaya() {
  return (
    <svg viewBox="0 0 360 250" className="h-48 w-72 md:h-60 md:w-[22rem]" fill="none" stroke="currentColor" strokeWidth="1.15">
      <circle cx="276" cy="57" r="29" />
      <circle cx="276" cy="57" r="42" strokeDasharray="2 8" />
      <path d="M10 211L93 108L130 151L193 59L264 154L293 123L350 211" />
      <path d="M149 118L193 59L224 103L204 94L193 112L181 94L164 119" />
      <path d="M54 211L105 145L130 173L145 154" />
      <path d="M20 226C101 211 253 211 340 226" />
      <path d="M72 239C142 228 219 228 291 239" strokeDasharray="3 8" />
    </svg>
  );
}
