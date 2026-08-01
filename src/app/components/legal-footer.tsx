import Link from "next/link";
import { dictionaries } from "@/i18n/content";
import { localePath, type Locale } from "@/i18n/locales";
import { LocaleSwitcher } from "./localized-home";

// `path` keeps the visitor on the same document when they switch language; the home page passes
// nothing, a legal page passes its own path.
export function LegalFooter({ locale, path = "" }: { locale: Locale; path?: string }) {
  const t = dictionaries[locale];
  const legalLinks = [
    { href: localePath(locale, "/impressum"), label: t.footer.links[0] },
    { href: localePath(locale, "/privacy"), label: t.footer.links[1] },
    { href: localePath(locale, "/terms"), label: t.footer.links[2] },
  ];

  return (
    <footer className="border-t-2 border-ink bg-surface px-5 py-6 font-mono text-sm uppercase text-ink sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="font-black" href={localePath(locale)}>
          Talos AI
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label={t.a11y.legalNav}>
          {legalLinks.map((link) => (
            <Link key={link.href} className="hover:underline" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher current={locale} path={path} />
      </div>
    </footer>
  );
}
