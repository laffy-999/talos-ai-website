import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { legalContent } from "@/i18n/legal";

export const metadata: Metadata = {
  title: legalContent.el.impressum.metadata[0],
  description: legalContent.el.impressum.metadata[1],
};

export default function GreekImpressumPage() {
  return <LegalPage locale="el" page="impressum" />;
}
