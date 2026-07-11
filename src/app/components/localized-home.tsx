"use client";

import { CSSProperties, Dispatch, FormEvent, SetStateAction, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BotMessageSquare, CalendarDays, Check, Cog, Mail, ScanSearch } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { dictionaries, localeHtmlLang, localeLabels, localePath, locales, type Locale } from "@/i18n/content";
import { LegalFooter } from "./legal-footer";

type LeadPayload = {
  name: string;
  email: string;
  company: string;
  website: string;
  projectType: string;
  goal: string;
  timeline: string;
  preferredContact: string;
  message: string;
  consent: boolean;
  source: string;
};

const accent = "#39FF14";
const hasConvex = Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
const spring = { type: "spring", stiffness: 90, damping: 20 } as const;
const solutionIcons = [ScanSearch, BotMessageSquare, Cog] as const;

function createInitialForm(locale: Locale): LeadPayload {
  const options = dictionaries[locale].form.options;

  return {
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: options.projectTypes[0],
    goal: "",
    timeline: options.timelines[0],
    preferredContact: options.contacts[0],
    message: "",
    consent: false,
    source: `talos-ai-landing-${locale}`,
  };
}

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const reduceMotion = useReducedMotion();
  const sectionMotion = useMemo(
    () => ({
      hiddenRight: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 260 },
      hiddenLeft: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -260 },
      visible: { opacity: 1, x: 0 },
    }),
    [reduceMotion],
  );
  const itemMotion = {
    hiddenRight: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 90 },
    hiddenLeft: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 },
    hiddenUp: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

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
            <h1 className="max-w-5xl text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-[0.82] tracking-normal">
              <AnimatedWords
                reduceMotion={reduceMotion}
                delay={0.52}
                words={[
                  ...t.hero.words,
                  {
                    text: t.hero.highlight,
                    className: "px-2 text-[var(--primary)]",
                    style: { backgroundColor: accent },
                  },
                ]}
              />
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">
              <AnimatedWords reduceMotion={reduceMotion} delay={0.86} stagger={0.055} words={[...t.hero.subtitle]} />
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta locale={locale} />
            <a className="brutalist-button bg-[var(--background)] text-[var(--primary)]" href="#solution">
              {t.nav.inspect} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
        <HeroMachine locale={locale} reduceMotion={reduceMotion} />
      </section>

      <section id="problem" className="border-b-2 border-[var(--primary)] bg-[var(--background)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="relative aspect-square w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image src="/problem.png" alt="Industrial bottleneck machine" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </motion.div>
          <motion.div
            className="ml-auto grid w-full max-w-6xl border-2 border-[var(--primary)] bg-[var(--background)] lg:grid-cols-[0.78fr_1.22fr]"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <div className="flex min-h-96 flex-col justify-between border-b-2 border-[var(--primary)] p-6 sm:p-10 lg:border-b-0 lg:border-r-2">
              <div>
                <p className="accent-outline font-mono text-sm uppercase">
                  {t.problem.kicker}
                </p>
                <h2 className="mt-5 text-[clamp(3.4rem,7vw,6.5rem)] font-black uppercase leading-[0.85]">
                  {t.problem.titleBefore}{" "}
                  <span className="inline-block px-2 text-[var(--primary)]" style={{ backgroundColor: accent }}>
                    {t.problem.highlight}
                  </span>
                </h2>
              </div>
              <p className="mt-12 border-2 border-[var(--primary)] p-4 font-mono text-sm uppercase [box-shadow:6px_6px_0_0_var(--primary)]" style={{ backgroundColor: accent }}>
                {t.problem.note}
              </p>
            </div>
            <div className="divide-y-2 divide-[var(--primary)]">
              {t.problem.points.map((point) => (
                <article key={point} className="min-h-36 bg-[var(--background)]">
                  <p className="flex min-h-36 items-center p-5 text-2xl font-black leading-tight sm:p-8 sm:text-4xl">{point}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solution" className="border-b-2 border-[var(--primary)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            className="max-w-6xl border-2 border-[var(--primary)] bg-[var(--background)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <SectionLabel kicker={t.solution.kicker} title={t.solution.title} />
            <motion.div
              className="grid border-t-2 border-[var(--primary)] lg:grid-cols-3"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
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
                    <h3 className="text-3xl font-black uppercase leading-none">{title}</h3>
                    <p className="mt-5 text-lg font-semibold leading-snug">{text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative aspect-video w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image src="/solution.png" alt="Automation system connecting operational workflows" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section id="proof" className="border-b-2 border-[var(--primary)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="relative aspect-video w-full overflow-hidden border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            variants={sectionMotion}
            transition={spring}
          >
            <Image src="/process.png" alt="Automation process engine" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </motion.div>
          <motion.div initial="hiddenRight" whileInView="visible" viewport={{ once: false, margin: "-20%" }} variants={sectionMotion} transition={spring}>
            <div className="ml-auto max-w-5xl">
              <SectionLabel kicker={t.proof.kicker} title={t.proof.title} />
            </div>
            <motion.div
              className="ml-auto grid max-w-6xl border-2 border-[var(--primary)] md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
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

      <section id="booking-request" className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          className="grid border-2 border-[var(--primary)] bg-[var(--primary)] text-[var(--background)] lg:grid-cols-[0.9fr_1.1fr]"
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
          variants={itemMotion}
          transition={spring}
        >
          <div className="border-b-2 border-[var(--background)] p-6 sm:p-10 lg:border-b-0 lg:border-r-2">
            <p className="accent-outline font-mono text-sm uppercase">
              {t.cta.kicker}
            </p>
            <h2 className="mt-5 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.88]">{t.cta.title}</h2>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-snug">{t.cta.body}</p>
            <div className="mt-10 grid gap-3 font-mono text-sm uppercase">
              {t.cta.bullets.map((bullet) => (
                <span key={bullet} className="flex items-center gap-2">
                  <Check size={18} /> {bullet}
                </span>
              ))}
            </div>
          </div>
          {hasConvex ? <LeadForm locale={locale} /> : <UnconfiguredLeadForm locale={locale} />}
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
        <a href={bookingUrl || "#booking-request"} target={bookingUrl ? "_blank" : undefined} className="font-black" rel="noreferrer">
          {t.nav.book}
        </a>
      </div>
    </header>
  );
}

function PrimaryCta({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <a className="brutalist-button text-[var(--primary)]" href={bookingUrl || "#booking-request"} target={bookingUrl ? "_blank" : undefined} rel="noreferrer" style={{ backgroundColor: accent }}>
      <CalendarDays size={19} /> {t.nav.bookAudit}
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
            <span key={`${text}-${index}`} className={`inline-block ${className}`} style={style}>
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
            className={`inline-block ${className}`}
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
      className="grid min-h-[620px] grid-rows-[1fr_auto] bg-[var(--background)]"
      initial={reduceMotion ? false : { opacity: 0, x: 180 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 85, damping: 18, delay: 0.04 }}
    >
      <div className="relative overflow-hidden border-b-2 border-[var(--primary)] bg-[var(--background)] p-5 sm:p-8">
        <div className="relative h-full min-h-[560px] border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]">
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
      <h2 className={`mt-5 max-w-5xl text-4xl font-black uppercase leading-none sm:text-6xl ${inverted ? "text-[var(--background)]" : "text-[var(--primary)]"}`}>
        {title}
      </h2>
    </div>
  );
}

function LeadForm({ locale }: { locale: Locale }) {
  const submitLead = useMutation(api.leads.submitLead);
  const [form, setForm] = useState(() => createInitialForm(locale));
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(form, locale);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitLead(form);
      setForm(createInitialForm(locale));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <BookingSuccessPanel locale={locale} />;
  }

  return <LeadFormShell locale={locale} form={form} setForm={setForm} errors={errors} status={status} onSubmit={onSubmit} />;
}

function UnconfiguredLeadForm({ locale }: { locale: Locale }) {
  const [form, setForm] = useState(() => createInitialForm(locale));
  return <LeadFormShell locale={locale} form={form} setForm={setForm} errors={{}} status="idle" disabled onSubmit={(event) => event.preventDefault()} />;
}

function LeadFormShell({
  locale,
  form,
  setForm,
  errors,
  status,
  onSubmit,
  disabled = false,
}: {
  locale: Locale;
  form: LeadPayload;
  setForm: Dispatch<SetStateAction<LeadPayload>>;
  errors: Partial<Record<keyof LeadPayload, string>>;
  status: "idle" | "submitting" | "success" | "error";
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}) {
  const t = dictionaries[locale];
  const update = (field: keyof LeadPayload, value: string | boolean) => setForm({ ...form, [field]: value });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-10">
      {disabled && (
        <div className="accent-outline border-2 border-[var(--background)] p-4 font-mono text-sm uppercase">
          {t.cta.unconfigured}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={t.form.name} error={errors.name}>
          <input value={form.name} onChange={(event) => update("name", event.target.value)} disabled={disabled} />
        </Field>
        <Field label={t.form.email} error={errors.email}>
          <input value={form.email} onChange={(event) => update("email", event.target.value)} disabled={disabled} />
        </Field>
        <Field label={t.form.company} error={errors.company}>
          <input value={form.company} onChange={(event) => update("company", event.target.value)} disabled={disabled} />
        </Field>
        <Field label={t.form.website}>
          <input value={form.website} onChange={(event) => update("website", event.target.value)} disabled={disabled} placeholder="https://" />
        </Field>
        <Field label={t.form.projectType}>
          <select value={form.projectType} onChange={(event) => update("projectType", event.target.value)} disabled={disabled}>
            {t.form.options.projectTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label={t.form.timeline}>
          <select value={form.timeline} onChange={(event) => update("timeline", event.target.value)} disabled={disabled}>
            {t.form.options.timelines.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label={t.form.goal} error={errors.goal}>
        <input value={form.goal} onChange={(event) => update("goal", event.target.value)} disabled={disabled} />
      </Field>
      <Field label={t.form.message}>
        <textarea value={form.message} onChange={(event) => update("message", event.target.value)} disabled={disabled} rows={4} />
      </Field>
      <Field label={t.form.preferredContact}>
        <select value={form.preferredContact} onChange={(event) => update("preferredContact", event.target.value)} disabled={disabled}>
          {t.form.options.contacts.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <label className="flex gap-3 border-2 border-[var(--background)] p-4 font-mono text-sm uppercase">
        <input className="mt-1 h-5 w-5 accent-[#39FF14]" type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} disabled={disabled} />
        <span>
          {t.form.consentBefore}{" "}
          <Link className="underline decoration-2 underline-offset-4" href={localePath(locale, "/privacy")}>
            {t.form.privacy}
          </Link>
          .
        </span>
      </label>
      {errors.consent && (
        <p className="accent-outline font-mono text-sm uppercase">
          {errors.consent}
        </p>
      )}
      <button className="brutalist-button justify-center text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={disabled || status === "submitting"} style={{ backgroundColor: accent }}>
        {status === "submitting" ? t.cta.sending : t.cta.requestBooking} <Mail size={18} />
      </button>
      {status === "error" && (
        <p className="accent-outline font-mono text-sm uppercase">
          {t.cta.failed}
        </p>
      )}
    </form>
  );
}

function BookingSuccessPanel({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <div className="grid content-center gap-6 p-6 sm:p-10">
      <div className="border-2 border-[var(--background)] p-5">
        <p className="accent-outline font-mono text-sm uppercase">
          {t.cta.successKicker}
        </p>
        <h3 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">{t.cta.successTitle}</h3>
        <p className="mt-5 text-lg font-semibold leading-snug">{t.cta.successBody}</p>
      </div>
      {bookingUrl ? (
        <a className="brutalist-button justify-center text-[var(--primary)]" href={bookingUrl} rel="noreferrer" target="_blank" style={{ backgroundColor: accent }}>
          {t.cta.openCalendar} <CalendarDays size={18} />
        </a>
      ) : (
        <div className="accent-outline border-2 border-[var(--background)] p-4 font-mono text-sm uppercase">
          {t.cta.bookingMissing}
        </div>
      )}
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 font-mono text-sm uppercase">
      <span>{label}</span>
      {children}
      {error && <span className="accent-outline">{error}</span>}
    </label>
  );
}

function validateLead(form: LeadPayload, locale: Locale) {
  const labels = dictionaries[locale].form.errors;
  const errors: Partial<Record<keyof LeadPayload, string>> = {};
  if (!form.name.trim()) errors.name = labels.name;
  if (!form.email.trim()) errors.email = labels.email;
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = labels.invalidEmail;
  if (!form.company.trim()) errors.company = labels.company;
  if (!form.goal.trim()) errors.goal = labels.goal;
  if (!form.consent) errors.consent = labels.consent;
  return errors;
}
