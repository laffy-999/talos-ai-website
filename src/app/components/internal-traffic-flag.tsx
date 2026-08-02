"use client";

import { useEffect } from "react";
import { syncInternalTrafficFlag } from "./track";

// Client boundary for the `?internal=1` switch, so the owner can mark his own browser from any
// page rather than only from one that happens to emit a booking event.
export function InternalTrafficFlag() {
  useEffect(syncInternalTrafficFlag, []);

  return null;
}
