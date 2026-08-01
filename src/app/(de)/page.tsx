import { LocalizedHome } from "@/app/components/localized-home";
import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata({ locale: "de" });

export default function Home() {
  return <LocalizedHome locale="de" />;
}
