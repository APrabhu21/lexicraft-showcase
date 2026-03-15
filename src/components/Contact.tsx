import { Badge } from "./ui/badge";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Available for full-time ML Engineering, AI Research, and Data Science roles
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-2xl mx-auto">
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:atharvaprabhu6@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-all text-lg font-medium"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/atharva-prabhu21/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-lg font-medium"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="https://github.com/APrabhu21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Status */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Available for opportunities</span>
                <div className="flex items-center gap-1.5 text-white/70 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  Open to relocate
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
