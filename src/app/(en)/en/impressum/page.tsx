import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "en",
  path: "/impressum",
  title: legalContent.en.impressum.metadata[0],
  description: legalContent.en.impressum.metadata[1],
});

export default function EnglishImpressumPage() {
  return <LegalPage locale="en" page="impressum" />;
}
