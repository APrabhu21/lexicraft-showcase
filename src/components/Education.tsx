import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science with focus on AI and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MS Computer Science */}
          <Card className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Current
                </Badge>
              </div>
              <CardTitle className="text-2xl">MS Computer Science</CardTitle>
              <p className="text-muted-foreground font-medium">
                University at Buffalo, SUNY
              </p>
              <p className="text-sm text-muted-foreground">
                Aug 2024 – Dec 2025
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-accent" />
                <span className="font-semibold text-lg">GPA: 3.79/4.0</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning (A)</Badge>
                    <Badge variant="outline">Machine Learning (A)</Badge>
                    <Badge variant="outline">Pattern Recognition (A-)</Badge>
                    <Badge variant="outline">Operating Systems (A)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* BE Computer Science */}
          <Card className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Completed
                </Badge>
              </div>
              <CardTitle className="text-2xl">BE Computer Science</CardTitle>
              <p className="text-muted-foreground font-medium">
                Savitribai Phule Pune University
              </p>
              <p className="text-sm text-muted-foreground">
                Aug 2019 – July 2023
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Computer Graphics</Badge>
                    <Badge variant="outline">High Performance Computing</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;