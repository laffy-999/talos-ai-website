import Link from "next/link";
import { legalContent } from "@/i18n/legal";
import { localePath, type Locale } from "@/i18n/content";
import { LegalFooter } from "./legal-footer";

type LegalPageType = "impressum" | "privacy" | "terms";

export function LegalPage({ locale, page }: { locale: Locale; page: LegalPageType }) {
  const content = legalContent[locale][page];

  return (
    <>
      <main className="min-h-screen bg-[var(--background)] text-[var(--primary)]">
        <LegalPageHeader locale={locale} kicker={content.kicker} title={content.title} />
        <LegalPageBody locale={locale} page={page} />
      </main>
      <LegalFooter locale={locale} />
    </>
  );
}

function LegalPageBody({ locale, page }: { locale: Locale; page: LegalPageType }) {
  if (page === "impressum") {
    const content = legalContent[locale].impressum;
    return <ImpressumContent details={content.details} note={content.note} />;
  }

  if (page === "privacy") {
    const content = legalContent[locale].privacy;
    return <PrivacyContent sections={content.sections} note={content.note} />;
  }

  const content = legalContent[locale].terms;
  return <TermsContent sections={content.sections} note={content.note} />;
}

function LegalPageHeader({ locale, kicker, title }: { locale: Locale; kicker: string; title: string }) {
  return (
    <header className="px-5 py-10 sm:px-8 lg:px-12">
      <Link className="font-mono text-sm font-black uppercase" href={localePath(locale)}>
        Talos AI
      </Link>
      <p className="accent-outline mt-10 font-mono text-sm uppercase">
        {kicker}
      </p>
      <h1 className="mt-4 text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85]">{title}</h1>
    </header>
  );
}

function ImpressumContent({ details, note }: { details: string[][]; note: string }) {
  return (
    <section className="border-t-2 border-[var(--primary)] px-5 py-10 sm:px-8 lg:px-12">
      <div className="max-w-5xl border-2 border-[var(--primary)] bg-[var(--background)]">
        {details.map(([label, value]) => (
          <div key={label} className="grid border-b-2 border-[var(--primary)] last:border-b-0 md:grid-cols-[0.34fr_1fr]">
            <div className="border-b-2 border-[var(--primary)] p-4 font-mono text-sm uppercase md:border-b-0 md:border-r-2">{label}</div>
            <div className="p-4 text-lg font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
    </section>
  );
}

function PrivacyContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <>
      <section className="grid border-t-2 border-[var(--primary)] md:grid-cols-2">
        {sections.map(([title, body]) => (
          <article key={title} className="border-b-2 border-[var(--primary)] p-5 md:border-r-2 md:p-8 md:[&:nth-child(2n)]:border-r-0">
            <h2 className="text-3xl font-black uppercase leading-none">{title}</h2>
            <p className="mt-5 text-lg font-semibold leading-relaxed">{body}</p>
          </article>
        ))}
      </section>
      <section className="px-5 py-8 sm:px-8 lg:px-12">
        <p className="max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
      </section>
    </>
  );
}

function TermsContent({ sections, note }: { sections: string[][]; note: string }) {
  return (
    <section className="border-t-2 border-[var(--primary)] px-5 py-10 sm:px-8 lg:px-12">
      <div className="max-w-5xl border-2 border-[var(--primary)]">
        {sections.map(([title, body]) => (
          <article key={title} className="border-b-2 border-[var(--primary)] p-5 last:border-b-0 sm:p-8">
            <h2 className="text-3xl font-black uppercase leading-none">{title}</h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-sm font-semibold leading-relaxed">{note}</p>
    </section>
  );
}
