import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left aligned */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg text-white">
              <User className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">Atharva Prabhu</span>
          </div>

          {/* Desktop Navigation - Right aligned */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all ${
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button - Right aligned */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-muted hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;