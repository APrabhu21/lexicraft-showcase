import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Brain, Database, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C/C++", "R", "SQL", "BASH/Linux", "Git"]
    },
    {
      title: "ML/DL Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "OpenCV", "Transformers"]
    },
    {
      title: "Deployment & APIs",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "Streamlit", "FastAPI", "Flask", "Model Serving"]
    },
    {
      title: "Big Data & Infrastructure",
      icon: <Database className="w-6 h-6" />,
      skills: ["Apache Spark", "Hadoop", "Distributed Computing", "PostgreSQL", "Vector Databases"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack ML/AI development, from research prototypes to production systems
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg text-white">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm py-1.5 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Core Specializations */}
        <AnimatedSection delay={0.2}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Core Specializations</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Computer Vision", "Natural Language Processing", "Deep Learning",
                "Machine Learning", "Data Science", "MLOps", "Research",
                "Production Systems", "Model Optimization", "Real-time AI Systems"
              ].map((specialization, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-4 bg-gradient-primary text-white border-0 hover:shadow-glow transition-smooth"
                >
                  {specialization}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
