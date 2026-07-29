import { localeHtmlLang } from "@/i18n/content";
import { SiteShell } from "../site-shell";

export default function GreekLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang={localeHtmlLang.el}>{children}</SiteShell>;
}
