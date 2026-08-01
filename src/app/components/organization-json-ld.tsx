import { siteName, siteUrl } from "@/app/metadata";
import { locales } from "@/i18n/locales";

// Structured data for the business behind the site. Facts mirror the Impressum in src/i18n/legal.ts;
// nothing is claimed here that is not stated there.
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl.origin}/#organization`,
  name: siteName,
  legalName: "ΕΛΕΥΘΕΡΙΟΣ ΚΟΤΣΑΡΙΔΗΣ",
  url: siteUrl.origin,
  email: "legal@talosai.dev",
  taxID: "168920150",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Feraiou 45",
    addressLocality: "Neapoli, Thessaloniki",
    postalCode: "56728",
    addressCountry: "GR",
  },
  availableLanguage: [...locales],
  serviceType: "AI automation and workflow implementation",
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify does not escape markup, so `<` is neutralised before it reaches the document.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
    />
  );
}
