import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalFooter } from "@/app/components/legal-footer";
import { WorkflowCheckForm } from "@/app/components/workflow-check-form";
import { getWorkflowCheck, workflowChecks } from "@/data/workflow-checks";

export const dynamicParams = false;

export function generateStaticParams() {
  return workflowChecks.map((check) => ({ slug: check.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const check = getWorkflowCheck(slug);

  if (!check) {
    return {};
  }

  return {
    title: `${check.title} | Talos AI`,
    description: check.description,
    alternates: {
      canonical: `/de/service-workflow-check/${check.slug}`,
    },
  };
}

export default async function WorkflowCheckPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const check = getWorkflowCheck(slug);

  if (!check) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--primary)]">
      <header className="flex items-center justify-between gap-4 border-b-2 border-[var(--primary)] px-5 py-4 font-mono text-sm uppercase sm:px-8 lg:px-12">
        <Link className="font-black" href="/de">
          Talos AI
        </Link>
        <span className="hidden sm:inline">Operativer Selbstcheck</span>
      </header>

      <section className="border-b-2 border-[var(--primary)] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="accent-outline font-mono text-sm uppercase">
              Talos AI · 7-Punkte-Workflow-Check
            </p>
            <h1 className="mt-6 max-w-6xl break-words text-[clamp(2.7rem,8vw,7.5rem)] font-black uppercase leading-[0.86] [overflow-wrap:anywhere]">
              {check.headline}
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-snug sm:text-2xl">
              {check.description} Die Auswertung erfolgt lokal in Ihrem Browser.
            </p>
          </div>
          <aside className="border-2 border-[var(--primary)] p-5 font-mono text-sm font-black uppercase [box-shadow:6px_6px_0_0_var(--primary)]">
            7 Fragen
            <br />
            ca. 4 Minuten
            <br />
            keine Datenübertragung
          </aside>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <WorkflowCheckForm check={check} />
      </section>

      <LegalFooter locale="de" />
    </main>
  );
}
