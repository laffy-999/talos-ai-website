import type { Metadata } from "next";
import { LocalizedHome } from "@/app/components/localized-home";
import { dictionaries } from "@/i18n/content";

export const metadata: Metadata = {
  title: dictionaries.de.meta.title,
  description: dictionaries.de.meta.description,
};

export default function Home() {
  return <LocalizedHome locale="de" />;
}
