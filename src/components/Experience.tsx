import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, TrendingUp, Zap, FileText } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Bioinformatics Research Intern",
      company: "National Centre for Cell Science, Pune",
      period: "Aug 2023 – July 2024",
      type: "Research Internship",
      icon: <Building2 className="w-6 h-6" />,
      achievements: [
        {
          text: "Optimized bacterial genome processing using Snakemake, reducing computational time from 18 to 4 hours",
          metric: "78% improvement",
          icon: <TrendingUp className="w-4 h-4" />
        },
        {
          text: "Developed interactive dashboards using Anvi'o framework for automated classification",
          metric: "10,000+ genomic datasets",
          icon: <Zap className="w-4 h-4" />
        },
        {
          text: "Delivered biological insights through data mining and statistical analysis",
          metric: "7-member interdisciplinary team",
          icon: <FileText className="w-4 h-4" />
        }
      ],
      skills: ["Snakemake", "Anvi'o", "Bioinformatics", "Data Mining", "Statistical Analysis", "Python"]
    },
    {
      title: "Embedded Systems Development Intern",
      company: "Indio Networks Pvt Ltd, Pune",
      period: "July 2022 – Oct 2022",
      type: "Software Development Internship",
      icon: <Building2 className="w-6 h-6" />,
      achievements: [
        {
          text: "Engineered automated deployment solutions using Python",
          metric: "60% reduction in installation time",
          icon: <TrendingUp className="w-4 h-4" />
        },
        {
          text: "Implemented diagnostic automation tools for system error detection",
          metric: "40% improvement in operational efficiency",
          icon: <Zap className="w-4 h-4" />
        },
        {
          text: "Authored technical documentation for 6 router models",
          metric: "30% reduction in onboarding time for 46-member team",
          icon: <FileText className="w-4 h-4" />
        }
      ],
      skills: ["Python", "Embedded Systems", "Automation", "Router Firmware", "Technical Documentation", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building production systems and delivering impactful solutions across different domains
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="transition-smooth hover:shadow-lg border bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                      {experience.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                      <p className="text-base font-medium text-muted-foreground">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {experience.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                {/* Key Achievements */}
                <div className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-1 bg-accent/10 rounded text-accent mt-0.5 flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm leading-relaxed mb-1">
                          {achievement.text}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {achievement.metric}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Skills */}
                <div className="pt-2 border-t">
                  <div className="flex flex-wrap gap-1.5">
                    {experience.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;