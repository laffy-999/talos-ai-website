import type { Metadata } from "next";
import { LocalizedHome } from "../components/localized-home";
import { dictionaries } from "@/i18n/content";

export const metadata: Metadata = {
  title: dictionaries.el.meta.title,
  description: dictionaries.el.meta.description,
};

export default function GreekHome() {
  return <LocalizedHome locale="el" />;
}
