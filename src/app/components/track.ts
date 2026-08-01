"use client";

export type TrackedEvent = "booking_cta_click" | "booking_outbound_click" | "booking_section_view";

export function trackEvent(event: TrackedEvent, locale: string, placement?: "header" | "hero") {
  const body = JSON.stringify({ event, locale, path: location.pathname, placement });
  if (navigator.sendBeacon?.("/api/event", new Blob([body], { type: "application/json" }))) return;

  void fetch("/api/event", {
    method: "POST",
    body,
    keepalive: true,
    headers: { "content-type": "application/json" },
  }).catch(() => {});
}
