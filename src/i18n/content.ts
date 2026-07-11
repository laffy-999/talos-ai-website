export const locales = ["en", "de", "el"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  el: "EL",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  de: "de-DE",
  el: "el",
};

export function localePath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return cleanPath === "/" ? "/" : cleanPath;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export const dictionaries = {
  en: {
    meta: {
      title: "Talos AI | AI Automation Agency",
      description:
        "Talos AI builds automation systems for lead handling, customer support, internal tools, and operational workflows.",
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
    },
    solution: {
      kicker: "Solution",
      title: "Talos builds the automation layer between people, tools, and decisions.",
      blocks: [
        ["Find the leaks", "Slow follow-ups, manual data entry, busywork nobody has time for."],
        ["Fix it with AI", "We build a system around how your business actually runs."],
        ["Runs on its own", "Less busywork, fewer dropped balls, more time to grow."],
      ],
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
    },
    cta: {
      kicker: "Conversion block",
      title: "Book a strategic session",
      body: "Lets discover together your opportunities for applied autonomous systems.",
      bullets: ["No fake AI roadmap", "Concrete workflow target", "Convex-backed lead capture"],
      requestBooking: "Request booking",
      sending: "Sending",
      unconfigured: "Add NEXT_PUBLIC_CONVEX_URL by running Convex setup before accepting submissions.",
      failed: "Submission failed. Check Convex configuration and try again.",
      successKicker: "Request received",
      successTitle: "Now book your strategic session.",
      successBody:
        "Your request has been stored. Open the Cal.eu booking calendar to choose a time. No personal data is added to the booking URL.",
      openCalendar: "Open booking calendar",
      bookingMissing: "Add NEXT_PUBLIC_BOOKING_URL to enable the Cal.eu booking button.",
    },
    form: {
      name: "Name",
      email: "Business email",
      company: "Company",
      website: "Website",
      projectType: "Project type",
      timeline: "Timeline",
      goal: "Main goal",
      message: "Message",
      preferredContact: "Preferred contact",
      consentBefore:
        "I agree that Talos AI may process my submitted data to respond to my strategic session request. Details in",
      privacy: "Privacy",
      options: {
        projectTypes: ["Workflow automation", "AI support assistant", "Lead handling system", "Internal tool integration"],
        timelines: ["This month", "Next 60 days", "This quarter", "Exploring"],
        contacts: ["Email", "Video call", "Phone"],
      },
      errors: {
        name: "Name is required.",
        email: "Email is required.",
        invalidEmail: "Use a valid email.",
        company: "Company is required.",
        goal: "Main goal is required.",
        consent: "Consent is required.",
      },
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
      titleBefore: "Du bist der",
      highlight: "Bottleneck",
      note: "Jede manuelle Übergabe bremst Wachstum.",
      points: [
        "Stunden gehen für Aufgaben verloren, die Minuten dauern sollten",
        "Leads werden kalt, weil Follow-ups zu langsam sind",
        "Daten liegen in fünf Tools, die nicht miteinander sprechen",
      ],
    },
    solution: {
      kicker: "Lösung",
      title: "Talos baut die Automationsschicht zwischen Menschen, Tools und Entscheidungen.",
      blocks: [
        ["Leaks finden", "Langsame Follow-ups, manuelle Dateneingabe und Busywork, für die niemand Zeit hat."],
        ["Mit KI beheben", "Wir bauen ein System um die Art, wie dein Business wirklich arbeitet."],
        ["Läuft selbstständig", "Weniger Busywork, weniger verlorene Chancen, mehr Zeit für Wachstum."],
      ],
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
    },
    cta: {
      kicker: "Conversion Block",
      title: "Strategische Session buchen",
      body: "Lass uns gemeinsam deine Chancen für angewandte autonome Systeme entdecken.",
      bullets: ["Keine Fake-KI-Roadmap", "Konkretes Workflow-Ziel", "Convex-basierte Lead-Erfassung"],
      requestBooking: "Buchung anfragen",
      sending: "Senden",
      unconfigured: "Füge NEXT_PUBLIC_CONVEX_URL hinzu, bevor Anfragen angenommen werden.",
      failed: "Übermittlung fehlgeschlagen. Prüfe die Convex-Konfiguration und versuche es erneut.",
      successKicker: "Anfrage erhalten",
      successTitle: "Buche jetzt deine strategische Session.",
      successBody:
        "Deine Anfrage wurde gespeichert. Öffne den Cal.eu Kalender, um einen Termin auszuwählen. Es werden keine persönlichen Daten an die Booking-URL angehängt.",
      openCalendar: "Booking-Kalender öffnen",
      bookingMissing: "Füge NEXT_PUBLIC_BOOKING_URL hinzu, um den Cal.eu Booking-Button zu aktivieren.",
    },
    form: {
      name: "Name",
      email: "Business E-Mail",
      company: "Unternehmen",
      website: "Website",
      projectType: "Projektart",
      timeline: "Zeitrahmen",
      goal: "Hauptziel",
      message: "Nachricht",
      preferredContact: "Bevorzugter Kontakt",
      consentBefore:
        "Ich stimme zu, dass Talos AI meine eingereichten Daten verarbeitet, um auf meine Anfrage für eine strategische Session zu antworten. Details in der",
      privacy: "Privacy",
      options: {
        projectTypes: ["Workflow-Automation", "KI-Support-Assistent", "Lead-Handling-System", "Interne Tool-Integration"],
        timelines: ["Diesen Monat", "Nächste 60 Tage", "Dieses Quartal", "Erstmal sondieren"],
        contacts: ["E-Mail", "Video Call", "Telefon"],
      },
      errors: {
        name: "Name ist erforderlich.",
        email: "E-Mail ist erforderlich.",
        invalidEmail: "Bitte eine gültige E-Mail verwenden.",
        company: "Unternehmen ist erforderlich.",
        goal: "Hauptziel ist erforderlich.",
        consent: "Zustimmung ist erforderlich.",
      },
    },
    footer: {
      links: ["Impressum", "Privacy", "Terms"],
    },
  },
  el: {
    meta: {
      title: "Talos AI | AI Automation Agency",
      description:
        "Η Talos AI χτιζει συστηματα αυτοματισμου για leads, υποστηριξη πελατων, εσωτερικα εργαλεία και λειτουργικες ροες.",
    },
    nav: {
      problem: "Προβλημα",
      solution: "Λυση",
      proof: "Αποδειξη",
      book: "Κρατηση",
      inspect: "Δες το συστημα",
      bookAudit: "Κλεισε audit",
    },
    hero: {
      words: ["AI", "Agents", "χτισμενοι", "για"],
      highlight: "την επιχειρηση σου",
      subtitle: ["Αυτοματοποιησε", "επαναλαμβανομενες", "εργασιες", "και", "κλιμακωσε."],
      imageAlt: "Βιομηχανικη μηχανη εργοστασιου με γραναζια και σωληνωσεις",
      labels: ["Agentic Design", "System Thinking", "Automation Perfection"],
    },
    problem: {
      kicker: "Προβλημα",
      titleBefore: "Εσυ, κολλημενος ως",
      highlight: "bottleneck",
      note: "Καθε χειροκινητο handoff κοστιζει αναπτυξη.",
      points: [
        "Ωρες χανονται σε εργασιες που θα επρεπε να παιρνουν λεπτα",
        "Τα leads κρυωνουν απο αργο follow-up",
        "Τα δεδομενα ειναι σκορπισμενα σε πεντε εργαλεία που δεν μιλανε μεταξυ τους",
      ],
    },
    solution: {
      kicker: "Λυση",
      title: "Η Talos χτιζει το layer αυτοματισμου αναμεσα σε ανθρωπους, εργαλεία και αποφασεις.",
      blocks: [
        ["Βρισκουμε τις διαρροες", "Αργα follow-ups, χειροκινητη εισαγωγη δεδομενων και busywork που κανεις δεν προλαβαινει."],
        ["Το λυνουμε με AI", "Χτιζουμε συστημα γυρω απο τον τροπο που λειτουργει πραγματικα η επιχειρηση σου."],
        ["Τρεχει μονο του", "Λιγοτερη χειροκινητη δουλεια, λιγοτερες χαμενες ευκαιριες, περισσοτερος χρονος για αναπτυξη."],
      ],
    },
    proof: {
      kicker: "Αποδειξη",
      title: "Μια πρακτικη διαδικασια παραδοσης, βασισμενη σε πραγματικα λειτουργικα δεδομενα.",
      cards: [
        ["01", "Audit", "Βρισκουμε πρωτα τα bottlenecks που αξιζει πραγματικα να αυτοματοποιηθουν."],
        ["02", "Workflow Map", "Οριζουμε inputs, εγκρισεις, edge cases και σημεια ανθρωπινης παρεμβασης."],
        ["03", "Prototype", "Παραδιδουμε γρηγορα χρησιμο automation και το δοκιμαζουμε σε πραγματικη δουλεια."],
        ["04", "Deploy", "Παρακολουθουμε, βελτιωνουμε και τεκμηριωνουμε το συστημα για επαναληψιμη χρηση."],
      ],
    },
    cta: {
      kicker: "Conversion block",
      title: "Κλεισε Strategic Session",
      body: "Ας ανακαλυψουμε μαζι τις ευκαιριες σου για εφαρμοσμενα autonomous systems.",
      bullets: ["Οχι fake AI roadmap", "Συγκεκριμενος workflow στοχος", "Convex-backed lead capture"],
      requestBooking: "Αιτημα κρατησης",
      sending: "Αποστολη",
      unconfigured: "Προσθεσε NEXT_PUBLIC_CONVEX_URL πριν δεχτεις submissions.",
      failed: "Η υποβολη απετυχε. Ελεγξε το Convex configuration και δοκιμασε ξανα.",
      successKicker: "Το αιτημα εληφθη",
      successTitle: "Τωρα κλεισε τη strategic session.",
      successBody:
        "Το αιτημα σου αποθηκευτηκε. Ανοιξε το Cal.eu booking calendar για να διαλεξεις ωρα. Δεν προστιθενται προσωπικα δεδομενα στο booking URL.",
      openCalendar: "Ανοιγμα booking calendar",
      bookingMissing: "Προσθεσε NEXT_PUBLIC_BOOKING_URL για να ενεργοποιηθει το Cal.eu booking button.",
    },
    form: {
      name: "Ονομα",
      email: "Business email",
      company: "Εταιρεια",
      website: "Website",
      projectType: "Τυπος project",
      timeline: "Χρονοδιαγραμμα",
      goal: "Κυριος στοχος",
      message: "Μηνυμα",
      preferredContact: "Προτιμωμενη επικοινωνια",
      consentBefore:
        "Συμφωνω οτι η Talos AI μπορει να επεξεργαστει τα δεδομενα μου για να απαντησει στο αιτημα strategic session. Λεπτομερειες στο",
      privacy: "Privacy",
      options: {
        projectTypes: ["Workflow automation", "AI support assistant", "Lead handling system", "Internal tool integration"],
        timelines: ["Αυτον τον μηνα", "Επομενες 60 ημερες", "Αυτο το τριμηνο", "Διερευνηση"],
        contacts: ["Email", "Video call", "Τηλεφωνο"],
      },
      errors: {
        name: "Το ονομα ειναι υποχρεωτικο.",
        email: "Το email ειναι υποχρεωτικο.",
        invalidEmail: "Χρησιμοποιησε εγκυρο email.",
        company: "Η εταιρεια ειναι υποχρεωτικη.",
        goal: "Ο κυριος στοχος ειναι υποχρεωτικος.",
        consent: "Η συγκαταθεση ειναι υποχρεωτικη.",
      },
    },
    footer: {
      links: ["Impressum", "Privacy", "Terms"],
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
