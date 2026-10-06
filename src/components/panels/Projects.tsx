import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { moreWork, profile, projects, type Project } from "@/data/content";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Item, Panel, SectionHeading } from "../shell/Panel";
import { TiltCard } from "../shell/Interactions";
import { useState } from "react";

interface Props {
  index: number;
  activeIndex: number;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <TiltCard className="glass flex h-full w-[84vw] max-w-[380px] shrink-0 snap-center flex-col rounded-2xl p-5 sm:w-[380px]">
      <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{project.kind}</p>
      <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Highlights">
        {project.highlights.map((h) => (
          <li key={h} className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.tech.slice(0, 5).map((t) => (
          <li key={t} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
            {t}
          </li>
        ))}
        {project.tech.length > 5 && (
          <li className="px-1 py-0.5 font-mono text-[11px] text-muted-foreground">+{project.tech.length - 5}</li>
        )}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Details
        </button>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden /> Live demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
          >
            <Github className="h-3.5 w-3.5" aria-hidden /> Code
          </a>
        )}
      </div>
    </TiltCard>
  );
}

export default function Projects({ index, activeIndex }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Project | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(400, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <Panel id="projects" label="Projects" index={index} activeIndex={activeIndex}>
      <div className="pointer-events-none w-full min-w-0">
        <Item i={0} className="pointer-events-auto flex items-end justify-between gap-4">
          <SectionHeading kicker="Projects" title="Things I've built" />
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="glass grid h-10 w-10 place-items-center rounded-full hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="glass grid h-10 w-10 place-items-center rounded-full hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Item>

        <Item i={1}>
          <div
            ref={track}
            data-ui
            data-noswipe
            tabIndex={0}
            role="region"
            aria-label="Project carousel, scroll horizontally"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" && e.shiftKey) scrollBy(1);
              if (e.key === "ArrowLeft" && e.shiftKey) scrollBy(-1);
            }}
            className="no-scrollbar pointer-events-auto -mx-4 mt-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-3 pt-2 sm:-mx-8 sm:px-8 md:-mx-[6vw] md:px-[6vw]"
          >
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setOpen(p)} />
            ))}

            <div className="glass flex w-[84vw] max-w-[380px] shrink-0 snap-center flex-col rounded-2xl p-5 sm:w-[380px]">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">More work</p>
              <h3 className="mt-1 text-xl font-semibold">Smaller experiments</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {moreWork.map((m) => (
                  <li key={m.title}>
                    <p className="font-medium">{m.title}</p>
                    <p className="text-muted-foreground">{m.metric}</p>
                  </li>
                ))}
              </ul>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary hover:underline"
              >
                <Github className="h-4 w-4" aria-hidden /> See everything on GitHub
              </a>
            </div>
          </div>
        </Item>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[85dvh] overflow-y-auto sm:max-w-xl">
          {open && (
            <>
              <DialogHeader>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{open.kind}</p>
                <DialogTitle className="text-2xl">{open.title}</DialogTitle>
                <DialogDescription>{open.summary}</DialogDescription>
              </DialogHeader>
              <ul className="space-y-2.5 text-sm leading-relaxed">
                {open.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
                {open.tech.map((t) => (
                  <li key={t} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
              {open.demo && (
                <a
                  href={open.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden /> Open live demo
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Panel>
  );
}
