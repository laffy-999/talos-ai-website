"use client";

import { CalendarDays } from "lucide-react";
import { useState } from "react";

// The calendar is a Google-hosted document: framing it hands Google the visitor's IP address and
// lets Google set its own advertising cookie. Neither happens until the visitor asks for the
// calendar, so the only people who ever reach Google are the ones who came here to book.
export function BookingEmbed({
  action,
  notice,
  src,
  title,
}: {
  action: string;
  notice: string;
  src: string;
  title: string;
}) {
  const [requested, setRequested] = useState(false);

  if (!requested) {
    return (
      <div className="flex flex-col items-center gap-8 border border-accent bg-invert px-6 py-16 text-center">
        <p className="max-w-xl text-body font-normal text-on-invert/80">{notice}</p>
        <button
          className="brutalist-button justify-center border-accent bg-accent text-on-accent"
          onClick={() => setRequested(true)}
          type="button"
        >
          {action} <CalendarDays size={18} />
        </button>
      </div>
    );
  }

  return (
    // Google stacks the picker below ~600px of iframe width (~1225px tall) and goes side-by-side above it (~725px tall).
    <div className="h-[1240px] overflow-hidden border border-accent bg-invert min-[700px]:h-[740px]">
      <iframe className="booking-embed h-full w-full border-0" src={src} title={title} />
    </div>
  );
}
