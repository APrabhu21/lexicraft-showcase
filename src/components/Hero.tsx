import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            Available for ML Engineering Roles • Open to Relocate
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Atharva Prabhu
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
            ML Engineer & AI Researcher
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-white/80 max-w-3xl mx-auto">
            Proven ML engineer with expertise in <span className="font-semibold text-white">deep learning</span> and{' '}
            <span className="font-semibold text-white">computer vision</span>. Demonstrated track record developing{' '}
            <span className="font-semibold text-white">production-ready AI systems</span> that deliver measurable business impact,
            from research prototypes to large-scale deployments serving thousands of users.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth"
              onClick={() => window.open('mailto:atharvaprabhu6@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth"
              onClick={() => window.open('https://linkedin.com/in/atharva-prabhu21/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-smooth"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <Button
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection('education')}
            className="text-white hover:bg-white/10 transition-smooth animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;