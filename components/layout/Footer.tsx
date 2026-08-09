import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { getSiteSettings } from "@/lib/content";

export function Footer() {
  const settings = getSiteSettings();
  return (
    <footer className="bg-[var(--surface-highest)] py-20">
      <div className="container grid gap-12 md:grid-cols-12">
        <div className="flex items-start gap-5 md:col-span-5">
          <Image
            src="/images/brand/osho-mystery-school-logo.png"
            alt="OSHO Mystery School Nepal logo"
            width={112}
            height={112}
            className="h-24 w-24 shrink-0 rounded-full object-contain sm:h-28 sm:w-28"
          />
          <div>
            <h2 className="text-3xl text-[var(--forest)]">OSHO Mystery School Nepal</h2>
            <p className="mt-4 max-w-sm text-[var(--muted)]">{settings.footerText ?? "A space to meditate, celebrate, and reconnect in the foothills near Kathmandu."}</p>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-[var(--forest)]">Explore</p>
          <div className="flex flex-col gap-3 text-[var(--muted)]">
            <Link href="/about">About</Link><Link href="/quotes">OSHO Quotes</Link><Link href="/retreats">Retreats</Link><Link href="/visit">Visit Us</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-5 text-[var(--forest)]">Connect</p>
          <div className="flex gap-4">
            {settings.facebook && <a href={settings.facebook} target="_blank" rel="noopener noreferrer" aria-label="OSHO Mystery School Nepal on Facebook"><Facebook /></a>}
            {settings.instagram && <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="OSHO Mystery School Nepal on Instagram"><Instagram /></a>}
          </div>
          {settings.email && <a className="mt-5 block text-[var(--muted)]" href={`mailto:${settings.email}`}>{settings.email}</a>}
        </div>
      </div>
      <p className="container mt-14 border-t border-[var(--border)]/60 pt-6 text-xs text-[var(--muted)]">© {new Date().getFullYear()} OSHO Mystery School Nepal. All rights reserved.</p>
    </footer>
  );
}
