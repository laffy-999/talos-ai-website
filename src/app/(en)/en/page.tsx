import { LocalizedHome } from "@/app/components/localized-home";
import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata({ locale: "en" });

export default function EnglishHome() {
  return <LocalizedHome locale="en" />;
}
