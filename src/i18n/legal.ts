import type { Locale } from "./content";

export const legalContent = {
  en: {
    impressum: {
      metadata: ["Impressum | Talos AI", "Legal notice for Talos AI."],
      kicker: "Legal Notice",
      title: "Impressum",
      details: [
        ["Legal business name", "[Add registered legal name]"],
        ["Legal form", "[Add legal form, e.g. sole trader / I.K.E. / company type]"],
        ["Registered address", "[Add full registered business address]"],
        ["Email", "[Add business email]"],
        ["Phone", "[Add phone or direct contact method]"],
        ["VAT / Tax ID", "[Add VAT or Greek tax ID if applicable]"],
        ["GEMI number", "[Add Greek GEMI registration number if applicable]"],
        ["Responsible person", "[Add person responsible for website content]"],
        ["Regulatory authority", "[Add only if your activity is regulated]"],
      ],
      note:
        "This page contains placeholders and must be completed with the correct company details before launch. It is intended as a technical structure for EU/Greece/Germany legal transparency requirements, not legal advice.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Privacy information for Talos AI."],
      kicker: "Data Protection",
      title: "Privacy Policy",
      sections: [
        ["Controller", "[Add legal business name, address, and contact email]. This business is responsible for deciding how personal data submitted through this website is processed."],
        ["Data we collect", "When you request a strategic session, we collect the details you submit: name, business email, company, website, project type, goal, timeline, preferred contact method, and message."],
        ["Purpose and legal basis", "We process this data to respond to your request, assess whether we can help, and arrange a strategic session. The legal basis is pre-contractual steps and/or legitimate interest in responding to business enquiries."],
        ["Processors", "Lead submissions are stored in Convex. Booking may be handled by Cal.eu / EU-hosted Cal via the configured booking link. Hosting and infrastructure providers may process technical data required to operate the site."],
        ["Booking", "After submitting the form, users may open the external booking calendar. This site does not send name, email, company, or lead id to the booking URL."],
        ["Cookies and analytics", "No analytics, marketing pixels, or non-essential tracking cookies are currently used. A cookie banner is not implemented because this phase does not introduce non-essential cookies."],
        ["Retention", "[Add retention period]. As a default operational policy, keep lead enquiries only as long as needed to respond, manage the business relationship, or meet legal obligations."],
        ["Your rights", "Under GDPR, you may request access, correction, deletion, restriction, portability, or object to processing where applicable. You may also lodge a complaint with the Hellenic Data Protection Authority or your local supervisory authority."],
      ],
      note:
        "This policy contains placeholders and should be reviewed with final business details before launch. It is a practical technical draft, not legal advice.",
    },
    terms: {
      metadata: ["Terms | Talos AI", "B2B service terms placeholder for Talos AI."],
      kicker: "Service Terms",
      title: "Terms",
      sections: [
        ["Scope", "Talos AI provides AI automation strategy, workflow analysis, implementation, and related consulting services for business customers."],
        ["Strategic sessions", "A strategic session is an exploratory business conversation. It does not guarantee a specific technical, financial, or operational outcome."],
        ["B2B focus", "The website and services are intended for business enquiries. Consumer-facing service terms should be reviewed separately if consumer services are offered."],
        ["Bookings and cancellation", "[Add booking, rescheduling, cancellation, and no-show rules before launch.]"],
        ["Fees and payment", "[Add pricing, payment terms, invoicing, taxes, and late-payment rules if paid services are sold through or after the website.]"],
        ["Liability", "[Add limitation of liability language appropriate to your legal entity and jurisdiction.]"],
        ["Governing law", "[Add governing law and court jurisdiction, e.g. Greece, after legal review.]"],
      ],
      note:
        "These terms are placeholders for technical launch structure and should be completed and reviewed before paid services are offered.",
    },
  },
  de: {
    impressum: {
      metadata: ["Impressum | Talos AI", "Rechtliche Anbieterkennzeichnung für Talos AI."],
      kicker: "Anbieterkennzeichnung",
      title: "Impressum",
      details: [
        ["Rechtlicher Firmenname", "[Eingetragenen rechtlichen Namen ergänzen]"],
        ["Rechtsform", "[Rechtsform ergänzen, z.B. Einzelunternehmer / I.K.E. / Gesellschaftsform]"],
        ["Geschäftsanschrift", "[Vollständige registrierte Geschäftsadresse ergänzen]"],
        ["E-Mail", "[Geschäftliche E-Mail ergänzen]"],
        ["Telefon", "[Telefon oder direkte Kontaktmöglichkeit ergänzen]"],
        ["USt-ID / Steuernummer", "[USt-ID oder griechische Steuernummer ergänzen, falls zutreffend]"],
        ["GEMI-Nummer", "[Griechische GEMI-Registrierungsnummer ergänzen, falls zutreffend]"],
        ["Verantwortliche Person", "[Für den Website-Inhalt verantwortliche Person ergänzen]"],
        ["Aufsichtsbehörde", "[Nur ergänzen, falls die Tätigkeit reguliert ist]"],
      ],
      note:
        "Diese Seite enthält Platzhalter und muss vor dem Launch mit den korrekten Unternehmensdaten vervollständigt werden. Sie ist eine technische Struktur für EU/Griechenland/Deutschland-Transparenzpflichten, keine Rechtsberatung.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Datenschutzinformationen für Talos AI."],
      kicker: "Datenschutz",
      title: "Privacy Policy",
      sections: [
        ["Verantwortlicher", "[Rechtlichen Firmennamen, Adresse und Kontakt-E-Mail ergänzen]. Dieses Unternehmen entscheidet, wie personenbezogene Daten verarbeitet werden, die über diese Website eingereicht werden."],
        ["Daten, die wir erheben", "Wenn du eine strategische Session anfragst, erheben wir die von dir eingegebenen Daten: Name, Business-E-Mail, Unternehmen, Website, Projektart, Ziel, Zeitrahmen, bevorzugte Kontaktmethode und Nachricht."],
        ["Zweck und Rechtsgrundlage", "Wir verarbeiten diese Daten, um deine Anfrage zu beantworten, zu prüfen, ob wir helfen können, und eine strategische Session zu organisieren. Rechtsgrundlage sind vorvertragliche Maßnahmen und/oder berechtigtes Interesse an der Beantwortung von Geschäftsanfragen."],
        ["Auftragsverarbeiter", "Lead-Anfragen werden in Convex gespeichert. Buchungen können über Cal.eu / EU-gehostetes Cal über den konfigurierten Booking-Link erfolgen. Hosting- und Infrastruktur-Anbieter können technische Daten verarbeiten, die für den Betrieb der Website erforderlich sind."],
        ["Buchung", "Nach Absenden des Formulars können Nutzer den externen Booking-Kalender öffnen. Diese Website sendet keinen Namen, keine E-Mail, kein Unternehmen und keine Lead-ID an die Booking-URL."],
        ["Cookies und Analytics", "Derzeit werden keine Analytics, Marketing-Pixel oder nicht notwendigen Tracking-Cookies genutzt. Ein Cookie-Banner ist nicht implementiert, weil diese Phase keine nicht notwendigen Cookies einführt."],
        ["Speicherdauer", "[Speicherdauer ergänzen]. Als operative Standardregel werden Lead-Anfragen nur so lange aufbewahrt, wie es für Antwort, Geschäftsbeziehung oder rechtliche Pflichten erforderlich ist."],
        ["Deine Rechte", "Nach DSGVO kannst du Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder Widerspruch verlangen, soweit anwendbar. Du kannst dich außerdem bei der griechischen Datenschutzbehörde oder deiner lokalen Aufsichtsbehörde beschweren."],
      ],
      note:
        "Diese Policy enthält Platzhalter und sollte vor dem Launch mit finalen Unternehmensdaten geprüft werden. Sie ist ein praktischer technischer Entwurf, keine Rechtsberatung.",
    },
    terms: {
      metadata: ["Terms | Talos AI", "B2B-Servicebedingungen Platzhalter für Talos AI."],
      kicker: "Service Terms",
      title: "Terms",
      sections: [
        ["Leistungsumfang", "Talos AI bietet KI-Automationsstrategie, Workflow-Analyse, Implementierung und verwandte Beratungsleistungen für Geschäftskunden."],
        ["Strategische Sessions", "Eine strategische Session ist ein exploratives Geschäftsgespräch. Sie garantiert kein bestimmtes technisches, finanzielles oder operatives Ergebnis."],
        ["B2B-Fokus", "Die Website und Services richten sich an Geschäftsanfragen. Bedingungen für Verbraucher sollten separat geprüft werden, falls Verbraucherservices angeboten werden."],
        ["Buchung und Stornierung", "[Regeln für Buchung, Verschiebung, Stornierung und No-Show vor Launch ergänzen.]"],
        ["Gebühren und Zahlung", "[Preise, Zahlungsbedingungen, Rechnungsstellung, Steuern und Zahlungsverzug ergänzen, falls bezahlte Services über oder nach der Website verkauft werden.]"],
        ["Haftung", "[Haftungsbegrenzung passend zu Rechtsform und Jurisdiktion ergänzen.]"],
        ["Anwendbares Recht", "[Anwendbares Recht und Gerichtsstand, z.B. Griechenland, nach rechtlicher Prüfung ergänzen.]"],
      ],
      note:
        "Diese Terms sind Platzhalter für die technische Launch-Struktur und sollten vor dem Angebot bezahlter Services vervollständigt und geprüft werden.",
    },
  },
  el: {
    impressum: {
      metadata: ["Impressum | Talos AI", "Νομικη γνωστοποιηση για την Talos AI."],
      kicker: "Νομικη γνωστοποιηση",
      title: "Impressum",
      details: [
        ["Νομικη επωνυμια", "[Προσθεσε την επισημη νομικη επωνυμια]"],
        ["Νομικη μορφη", "[Προσθεσε νομικη μορφη, π.χ. ατομικη επιχειρηση / Ι.Κ.Ε. / εταιρικη μορφη]"],
        ["Εδρα", "[Προσθεσε πληρη καταχωρημενη επαγγελματικη διευθυνση]"],
        ["Email", "[Προσθεσε επαγγελματικο email]"],
        ["Τηλεφωνο", "[Προσθεσε τηλεφωνο ή αμεσο τροπο επικοινωνιας]"],
        ["ΑΦΜ / VAT ID", "[Προσθεσε ΑΦΜ ή VAT ID αν ισχυει]"],
        ["Αριθμος ΓΕΜΗ", "[Προσθεσε αριθμο ΓΕΜΗ αν ισχυει]"],
        ["Υπευθυνο προσωπο", "[Προσθεσε υπευθυνο για το περιεχομενο του site]"],
        ["Ρυθμιστικη αρχη", "[Προσθεσε μονο αν η δραστηριοτητα ρυθμιζεται]"],
      ],
      note:
        "Αυτη η σελιδα περιεχει placeholders και πρεπει να συμπληρωθει με τα σωστα εταιρικα στοιχεια πριν το launch. Ειναι τεχνικη δομη για απαιτησεις διαφανειας ΕΕ/Ελλαδας/Γερμανιας, οχι νομικη συμβουλη.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Πληροφοριες απορρητου για την Talos AI."],
      kicker: "Προστασια δεδομενων",
      title: "Privacy Policy",
      sections: [
        ["Υπευθυνος επεξεργασιας", "[Προσθεσε νομικη επωνυμια, διευθυνση και email επικοινωνιας]. Αυτη η επιχειρηση αποφασιζει πώς επεξεργαζονται τα προσωπικα δεδομενα που υποβαλλονται μεσω του site."],
        ["Δεδομενα που συλλεγουμε", "Οταν ζητας strategic session, συλλεγουμε τα στοιχεια που υποβαλλεις: ονομα, business email, εταιρεια, website, τυπο project, στοχο, χρονοδιαγραμμα, προτιμωμενο τροπο επικοινωνιας και μηνυμα."],
        ["Σκοπος και νομικη βαση", "Επεξεργαζομαστε αυτα τα δεδομενα για να απαντησουμε στο αιτημα σου, να αξιολογησουμε αν μπορουμε να βοηθησουμε και να οργανωσουμε strategic session. Η νομικη βαση ειναι προσυμβατικα βηματα και/ή εννομο συμφερον για απαντηση σε επαγγελματικα αιτηματα."],
        ["Εκτελουντες επεξεργασια", "Τα lead submissions αποθηκευονται στο Convex. Η κρατηση μπορει να γινει με Cal.eu / EU-hosted Cal μεσω του configured booking link. Παροχοι hosting και infrastructure μπορει να επεξεργαζονται τεχνικα δεδομενα απαραιτητα για τη λειτουργια του site."],
        ["Booking", "Μετα την υποβολη της φορμας, οι χρηστες μπορουν να ανοιξουν το εξωτερικο booking calendar. Το site δεν στελνει ονομα, email, εταιρεια ή lead id στο booking URL."],
        ["Cookies και analytics", "Δεν χρησιμοποιουνται analytics, marketing pixels ή μη απαραιτητα tracking cookies. Δεν εχει υλοποιηθει cookie banner επειδη αυτη η φαση δεν εισαγει μη απαραιτητα cookies."],
        ["Διατηρηση", "[Προσθεσε περιοδο διατηρησης]. Ως default operational policy, κραταμε lead enquiries μονο οσο χρειαζεται για απαντηση, διαχειριση επιχειρηματικης σχεσης ή νομικες υποχρεωσεις."],
        ["Τα δικαιωματα σου", "Συμφωνα με το GDPR μπορεις να ζητησεις προσβαση, διορθωση, διαγραφη, περιορισμο, φορητοτητα ή αντιρρηση οπου ισχυει. Μπορεις επισης να υποβαλεις καταγγελια στην Ελληνικη Αρχη Προστασιας Δεδομενων ή στην τοπικη εποπτικη αρχη σου."],
      ],
      note:
        "Αυτη η policy περιεχει placeholders και πρεπει να ελεγχθει με τα τελικα εταιρικα στοιχεια πριν το launch. Ειναι πρακτικο τεχνικο draft, οχι νομικη συμβουλη.",
    },
    terms: {
      metadata: ["Terms | Talos AI", "Placeholder B2B ορων υπηρεσιων για την Talos AI."],
      kicker: "Service Terms",
      title: "Terms",
      sections: [
        ["Πεδιο εφαρμογης", "Η Talos AI παρεχει στρατηγικη AI automation, workflow analysis, implementation και σχετικες συμβουλευτικες υπηρεσιες για επιχειρηματικους πελατες."],
        ["Strategic sessions", "Μια strategic session ειναι διερευνητικη επαγγελματικη συζητηση. Δεν εγγυαται συγκεκριμενο τεχνικο, οικονομικο ή λειτουργικο αποτελεσμα."],
        ["B2B focus", "Το website και οι υπηρεσιες προοριζονται για επιχειρηματικα αιτηματα. Οροι για καταναλωτες πρεπει να ελεγχθουν ξεχωριστα αν προσφερθουν consumer services."],
        ["Bookings και ακυρωση", "[Προσθεσε κανονες booking, rescheduling, cancellation και no-show πριν το launch.]"],
        ["Χρεωσεις και πληρωμη", "[Προσθεσε pricing, payment terms, invoicing, taxes και late-payment rules αν πωλουνται paid services μεσω ή μετα το website.]"],
        ["Ευθυνη", "[Προσθεσε περιορισμο ευθυνης καταλληλο για τη νομικη οντοτητα και δικαιοδοσια σου.]"],
        ["Εφαρμοστεο δικαιο", "[Προσθεσε εφαρμοστεο δικαιο και δικαιοδοσια, π.χ. Ελλαδα, μετα απο νομικο ελεγχο.]"],
      ],
      note:
        "Αυτοι οι οροι ειναι placeholders για τεχνικη launch structure και πρεπει να συμπληρωθουν και να ελεγχθουν πριν προσφερθουν paid services.",
    },
  },
} satisfies Record<Locale, unknown>;
