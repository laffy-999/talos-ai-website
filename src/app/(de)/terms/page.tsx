import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "de",
  path: "/terms",
  title: legalContent.de.terms.metadata[0],
  description: legalContent.de.terms.metadata[1],
});

export default function TermsPage() {
  return <LegalPage locale="de" page="terms" />;
}
