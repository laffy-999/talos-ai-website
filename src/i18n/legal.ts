import type { Locale } from "./locales";

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
        ["Booking", "The booking calendar is a Google-hosted page embedded in this site. It loads together with the booking section, so visiting the page transmits your IP address, browser user agent, and the requested URL to Google. You can also open the booking page in a new tab. This site does not prefill or transmit separate on-site form data to Google."],
        ["Cookies and analytics", "This site sets no cookies of its own. Traffic is measured with Cloudflare Web Analytics, which records page views, referrer, approximate country, browser, and page-performance metrics without setting cookies and without storing any identifier on your device. The embedded Google booking calendar causes Google to set its 'NID' cookie on the google.com domain, which Google uses for advertising and personalisation and which expires six months after last use. That cookie is set when the booking calendar loads as part of the page. To remove it, delete Google cookies in your browser."],
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
      metadata: ["Datenschutzerklärung | Talos AI", "Datenschutzinformationen für Talos AI."],
      kicker: "Datenschutz",
      title: "Datenschutzerklärung",
      sections: [
        ["Verantwortlicher", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ, R. Feraiou 45, Neapoli, Thessaloniki 56728, Griechenland. Datenschutzkontakt: privacy@talosai.dev. Dieses Unternehmen entscheidet, wie personenbezogene Daten verarbeitet werden, die über diese Website eingereicht werden."],
        ["Daten, die wir erheben", "Wenn du eine strategische Session buchst, erhebt die Google Calendar Terminplanung die Buchungsdetails und Antworten, die du im Booking-Flow eingibst. Diese Website speichert keine separate Lead-Formular-Anfrage."],
        ["Zweck und Rechtsgrundlage", "Buchungsdaten werden verwendet, um eine strategische Session zu organisieren und vorzubereiten. Rechtsgrundlage sind vorvertragliche Maßnahmen und/oder berechtigtes Interesse an der Beantwortung von Geschäftsanfragen."],
        ["Dienstleister", "Buchungen laufen über die Google Calendar Terminplanung (Google Ireland Limited). Hosting und cookiefreie Zugriffsmessung erfolgen über Cloudflare, das die für die Auslieferung der Website technisch erforderlichen Verbindungsdaten verarbeitet."],
        ["Buchung", "Der Buchungskalender ist eine von Google gehostete Seite, die in diese Website eingebettet ist. Er wird zusammen mit dem Buchungsbereich geladen, sodass beim Besuch der Seite deine IP-Adresse, dein Browser-User-Agent und die aufgerufene URL an Google übertragen werden. Du kannst die Buchungsseite auch in einem neuen Tab öffnen. Diese Website füllt keine separaten Formulardaten vorab aus und überträgt sie nicht an Google."],
        ["Cookies und Analytics", "Diese Website setzt keine eigenen Cookies. Die Zugriffsmessung erfolgt mit Cloudflare Web Analytics, das Seitenaufrufe, Referrer, das ungefähre Land, den Browser und Performance-Metriken erfasst, ohne Cookies zu setzen und ohne eine Kennung auf deinem Gerät zu speichern. Durch den eingebetteten Google-Buchungskalender setzt Google sein Cookie 'NID' auf der Domain google.com, das Google für Werbung und Personalisierung nutzt und das sechs Monate nach der letzten Nutzung abläuft. Dieses Cookie wird gesetzt, sobald der Buchungskalender als Teil der Seite geladen wird. Zum Entfernen lösche die Google-Cookies in deinem Browser."],
        ["Drittlandübermittlungen", "Google kann Daten außerhalb des EWR übertragen und verarbeiten, auch in den USA. Google gibt an, sich dabei auf die Standardvertragsklauseln der Europäischen Kommission und auf das EU-US Data Privacy Framework zu stützen. Den aktuellen Mechanismus beschreiben Googles Datenschutzerklärung und Googles Seite zu Datenübermittlungs-Frameworks."],
        ["Speicherdauer", "Buchungsanfragen werden bis zu 24 Monate nach dem letzten Kontakt gespeichert und anschließend gelöscht, sofern sie nicht Teil einer aktiven Geschäftsbeziehung werden oder eine längere Speicherung für Verträge, Rechnungsstellung, Steuern, Rechtsansprüche oder andere gesetzliche Pflichten erforderlich ist."],
        ["Deine Rechte", "Nach DSGVO kannst du Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder Widerspruch verlangen, soweit anwendbar. Du kannst dich außerdem bei der griechischen Datenschutzbehörde oder deiner lokalen Aufsichtsbehörde beschweren."],
      ],
      note:
        "Diese Policy enthält Platzhalter und sollte vor dem Launch mit finalen Unternehmensdaten geprüft werden. Sie ist ein praktischer technischer Entwurf, keine Rechtsberatung.",
    },
    terms: {
      metadata: ["Nutzungsbedingungen | Talos AI", "B2B-Servicebedingungen für Talos AI."],
      kicker: "Servicebedingungen",
      title: "Nutzungsbedingungen",
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
      metadata: ["Impressum | Talos AI", "Νομική γνωστοποίηση για την Talos AI."],
      kicker: "Νομική γνωστοποίηση",
      title: "Impressum",
      details: [
        ["Νομική επωνυμία", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Νομική μορφή", "Ατομική Επιχείρηση"],
        ["Έδρα", "Ρ. Φεραίου 45, Νεάπολη Θεσσαλονίκης, Τ.Κ. 56728, Ελλάδα"],
        ["Email", "legal@talosai.dev"],
        ["Επικοινωνία για προσωπικά δεδομένα", "privacy@talosai.dev"],
        ["ΑΦΜ", "168920150"],
        ["Αριθμός ΓΕΜΗ", "[Πρόσθεσε αριθμό ΓΕΜΗ αν ισχύει]"],
        ["Υπεύθυνο πρόσωπο", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ"],
        ["Ρυθμιστική αρχή", "Δεν εφαρμόζεται"],
      ],
      note:
        "Αυτή η σελίδα περιέχει placeholders και πρέπει να συμπληρωθεί με τα σωστά εταιρικά στοιχεία πριν το launch. Είναι τεχνική δομή για απαιτήσεις διαφάνειας ΕΕ/Ελλάδας/Γερμανίας, όχι νομική συμβουλή.",
    },
    privacy: {
      metadata: ["Πολιτική απορρήτου | Talos AI", "Πληροφορίες απορρήτου για την Talos AI."],
      kicker: "Προστασία δεδομένων",
      title: "Πολιτική απορρήτου",
      sections: [
        ["Υπεύθυνος επεξεργασίας", "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ, Ρ. Φεραίου 45, Νεάπολη Θεσσαλονίκης, Τ.Κ. 56728, Ελλάδα. Επικοινωνία για θέματα προσωπικών δεδομένων: privacy@talosai.dev. Η επιχείρηση αποφασίζει πώς επεξεργάζονται τα προσωπικά δεδομένα που υποβάλλονται μέσω του site."],
        ["Δεδομένα που συλλέγουμε", "Όταν κλείνεις strategic session, το Google Calendar appointment scheduling συλλέγει τα booking details και τις απαντήσεις που υποβάλλεις στο booking flow. Το website δεν αποθηκεύει ξεχωριστό lead form submission."],
        ["Σκοπός και νομική βάση", "Τα booking data χρησιμοποιούνται για οργάνωση και προετοιμασία της strategic session. Η νομική βάση είναι προσυμβατικά βήματα και/ή έννομο συμφέρον για απάντηση σε επαγγελματικά αιτήματα."],
        ["Πάροχοι υπηρεσιών", "Το booking γίνεται μέσω Google Calendar appointment scheduling (Google Ireland Limited). Το hosting και η μέτρηση επισκεψιμότητας χωρίς cookies παρέχονται από τη Cloudflare, που επεξεργάζεται τα τεχνικά δεδομένα σύνδεσης που χρειάζονται για να σερβιριστεί το site."],
        ["Booking", "Το booking calendar είναι σελίδα που φιλοξενεί η Google και είναι embedded σε αυτό το site. Φορτώνει μαζί με την ενότητα booking, οπότε με την επίσκεψη στη σελίδα στέλνονται στην Google η IP διεύθυνσή σου, ο user agent του browser και το URL που ζητήθηκε. Μπορείς επίσης να ανοίξεις τη σελίδα booking σε νέο tab. Το site δεν κάνει prefill και δεν μεταδίδει ξεχωριστά on-site form data στο Google."],
        ["Cookies και analytics", "Το site δεν βάζει δικά του cookies. Η μέτρηση επισκεψιμότητας γίνεται με το Cloudflare Web Analytics, που καταγράφει page views, referrer, κατά προσέγγιση χώρα, browser και μετρικές performance, χωρίς να βάζει cookies και χωρίς να αποθηκεύει κάποιο identifier στη συσκευή σου. Λόγω του embedded booking calendar της Google, η Google βάζει το cookie 'NID' στο domain google.com, το οποίο χρησιμοποιεί για διαφήμιση και personalisation και λήγει έξι μήνες μετά την τελευταία χρήση. Το cookie αυτό μπαίνει όταν το booking calendar φορτώνει ως μέρος της σελίδας. Για να το αφαιρέσεις, σβήσε τα cookies της Google από τον browser σου."],
        ["Μεταφορές εκτός ΕΟΧ", "Η Google μπορεί να μεταφέρει και να επεξεργάζεται δεδομένα εκτός ΕΟΧ, συμπεριλαμβανομένων των ΗΠΑ. Η Google αναφέρει ότι βασίζεται στις Τυποποιημένες Συμβατικές Ρήτρες της Ευρωπαϊκής Επιτροπής και στο EU-US Data Privacy Framework. Ο τρέχων μηχανισμός περιγράφεται στην πολιτική απορρήτου της Google και στη σελίδα της για τα data transfer frameworks."],
        ["Διατήρηση", "Τα αιτήματα κράτησης διατηρούνται για έως 24 μήνες μετά την τελευταία επικοινωνία και στη συνέχεια διαγράφονται, εκτός αν αποτελέσουν μέρος ενεργής επιχειρηματικής σχέσης ή απαιτείται μεγαλύτερη διατήρηση για συμβάσεις, τιμολόγηση, φορολογικές υποχρεώσεις, νομικές αξιώσεις ή άλλες νόμιμες υποχρεώσεις."],
        ["Τα δικαιώματα σου", "Σύμφωνα με το GDPR μπορείς να ζητήσεις πρόσβαση, διόρθωση, διαγραφή, περιορισμό, φορητότητα ή αντίρρηση όπου ισχύει. Μπορείς επίσης να υποβάλεις καταγγελία στην Ελληνική Αρχή Προστασίας Δεδομένων ή στην τοπική εποπτική αρχή σου."],
      ],
      note:
        "Αυτή η policy περιέχει placeholders και πρέπει να ελεγχθεί με τα τελικά εταιρικά στοιχεία πριν το launch. Είναι πρακτικό τεχνικό draft, όχι νομική συμβουλή.",
    },
    terms: {
      metadata: ["Όροι χρήσης | Talos AI", "Όροι παροχής υπηρεσιών B2B για την Talos AI."],
      kicker: "Όροι υπηρεσιών",
      title: "Όροι χρήσης",
      sections: [
        ["Πεδίο εφαρμογής", "Η Talos AI παρέχει στρατηγική AI automation, workflow analysis, implementation και σχετικές συμβουλευτικές υπηρεσίες για επιχειρηματικούς πελάτες."],
        ["Strategic sessions", "Μια strategic session είναι διερευνητική επαγγελματική συζήτηση. Δεν εγγυάται συγκεκριμένο τεχνικό, οικονομικό ή λειτουργικό αποτέλεσμα."],
        ["B2B focus", "Το website και οι υπηρεσίες προορίζονται για επιχειρηματικά αιτήματα. Όροι για καταναλωτές πρέπει να ελεγχθούν ξεχωριστά αν προσφερθούν consumer services."],
        ["Bookings και ακύρωση", "[Πρόσθεσε κανόνες booking, rescheduling, cancellation και no-show πριν το launch.]"],
        ["Χρεώσεις και πληρωμή", "[Πρόσθεσε pricing, payment terms, invoicing, taxes και late-payment rules αν πωλούνται paid services μέσω ή μετά το website.]"],
        ["Ευθύνη", "[Πρόσθεσε περιορισμό ευθύνης κατάλληλο για τη νομική οντότητα και δικαιοδοσία σου.]"],
        ["Εφαρμοστέο δίκαιο", "[Πρόσθεσε εφαρμοστέο δίκαιο και δικαιοδοσία, π.χ. Ελλάδα, μετά από νομικό έλεγχο.]"],
      ],
      note:
        "Αυτοί οι όροι είναι placeholders για τεχνική launch structure και πρέπει να συμπληρωθούν και να ελεγχθούν πριν προσφερθούν paid services.",
    },
  },
} satisfies Record<Locale, unknown>;
