"use client";

import { useEffect } from "react";

// Drives the CSS scroll reveals declared with `data-reveal` (see globals.css).
//
// Order matters for resilience: the server markup carries no state attribute and is therefore
// fully visible. Only after hydration does this arm the blocks that are still entirely below the
// fold, so nothing the visitor can already see is ever hidden, and a bundle that never loads just
// leaves the page static instead of blank.
export function RevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set(
      [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
        (node) => node.getBoundingClientRect().top >= window.innerHeight,
      ),
    );
    if (pending.size === 0) return;

    for (const node of pending) node.dataset.revealState = "hidden";

    let frame: number | null = null;

    const detach = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
    };

    // Measured against the live viewport rather than through an IntersectionObserver: a jump
    // scroll (anchor link, End key, scrollbar drag) can move a block from below the fold to above
    // it without ever crossing an observer threshold, which would hide that block for good.
    const sweep = () => {
      frame = null;
      const trigger = window.innerHeight * 0.88;
      for (const node of pending) {
        if (node.getBoundingClientRect().top >= trigger) continue;
        node.dataset.revealState = "visible";
        pending.delete(node);
      }
      if (pending.size === 0) detach();
    };

    const schedule = () => {
      frame ??= window.requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return detach;
  }, []);

  return null;
}
