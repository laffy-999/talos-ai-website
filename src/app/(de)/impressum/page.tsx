import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "de",
  path: "/impressum",
  title: legalContent.de.impressum.metadata[0],
  description: legalContent.de.impressum.metadata[1],
});

export default function ImpressumPage() {
  return <LegalPage locale="de" page="impressum" />;
}
