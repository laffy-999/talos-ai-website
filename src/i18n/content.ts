import type { Locale } from "./locales";

export type Dictionary = {
  meta: { title: string; description: string };
  a11y: { skipToContent: string; primaryNav: string; languageNav: string; legalNav: string };
  nav: {
    problem: string;
    solution: string;
    proof: string;
    book: string;
    inspect: string;
    bookAudit: string;
  };
  hero: {
    words: string[];
    highlight: string;
    subtitle: string[];
    imageAlt: string;
    labels: string[];
  };
  problem: {
    kicker: string;
    titleBefore: string;
    highlight: string;
    note: string;
    points: string[];
    imageAlt: string;
  };
  solution: {
    kicker: string;
    title: string;
    blocks: [string, string][];
    imageAlt: string;
  };
  proof: {
    kicker: string;
    title: string;
    cards: [string, string, string][];
    imageAlt: string;
  };
  cta: {
    kicker: string;
    title: string;
    body: string;
    bullets: string[];
    bookingKicker: string;
    bookingTitle: string;
    bookingBody: string;
    openCalendar: string;
    bookingMissing: string;
  };
  footer: { links: [string, string, string] };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Talos AI | AI Automation Agency",
      description:
        "Talos AI builds automation systems for lead handling, customer support, internal tools, and operational workflows.",
    },
    a11y: {
      skipToContent: "Skip to content",
      primaryNav: "Sections",
      languageNav: "Language",
      legalNav: "Legal",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      proof: "Proof",
      book: "Book",
      inspect: "Inspect the system",
      bookAudit: "Book a strategic session",
    },
    hero: {
      words: ["AI", "Agents", "built", "for"],
      highlight: "your business",
      subtitle: ["Automate", "repetitive", "business", "tasks", "and", "scale."],
      imageAlt: "Industrial factory machine with gear train and pipework",
      labels: ["Agentic Design", "System Thinking", "Automation Perfection"],
    },
    problem: {
      kicker: "Problem",
      titleBefore: "You, stuck being the",
      highlight: "bottleneck",
      note: "Every manual handoff taxes growth.",
      points: [
        "Hours lost to tasks that should take minutes",
        "Leads going cold from slow follow-up",
        "Data scattered across five tools that don't talk to each other",
      ],
      imageAlt: "Industrial machine throttled to a narrow bottleneck",
    },
    solution: {
      kicker: "Solution",
      title: "Talos builds the automation layer between people, tools, and decisions.",
      blocks: [
        ["Find the leaks", "Slow follow-ups, manual data entry, busywork nobody has time for."],
        ["Fix it with AI", "We build a system around how your business actually runs."],
        ["Runs on its own", "Less busywork, fewer dropped balls, more time to grow."],
      ],
      imageAlt: "Automation system connecting operational workflows",
    },
    proof: {
      kicker: "Proof",
      title: "A practical delivery path, built around real operational evidence.",
      cards: [
        ["01", "Audit", "Find the operational bottlenecks worth automating first."],
        ["02", "Workflow Map", "Define inputs, approvals, edge cases, and human fallback points."],
        ["03", "Prototype", "Ship a usable automation quickly and test against real work."],
        ["04", "Deploy", "Monitor, refine, and document the system for repeatable use."],
      ],
      imageAlt: "Automation process engine running end to end",
    },
    cta: {
      kicker: "Next step",
      title: "Book a strategic session",
      body: "Let's discover together your opportunities for applied autonomous systems.",
      bullets: ["No fake AI roadmap", "Concrete workflow target", "Google Calendar booking"],
      bookingKicker: "Calendar ready",
      bookingTitle: "Choose your time.",
      bookingBody:
        "Pick a strategic session slot in the calendar below. Booking details and qualification questions are handled directly by Google Calendar.",
      openCalendar: "Open booking calendar",
      bookingMissing: "Add NEXT_PUBLIC_BOOKING_URL to enable the Google Calendar booking page.",
    },
    footer: {
      links: ["Impressum", "Privacy", "Terms"],
    },
  },
  de: {
    meta: {
      title: "Talos AI | Agentur für KI-Automation",
      description:
        "Talos AI baut Automationssysteme für Lead-Bearbeitung, Kundensupport, interne Tools und operative Workflows.",
    },
    a11y: {
      skipToContent: "Zum Inhalt springen",
      primaryNav: "Abschnitte",
      languageNav: "Sprache",
      legalNav: "Rechtliches",
    },
    nav: {
      problem: "Problem",
      solution: "Lösung",
      proof: "Nachweis",
      book: "Buchen",
      inspect: "System ansehen",
      bookAudit: "Strategische Session buchen",
    },
    hero: {
      words: ["KI", "Agenten", "gebaut", "für"],
      highlight: "dein Unternehmen",
      subtitle: ["Automatisiere", "wiederkehrende", "Unternehmensaufgaben", "und", "skaliere."],
      imageAlt: "Industrielle Fabrikmaschine mit Zahnradgetriebe und Rohrsystem",
      labels: ["Agentic Design", "Systemdenken", "Automation Perfektion"],
    },
    problem: {
      kicker: "Problem",
      titleBefore: "Manuelle Arbeit",
      highlight: "bremst Wachstum",
      note: "Jede manuelle Übergabe bremst Wachstum.",
      points: [
        "Stunden gehen für Aufgaben verloren, die Minuten dauern sollten",
        "Leads werden kalt, weil Follow-ups zu langsam sind",
        "Daten liegen in fünf Tools, die nicht miteinander sprechen",
      ],
      imageAlt: "Industriemaschine, die sich zu einem engen Nadelöhr verjüngt",
    },
    solution: {
      kicker: "Lösung",
      title: "Talos baut die Automationsschicht zwischen Menschen, Tools und Entscheidungen.",
      blocks: [
        ["Leaks finden", "Langsame Follow-ups, manuelle Dateneingabe und Busywork, für die niemand Zeit hat."],
        ["Mit KI beheben", "Wir bauen ein System um die Art, wie dein Business wirklich arbeitet."],
        ["Läuft selbstständig", "Weniger Busywork, weniger verlorene Chancen, mehr Zeit für Wachstum."],
      ],
      imageAlt: "Automationssystem, das operative Workflows verbindet",
    },
    proof: {
      kicker: "Nachweis",
      title: "Ein praktischer Lieferprozess, gebaut auf echten operativen Erkenntnissen.",
      cards: [
        ["01", "Audit", "Wir finden zuerst die operativen Engpässe, die Automation wirklich wert sind."],
        ["02", "Workflow Map", "Inputs, Freigaben, Sonderfälle und menschliche Fallbacks werden definiert."],
        ["03", "Prototyp", "Eine nutzbare Automation wird schnell gebaut und gegen echte Arbeit getestet."],
        ["04", "Deployment", "Das System wird überwacht, verbessert und für wiederholbare Nutzung dokumentiert."],
      ],
      imageAlt: "Automationsprozess, der durchgehend läuft",
    },
    cta: {
      kicker: "Nächster Schritt",
      title: "Strategische Session buchen",
      body: "Lass uns gemeinsam deine Chancen für angewandte autonome Systeme entdecken.",
      bullets: ["Keine Fake-KI-Roadmap", "Konkretes Workflow-Ziel", "Buchung über Google Calendar"],
      bookingKicker: "Kalender bereit",
      bookingTitle: "Wähle deinen Termin.",
      bookingBody:
        "Wähle unten im Kalender einen Slot für die strategische Session. Buchungsdetails und Qualifizierungsfragen werden direkt von Google Calendar verarbeitet.",
      openCalendar: "Booking-Kalender öffnen",
      bookingMissing: "Füge NEXT_PUBLIC_BOOKING_URL hinzu, um die Google Calendar Buchungsseite zu aktivieren.",
    },
    footer: {
      links: ["Impressum", "Datenschutz", "Nutzungsbedingungen"],
    },
  },
  el: {
    meta: {
      title: "Talos AI | AI Automation Agency",
      description:
        "Η Talos AI χτίζει συστήματα αυτοματισμού για leads, υποστήριξη πελατών, εσωτερικά εργαλεία και λειτουργικές ροές.",
    },
    a11y: {
      skipToContent: "Μετάβαση στο περιεχόμενο",
      primaryNav: "Ενότητες",
      languageNav: "Γλώσσα",
      legalNav: "Νομικά",
    },
    nav: {
      problem: "Πρόβλημα",
      solution: "Λύση",
      proof: "Απόδειξη",
      book: "Κράτηση",
      inspect: "Δες το σύστημα",
      bookAudit: "Κλείσε audit",
    },
    hero: {
      words: ["AI", "Agents", "χτισμένοι", "για"],
      highlight: "την επιχείρηση σου",
      subtitle: ["Αυτοματοποίησε", "επαναλαμβανόμενες", "εργασίες", "και", "κλιμάκωσε."],
      imageAlt: "Βιομηχανική μηχανή εργοστασίου με γρανάζια και σωληνώσεις",
      labels: ["Agentic Design", "System Thinking", "Automation Perfection"],
    },
    problem: {
      kicker: "Πρόβλημα",
      titleBefore: "Εσύ, κολλημένος ως",
      highlight: "bottleneck",
      note: "Κάθε χειροκίνητο handoff κοστίζει ανάπτυξη.",
      points: [
        "Ώρες χάνονται σε εργασίες που θα έπρεπε να παίρνουν λεπτά",
        "Τα leads κρυώνουν από αργό follow-up",
        "Τα δεδομένα είναι σκορπισμένα σε πέντε εργαλεία που δεν μιλάνε μεταξύ τους",
      ],
      imageAlt: "Βιομηχανική μηχανή που στενεύει σε ένα σημείο συμφόρησης",
    },
    solution: {
      kicker: "Λύση",
      title: "Η Talos χτίζει το layer αυτοματισμού ανάμεσα σε ανθρώπους, εργαλεία και αποφάσεις.",
      blocks: [
        ["Βρίσκουμε τις διαρροές", "Αργά follow-ups, χειροκίνητη εισαγωγή δεδομένων και busywork που κανείς δεν προλαβαίνει."],
        ["Το λύνουμε με AI", "Χτίζουμε σύστημα γύρω από τον τρόπο που λειτουργεί πραγματικά η επιχείρηση σου."],
        ["Τρέχει μόνο του", "Λιγότερη χειροκίνητη δουλειά, λιγότερες χαμένες ευκαιρίες, περισσότερος χρόνος για ανάπτυξη."],
      ],
      imageAlt: "Σύστημα αυτοματισμού που συνδέει λειτουργικές ροές",
    },
    proof: {
      kicker: "Απόδειξη",
      title: "Μια πρακτική διαδικασία παράδοσης, βασισμένη σε πραγματικά λειτουργικά δεδομένα.",
      cards: [
        ["01", "Audit", "Βρίσκουμε πρώτα τα bottlenecks που αξίζει πραγματικά να αυτοματοποιηθούν."],
        ["02", "Workflow Map", "Ορίζουμε inputs, εγκρίσεις, edge cases και σημεία ανθρώπινης παρέμβασης."],
        ["03", "Prototype", "Παραδίδουμε γρήγορα χρήσιμο automation και το δοκιμάζουμε σε πραγματική δουλειά."],
        ["04", "Deploy", "Παρακολουθούμε, βελτιώνουμε και τεκμηριώνουμε το σύστημα για επαναλήψιμη χρήση."],
      ],
      imageAlt: "Μηχανή διαδικασιών αυτοματισμού σε συνεχή λειτουργία",
    },
    cta: {
      kicker: "Επόμενο βήμα",
      title: "Κλείσε Strategic Session",
      body: "Ας ανακαλύψουμε μαζί τις ευκαιρίες σου για εφαρμοσμένα autonomous systems.",
      bullets: ["Όχι fake AI roadmap", "Συγκεκριμένος workflow στόχος", "Booking με Google Calendar"],
      bookingKicker: "Calendar ready",
      bookingTitle: "Διάλεξε την ώρα σου.",
      bookingBody:
        "Διάλεξε παρακάτω στο calendar ένα slot για strategic session. Τα booking details και τα qualification questions τα χειρίζεται απευθείας το Google Calendar.",
      openCalendar: "Άνοιγμα booking calendar",
      bookingMissing: "Πρόσθεσε NEXT_PUBLIC_BOOKING_URL για να ενεργοποιηθεί η σελίδα booking του Google Calendar.",
    },
    footer: {
      links: ["Impressum", "Πολιτική απορρήτου", "Όροι χρήσης"],
    },
  },
};
