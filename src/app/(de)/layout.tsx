import { localeHtmlLang } from "@/i18n/content";
import { SiteShell } from "../site-shell";

export default function GermanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang={localeHtmlLang.de}>{children}</SiteShell>;
}
