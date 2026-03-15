import { Badge } from "./ui/badge";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import GradientMesh from "./GradientMesh";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(211,100%,12%)] to-[hsl(211,100%,25%)]">
        <GradientMesh />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-6 text-center text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={item}>
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              MS Computer Science &bull; Open to ML Engineering Roles
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Atharva Prabhu
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl font-medium mb-8 text-white/90"
          >
            ML Engineer & AI Researcher
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg md:text-xl leading-relaxed mb-12 text-white/80 max-w-2xl mx-auto"
          >
            Building end-to-end ML systems from research to production &mdash; deep learning, computer vision, and real-time AI at scale.
          </motion.p>

          {/* Contact Links - Magnetic */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
            <MagneticButton
              href="mailto:atharvaprabhu6@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </MagneticButton>
            <MagneticButton
              href="https://linkedin.com/in/atharva-prabhu21/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://github.com/APrabhu21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary transition-all text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={item}>
            <a
              href="#experience"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-white/10 transition-all animate-bounce"
              aria-label="Scroll to experience"
            >
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
