import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.en.terms.metadata[0],
  description: legalContent.en.terms.metadata[1],
};

export default function TermsPage() {
  return <LegalPage locale="en" page="terms" />;
}
