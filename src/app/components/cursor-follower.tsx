"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, input, select, textarea, label, [role='button'], [tabindex]:not([tabindex='-1'])";
const formFieldSelector = "input, select, textarea";

type CursorVariant = "idle" | "interactive" | "input";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const variantRef = useRef<CursorVariant>("idle");
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("idle");
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
    if (!enabled) {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      hasMovedRef.current = false;
      visibleRef.current = false;
      return;
    }

    const setNextVisible = (nextVisible: boolean) => {
      if (visibleRef.current === nextVisible) return;
      visibleRef.current = nextVisible;
      setVisible(nextVisible);
    };

    const setNextVariant = (nextVariant: CursorVariant) => {
      if (variantRef.current === nextVariant) return;
      variantRef.current = nextVariant;
      setVariant(nextVariant);
    };

    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.22;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.22;
        cursor.style.setProperty("--cursor-x", `${currentRef.current.x}px`);
        cursor.style.setProperty("--cursor-y", `${currentRef.current.y}px`);
      }

      animationRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        setNextVisible(false);
        return;
      }

      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!hasMovedRef.current) {
        currentRef.current = targetRef.current;
        hasMovedRef.current = true;
      }

      const target = event.target instanceof Element ? event.target : null;
      const isFormField = Boolean(target?.closest(formFieldSelector));
      const isInteractive = Boolean(target?.closest(interactiveSelector));

      setNextVisible(true);
      setNextVariant(isFormField ? "input" : isInteractive ? "interactive" : "idle");
    };

    const handlePointerLeave = () => setNextVisible(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    animationRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={cursorRef} className={`cursor-follower cursor-follower--${variant} ${visible ? "is-visible" : ""}`} aria-hidden="true" />;
}
