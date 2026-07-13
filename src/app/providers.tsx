"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { CursorFollower } from "./components/cursor-follower";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {children as never}
      <CursorFollower />
    </ReactLenis>
  );
}
