import type { Locale } from "./content";

export const legalContent = {
  en: {
    impressum: {
      metadata: ["Impressum | Talos AI", "Legal notice for Talos AI."],
      kicker: "Legal Notice",
      title: "Impressum",
      details: [
        ["Legal business name", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Legal form", "Sole proprietorship (Ατομική Επιχείρηση)"],
        ["Registered address", "R. Feraiou 45, Neapoli, Thessaloniki 56728, Greece"],
        ["Email", "legal@talosai.dev"],
        ["Data protection contact", "privacy@talosai.dev"],
        ["Greek tax ID (AFM)", "168920150"],
        ["GEMI number", "[Add Greek GEMI registration number if applicable]"],
        ["Responsible person", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Regulatory authority", "Not applicable"],
      ],
      note:
        "This page contains placeholders and must be completed with the correct company details before launch. It is intended as a technical structure for EU/Greece/Germany legal transparency requirements, not legal advice.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Privacy information for Talos AI."],
      kicker: "Data Protection",
      title: "Privacy Policy",
      sections: [
        ["Controller", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ, R. Feraiou 45, Neapoli, Thessaloniki 56728, Greece. Data protection contact: privacy@talosai.dev. This business is responsible for deciding how personal data submitted through this website is processed."],
        ["Data we collect", "When you book a strategic session, Google Calendar appointment scheduling collects the booking details and answers you submit in the booking flow. This website itself does not store a separate lead form submission."],
        ["Purpose and legal basis", "Booking data is used to arrange and prepare for a strategic session. The legal basis is pre-contractual steps and/or legitimate interest in responding to business enquiries."],
        ["Service providers", "Booking runs on Google Calendar appointment scheduling (Google Ireland Limited). Website hosting and cookieless traffic measurement are provided by Cloudflare, which processes the technical connection data required to serve the site."],
        ["Booking", "The booking calendar is a Google-hosted page embedded in this site. It is not loaded automatically: the booking section shows a placeholder until you explicitly choose to load it, so no request reaches Google on page view. Loading it transmits your IP address, browser user agent, and the requested URL to Google. You can instead open the booking page in a new tab. This site does not prefill or transmit separate on-site form data to Google."],
        ["Cookies and analytics", "This site sets no cookies of its own. Traffic is measured with Cloudflare Web Analytics, which records page views, referrer, approximate country, browser, and page-performance metrics without setting cookies and without storing any identifier on your device. If you choose to load the embedded booking calendar, Google sets its 'NID' cookie on the google.com domain, which Google uses for advertising and personalisation and which expires six months after last use. Because that cookie is only set after your explicit action, no non-essential cookie is placed without consent, so no separate cookie banner is used. To withdraw consent, delete Google cookies in your browser and do not load the embed again."],
        ["International transfers", "Google may transfer and process data outside the EEA, including in the United States. Google states that it relies on the European Commission's Standard Contractual Clauses and on the EU-US Data Privacy Framework for such transfers. Google's privacy policy and its data transfer frameworks page describe the current mechanism."],
        ["Retention", "Booking enquiries are retained for up to 24 months after the last contact and are then deleted, unless they become part of an active business relationship or longer retention is required for contracts, invoicing, tax, legal claims, or other legal obligations."],
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
        ["Rechtlicher Firmenname", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Rechtsform", "Einzelunternehmen (Ατομική Επιχείρηση)"],
        ["Geschäftsanschrift", "R. Feraiou 45, Neapoli, Thessaloniki 56728, Griechenland"],
        ["E-Mail", "legal@talosai.dev"],
        ["Datenschutzkontakt", "privacy@talosai.dev"],
        ["Griechische Steuernummer (AFM)", "168920150"],
        ["GEMI-Nummer", "[Griechische GEMI-Registrierungsnummer ergänzen, falls zutreffend]"],
        ["Verantwortliche Person", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Aufsichtsbehörde", "Nicht anwendbar"],
      ],
      note:
        "Diese Seite enthält Platzhalter und muss vor dem Launch mit den korrekten Unternehmensdaten vervollständigt werden. Sie ist eine technische Struktur für EU/Griechenland/Deutschland-Transparenzpflichten, keine Rechtsberatung.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Datenschutzinformationen für Talos AI."],
      kicker: "Datenschutz",
      title: "Privacy Policy",
      sections: [
        ["Verantwortlicher", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ, R. Feraiou 45, Neapoli, Thessaloniki 56728, Griechenland. Datenschutzkontakt: privacy@talosai.dev. Dieses Unternehmen entscheidet, wie personenbezogene Daten verarbeitet werden, die über diese Website eingereicht werden."],
        ["Daten, die wir erheben", "Wenn du eine strategische Session buchst, erhebt die Google Calendar Terminplanung die Buchungsdetails und Antworten, die du im Booking-Flow eingibst. Diese Website speichert keine separate Lead-Formular-Anfrage."],
        ["Zweck und Rechtsgrundlage", "Buchungsdaten werden verwendet, um eine strategische Session zu organisieren und vorzubereiten. Rechtsgrundlage sind vorvertragliche Maßnahmen und/oder berechtigtes Interesse an der Beantwortung von Geschäftsanfragen."],
        ["Dienstleister", "Buchungen laufen über die Google Calendar Terminplanung (Google Ireland Limited). Hosting und cookiefreie Zugriffsmessung erfolgen über Cloudflare, das die für die Auslieferung der Website technisch erforderlichen Verbindungsdaten verarbeitet."],
        ["Buchung", "Der Buchungskalender ist eine von Google gehostete Seite, die in diese Website eingebettet ist. Sie wird nicht automatisch geladen: der Buchungsbereich zeigt einen Platzhalter, bis du das Laden ausdrücklich auswählst, sodass beim Seitenaufruf keine Anfrage an Google geht. Beim Laden werden deine IP-Adresse, dein Browser-User-Agent und die aufgerufene URL an Google übertragen. Alternativ kannst du die Buchungsseite in einem neuen Tab öffnen. Diese Website füllt keine separaten Formulardaten vorab aus und überträgt sie nicht an Google."],
        ["Cookies und Analytics", "Diese Website setzt keine eigenen Cookies. Die Zugriffsmessung erfolgt mit Cloudflare Web Analytics, das Seitenaufrufe, Referrer, das ungefähre Land, den Browser und Performance-Metriken erfasst, ohne Cookies zu setzen und ohne eine Kennung auf deinem Gerät zu speichern. Wenn du den eingebetteten Buchungskalender lädst, setzt Google sein Cookie 'NID' auf der Domain google.com, das Google für Werbung und Personalisierung nutzt und das sechs Monate nach der letzten Nutzung abläuft. Da dieses Cookie erst nach deiner ausdrücklichen Handlung gesetzt wird, wird kein nicht notwendiges Cookie ohne Einwilligung gesetzt, daher wird kein separates Cookie-Banner verwendet. Zum Widerruf lösche die Google-Cookies in deinem Browser und lade die Einbettung nicht erneut."],
        ["Drittlandübermittlungen", "Google kann Daten außerhalb des EWR übertragen und verarbeiten, auch in den USA. Google gibt an, sich dabei auf die Standardvertragsklauseln der Europäischen Kommission und auf das EU-US Data Privacy Framework zu stützen. Den aktuellen Mechanismus beschreiben Googles Datenschutzerklärung und Googles Seite zu Datenübermittlungs-Frameworks."],
        ["Speicherdauer", "Buchungsanfragen werden bis zu 24 Monate nach dem letzten Kontakt gespeichert und anschließend gelöscht, sofern sie nicht Teil einer aktiven Geschäftsbeziehung werden oder eine längere Speicherung für Verträge, Rechnungsstellung, Steuern, Rechtsansprüche oder andere gesetzliche Pflichten erforderlich ist."],
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
        ["Νομικη επωνυμια", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Νομικη μορφη", "Ατομική Επιχείρηση"],
        ["Εδρα", "Ρ. Φεραίου 45, Νεάπολη Θεσσαλονίκης, Τ.Κ. 56728, Ελλάδα"],
        ["Email", "legal@talosai.dev"],
        ["Επικοινωνια για προσωπικα δεδομενα", "privacy@talosai.dev"],
        ["ΑΦΜ", "168920150"],
        ["Αριθμος ΓΕΜΗ", "[Προσθεσε αριθμο ΓΕΜΗ αν ισχυει]"],
        ["Υπευθυνο προσωπο", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Ρυθμιστικη αρχη", "Δεν εφαρμοζεται"],
      ],
      note:
        "Αυτη η σελιδα περιεχει placeholders και πρεπει να συμπληρωθει με τα σωστα εταιρικα στοιχεια πριν το launch. Ειναι τεχνικη δομη για απαιτησεις διαφανειας ΕΕ/Ελλαδας/Γερμανιας, οχι νομικη συμβουλη.",
    },
    privacy: {
      metadata: ["Privacy Policy | Talos AI", "Πληροφοριες απορρητου για την Talos AI."],
      kicker: "Προστασια δεδομενων",
      title: "Privacy Policy",
      sections: [
        ["Υπευθυνος επεξεργασιας", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ, Ρ. Φεραίου 45, Νεάπολη Θεσσαλονίκης, Τ.Κ. 56728, Ελλάδα. Επικοινωνια για θεματα προσωπικων δεδομενων: privacy@talosai.dev. Η επιχειρηση αποφασιζει πώς επεξεργαζονται τα προσωπικα δεδομενα που υποβαλλονται μεσω του site."],
        ["Δεδομενα που συλλεγουμε", "Οταν κλεινεις strategic session, το Google Calendar appointment scheduling συλλεγει τα booking details και τις απαντησεις που υποβαλλεις στο booking flow. Το website δεν αποθηκευει ξεχωριστο lead form submission."],
        ["Σκοπος και νομικη βαση", "Τα booking data χρησιμοποιουνται για οργανωση και προετοιμασια της strategic session. Η νομικη βαση ειναι προσυμβατικα βηματα και/ή εννομο συμφερον για απαντηση σε επαγγελματικα αιτηματα."],
        ["Παροχοι υπηρεσιων", "Το booking γινεται μεσω Google Calendar appointment scheduling (Google Ireland Limited). Το hosting και η μετρηση επισκεψιμοτητας χωρις cookies παρεχονται απο τη Cloudflare, που επεξεργαζεται τα τεχνικα δεδομενα συνδεσης που χρειαζονται για να σερβιριστει το site."],
        ["Booking", "Το booking calendar ειναι σελιδα που φιλοξενει η Google και ειναι embedded σε αυτο το site. Δεν φορτωνει αυτοματα: η ενοτητα booking δειχνει placeholder μεχρι να επιλεξεις ρητα να φορτωσει, ωστε με το ανοιγμα της σελιδας να μην φευγει καμια αιτηση προς την Google. Με το φορτωμα στελνονται στην Google η IP διευθυνση σου, ο user agent του browser και το URL. Εναλλακτικα μπορεις να ανοιξεις τη σελιδα booking σε νεο tab. Το site δεν κανει prefill και δεν μεταδιδει ξεχωριστα on-site form data στο Google."],
        ["Cookies και analytics", "Το site δεν βαζει δικα του cookies. Η μετρηση επισκεψιμοτητας γινεται με το Cloudflare Web Analytics, που καταγραφει page views, referrer, κατα προσεγγιση χωρα, browser και μετρικες performance, χωρις να βαζει cookies και χωρις να αποθηκευει καποιο identifier στη συσκευη σου. Αν επιλεξεις να φορτωσεις το embedded booking calendar, η Google βαζει το cookie 'NID' στο domain google.com, το οποιο χρησιμοποιει για διαφημιση και personalisation και ληγει εξι μηνες μετα την τελευταια χρηση. Επειδη μπαινει μονο μετα απο ρητη ενεργεια σου, δεν τοποθετειται μη απαραιτητο cookie χωρις συγκαταθεση, γι' αυτο δεν χρησιμοποιειται ξεχωριστο cookie banner. Για ανακληση, σβησε τα cookies της Google απο τον browser σου και μη φορτωσεις παλι το embed."],
        ["Μεταφορες εκτος ΕΟΧ", "Η Google μπορει να μεταφερει και να επεξεργαζεται δεδομενα εκτος ΕΟΧ, συμπεριλαμβανομενων των ΗΠΑ. Η Google αναφερει οτι βασιζεται στις Τυποποιημενες Συμβατικες Ρητρες της Ευρωπαϊκης Επιτροπης και στο EU-US Data Privacy Framework. Ο τρεχων μηχανισμος περιγραφεται στην πολιτικη απορρητου της Google και στη σελιδα της για τα data transfer frameworks."],
        ["Διατηρηση", "Τα αιτήματα κράτησης διατηρούνται για έως 24 μήνες μετά την τελευταία επικοινωνία και στη συνέχεια διαγράφονται, εκτός αν αποτελέσουν μέρος ενεργής επιχειρηματικής σχέσης ή απαιτείται μεγαλύτερη διατήρηση για συμβάσεις, τιμολόγηση, φορολογικές υποχρεώσεις, νομικές αξιώσεις ή άλλες νόμιμες υποχρεώσεις."],
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
