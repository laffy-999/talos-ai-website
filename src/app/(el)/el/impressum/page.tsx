import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "el",
  path: "/impressum",
  title: legalContent.el.impressum.metadata[0],
  description: legalContent.el.impressum.metadata[1],
});

export default function GreekImpressumPage() {
  return <LegalPage locale="el" page="impressum" />;
}
