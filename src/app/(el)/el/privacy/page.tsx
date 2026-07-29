import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.el.privacy.metadata[0],
  description: legalContent.el.privacy.metadata[1],
};

export default function GreekPrivacyPage() {
  return <LegalPage locale="el" page="privacy" />;
}
