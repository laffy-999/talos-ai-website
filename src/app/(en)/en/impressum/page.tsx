import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.en.impressum.metadata[0],
  description: legalContent.en.impressum.metadata[1],
};

export default function EnglishImpressumPage() {
  return <LegalPage locale="en" page="impressum" />;
}
