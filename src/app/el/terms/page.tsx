import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.el.terms.metadata[0],
  description: legalContent.el.terms.metadata[1],
};

export default function GreekTermsPage() {
  return <LegalPage locale="el" page="terms" />;
}
