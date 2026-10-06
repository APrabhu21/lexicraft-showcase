import { skills } from "@/data/content";
import { Item, Panel, PanelBody, SectionHeading } from "../shell/Panel";

interface Props {
  index: number;
  activeIndex: number;
}

export default function Skills({ index, activeIndex }: Props) {
  return (
    <Panel id="skills" label="Skills" index={index} activeIndex={activeIndex}>
      <PanelBody className="max-w-4xl">
        <Item i={0}>
          <SectionHeading kicker="Toolbox" title="What I work with" />
        </Item>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {skills.map((g, gi) => (
            <Item key={g.group} i={gi + 1} className={gi === 0 ? "sm:col-span-2" : undefined}>
              <section className="glass h-full rounded-2xl p-4">
                <h3 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-accent">{g.group}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="cursor-default rounded-lg border border-border bg-secondary/60 px-2.5 py-1 text-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[var(--glow-primary)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </Item>
          ))}
        </div>
      </PanelBody>
    </Panel>
  );
}
