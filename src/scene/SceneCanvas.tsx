import { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import { sceneState, subscribeSection } from "./sceneState";
import type { SceneCapabilities } from "./capabilities";

/** Re-render on demand when running in reduced-motion (no continuous loop). */
function DemandInvalidator({ enabled }: { enabled: boolean }) {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    if (!enabled) return;
    const unsub = subscribeSection(() => {
      // two frames: one to retarget, one to settle
      invalidate();
      requestAnimationFrame(() => invalidate());
    });
    const onResize = () => invalidate();
    window.addEventListener("resize", onResize);
    return () => {
      unsub();
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, invalidate]);
  return null;
}

/** Window-level pointer tracking so the canvas can sit behind the UI. */
function usePointerInput(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const isUi = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest("a,button,input,textarea,select,[role=dialog],[data-ui]");

    const move = (e: PointerEvent) => {
      sceneState.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const down = (e: PointerEvent) => {
      if (isUi(e.target)) return;
      sceneState.holding = 1;
      sceneState.burstPos.x = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.burstPos.y = -((e.clientY / window.innerHeight) * 2 - 1);
      sceneState.burstAt = performance.now();
    };
    const up = () => {
      sceneState.holding = 0;
    };
    const leave = () => {
      sceneState.pointer.x = 9;
      sceneState.pointer.y = 9;
      sceneState.holding = 0;
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);
}

export default function SceneCanvas({ caps }: { caps: SceneCapabilities }) {
  const [visible, setVisible] = useState(() => !document.hidden);

  // pause rendering entirely when the tab is hidden
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  usePointerInput(!caps.reducedMotion);

  const frameloop = caps.reducedMotion ? "demand" : visible ? "always" : "never";

  return (
    <Canvas
      aria-hidden="true"
      frameloop={frameloop}
      dpr={[1, caps.maxDpr]}
      camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: caps.lowPower ? "low-power" : "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ParticleField count={caps.particleCount} reducedMotion={caps.reducedMotion} />
      <DemandInvalidator enabled={caps.reducedMotion} />
    </Canvas>
  );
}
