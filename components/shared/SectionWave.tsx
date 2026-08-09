type Props = {
  color?: string;
  className?: string;
};

export function SectionWave({ color = "var(--forest)", className = "" }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden md:h-28 ${className}`}>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="h-full w-full" fill={color}>
        <path d="M0 88C182 142 337 23 535 67C704 104 799 154 1000 102C1179 56 1285 36 1440 81V160H0V88Z" />
      </svg>
    </div>
  );
}
