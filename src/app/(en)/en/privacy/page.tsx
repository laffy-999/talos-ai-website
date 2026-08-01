import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "en",
  path: "/privacy",
  title: legalContent.en.privacy.metadata[0],
  description: legalContent.en.privacy.metadata[1],
});

export default function EnglishPrivacyPage() {
  return <LegalPage locale="en" page="privacy" />;
}
