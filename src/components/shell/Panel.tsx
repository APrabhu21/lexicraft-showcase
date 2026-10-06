import { createContext, useContext, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ActiveContext = createContext(false);

interface PanelProps {
  id: string;
  label: string;
  index: number;
  activeIndex: number;
  /** vertically align content to the top instead of centre */
  top?: boolean;
  children: ReactNode;
}

/**
 * One full-viewport "scene" panel. All panels stay mounted (so the content is
 * real, crawlable HTML) and are cross-faded/slid by the stage.
 */
export function Panel({ id, label, index, activeIndex, top, children }: PanelProps) {
  const active = index === activeIndex;
  const reduce = useReducedMotion();
  const offset = Math.max(-1, Math.min(1, index - activeIndex)) * 70;

  return (
    <ActiveContext.Provider value={active}>
      <motion.section
        id={id}
        aria-label={label}
        aria-hidden={!active}
        // `inert` keeps hidden panels out of the tab order and the a11y tree
        {...(active ? {} : ({ inert: "" } as Record<string, string>))}
        initial={false}
        animate={
          active
            ? { x: 0, visibility: "visible" }
            : { x: reduce ? 0 : offset, transitionEnd: { visibility: "hidden" } }
        }
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-none absolute inset-x-0 top-16 bottom-[76px] flex px-4 sm:px-8 md:bottom-6 md:px-[6vw]",
          top ? "items-start" : "items-center",
        )}
      >
        {children}
      </motion.section>
    </ActiveContext.Provider>
  );
}

/** Scrollable content region; opts out of the section-change wheel/swipe handlers when it can scroll. */
export function PanelBody({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      data-ui
      data-scroll
      className={cn("scroll-thin pointer-events-auto max-h-full w-full overflow-y-auto overflow-x-hidden", className)}
    >
      {children}
    </div>
  );
}

/** Staggered reveal for children of a panel. */
export function Item({
  i = 0,
  className,
  children,
}: {
  i?: number;
  className?: string;
  children: ReactNode;
}) {
  const active = useContext(ActiveContext);
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : 18 }}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: active && !reduce ? 0.15 + i * 0.07 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title, className }: { kicker: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">{kicker}</p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
