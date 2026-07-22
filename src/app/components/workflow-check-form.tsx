"use client";

import { useState } from "react";
import Link from "next/link";
import type { WorkflowCheck } from "@/data/workflow-checks";

type Result = {
  score: number;
  title: string;
  copy: string;
};

const answerOptions = [
  { label: "Ja", value: 2 },
  { label: "Teilweise", value: 1 },
  { label: "Nein", value: 0 },
] as const;

function resultFor(score: number): Result {
  if (score <= 5) {
    return {
      score,
      title: "Mehrere Übergaben verdienen eine genaue Prüfung.",
      copy: "Ihre Antworten deuten auf Medienbrüche oder ungeklärte Verantwortungen hin. Beginnen Sie mit der Übergabe, die heute die meisten Rückfragen auslöst.",
    };
  }

  if (score <= 10) {
    return {
      score,
      title: "Der Ablauf trägt, hat aber einzelne Reibungspunkte.",
      copy: "Wählen Sie die zwei nur teilweise gelösten Übergaben. Dort lässt sich meist zuerst Standardisierung schaffen, bevor Automatisierung sinnvoll wird.",
    };
  }

  return {
    score,
    title: "Der Ablauf wirkt bereits strukturiert.",
    copy: "Prüfen Sie jetzt Ausnahmefälle, Freigaben und Systemgrenzen. Gute Automation sollte einen stabilen Prozess unterstützen, nicht unnötig ersetzen.",
  };
}

export function WorkflowCheckForm({ check }: { check: WorkflowCheck }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => check.questions.map(() => null),
  );
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function selectAnswer(questionIndex: number, value: number) {
    setAnswers((current) =>
      current.map((answer, index) => (index === questionIndex ? value : answer)),
    );
    setResult(null);
    setError("");
  }

  function evaluate() {
    if (answers.some((answer) => answer === null)) {
      setError("Bitte beantworten Sie alle sieben Fragen.");
      return;
    }

    const score = answers.reduce<number>((sum, answer) => sum + (answer ?? 0), 0);
    setResult(resultFor(score));
    setError("");
    window.requestAnimationFrame(() => {
      document.getElementById("workflow-result")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <div className="border-2 border-[var(--primary)] bg-[var(--background)] [box-shadow:8px_8px_0_0_var(--primary)]">
      <div className="divide-y-2 divide-[var(--primary)]">
        {check.questions.map((question, questionIndex) => (
          <section
            className="grid gap-5 p-5 sm:grid-cols-[4rem_1fr] sm:p-8"
            key={question.label}
          >
            <span className="font-mono text-3xl font-black">
              {String(questionIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-2xl font-black uppercase leading-none">
                {question.label}
              </h2>
              <p className="mt-3 max-w-4xl text-base font-semibold leading-snug sm:text-lg">
                {question.text}
              </p>
              <div
                aria-label={`Antwort zu ${question.label}`}
                className="mt-5 flex flex-wrap gap-3"
                role="radiogroup"
              >
                {answerOptions.map((option) => {
                  const selected = answers[questionIndex] === option.value;
                  return (
                    <button
                      aria-checked={selected}
                      className={`min-h-11 border-2 border-[var(--primary)] px-4 font-mono text-sm font-black uppercase transition-transform focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)] ${
                        selected
                          ? "translate-x-1 translate-y-1 bg-[var(--accent)] shadow-none"
                          : "bg-[var(--background)] [box-shadow:4px_4px_0_0_var(--primary)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                      }`}
                      key={option.label}
                      onClick={() => selectAnswer(questionIndex, option.value)}
                      role="radio"
                      type="button"
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-5 bg-black p-5 text-[var(--background)] sm:p-8">
        <button
          className="brutalist-button border-[var(--accent)] bg-[var(--accent)] text-[var(--primary)] [box-shadow:4px_4px_0_0_var(--accent)]"
          onClick={evaluate}
          type="button"
        >
          Auswertung anzeigen
        </button>
        <p aria-live="polite" className="font-mono text-sm font-black uppercase text-[var(--accent)]">
          {error}
        </p>
      </div>

      {result ? (
        <section
          aria-live="polite"
          className="grid gap-8 border-t-2 border-[var(--primary)] p-6 sm:p-10 lg:grid-cols-[0.72fr_1.28fr]"
          id="workflow-result"
        >
          <div>
            <p className="font-mono text-sm font-black uppercase">Ihre Selbsteinschätzung</p>
            <p className="mt-3 text-7xl font-black leading-none">
              {result.score}<span className="text-3xl">/14</span>
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">
              {result.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-snug">{result.copy}</p>
            <p className="mt-5 max-w-3xl border-l-4 border-[var(--accent)] pl-4 font-mono text-sm uppercase">
              Nächster sinnvoller Schritt: Wählen Sie eine schwache Übergabe und prüfen Sie einen realen Auftrag vom Eingang bis zur Rechnung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="brutalist-button justify-center bg-[var(--background)]"
                onClick={() => window.print()}
                type="button"
              >
                Ergebnis drucken
              </button>
              <Link
                className="brutalist-button justify-center bg-[var(--accent)]"
                href="/de#booking-request"
              >
                Technische Analyse besprechen
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <p className="border-t-2 border-[var(--primary)] p-5 font-mono text-xs uppercase sm:px-8">
        <strong>Datenschutz:</strong> Ihre Antworten bleiben in diesem Browser. Diese Seite überträgt oder speichert keine Eingaben und verwendet für den Check kein personenbezogenes Tracking.
      </p>
    </div>
  );
}
