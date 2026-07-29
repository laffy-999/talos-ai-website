import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.de.impressum.metadata[0],
  description: legalContent.de.impressum.metadata[1],
};

export default function ImpressumPage() {
  return <LegalPage locale="de" page="impressum" />;
}
