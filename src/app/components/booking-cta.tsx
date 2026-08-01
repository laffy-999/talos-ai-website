"use client";

import type { ReactNode } from "react";
import { trackEvent, type TrackedEvent } from "./track";

export function BookingCta({
  href,
  locale,
  placement,
  event,
  target,
  className,
  children,
}: {
  href: string;
  locale: string;
  placement?: "header" | "hero";
  event: TrackedEvent;
  target?: "_blank";
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackEvent(event, locale, placement)}
      rel={target === "_blank" ? "noreferrer" : undefined}
      target={target}
    >
      {children}
    </a>
  );
}
