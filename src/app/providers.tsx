"use client";

import { ReactNode, useMemo } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CursorFollower } from "./components/cursor-follower";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

export function Providers({ children }: { children: ReactNode }) {
  const convex = useMemo(() => {
    if (!convexUrl) return null;
    return new ConvexReactClient(convexUrl);
  }, []);

  const content = convex ? <ConvexProvider client={convex}>{children}</ConvexProvider> : children;

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {content as never}
      <CursorFollower />
    </ReactLenis>
  );
}
