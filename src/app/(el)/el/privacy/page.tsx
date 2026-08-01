import { LegalPage } from "@/app/components/legal-page";
import { pageMetadata } from "@/app/metadata";
import { legalContent } from "@/i18n/legal";

export const metadata = pageMetadata({
  locale: "el",
  path: "/privacy",
  title: legalContent.el.privacy.metadata[0],
  description: legalContent.el.privacy.metadata[1],
});

export default function GreekPrivacyPage() {
  return <LegalPage locale="el" page="privacy" />;
}
