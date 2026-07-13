import type { Metadata } from "next";
import { LocalizedHome } from "../components/localized-home";
import { dictionaries } from "@/i18n/content";

export const metadata: Metadata = {
  title: dictionaries.en.meta.title,
  description: dictionaries.en.meta.description,
};

export default function EnglishHome() {
  return <LocalizedHome locale="en" />;
}
