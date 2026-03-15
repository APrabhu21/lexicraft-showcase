import { Badge } from "./ui/badge";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI and machine learning visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            MS Computer Science &bull; Open to ML Engineering Roles
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Atharva Prabhu
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
            ML Engineer & AI Researcher
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-12 text-white/80 max-w-2xl mx-auto">
            Building end-to-end ML systems from research to production &mdash; deep learning, computer vision, and real-time AI at scale.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:atharvaprabhu6@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/atharva-prabhu21/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/APrabhu21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#experience"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-white/10 transition-all animate-bounce"
            aria-label="Scroll to experience"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
