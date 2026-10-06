import { useEffect, useRef } from "react";

/**
 * Wheel, keyboard and swipe navigation between full-viewport sections.
 * - Wheel/vertical swipe only changes section when the active panel can't scroll further.
 * - Elements marked `data-noswipe` (e.g. the project carousel) keep their own horizontal gestures.
 */
export function useSectionNav(index: number, count: number, go: (i: number) => void) {
  const state = useRef({ index, count, go, lock: 0 });
  state.current = { ...state.current, index, count, go };

  useEffect(() => {
    const LOCK_MS = 750;
    const step = (dir: 1 | -1) => {
      const s = state.current;
      const now = performance.now();
      if (now < s.lock) return;
      const next = Math.max(0, Math.min(s.count - 1, s.index + dir));
      if (next !== s.index) {
        s.lock = now + LOCK_MS;
        s.go(next);
      }
    };

    const scroller = (t: EventTarget | null) =>
      t instanceof Element ? (t.closest("[data-scroll]") as HTMLElement | null) : null;
    const canScroll = (el: HTMLElement | null, dir: number) => {
      if (!el || el.scrollHeight <= el.clientHeight + 1) return false;
      return dir > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 2 : el.scrollTop > 2;
    };
    const dialogOpen = () => !!document.querySelector("[role=dialog]");

    let wheelAcc = 0;
    let wheelTimer: number | undefined;
    const onWheel = (e: WheelEvent) => {
      if (dialogOpen()) return;
      const dir = Math.sign(e.deltaY || e.deltaX);
      if (!dir) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && (e.target as Element)?.closest?.("[data-noswipe]")) return;
      if (canScroll(scroller(e.target), dir)) return;
      wheelAcc += e.deltaY || e.deltaX;
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => (wheelAcc = 0), 160);
      if (Math.abs(wheelAcc) > 40) {
        wheelAcc = 0;
        step(dir as 1 | -1);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (dialogOpen() || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
          if (e.key === "ArrowDown" && canScroll(scroller(t), 1)) return;
          e.preventDefault();
          step(1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          if (e.key === "ArrowUp" && canScroll(scroller(t), -1)) return;
          e.preventDefault();
          step(-1);
          break;
        case "Home":
          state.current.go(0);
          break;
        case "End":
          state.current.go(state.current.count - 1);
          break;
        default:
          if (/^[1-9]$/.test(e.key) && Number(e.key) <= state.current.count) state.current.go(Number(e.key) - 1);
      }
    };

    let sx = 0;
    let sy = 0;
    let blocked = false;
    let startEl: EventTarget | null = null;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      sx = t.clientX;
      sy = t.clientY;
      startEl = e.target;
      blocked = (e.target as Element)?.closest?.("[data-noswipe]") != null || dialogOpen();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (blocked) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        step(dx < 0 ? 1 : -1);
      } else if (Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx) * 1.3) {
        const dir = dy < 0 ? 1 : -1;
        if (!canScroll(scroller(startEl), dir)) step(dir as 1 | -1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.clearTimeout(wheelTimer);
    };
  }, []);
}
