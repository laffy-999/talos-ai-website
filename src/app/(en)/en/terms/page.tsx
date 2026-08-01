import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "en",
  path: "/terms",
  title: legalContent.en.terms.metadata[0],
  description: legalContent.en.terms.metadata[1],
});

export default function EnglishTermsPage() {
  return <LegalPage locale="en" page="terms" />;
}
