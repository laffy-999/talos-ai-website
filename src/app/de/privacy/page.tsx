import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.de.privacy.metadata[0],
  description: legalContent.de.privacy.metadata[1],
};

export default function GermanPrivacyPage() {
  return <LegalPage locale="de" page="privacy" />;
}
