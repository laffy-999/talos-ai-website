import Link from "next/link";
import { legalContent } from "@/i18n/legal";
import { localePath, type Locale } from "@/i18n/locales";
import { LegalFooter } from "./legal-footer";

type LegalPageType = "impressum" | "privacy" | "terms";

export function LegalPage({ locale, page }: { locale: Locale; page: LegalPageType }) {
  const content = legalContent[locale][page];

  return (
    <>
      <main className="min-h-screen bg-surface text-ink">
        <header className="px-[var(--gutter)] py-[var(--section-y)]">
          <Link className="font-mono text-label font-extrabold" href={localePath(locale)}>
            Talos AI
          </Link>
          <p className="kicker mt-10">{content.kicker}</p>
          <h1 className="mt-4 break-words text-display font-extrabold [overflow-wrap:anywhere]">{content.title}</h1>
        </header>
        {page === "impressum" ? (
          <ImpressumContent details={legalContent[locale].impressum.details} note={content.note} />
        ) : page === "privacy" ? (
          <PrivacyContent sections={legalContent[locale].privacy.sections} note={content.note} />
        ) : (
          <TermsContent sections={legalContent[locale].terms.sections} note={content.note} />
        )}
      </main>
      <LegalFooter locale={locale} path={`/${page}`} />
    </>
  );
}

function ImpressumContent({ details, note }: { details: string[][]; note: string }) {
  return (
    <section className="border-t border-rule px-[var(--gutter)] py-[var(--section-y)]">
      {/* Label/value pairs, so the association is programmatic and not visual only. */}
      <dl className="max-w-5xl">
        {details.map(([label, value], index) => (
          <div
            key={label}
            className={`grid py-5 md:grid-cols-[0.34fr_1fr] ${index > 0 ? "border-t border-rule" : ""}`}
          >
            <dt className="font-mono text-label text-ink-soft">{label}</dt>
            <dd className="mt-2 text-body font-normal md:mt-0">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 max-w-4xl text-body font-normal text-ink-soft">{note}</p>
    </section>
  );
}

function PrivacyContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <div className="border-t border-rule px-[var(--gutter)] py-[var(--section-y)]">
      <div className="max-w-5xl">
        {sections.map(([title, body], index) => (
          <section key={title} className={index > 0 ? "border-t border-rule py-8" : "pb-8"}>
            <h2 className="break-words text-h3 font-extrabold [overflow-wrap:anywhere]">{title}</h2>
            <p className="mt-5 text-body font-normal">{body}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-body font-normal text-ink-soft">{note}</p>
    </div>
  );
}

function TermsContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <div className="border-t border-rule px-[var(--gutter)] py-[var(--section-y)]">
      <div className="max-w-5xl">
        {sections.map(([title, body], index) => (
          <section key={title} className={index > 0 ? "border-t border-rule py-8" : "pb-8"}>
            <h2 className="break-words text-h3 font-extrabold [overflow-wrap:anywhere]">{title}</h2>
            <p className="mt-4 text-body font-normal">{body}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-body font-normal text-ink-soft">{note}</p>
    </div>
  );
}
