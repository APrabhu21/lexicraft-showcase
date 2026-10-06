import { Briefcase, Download, FolderGit2, Home, Mail, User, Wrench, type LucideIcon } from "lucide-react";
import { profile, sections } from "@/data/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Interactions";

const icons: Record<string, LucideIcon> = {
  home: Home,
  work: Briefcase,
  projects: FolderGit2,
  skills: Wrench,
  about: User,
  contact: Mail,
};

interface NavProps {
  index: number;
  go: (i: number) => void;
}

export default function Nav({ index, go }: NavProps) {
  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-16 items-center justify-between px-4 sm:px-8 md:px-[6vw]">
        <button
          onClick={() => go(0)}
          className="pointer-events-auto flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
          aria-label="Go to home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">AP</span>
          <span className="hidden sm:inline">atharva.prabhu</span>
        </button>

        <nav aria-label="Primary" className="pointer-events-auto glass hidden rounded-full p-1 md:flex">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-current={i === index ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                i === index ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <Magnetic className="pointer-events-auto">
          <a
            href={profile.resume}
            download="Atharva_Prabhu_Resume.pdf"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>
        </Magnetic>
      </header>

      {/* mobile bottom bar */}
      <nav
        aria-label="Primary mobile"
        className="glass absolute inset-x-3 bottom-3 z-30 grid grid-cols-6 rounded-2xl p-1 md:hidden"
      >
        {sections.map((s, i) => {
          const Icon = icons[s.id];
          return (
            <button
              key={s.id}
              onClick={() => go(i)}
              aria-current={i === index ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-medium transition-colors",
                i === index ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {s.label}
            </button>
          );
        })}
      </nav>

      {/* desktop progress rail */}
      <div className="pointer-events-none absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex" aria-hidden>
        {sections.map((s, i) => (
          <span
            key={s.id}
            className={cn(
              "block w-1.5 rounded-full transition-all duration-500",
              i === index ? "h-8 bg-primary" : "h-1.5 bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </>
  );
}
