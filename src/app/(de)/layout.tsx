import { localeHtmlLang } from "@/i18n/locales";
import { SiteShell } from "../site-shell";

// Browser-chrome colour is the same for every locale; re-exported here because `viewport` must be
// exported from a layout or page module.
export { viewport } from "@/app/metadata";

export default function GermanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang={localeHtmlLang.de}>{children}</SiteShell>;
}
