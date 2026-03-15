const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} Atharva Prabhu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/APrabhu21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-background/70 hover:text-background transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/atharva-prabhu21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-background/70 hover:text-background transition-all"
            >
              LinkedIn
            </a>
            <a
              href="mailto:atharvaprabhu6@gmail.com"
              className="text-sm text-background/70 hover:text-background transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
