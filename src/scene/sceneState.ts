/**
 * Mutable state shared between the DOM shell and the render loop.
 * Lives outside React so pointer moves never trigger re-renders.
 */
export const sceneState = {
  /** index of the active section */
  section: 0,
  /** normalised pointer, -1..1 */
  pointer: { x: 0, y: 0 },
  /** 1 while the pointer is held down (gravity well) */
  holding: 0,
  /** change token for the last click burst (performance.now at click) */
  burstAt: -1,
  /** burst origin, normalised -1..1 */
  burstPos: { x: 0, y: 0 },
};

type Listener = () => void;
const listeners = new Set<Listener>();

/** Notified when the active section changes (used to re-render on-demand frames). */
export function subscribeSection(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function setSection(index: number) {
  if (sceneState.section === index) return;
  sceneState.section = index;
  listeners.forEach((fn) => fn());
}
