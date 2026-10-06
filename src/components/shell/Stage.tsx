import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { sections } from "@/data/content";
import { detectCapabilities } from "@/scene/capabilities";
import { setSection } from "@/scene/sceneState";
import Nav from "./Nav";
import { useSectionNav } from "./useSectionNav";
import Home from "../panels/Home";
import Work from "../panels/Work";
import Projects from "../panels/Projects";
import Skills from "../panels/Skills";
import About from "../panels/About";
import Contact from "../panels/Contact";

// The 3D scene (three.js) is a separate chunk so text content paints first.
const SceneCanvas = lazy(() => import("@/scene/SceneCanvas"));

const indexFromHash = () => {
  const i = sections.findIndex((s) => `#${s.id}` === window.location.hash);
  return i < 0 ? 0 : i;
};

export default function Stage() {
  const [index, setIndex] = useState(indexFromHash);
  const caps = useMemo(detectCapabilities, []);
  const [sceneReady, setSceneReady] = useState(false);

  const go = useCallback((i: number) => {
    setIndex(i);
    window.history.replaceState(null, "", i === 0 ? window.location.pathname : `#${sections[i].id}`);
  }, []);

  useSectionNav(index, sections.length, go);

  useEffect(() => {
    setSection(index);
  }, [index]);

  useEffect(() => {
    const onHash = () => setIndex(indexFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // mount the heavy scene only after first paint
  useEffect(() => {
    if (!caps.webgl) return;
    const id = window.setTimeout(() => setSceneReady(true), 50);
    return () => window.clearTimeout(id);
  }, [caps.webgl]);

  const panelProps = { activeIndex: index };

  return (
    <div className="fixed inset-0 overflow-hidden bg-background">
      {/* static layer: also the full design when WebGL is unavailable */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 45%, hsl(28 100% 58% / 0.14), transparent 70%), radial-gradient(45% 45% at 20% 85%, hsl(288 75% 70% / 0.12), transparent 70%)",
        }}
      />

      {caps.webgl && sceneReady && (
        <Suspense fallback={null}>
          <SceneCanvas caps={caps} />
        </Suspense>
      )}

      <Nav index={index} go={go} />

      <main>
        <Home index={0} {...panelProps} go={go} />
        <Work index={1} {...panelProps} />
        <Projects index={2} {...panelProps} />
        <Skills index={3} {...panelProps} />
        <About index={4} {...panelProps} />
        <Contact index={5} {...panelProps} />
      </main>
    </div>
  );
}
