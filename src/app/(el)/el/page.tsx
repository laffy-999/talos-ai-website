import { LocalizedHome } from "@/app/components/localized-home";
import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata({ locale: "el" });

export default function GreekHome() {
  return <LocalizedHome locale="el" />;
}
