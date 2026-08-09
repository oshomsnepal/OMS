"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/about", "About"],
  ["/quotes", "OSHO Quotes"],
  ["/retreats", "Retreats"],
  ["/stay", "Stay"],
  ["/gallery", "Gallery"],
  ["/events", "Events"],
  ["/visit", "Visit Us"],
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[var(--forest)]/5 bg-[var(--surface)]/88 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between gap-8">
        <Link href="/" aria-label="OSHO Mystery School Nepal home" className="relative z-50 flex items-center gap-3 text-[var(--forest)]">
          <Image
            src="/images/brand/osho-mystery-school-logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-11 w-11 shrink-0 rounded-full object-contain sm:h-12 sm:w-12"
          />
          <span className="max-w-40 font-serif text-base font-semibold leading-tight sm:text-lg">OSHO Mystery School</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`label border-b-2 py-2 transition ${pathname === href ? "border-[var(--terracotta-bright)] text-[var(--terracotta-bright)]" : "border-transparent text-[var(--muted)] hover:text-[var(--terracotta-bright)]"}`}>
              {label}
            </Link>
          ))}
          <Link href="/retreats" className="label ml-2 rounded-[4px] bg-[var(--terracotta-bright)] px-5 py-3 !text-white transition hover:bg-[var(--terracotta)] hover:!text-white">Book a Retreat</Link>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="relative z-50 rounded p-2 text-[var(--forest)] xl:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav id="mobile-menu" aria-label="Mobile navigation" className={`absolute inset-x-0 top-0 min-h-screen bg-[var(--surface)] px-6 pb-10 pt-28 transition duration-300 xl:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}>
        <div className="flex flex-col">
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[var(--border)]/50 py-5 text-2xl text-[var(--forest)]">{label}</Link>)}
          <Link href="/retreats" onClick={() => setOpen(false)} className="label mt-8 rounded-[4px] bg-[var(--terracotta-bright)] px-6 py-4 text-center !text-white hover:!text-white">Book a Retreat</Link>
        </div>
      </nav>
    </header>
  );
}
