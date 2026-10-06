import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile, stats } from "@/data/content";
import { Item, Panel, PanelBody } from "../shell/Panel";
import { Magnetic } from "../shell/Interactions";

interface Props {
  index: number;
  activeIndex: number;
  go: (i: number) => void;
}

export default function Home({ index, activeIndex, go }: Props) {
  return (
    <Panel id="home" label="Home" index={index} activeIndex={activeIndex}>
      <PanelBody className="max-w-2xl rounded-3xl bg-background/55 p-5 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
        <Item i={0}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden />
            {profile.name} · {profile.role}
          </p>
        </Item>

        <Item i={1}>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            I build <span className="text-gradient">AI systems</span> that run in the real&nbsp;world.
          </h1>
        </Item>

        <Item i={2}>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{profile.subline}</p>
        </Item>

        <Item i={3} className="mt-7 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              onClick={() => go(1)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:scale-[1.03]"
            >
              Explore my work <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resume}
              download="Atharva_Prabhu_Resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:border-primary"
            >
              <Download className="h-4 w-4" aria-hidden /> Resume
            </a>
          </Magnetic>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="glass grid h-11 w-11 place-items-center rounded-full hover:border-primary hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="glass grid h-11 w-11 place-items-center rounded-full hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Item>

        <Item i={4}>
          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl px-3 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-primary">{s.value}</dd>
                <dd className="text-xs text-muted-foreground" aria-hidden>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Item>

        <Item i={5}>
          <p className="mt-6 hidden text-xs text-muted-foreground md:block">
            ✦ Move to nudge the particles · hold to pull them in · click to burst · use ← → to navigate
          </p>
          <p className="mt-5 text-xs text-muted-foreground md:hidden">✦ Tap to burst · swipe to explore</p>
        </Item>
      </PanelBody>
    </Panel>
  );
}
