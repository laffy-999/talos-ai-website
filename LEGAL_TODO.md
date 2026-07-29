# Talos AI Legal Launch Checklist

This is a working checklist, not legal advice. Treat unchecked **Launch blockers** as items to resolve before the next production deployment.

## Launch blockers

- [ ] Add the Greek GEMI registration number to the Impressum in English, German, and Greek, or confirm in writing that no GEMI number applies.
- [x] Choose and publish a concrete retention period for booking enquiries in the privacy policy: 24 months after the last contact.
- [ ] Verify that `legal@talosai.dev` and `privacy@talosai.dev` receive mail and are checked regularly. The domain's mail is delivered to Google Workspace (`talosai.dev` MX is `10 smtp.google.com`), so only the existence of these two mailboxes or aliases still needs confirming in the Workspace admin console.
- [ ] Confirm whether the booking calendar runs on a paid Google Workspace account (Google acts as processor under the Workspace DPA) or a consumer Google account (Google acts as an independent controller with no DPA), then align the privacy policy wording accordingly. The `talosai.dev` MX record points at Google Workspace, so a Workspace subscription exists for the domain; what remains is confirming that the appointment schedule belongs to a `@talosai.dev` Workspace user rather than a personal Google account, since the booking page does not expose the organiser address.
- [ ] Confirm Google's current international transfer mechanism, subprocessor list, and booking-data retention settings against the privacy policy.
- [x] Document the international transfer basis for booking data now that booking runs on Google rather than an EU-hosted provider, and name it in the privacy policy: Standard Contractual Clauses plus the EU-US Data Privacy Framework, as published by Google.
- [x] Confirm the cookie position: the site sets no cookies of its own. Traffic measurement uses Cloudflare Web Analytics, which is cookieless and stores no identifier on the visitor's device. The embedded Google calendar sets Google's 'NID' advertising cookie (google.com, expires 6 months after last use), so the embed is gated behind an explicit click and nothing is sent to Google before that. Add consent management before introducing any cookie or client-side storage that is set without user action.
- [ ] Add a general contact form or document why the available direct contact methods satisfy the markets in which Talos AI operates.
- [ ] Add a separate, optional, unchecked newsletter/offers checkbox to the contact form, with recorded consent, double opt-in, and an unsubscribe mechanism. Contact submission must not depend on newsletter consent.
- [ ] Have the Impressum and privacy policy reviewed by a qualified Greek/EU legal professional.

## Before selling paid services

- [ ] Define booking, rescheduling, cancellation, and no-show rules.
- [ ] Define prices, payment deadlines, invoicing, taxes, and late-payment rules.
- [ ] Add an appropriate limitation-of-liability clause.
- [ ] Confirm governing law and court jurisdiction.
- [ ] Confirm whether services are strictly B2B. Obtain consumer-law review before offering services to consumers.

## WhatsApp agent

- [ ] Extend the privacy policy to cover WhatsApp message content, contact identifiers, Meta, Cloudflare, AI providers, purposes, legal bases, retention, international transfers, automated processing, and human escalation.
- [ ] Put data-processing agreements in place with every processor used by the agent.
- [ ] Define deletion and data-subject-request procedures for WhatsApp conversations and backups.
- [ ] Prevent sensitive data from being sent to the AI model unless it is necessary and lawfully handled.
- [ ] Complete a DPIA screening before production use and perform a DPIA if the processing is likely to create high risks.
