import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.en.privacy.metadata[0],
  description: legalContent.en.privacy.metadata[1],
};

export default function EnglishPrivacyPage() {
  return <LegalPage locale="en" page="privacy" />;
}
