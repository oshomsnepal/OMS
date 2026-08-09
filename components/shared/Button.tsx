import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const styles = {
    primary: "bg-[var(--terracotta-bright)] text-white shadow-[0_10px_30px_rgba(154,68,42,.22)] hover:-translate-y-0.5 hover:bg-[var(--terracotta)] hover:shadow-[0_14px_34px_rgba(154,68,42,.3)]",
    secondary: "border border-[var(--forest)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white",
    light: "border border-white text-white hover:bg-white/10",
  };
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <Link
      href={href}
      className={`label inline-flex min-h-12 items-center justify-center rounded-[4px] px-7 py-3.5 text-center transition duration-300 ${styles[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
