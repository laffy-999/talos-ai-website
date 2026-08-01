"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "./track";

export function BookingViewBeacon({ locale }: { locale: string }) {
  const fired = useRef(false);

  useEffect(() => {
    const section = document.getElementById("booking-request");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || fired.current) return;

        fired.current = true;
        trackEvent("booking_section_view", locale);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [locale]);

  return null;
}
