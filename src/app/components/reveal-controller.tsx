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

    const pending = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
      (node) => node.getBoundingClientRect().top >= window.innerHeight,
    );
    if (pending.length === 0) return;

    for (const node of pending) node.dataset.revealState = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealState = "visible";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const node of pending) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
