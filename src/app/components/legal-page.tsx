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
        <header className="px-5 py-10 sm:px-8 lg:px-12">
          <Link className="font-mono text-sm font-black uppercase" href={localePath(locale)}>
            Talos AI
          </Link>
          <p className="accent-outline mt-10 font-mono text-sm uppercase">{content.kicker}</p>
          <h1 className="mt-4 break-words text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] [overflow-wrap:anywhere]">
            {content.title}
          </h1>
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
    <section className="border-t-2 border-ink px-5 py-10 sm:px-8 lg:px-12">
      {/* Label/value pairs, so the association is programmatic and not visual only. */}
      <dl className="max-w-5xl border-2 border-ink bg-surface">
        {details.map(([label, value]) => (
          <div key={label} className="grid border-b-2 border-ink last:border-b-0 md:grid-cols-[0.34fr_1fr]">
            <dt className="border-b-2 border-ink p-4 font-mono text-sm uppercase md:border-b-0 md:border-r-2">{label}</dt>
            <dd className="p-4 text-lg font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
    </section>
  );
}

function PrivacyContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <>
      <div className="grid border-t-2 border-ink md:grid-cols-2">
        {sections.map(([title, body]) => (
          <section key={title} className="border-b-2 border-ink p-5 md:border-r-2 md:p-8 md:[&:nth-child(2n)]:border-r-0">
            <h2 className="break-words text-3xl font-black uppercase leading-none [overflow-wrap:anywhere]">{title}</h2>
            <p className="mt-5 text-lg font-semibold leading-relaxed">{body}</p>
          </section>
        ))}
      </div>
      <div className="px-5 py-8 sm:px-8 lg:px-12">
        <p className="max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
      </div>
    </>
  );
}

function TermsContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <div className="border-t-2 border-ink px-5 py-10 sm:px-8 lg:px-12">
      <div className="max-w-5xl border-2 border-ink">
        {sections.map(([title, body]) => (
          <section key={title} className="border-b-2 border-ink p-5 last:border-b-0 sm:p-8">
            <h2 className="break-words text-3xl font-black uppercase leading-none [overflow-wrap:anywhere]">{title}</h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed">{body}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
    </div>
  );
}
