export type WorkflowQuestion = {
  label: string;
  text: string;
};

export type WorkflowCheck = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  questions: WorkflowQuestion[];
};

export const workflowChecks: WorkflowCheck[] = [
  {
    slug: "pumpenservice",
    title: "7-Punkte-Workflow-Check für Pumpenservice",
    headline: "Wo verliert Ihr Pumpenservice Informationen?",
    description:
      "Prüfen Sie sieben Übergaben zwischen Serviceanfrage, Einsatzplanung, Werkstatt oder Außendienst, Bericht und Rechnung.",
    questions: [
      {
        label: "Serviceanfrage",
        text: "Sind Pumpentyp, Typenschild, Fehlerbild, Standort und Dringlichkeit vor der Disposition vollständig erfasst?",
      },
      {
        label: "Anlagenhistorie",
        text: "Sind frühere Einsätze, Messwerte, Fotos und verbaute Teile ohne Suche in mehreren Systemen verfügbar?",
      },
      {
        label: "Arbeitsauftrag",
        text: "Entsteht aus der Anfrage ein eindeutiger Auftrag, ohne dieselben Angaben erneut zu übertragen?",
      },
      {
        label: "Technikerzugriff",
        text: "Hat der ausführende Techniker mobil Zugriff auf den aktuellen Auftrag und die relevanten Unterlagen?",
      },
      {
        label: "Leistungserfassung",
        text: "Werden Arbeitszeit, Material, Messwerte und Abweichungen direkt am Einsatz strukturiert erfasst?",
      },
      {
        label: "Bericht und Freigabe",
        text: "Ist nachvollziehbar, ob der Servicebericht vollständig, intern geprüft und kundenseitig freigegeben ist?",
      },
      {
        label: "Rechnungsübergabe",
        text: "Kann die Abrechnung ohne Rückfragen auf freigegebene Leistungs- und Materialdaten zugreifen?",
      },
    ],
  },
  {
    slug: "industriekaelte",
    title: "7-Punkte-Workflow-Check für Industriekälte",
    headline: "Wo verliert Ihr Kälteservice Informationen?",
    description:
      "Prüfen Sie sieben Übergaben zwischen Störungsmeldung, Disposition, Anlagendokumentation, Einsatzbericht und Rechnung.",
    questions: [
      {
        label: "Störungsmeldung",
        text: "Sind Anlage, Fehlerbild, Kältemittel, Standort, Ansprechpartner und Dringlichkeit vollständig erfasst?",
      },
      {
        label: "Anlagendokumentation",
        text: "Sind Historie, Wartungsstand, Schaltpläne und relevante Prüfunterlagen zentral verfügbar?",
      },
      {
        label: "Disposition",
        text: "Erhält der passende Techniker einen eindeutigen Auftrag ohne telefonische Mehrfachklärung?",
      },
      {
        label: "Technikerzugriff",
        text: "Sind aktuelle Anlagen- und Sicherheitsinformationen mobil am Einsatzort verfügbar?",
      },
      {
        label: "Einsatzdaten",
        text: "Werden Messwerte, Arbeiten, Material, Kältemittelbewegungen und Abweichungen strukturiert erfasst?",
      },
      {
        label: "Bericht und Nachweis",
        text: "Ist der Bericht vollständig und sind notwendige Prüf- oder Betreiber-Nachweise eindeutig zugeordnet?",
      },
      {
        label: "Abrechnung",
        text: "Kann die Rechnung ohne Rückfragen aus freigegebenen Einsatz- und Materialdaten vorbereitet werden?",
      },
    ],
  },
  {
    slug: "druckluftservice",
    title: "7-Punkte-Workflow-Check für Druckluftservice",
    headline: "Wo verliert Ihr Druckluftservice Informationen?",
    description:
      "Prüfen Sie sieben Übergaben zwischen Serviceanfrage, Anlagenhistorie, Einsatzdaten, Prüfungen und Rechnung.",
    questions: [
      {
        label: "Serviceanfrage",
        text: "Sind Anlage, Kompressortyp, Betriebsstunden, Fehlerbild, Standort und Dringlichkeit vollständig erfasst?",
      },
      {
        label: "Anlagenhistorie",
        text: "Sind Wartungsintervalle, frühere Messwerte, Leckagen und verbaute Teile zentral verfügbar?",
      },
      {
        label: "Arbeitsauftrag",
        text: "Wird aus Anfrage oder Wartungsplan ein eindeutiger Auftrag ohne Doppelerfassung erzeugt?",
      },
      {
        label: "Technikerzugriff",
        text: "Hat der Techniker mobil Zugriff auf Auftrag, Historie und relevante Prüfunterlagen?",
      },
      {
        label: "Leistung und Messung",
        text: "Werden Arbeitszeit, Material, Messwerte, Leckagen und Empfehlungen strukturiert erfasst?",
      },
      {
        label: "Bericht und Prüfung",
        text: "Sind Servicebericht, Prüfstatus und offene Maßnahmen eindeutig freigegeben und nachverfolgbar?",
      },
      {
        label: "Rechnungsübergabe",
        text: "Kann die Abrechnung freigegebene Leistungen und Materialien ohne Rückfragen übernehmen?",
      },
    ],
  },
];

export function getWorkflowCheck(slug: string) {
  return workflowChecks.find((check) => check.slug === slug);
}
