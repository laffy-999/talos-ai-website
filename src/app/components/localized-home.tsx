import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BotMessageSquare, CalendarDays, Check, Cog, ScanSearch } from "lucide-react";
import heroImage from "@/assets/hero-robot-cutout.webp";
import problemImage from "@/assets/problem.webp";
import processImage from "@/assets/process.webp";
import solutionImage from "@/assets/solution.webp";
import talosLogo from "@/assets/talos-ai-logo-primary-black-cropped.png";
import { dictionaries, type Dictionary } from "@/i18n/content";
import { localeHtmlLang, localeLabels, localeNames, localePath, locales, type Locale } from "@/i18n/locales";
import { BookingCta } from "./booking-cta";
import { BookingViewBeacon } from "./booking-view-beacon";
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
        <section className="grid gap-10 border-b border-rule px-[var(--gutter)] py-[var(--section-y)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="enter-rise flex flex-col gap-10">
            <div>
              <h1 className="max-w-5xl break-words text-display font-extrabold [overflow-wrap:anywhere]">
                <HeroHeadline hero={t.hero} />
              </h1>
              <p className="enter-rise mt-8 max-w-2xl text-lead font-medium">{t.hero.subtitle.join(" ")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BookingCta
                className="brutalist-button justify-center bg-accent text-on-accent sm:justify-start"
                event="booking_cta_click"
                href="#booking-request"
                locale={locale}
                placement="hero"
              >
                <CalendarDays size={19} /> {t.nav.bookAudit}
              </BookingCta>
              <a className="brutalist-button justify-center !border-0 bg-surface text-ink outline outline-1 outline-ink sm:justify-start" href="#solution">
                {t.nav.inspect} <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="enter-slide grid gap-4 bg-surface">
            <div className="relative aspect-[4/5] min-h-[360px] sm:min-h-[500px]">
              <Image src={heroImage} alt={t.hero.imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain object-bottom" />
            </div>
            <div className="grid grid-cols-3 gap-4 font-mono text-label text-ink-soft">
              {t.hero.labels.map((label) => (
                <div key={label}>{label}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-rule bg-surface px-[var(--gutter)] py-[var(--section-y)]">
          <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative aspect-[4/5] min-h-[360px] sm:min-h-[500px]" data-reveal="left">
              <Image src={problemImage} alt={t.problem.imageAlt} sizes="(min-width: 1024px) 38vw, 100vw" fill className="object-contain object-bottom" />
            </div>
            <div className="ml-auto w-full max-w-6xl" data-reveal="right">
              <p className="kicker">{t.problem.kicker}</p>
              <h2 className="mt-5 max-w-4xl break-words text-h2 font-extrabold [overflow-wrap:anywhere]">
                {t.problem.titleBefore} {t.problem.highlight}
              </h2>
              <p className="mt-6 max-w-3xl text-body text-ink-soft">{t.problem.note}</p>
              <ul className="mt-10">
                {t.problem.points.map((point, index) => (
                  <li
                    key={point}
                    className="relative grid min-h-24 grid-cols-[44px_minmax(0,1fr)] items-center py-5 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-rule before:content-['']"
                    data-reveal="right"
                    style={staggerIndex(index)}
                  >
                    <span className="font-mono text-label text-ink-soft">{String(index + 1).padStart(2, "0")}</span>
                    <span className="break-words text-lead font-medium [overflow-wrap:anywhere]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a className="brutalist-button mt-12 bg-accent text-on-accent" href="#booking-request">
            {t.nav.bookAudit}
          </a>
        </section>

        <section id="solution" className="border-b border-rule px-[var(--gutter)] py-[var(--section-y)]">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="max-w-6xl" data-reveal="left">
              <SectionLabel kicker={t.solution.kicker} title={t.solution.title} />
              <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-3">
                {t.solution.blocks.map(([title, text], index) => {
                  const Icon = solutionIcons[index];
                  return (
                    <li
                      key={title}
                      className={`p-6 ${index > 0 ? "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-rule before:content-[''] lg:before:inset-y-0 lg:before:left-0 lg:before:right-auto lg:before:h-auto lg:before:w-px" : ""}`}
                      data-reveal="left"
                      style={staggerIndex(index)}
                    >
                      <Icon className="mb-6 text-ink-soft" size={20} strokeWidth={2.25} />
                      <h3 className="break-words text-h3 font-extrabold [overflow-wrap:anywhere]">{title}</h3>
                      <p className="mt-4 text-body font-normal">{text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative aspect-[3/2] w-full" data-reveal="right">
              <Image src={solutionImage} alt={t.solution.imageAlt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain object-center" />
            </div>
          </div>
          <a className="brutalist-button mt-12 bg-accent text-on-accent" href="#booking-request">
            {t.nav.bookAudit}
          </a>
        </section>

        <section id="process" className="border-b border-rule px-[var(--gutter)] py-[var(--section-y)]">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative aspect-[4/5] min-h-[360px] w-full sm:min-h-[500px]" data-reveal="left">
              <Image src={processImage} alt={t.process.imageAlt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-contain object-center" />
            </div>
            <div data-reveal="right">
              <div className="ml-auto max-w-5xl">
                <SectionLabel kicker={t.process.kicker} title={t.process.title} />
              </div>
              <ol className="ml-auto mt-10 grid max-w-6xl grid-cols-[minmax(0,1fr)] lg:grid-cols-4">
                {t.process.cards.map(([step, title, text], index) => (
                  <li
                    key={step}
                    className={`min-h-64 p-6 ${index > 0 ? "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-rule before:content-[''] lg:before:inset-y-0 lg:before:left-0 lg:before:right-auto lg:before:h-auto lg:before:w-px" : ""}`}
                    data-reveal="up"
                    style={staggerIndex(index)}
                  >
                    <span className="font-mono text-label text-ink-soft">{step}</span>
                    <h3 className="mt-8 break-words text-h3 font-extrabold [overflow-wrap:anywhere] hyphens-auto">{title}</h3>
                    <p className="mt-4 text-body font-normal">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <a className="brutalist-button mt-12 bg-accent text-on-accent" href="#booking-request">
            {t.nav.bookAudit}
          </a>
        </section>

        <section
          id="booking-request"
          className="surface-invert bg-invert px-[var(--gutter)] py-[var(--section-y)] text-on-invert"
        >
          <BookingViewBeacon locale={locale} />
          <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-10 2xl:grid-cols-[460px_minmax(0,1fr)]" data-reveal="up">
            <div className="flex flex-col justify-center 2xl:min-h-[640px]">
              <p className="kicker">{t.cta.kicker}</p>
              <h2 className="mt-5 max-w-full break-words text-h2 font-extrabold">{t.cta.title}</h2>
              <p className="mt-8 max-w-xl text-body font-normal">{t.cta.body}</p>
              <ul className="mt-10 grid gap-3 font-mono text-label">
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
  return (
    <>
      {hero.words.map((text, index) => (
        <span
          key={`${text}-${index}`}
          className="enter-pop inline-block max-w-full break-words [overflow-wrap:anywhere]"
          style={{ "--i": index } as CSSProperties}
        >
          {text}
          {"\u00a0"}
        </span>
      ))}
      <span
        className="enter-pop inline-block max-w-full break-words bg-accent px-2 text-on-accent [overflow-wrap:anywhere]"
        style={{ "--i": hero.words.length } as CSSProperties}
      >
        {hero.highlight}
      </span>
    </>
  );
}

function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header id="top" className="sticky top-0 z-30 flex min-h-[var(--header-height)] items-center justify-between gap-4 bg-surface px-[var(--gutter)] py-3 font-mono text-label text-ink">
      <Link href="#top" className="shrink-0">
        <Image src={talosLogo} alt="Talos AI" className="h-5 w-auto" priority sizes="80px" />
      </Link>
      <nav className="hidden gap-6 sm:flex" aria-label={t.a11y.primaryNav}>
        <a href="#problem">{t.nav.problem}</a>
        <a href="#solution">{t.nav.solution}</a>
        <a href="#process">{t.nav.process}</a>
      </nav>
      <div className="flex items-center gap-4">
        <LocaleSwitcher current={locale} label={t.a11y.languageNav} />
        <BookingCta
          className="font-extrabold"
          event="booking_cta_click"
          href="#booking-request"
          locale={locale}
          placement="header"
        >
          {t.nav.book}
        </BookingCta>
      </div>
    </header>
  );
}

// The header switcher is the navigation landmark for language choice; the footer copy repeats the
// same links, so it renders without a landmark instead of duplicating the name in the landmark list.
export function LocaleSwitcher({ current, label, path = "" }: { current: Locale; label?: string; path?: string }) {
  const Wrapper = label ? "nav" : "div";

  return (
    <Wrapper className="flex gap-2 font-mono text-label" aria-label={label}>
      {locales.map((item) => (
        <Link
          key={item}
          aria-current={item === current ? "page" : undefined}
          aria-label={localeNames[item]}
          className={item === current ? "font-extrabold underline decoration-1 underline-offset-4" : "hover:underline"}
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
    <div>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-5 max-w-5xl break-words text-h2 font-extrabold [overflow-wrap:anywhere]">{title}</h2>
    </div>
  );
}
