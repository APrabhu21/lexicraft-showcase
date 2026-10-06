import { GraduationCap } from "lucide-react";
import { about, education } from "@/data/content";
import { Item, Panel, PanelBody, SectionHeading } from "../shell/Panel";

interface Props {
  index: number;
  activeIndex: number;
}

export default function About({ index, activeIndex }: Props) {
  return (
    <Panel id="about" label="About and education" index={index} activeIndex={activeIndex}>
      <PanelBody className="max-w-3xl">
        <Item i={0}>
          <SectionHeading kicker="About" title="The short version" />
        </Item>
        <Item i={1} className="mt-4 space-y-3 text-base text-muted-foreground sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Item>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {education.map((e, i) => (
            <Item key={e.degree} i={i + 2}>
              <article className="glass h-full rounded-2xl p-5">
                <GraduationCap className="mb-3 h-6 w-6 text-primary" aria-hidden />
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                <p className="mt-3 text-sm font-medium text-primary">{e.note}</p>
                {e.courses.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Key coursework">
                    {e.courses.map((c) => (
                      <li key={c} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Item>
          ))}
        </div>
      </PanelBody>
    </Panel>
  );
}
