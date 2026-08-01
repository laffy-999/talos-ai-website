"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, [role='button'], [tabindex]:not([tabindex='-1'])";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const interactiveRef = useRef(false);
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const updateEnabled = () => setEnabled(!reducedMotion.matches && !coarsePointer.matches);

    updateEnabled();
    reducedMotion.addEventListener("change", updateEnabled);
    coarsePointer.addEventListener("change", updateEnabled);

    return () => {
      reducedMotion.removeEventListener("change", updateEnabled);
      coarsePointer.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // The loop is started by pointer movement and parks itself once it has caught up, so an idle
    // tab does no per-frame work.
    const animate = () => {
      const cursor = cursorRef.current;
      const target = targetRef.current;
      const current = currentRef.current;
      const dx = target.x - current.x;
      const dy = target.y - current.y;

      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        frameRef.current = null;
        return;
      }

      current.x += dx * 0.22;
      current.y += dy * 0.22;
      cursor?.style.setProperty("--cursor-x", `${current.x}px`);
      cursor?.style.setProperty("--cursor-y", `${current.y}px`);
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        if (visibleRef.current) {
          visibleRef.current = false;
          setVisible(false);
        }
        return;
      }

      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!hasMovedRef.current) {
        currentRef.current = { ...targetRef.current };
        hasMovedRef.current = true;
        cursorRef.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursorRef.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const element = event.target instanceof Element ? event.target : null;
      const nextInteractive = Boolean(element?.closest(interactiveSelector));
      if (interactiveRef.current !== nextInteractive) {
        interactiveRef.current = nextInteractive;
        setInteractive(nextInteractive);
      }

      frameRef.current ??= window.requestAnimationFrame(animate);
    };

    const handlePointerLeave = () => {
      if (!visibleRef.current) return;
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      hasMovedRef.current = false;
      visibleRef.current = false;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`cursor-follower ${interactive ? "cursor-follower--interactive" : ""} ${visible ? "is-visible" : ""}`}
      aria-hidden="true"
    />
  );
}
