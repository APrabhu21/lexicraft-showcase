import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";
import { Item, Panel, PanelBody, SectionHeading } from "../shell/Panel";

interface Props {
  index: number;
  activeIndex: number;
}

const COLLAPSED = 4;

export default function Work({ index, activeIndex }: Props) {
  const [roleId, setRoleId] = useState(experience[0].id);
  const [expanded, setExpanded] = useState(false);
  const role = experience.find((r) => r.id === roleId) ?? experience[0];
  const shown = expanded ? role.bullets : role.bullets.slice(0, COLLAPSED);
  const hidden = role.bullets.length - shown.length;

  return (
    <Panel id="work" label="Work experience" index={index} activeIndex={activeIndex}>
      <PanelBody className="max-w-3xl">
        <Item i={0}>
          <SectionHeading kicker="Experience" title="Where I've shipped" />
        </Item>

        <Item i={1}>
          <div role="tablist" aria-label="Roles" className="no-scrollbar -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1">
            {experience.map((r) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={r.id === roleId}
                onClick={() => {
                  setRoleId(r.id);
                  setExpanded(false);
                }}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
                  r.id === roleId
                    ? "border-primary bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground",
                )}
              >
                {r.company}
              </button>
            ))}
          </div>
        </Item>

        <Item i={2}>
          <article className="glass mt-4 rounded-2xl p-5 sm:p-6" aria-live="polite">
            <header className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">
                {role.title} <span className="text-primary">@ {role.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {role.period}
                {role.place ? ` · ${role.place}` : ""}
              </p>
            </header>
            <p className="mb-4 text-sm text-muted-foreground">{role.blurb}</p>

            <ul className="space-y-2.5 text-sm leading-relaxed">
              {shown.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {role.bullets.length > COLLAPSED && (
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {expanded ? "Show less" : `Show ${hidden} more`}
                <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} aria-hidden />
              </button>
            )}

            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {role.tags.map((t) => (
                <li key={t} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </Item>
      </PanelBody>
    </Panel>
  );
}
