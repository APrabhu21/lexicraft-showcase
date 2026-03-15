import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <ScrollProgress />
      <main className="min-h-screen pt-16">
        <Hero />
        <WaveDivider fillClass="fill-muted/30" />
        <Experience />
        <WaveDivider fillClass="fill-background" flip />
        <Projects />
        <WaveDivider fillClass="fill-secondary" />
        <Skills />
        <WaveDivider fillClass="fill-secondary" flip />
        <Education />
        <WaveDivider fillClass="fill-[hsl(211,100%,20%)]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
