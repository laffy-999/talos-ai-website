import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "el",
  path: "/terms",
  title: legalContent.el.terms.metadata[0],
  description: legalContent.el.terms.metadata[1],
});

export default function GreekTermsPage() {
  return <LegalPage locale="el" page="terms" />;
}
