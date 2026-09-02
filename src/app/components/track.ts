"use client";

export type TrackedEvent = "booking_cta_click" | "booking_outbound_click" | "booking_section_view";

const internalKey = "talos:internal-traffic";

// The owner marks his own browser once by visiting any page with `?internal=1`, and clears it
// again with `?internal=0`. The flag is a single on/off preference, never an identifier, and is
// only ever written on deliberate request.
export function syncInternalTrafficFlag() {
  const value = new URLSearchParams(location.search).get("internal");
  if (value !== "1" && value !== "0") return;

  try {
    if (value === "1") localStorage.setItem(internalKey, "1");
    else localStorage.removeItem(internalKey);
  } catch {
    // Storage is refused in some privacy modes. Excluding internal traffic is best-effort.
  }
}

function isInternal() {
  if (navigator.webdriver) return true;

  try {
    return localStorage.getItem(internalKey) === "1";
  } catch {
    return false;
  }
}

export function trackEvent(event: TrackedEvent, locale: string, placement?: "header" | "hero") {
  const body = JSON.stringify({
    event,
    locale,
    path: location.pathname,
    placement,
    internal: isInternal(),
  });
  if (navigator.sendBeacon?.("/api/event", new Blob([body], { type: "application/json" }))) return;

  void fetch("/api/event", {
    method: "POST",
    body,
    keepalive: true,
    headers: { "content-type": "application/json" },
  }).catch(() => {});
}
