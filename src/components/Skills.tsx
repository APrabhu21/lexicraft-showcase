import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Brain, Database, Cloud, Award, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95, highlight: "Expert" },
        { name: "C/C++", level: 80, highlight: "Proficient" },
        { name: "R", level: 70, highlight: "Intermediate" },
        { name: "SQL", level: 90, highlight: "Advanced" },
        { name: "BASH/Linux", level: 85, highlight: "Advanced" },
        { name: "Git", level: 90, highlight: "Advanced" }
      ]
    },
    {
      title: "ML/DL Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "PyTorch", level: 95, highlight: "Expert" },
        { name: "TensorFlow", level: 85, highlight: "Advanced" },
        { name: "Scikit-learn", level: 90, highlight: "Advanced" },
        { name: "XGBoost", level: 80, highlight: "Proficient" },
        { name: "OpenCV", level: 90, highlight: "Advanced" },
        { name: "Transformers", level: 88, highlight: "Advanced" }
      ]
    },
    {
      title: "Deployment & APIs",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85, highlight: "Advanced" },
        { name: "Streamlit", level: 90, highlight: "Advanced" },
        { name: "FastAPI", level: 80, highlight: "Proficient" },
        { name: "Flask", level: 75, highlight: "Proficient" },
        { name: "Model Serving", level: 85, highlight: "Advanced" }
      ]
    },
    {
      title: "Big Data & Infrastructure",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Apache Spark", level: 80, highlight: "Proficient" },
        { name: "Hadoop", level: 65, highlight: "Intermediate" },
        { name: "Distributed Computing", level: 80, highlight: "Proficient" },
        { name: "PostgreSQL", level: 85, highlight: "Advanced" },
        { name: "Vector Databases", level: 85, highlight: "Advanced" }
      ]
    }
  ];

  const keyAchievements = [
    {
      title: "3.79 Graduate GPA",
      description: "A grades in core ML/AI coursework",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "4.5x Performance Improvement",
      description: "Computational biology workflow optimization",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "End-to-End ML Systems",
      description: "Research to production deployment",
      icon: <Brain className="w-5 h-5" />
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (level >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-600";
    return "bg-gradient-to-r from-orange-500 to-amber-600";
  };

  const getLevelBadge = (highlight: string) => {
    const colors = {
      "Expert": "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0",
      "Advanced": "bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0",
      "Proficient": "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0",
      "Intermediate": "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-0"
    };
    return colors[highlight as keyof typeof colors] || colors["Intermediate"];
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full ML/AI development stack
          </p>
        </div>
        
        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {keyAchievements.map((achievement, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 text-center">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 bg-gradient-primary rounded-full text-white mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg text-white">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getLevelBadge(skill.highlight)}`}
                      >
                        {skill.highlight}
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Specializations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Core Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default Skills;