import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.de.privacy.metadata[0],
  description: legalContent.de.privacy.metadata[1],
};

export default function PrivacyPage() {
  return <LegalPage locale="de" page="privacy" />;
}
