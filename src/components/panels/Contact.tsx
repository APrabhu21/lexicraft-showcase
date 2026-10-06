import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import { Item, Panel, PanelBody } from "../shell/Panel";
import { Magnetic } from "../shell/Interactions";

interface Props {
  index: number;
  activeIndex: number;
}

export default function Contact({ index, activeIndex }: Props) {
  return (
    <Panel id="contact" label="Contact" index={index} activeIndex={activeIndex}>
      <PanelBody className="max-w-2xl rounded-3xl bg-background/55 p-5 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
        <Item i={0}>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Let's build something <span className="text-gradient">useful</span>.
          </h2>
        </Item>
        <Item i={1}>
          <p className="mt-4 max-w-lg text-muted-foreground sm:text-lg">Open to AI, ML, MLOps, computer vision and NLP roles. Email is the fastest way to reach me.</p>
        </Item>
        <Item i={2} className="mt-7 flex flex-wrap gap-3">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--glow-primary)]"
            >
              <Mail className="h-4 w-4" aria-hidden /> {profile.email}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resume}
              download="Atharva_Prabhu_Resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium hover:border-primary"
            >
              <Download className="h-4 w-4" aria-hidden /> Download resume
            </a>
          </Magnetic>
        </Item>
        <Item i={3} className="mt-3 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" aria-hidden /> GitHub
          </a>
        </Item>
        <Item i={4}>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden /> Based in {profile.location} · open to relocate
          </p>
        </Item>
      </PanelBody>
    </Panel>
  );
}
