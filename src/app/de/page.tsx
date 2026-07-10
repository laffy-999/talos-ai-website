import type { Metadata } from "next";
import { LocalizedHome } from "../components/localized-home";
import { dictionaries } from "@/i18n/content";

export const metadata: Metadata = {
  title: dictionaries.de.meta.title,
  description: dictionaries.de.meta.description,
};

export default function GermanHome() {
  return <LocalizedHome locale="de" />;
}
