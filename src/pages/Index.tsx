import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
