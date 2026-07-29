import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.de.terms.metadata[0],
  description: legalContent.de.terms.metadata[1],
};

export default function TermsPage() {
  return <LegalPage locale="de" page="terms" />;
}
