import Link from "next/link";
import { dictionaries, localeLabels, localePath, locales, type Locale } from "@/i18n/content";

export function LegalFooter({ locale = "en" }: { locale?: Locale }) {
  const labels = dictionaries[locale].footer.links;
  const legalLinks = [
    { href: localePath(locale, "/impressum"), label: labels[0] },
    { href: localePath(locale, "/privacy"), label: labels[1] },
    { href: localePath(locale, "/terms"), label: labels[2] },
  ];

  return (
    <footer className="border-t-2 border-[var(--primary)] bg-[var(--background)] px-5 py-6 font-mono text-sm uppercase text-[var(--primary)] sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="font-black" href={localePath(locale)}>
          Talos AI
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
          {legalLinks.map((link) => (
            <Link key={link.href} className="hover:underline" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-3" aria-label="Language">
          {locales.map((item) => (
            <Link
              key={item}
              className={item === locale ? "font-black underline decoration-2 underline-offset-4" : "hover:underline"}
              href={localePath(item)}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
