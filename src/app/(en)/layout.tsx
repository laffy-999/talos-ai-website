import { localeHtmlLang } from "@/i18n/content";
import { SiteShell } from "../site-shell";

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang={localeHtmlLang.en}>{children}</SiteShell>;
}
