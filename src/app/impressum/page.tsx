import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.en.impressum.metadata[0],
  description: legalContent.en.impressum.metadata[1],
};

export default function ImpressumPage() {
  return <LegalPage locale="en" page="impressum" />;
}
