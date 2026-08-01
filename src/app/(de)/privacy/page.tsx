import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "de",
  path: "/privacy",
  title: legalContent.de.privacy.metadata[0],
  description: legalContent.de.privacy.metadata[1],
});

export default function PrivacyPage() {
  return <LegalPage locale="de" page="privacy" />;
}
