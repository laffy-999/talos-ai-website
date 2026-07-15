"use client";

import { CSSProperties, useEffect, useMemo } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BotMessageSquare, CalendarDays, Check, Cog, ScanSearch } from "lucide-react";
import { dictionaries, localeHtmlLang, localeLabels, localePath, locales, type Locale } from "@/i18n/content";
import { LegalFooter } from "./legal-footer";

const accent = "#39FF14";
const calNamespace = "strategic-session";
const calEmbedJsUrl = "https://cal.eu/embed/embed.js";
const calLink = createCalLink(process.env.NEXT_PUBLIC_CAL_LINK, process.env.NEXT_PUBLIC_BOOKING_URL) || "laffy/strategic-session";
const bookingUrl = createBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL, calLink);
const spring = { type: "spring", stiffness: 90, damping: 20 } as const;
const solutionIcons = [ScanSearch, BotMessageSquare, Cog] as const;

function createCalLink(calLink?: string, bookingUrl?: string) {
  const rawUrl = (calLink || bookingUrl || "").trim();
  if (!rawUrl) return undefined;

  try {
    return new URL(rawUrl).pathname.replace(/^\/+/, "");
  } catch {
    return rawUrl.replace(/^@/, "").replace(/^\/+/, "");
  }
}

function createBookingUrl(bookingUrl?: string, link?: string) {
  const rawUrl = (bookingUrl || link || "").trim();
  if (!rawUrl) return undefined;
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;

  return `https://cal.eu/${rawUrl.replace(/^@/, "").replace(/^\/+/, "")}`;
}

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const reduceMotion = useReducedMotion();
  const sectionMotion = useMemo(
    () => ({
      hiddenRight: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 42 },
      hiddenLeft: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -42 },
      visible: { opacity: 1, x: 0 },
    }),
    [reduceMotion],
  );
  const itemMotion = {
    hiddenRight: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 },
    hiddenLeft: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 },
    hiddenUp: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  useEffect(() => {
    (async function configureCalEmbed() {
      const cal = await getCalApi({ namespace: calNamespace, embedJsUrl: calEmbedJsUrl });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": accent },
          dark: { "cal-brand": accent },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-[var(--background)] text-[var(--primary)]">
      <Header locale={locale} />
      <section className="grid min-h-[92vh] border-b-2 border-[var(--primary)] lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="flex flex-col justify-between border-b-2 border-[var(--primary)] p-5 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-12"
          initial={reduceMotion ? false : { y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mt-12 lg:mt-20">
            <h1 className="max-w-5xl break-words [overflow-wrap:anywhere] text-[clamp(2.25rem,10.8vw,5.5rem)] font-black uppercase leading-[0.86] tracking-normal md:text-[clamp(4rem,9vw,7rem)] xl:text-[clamp(4.6rem,6.4vw,8rem)]">
              <AnimatedWords
                reduceMotion={reduceMotion}
                delay={0.52}
                words={[
                  ...t.hero.words,
                  ...t.hero.highlight.split(" ").map((text) => ({
                    text,
                    className: "px-2 text-[var(--primary)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]",
                    style: { backgroundColor: accent },
                  })),
                ]}
              />
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">
              <AnimatedWords reduceMotion={reduceMotion} delay={0.86} stagger={0.055} words={[...t.hero.subtitle]} />
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta locale={locale} />
            <a className="brutalist-button justify-center bg-[var(--background)] text-[var(--primary)] sm:justify-start" href="#solution">
              {t.nav.inspect} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
        <HeroMachine locale={locale} reduceMotion={reduceMotion} />
      </section>

      <section id="problem" className="border-b-2 border-[var(--primary)] bg-[var(--background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid min-w-0 items-stretch gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="relative min-w-0 aspect-square w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image src="/problem.png" alt="Industrial bottleneck machine" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </motion.div>
          <motion.div
            className="ml-auto grid min-w-0 w-full max-w-6xl border-2 border-[var(--primary)] bg-[var(--background)] 2xl:grid-cols-[0.78fr_1.22fr]"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <div className="flex min-h-96 flex-col justify-between border-b-2 border-[var(--primary)] p-6 sm:p-10 2xl:border-b-0 2xl:border-r-2">
              <div>
                <p className="accent-outline font-mono text-sm uppercase">
                  {t.problem.kicker}
                </p>
                <h2 className="mt-5 max-w-full break-words [overflow-wrap:anywhere] text-[clamp(2rem,10vw,6.5rem)] font-black uppercase leading-[0.9] sm:text-[clamp(3.4rem,7vw,6.5rem)] sm:leading-[0.85]">
                  {t.problem.titleBefore}{" "}
                  <span
                    className="mt-1 inline-block px-2 text-[var(--primary)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] sm:mt-0 sm:inline"
                    style={{ backgroundColor: accent }}
                  >
                    {t.problem.highlight}
                  </span>
                </h2>
              </div>
              <p
                className="mt-12 max-w-full break-words border-2 border-[var(--primary)] p-4 font-mono text-xs uppercase leading-snug [box-shadow:6px_6px_0_0_var(--primary)] [overflow-wrap:anywhere] sm:text-sm"
                style={{ backgroundColor: accent }}
              >
                {t.problem.note}
              </p>
            </div>
            <div className="divide-y-2 divide-[var(--primary)]">
              {t.problem.points.map((point) => (
                <article key={point} className="min-h-36 bg-[var(--background)]">
                  <p className="flex min-h-36 items-center break-words p-5 text-2xl font-black leading-tight [overflow-wrap:anywhere] sm:p-8 sm:text-3xl xl:text-4xl">{point}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solution" className="border-b-2 border-[var(--primary)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            className="min-w-0 max-w-6xl border-2 border-[var(--primary)] bg-[var(--background)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <SectionLabel kicker={t.solution.kicker} title={t.solution.title} />
            <motion.div
              className="grid border-t-2 border-[var(--primary)] lg:grid-cols-3"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}
            >
              {t.solution.blocks.map(([title, text], index) => {
                const Icon = solutionIcons[index];
                return (
                  <motion.article
                    key={title}
                    className="border-b-2 border-[var(--primary)] bg-[var(--background)] p-6 lg:border-b-0 lg:border-r-2 lg:last:border-r-0"
                    variants={itemMotion}
                    transition={spring}
                  >
                    <div
                      className="mb-10 flex h-16 w-16 items-center justify-center border-2 border-[var(--primary)] [box-shadow:6px_6px_0_0_var(--primary)]"
                      style={{ backgroundColor: accent }}
                    >
                      <Icon size={34} strokeWidth={2.75} />
                    </div>
                    <h3 className="break-words text-3xl font-black uppercase leading-none [overflow-wrap:anywhere]">{title}</h3>
                    <p className="mt-5 text-lg font-semibold leading-snug">{text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative min-w-0 aspect-video w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image
              src="/solution.png"
              alt="Automation system connecting operational workflows"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>
      </section>

      <section id="proof" className="border-b-2 border-[var(--primary)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="relative min-w-0 aspect-video w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image src="/process.png" alt="Automation process engine" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </motion.div>
          <motion.div initial="hiddenRight" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={sectionMotion} transition={spring}>
            <div className="ml-auto max-w-5xl">
              <SectionLabel kicker={t.proof.kicker} title={t.proof.title} />
            </div>
            <motion.div
              className="ml-auto grid max-w-6xl border-2 border-[var(--primary)] md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } } }}
            >
              {t.proof.cards.map(([step, title, text]) => (
                <motion.article
                  key={step}
                  className="min-h-72 border-b-2 border-[var(--primary)] bg-[var(--background)] p-6 md:border-r-2 lg:border-b-0 lg:last:border-r-0"
                  variants={{
                    hidden: reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 90, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: spring },
                  }}
                >
                  <span className="inline-block border-2 border-[var(--primary)] px-3 py-2 font-mono text-6xl font-black leading-none [box-shadow:4px_4px_0_0_var(--primary)]" style={{ backgroundColor: accent }}>
                    {step}
                  </span>
                  <h3 className="mt-10 text-3xl font-black uppercase">{title}</h3>
                  <p className="mt-4 font-semibold leading-snug">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="booking-request" className="bg-black px-5 py-14 sm:px-8 lg:px-12">
        <motion.div
          className="mx-auto grid max-w-[1400px] gap-6 text-[var(--background)] 2xl:grid-cols-[460px_minmax(0,1fr)]"
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={itemMotion}
          transition={spring}
        >
          <div className="flex flex-col justify-between border-2 border-[var(--primary)] bg-[var(--primary)] p-6 text-[var(--background)] sm:p-8 2xl:min-h-[640px]">
            <p className="accent-outline font-mono text-sm uppercase">
              {t.cta.kicker}
            </p>
            <h2 className="mt-5 max-w-full break-words text-[clamp(2rem,8vw,3.8rem)] font-black uppercase leading-[0.9] sm:text-[clamp(2.4rem,7vw,4.75rem)] 2xl:text-[2.7rem]">{t.cta.title}</h2>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-snug">{t.cta.body}</p>
            <div className="mt-10 grid gap-3 font-mono text-sm uppercase">
              {t.cta.bullets.map((bullet) => (
                <span key={bullet} className="flex items-center gap-2">
                  <Check size={18} /> {bullet}
                </span>
              ))}
            </div>
          </div>
          <BookingPanel locale={locale} />
        </motion.div>
      </section>
      <LegalFooter locale={locale} />
    </main>
  );
}

function Header({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b-2 border-[var(--primary)] bg-[var(--background)] px-5 py-3 font-mono text-sm uppercase sm:px-8 lg:px-12">
      <Link href={localePath(locale)} className="font-black">
        Talos AI
      </Link>
      <nav className="hidden gap-6 sm:flex">
        <a href="#problem">{t.nav.problem}</a>
        <a href="#solution">{t.nav.solution}</a>
        <a href="#proof">{t.nav.proof}</a>
      </nav>
      <div className="flex items-center gap-4">
        <nav className="hidden gap-2 sm:flex" aria-label="Language">
          {locales.map((item) => (
            <Link key={item} className={item === locale ? "font-black underline decoration-2 underline-offset-4" : "hover:underline"} href={localePath(item)}>
              {localeLabels[item]}
            </Link>
          ))}
        </nav>
        <a className="font-black" href="#booking-request">
          {t.nav.book}
        </a>
      </div>
    </header>
  );
}

function PrimaryCta({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <a className="brutalist-button justify-center text-[var(--primary)] sm:justify-start" href="#booking-request" style={{ backgroundColor: accent }}>
      <CalendarDays size={19} /> {t.nav.bookAudit}
    </a>
  );
}

function BookingLink({ className, style, children }: { className?: string; style?: CSSProperties; children: React.ReactNode }) {
  return (
    <a
      className={className}
      href={bookingUrl || "#booking-request"}
      rel="noreferrer"
      style={style}
      target={bookingUrl ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

function AnimatedWords({
  words,
  reduceMotion,
  delay = 0,
  stagger = 0.07,
}: {
  words: Array<string | { text: string; className?: string; style?: CSSProperties }>;
  reduceMotion: boolean | null;
  delay?: number;
  stagger?: number;
}) {
  if (reduceMotion) {
    return (
      <>
        {words.map((word, index) => {
          const text = typeof word === "string" ? word : word.text;
          const className = typeof word === "string" ? "" : word.className;
          const style = typeof word === "string" ? undefined : word.style;

          return (
            <span key={`${text}-${index}`} className={`inline-block max-w-full break-words [overflow-wrap:anywhere] ${className}`} style={style}>
              {text}
              {index < words.length - 1 ? "\u00a0" : ""}
            </span>
          );
        })}
      </>
    );
  }

  return (
    <motion.span className="inline" initial="hidden" animate="visible" variants={{ visible: { transition: { delayChildren: delay, staggerChildren: stagger } } }}>
      {words.map((word, index) => {
        const text = typeof word === "string" ? word : word.text;
        const className = typeof word === "string" ? "" : word.className;
        const style = typeof word === "string" ? undefined : word.style;

        return (
          <motion.span
            key={`${text}-${index}`}
            className={`inline-block max-w-full break-words [overflow-wrap:anywhere] ${className}`}
            style={style}
            variants={{
              hidden: { opacity: 0, y: 28, scale: 0.92 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            {text}
            {index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

function HeroMachine({ locale, reduceMotion }: { locale: Locale; reduceMotion: boolean | null }) {
  const t = dictionaries[locale];

  return (
    <motion.div
      className="grid min-h-[auto] grid-rows-[1fr_auto] bg-[var(--background)] lg:min-h-[620px]"
      initial={reduceMotion ? false : { opacity: 0, x: 180 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 85, damping: 18, delay: 0.04 }}
    >
      <div className="relative overflow-hidden border-b-2 border-[var(--primary)] bg-[var(--background)] p-5 sm:p-8">
        <div className="relative h-full min-h-[360px] border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)] sm:min-h-[500px] lg:min-h-[560px]">
          <Image src="/hero-factory-v2.png" alt={t.hero.imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-3 font-mono text-xs uppercase">
        {t.hero.labels.map((label, index) => (
          <div key={label} className={index < t.hero.labels.length - 1 ? "border-r-2 border-[var(--primary)] p-4" : "p-4"}>
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionLabel({ kicker, title, inverted = false }: { kicker: string; title: string; inverted?: boolean }) {
  return (
    <div className="p-6 sm:p-10">
      <p className="accent-outline font-mono text-sm uppercase">
        {kicker}
      </p>
      <h2
        className={`mt-5 max-w-5xl break-words text-[clamp(2.15rem,10vw,3.75rem)] font-black uppercase leading-none [overflow-wrap:anywhere] sm:text-6xl ${inverted ? "text-[var(--background)]" : "text-[var(--primary)]"}`}
      >
        {title}
      </h2>
    </div>
  );
}

function BookingPanel({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <div className="grid min-w-0 gap-4">
      <div className="flex flex-col gap-4 text-[var(--background)] lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="accent-outline font-mono text-sm uppercase">
            {t.cta.bookingKicker}
          </p>
          <h3 className="mt-2 text-3xl font-black uppercase leading-none sm:text-4xl">{t.cta.bookingTitle}</h3>
          <p className="mt-3 text-base font-semibold leading-snug text-white/80 sm:text-lg">{t.cta.bookingBody}</p>
        </div>
        {bookingUrl ? (
          <BookingLink className="brutalist-button shrink-0 justify-center border-[var(--accent)] text-[var(--primary)] [box-shadow:4px_4px_0_0_var(--accent)]" style={{ backgroundColor: accent }}>
            {t.cta.openCalendar} <CalendarDays size={18} />
          </BookingLink>
        ) : (
          <div className="accent-outline border-2 border-[var(--accent)] p-4 font-mono text-sm uppercase">
            {t.cta.bookingMissing}
          </div>
        )}
      </div>
      <div className="h-[900px] min-h-[760px] overflow-hidden bg-[#111] md:h-[900px] lg:h-[700px] xl:h-[640px]">
        <Cal
          calLink={calLink}
          calOrigin="https://app.cal.eu"
          config={{ layout: "month_view", theme: "dark", useSlotsViewOnSmallScreen: "true" }}
          embedJsUrl={calEmbedJsUrl}
          namespace={calNamespace}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
        />
      </div>
    </div>
  );
}
