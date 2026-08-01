import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BotMessageSquare, CalendarDays, Check, Cog, ScanSearch } from "lucide-react";
import heroImage from "@/assets/hero-factory-v2.webp";
import problemImage from "@/assets/problem.webp";
import processImage from "@/assets/process.webp";
import solutionImage from "@/assets/solution.webp";
import { dictionaries, type Dictionary } from "@/i18n/content";
import { localeHtmlLang, localeLabels, localeNames, localePath, locales, type Locale } from "@/i18n/locales";
import { BookingPanel } from "./booking-panel";
import { LegalFooter } from "./legal-footer";

const solutionIcons = [ScanSearch, BotMessageSquare, Cog] as const;

// Entrances and reveals are pure CSS (see globals.css): `enter-*` classes animate on load, and
// `data-reveal` marks a block for the scroll reveal controller. Both leave the prerendered markup
// visible, so a blocked or failed bundle never hides content.
const staggerIndex = (index: number) => ({ "--reveal-delay": index }) as CSSProperties;

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <a
        className="brutalist-button sr-only bg-accent text-on-accent focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-40"
        href="#main-content"
      >
        {t.a11y.skipToContent}
      </a>
      <Header locale={locale} t={t} />
      <main id="main-content" className="relative w-full overflow-x-hidden bg-surface text-ink">
        <section className="grid min-h-[92vh] border-b-2 border-ink lg:grid-cols-[1.15fr_0.85fr]">
          <div className="enter-rise flex flex-col justify-between border-b-2 border-ink p-5 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-12">
            <div className="mt-12 lg:mt-20">
              <h1 className="max-w-5xl break-words [overflow-wrap:anywhere] text-[clamp(2.25rem,10.8vw,5.5rem)] font-black uppercase leading-[0.86] tracking-normal md:text-[clamp(4rem,9vw,7rem)] xl:text-[clamp(4.6rem,6.4vw,8rem)]">
                <HeroHeadline hero={t.hero} />
              </h1>
              <p className="enter-rise mt-8 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">
                {t.hero.subtitle.join(" ")}
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a className="brutalist-button justify-center bg-accent text-on-accent sm:justify-start" href="#booking-request">
                <CalendarDays size={19} /> {t.nav.bookAudit}
              </a>
              <a className="brutalist-button justify-center bg-surface text-ink sm:justify-start" href="#solution">
                {t.nav.inspect} <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="enter-slide grid grid-rows-[1fr_auto] bg-surface lg:min-h-[620px]">
            <div className="relative overflow-hidden border-b-2 border-ink bg-surface p-5 sm:p-8">
              <div className="relative h-full min-h-[360px] border-2 border-ink bg-surface shadow-brutal sm:min-h-[500px] lg:min-h-[560px]">
                <Image src={heroImage} alt={t.hero.imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-3 font-mono text-xs uppercase">
              {t.hero.labels.map((label, index) => (
                <div key={label} className={index < t.hero.labels.length - 1 ? "border-r-2 border-ink p-4" : "p-4"}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="border-b-2 border-ink bg-surface px-5 py-20 sm:px-8 lg:px-12">
          <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div
              className="relative aspect-square w-full overflow-hidden border-2 border-ink bg-surface shadow-brutal"
              data-reveal="left"
            >
              <Image src={problemImage} alt={t.problem.imageAlt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
            </div>
            <div
              className="ml-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] border-2 border-ink bg-surface 2xl:grid-cols-[0.78fr_1.22fr]"
              data-reveal="right"
            >
              <div className="flex min-h-96 flex-col justify-between border-b-2 border-ink p-6 sm:p-10 2xl:border-b-0 2xl:border-r-2">
                <div>
                  <p className="accent-outline font-mono text-sm uppercase">{t.problem.kicker}</p>
                  <h2 className="mt-5 max-w-full break-words text-[clamp(2rem,9vw,4rem)] font-black uppercase leading-[0.9] sm:text-[clamp(3rem,6vw,5.5rem)] sm:leading-[0.85]">
                    {t.problem.titleBefore}{" "}
                    {/* inline-block, never inline: an inline background box is sized by font metrics
                        and would paint over the line above at this line-height. */}
                    <span className="mt-1 inline-block max-w-full bg-accent px-2 text-on-accent [box-decoration-break:clone] [-webkit-box-decoration-break:clone] sm:mt-0">
                      {t.problem.highlight}
                    </span>
                  </h2>
                </div>
                <p className="mt-12 max-w-full break-words border-2 border-ink bg-accent p-4 font-mono text-xs uppercase leading-snug text-on-accent shadow-brutal-sm [overflow-wrap:anywhere] sm:text-sm">
                  {t.problem.note}
                </p>
              </div>
              <ul className="divide-y-2 divide-ink">
                {t.problem.points.map((point, index) => (
                  <li
                    key={point}
                    className="flex min-h-36 items-center break-words bg-surface p-5 text-2xl font-black leading-tight [overflow-wrap:anywhere] sm:p-8 sm:text-3xl xl:text-4xl"
                    data-reveal="right"
                    style={staggerIndex(index)}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="solution" className="border-b-2 border-ink px-5 py-20 sm:px-8 lg:px-12">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="max-w-6xl border-2 border-ink bg-surface" data-reveal="left">
              <SectionLabel kicker={t.solution.kicker} title={t.solution.title} />
              <ul className="grid grid-cols-[minmax(0,1fr)] border-t-2 border-ink lg:grid-cols-3">
                {t.solution.blocks.map(([title, text], index) => {
                  const Icon = solutionIcons[index];
                  return (
                    <li
                      key={title}
                      className="border-b-2 border-ink bg-surface p-6 lg:border-b-0 lg:border-r-2 lg:last:border-r-0"
                      data-reveal="left"
                      style={staggerIndex(index)}
                    >
                      <div className="mb-10 flex h-16 w-16 items-center justify-center border-2 border-ink bg-accent text-on-accent shadow-brutal-sm">
                        <Icon size={34} strokeWidth={2.75} />
                      </div>
                      <h3 className="break-words text-3xl font-black uppercase leading-none [overflow-wrap:anywhere]">{title}</h3>
                      <p className="mt-5 text-lg font-semibold leading-snug">{text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="relative aspect-video w-full overflow-hidden border-2 border-ink bg-surface shadow-brutal"
              data-reveal="right"
            >
              <Image src={solutionImage} alt={t.solution.imageAlt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain object-center" />
            </div>
          </div>
        </section>

        <section id="proof" className="border-b-2 border-ink px-5 py-20 sm:px-8 lg:px-12">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div
              className="relative aspect-video w-full overflow-hidden border-2 border-ink bg-surface shadow-brutal"
              data-reveal="left"
            >
              <Image src={processImage} alt={t.proof.imageAlt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
            </div>
            <div data-reveal="right">
              <div className="ml-auto max-w-5xl">
                <SectionLabel kicker={t.proof.kicker} title={t.proof.title} />
              </div>
              <ol className="ml-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] border-2 border-ink md:grid-cols-2 lg:grid-cols-4">
                {t.proof.cards.map(([step, title, text], index) => (
                  <li
                    key={step}
                    className="min-h-72 border-b-2 border-ink bg-surface p-6 md:border-r-2 lg:border-b-0 lg:last:border-r-0"
                    data-reveal="up"
                    style={staggerIndex(index)}
                  >
                    <span className="inline-block border-2 border-ink bg-accent px-3 py-2 font-mono text-6xl font-black leading-none text-on-accent shadow-brutal-sm">
                      {step}
                    </span>
                    <h3 className="mt-10 break-words text-3xl font-black uppercase [overflow-wrap:anywhere] hyphens-auto">{title}</h3>
                    <p className="mt-4 font-semibold leading-snug">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="booking-request" className="surface-invert bg-invert px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-6 text-on-invert 2xl:grid-cols-[460px_minmax(0,1fr)]" data-reveal="up">
            <div className="flex flex-col justify-between border-2 border-ink bg-ink p-6 text-on-invert sm:p-8 2xl:min-h-[640px]">
              <p className="accent-outline font-mono text-sm uppercase">{t.cta.kicker}</p>
              <h2 className="mt-5 max-w-full break-words text-[clamp(2rem,8vw,3.8rem)] font-black uppercase leading-[0.9] sm:text-[clamp(2.4rem,7vw,4.75rem)] 2xl:text-[2.7rem]">
                {t.cta.title}
              </h2>
              <p className="mt-8 max-w-xl text-xl font-semibold leading-snug">{t.cta.body}</p>
              <ul className="mt-10 grid gap-3 font-mono text-sm uppercase">
                {t.cta.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <Check size={18} /> {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <BookingPanel copy={t.cta} locale={locale} />
          </div>
        </section>
      </main>
      <LegalFooter locale={locale} />
    </>
  );
}

function HeroHeadline({ hero }: { hero: Dictionary["hero"] }) {
  const words = [
    ...hero.words.map((text) => ({ text, highlighted: false })),
    ...hero.highlight.split(" ").map((text) => ({ text, highlighted: true })),
  ];

  return (
    <>
      {words.map(({ text, highlighted }, index) => (
        <span
          key={`${text}-${index}`}
          className={`enter-pop inline-block max-w-full break-words [overflow-wrap:anywhere] ${
            highlighted ? "bg-accent px-2 text-on-accent [box-decoration-break:clone] [-webkit-box-decoration-break:clone]" : ""
          }`}
          style={{ "--i": index } as CSSProperties}
        >
          {text}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </>
  );
}

function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header className="sticky top-0 z-30 flex min-h-[var(--header-height)] items-center justify-between gap-4 border-b-2 border-ink bg-surface px-5 py-3 font-mono text-sm uppercase text-ink sm:px-8 lg:px-12">
      <Link href={localePath(locale)} className="font-black">
        Talos AI
      </Link>
      <nav className="hidden gap-6 sm:flex" aria-label={t.a11y.primaryNav}>
        <a href="#problem">{t.nav.problem}</a>
        <a href="#solution">{t.nav.solution}</a>
        <a href="#proof">{t.nav.proof}</a>
      </nav>
      <div className="flex items-center gap-4">
        <LocaleSwitcher current={locale} label={t.a11y.languageNav} />
        <a className="font-black" href="#booking-request">
          {t.nav.book}
        </a>
      </div>
    </header>
  );
}

// The header switcher is the navigation landmark for language choice; the footer copy repeats the
// same links, so it renders without a landmark instead of duplicating the name in the landmark list.
export function LocaleSwitcher({ current, label, path = "" }: { current: Locale; label?: string; path?: string }) {
  const Wrapper = label ? "nav" : "div";

  return (
    <Wrapper className="flex gap-2" aria-label={label}>
      {locales.map((item) => (
        <Link
          key={item}
          aria-current={item === current ? "page" : undefined}
          aria-label={localeNames[item]}
          className={item === current ? "font-black underline decoration-2 underline-offset-4" : "hover:underline"}
          href={localePath(item, path)}
          hrefLang={localeHtmlLang[item]}
          lang={localeHtmlLang[item]}
          // Each locale is its own root layout, so switching is a document navigation either way.
          prefetch={false}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </Wrapper>
  );
}

function SectionLabel({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="p-6 sm:p-10">
      <p className="accent-outline font-mono text-sm uppercase">{kicker}</p>
      <h2 className="mt-5 max-w-5xl break-words text-ink text-[clamp(2.15rem,10vw,3.75rem)] font-black uppercase leading-none [overflow-wrap:anywhere] sm:text-6xl">
        {title}
      </h2>
    </div>
  );
}
