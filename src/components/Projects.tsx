import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Brain, Database, Eye, Zap, Music, Bot, Search } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Production MLOps - Energy Demand Forecasting",
      description: "End-to-end MLOps platform for US electricity demand forecasting with automated pipelines, continuous training, and real-time monitoring.",
      icon: <Zap className="w-6 h-6" />,
      tech: ["LightGBM", "MLflow", "FastAPI", "Evidently AI", "GitHub Actions", "Streamlit"],
      highlights: ["MAE: 4,800 MWh", "100% automation", "$0 infra cost"],
      type: "Full-Stack MLOps System",
      url: "https://mlops-energy.streamlit.app/",
      size: "large" as const
    },
    {
      title: "GrantMatcherAI - AI-Powered Grant Discovery",
      description: "Full-stack grant matching platform with semantic search and hybrid scoring for nonprofits, researchers, and startups.",
      icon: <Search className="w-6 h-6" />,
      tech: ["FastAPI", "Next.js", "PostgreSQL", "FastEmbed", "Grants.gov API", "JWT Auth"],
      highlights: ["Semantic vector matching", "$0 infra cost", "6-stage tracking"],
      type: "Full-Stack AI Application",
      url: "https://grantmatcher-ai.vercel.app/",
      size: "large" as const
    },
    {
      title: "Plailist - AI-Powered Dynamic Party DJ",
      description: "Real-time music recommendation integrating Spotify, Google Gemini, and audio classification for autonomous party playlists.",
      icon: <Music className="w-6 h-6" />,
      tech: ["Google Gemini", "Spotify API", "OAuth 2.0", "ElevenLabs TTS"],
      highlights: ["AI DJ voice synthesis", "Dynamic adaptation"],
      type: "Full-Stack ML Application",
      size: "medium" as const
    },
    {
      title: "RAG System with LangChain + GPT-4",
      description: "Full-stack RAG pipeline with Pinecone vector database for semantic search across 1000+ documents with sub-second responses.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["LangChain", "OpenAI GPT-4", "Pinecone", "FAISS", "Docker"],
      highlights: ["Sub-second queries", "1000+ documents"],
      type: "Personal Project",
      size: "medium" as const
    },
    {
      title: "NLP Text Summarization",
      description: "Abstractive summarization using BART achieving 45.50% ROUGE-1 and 86.69% BERTScore F1 on Multi-News dataset.",
      icon: <Database className="w-6 h-6" />,
      tech: ["BART", "PyTorch", "Transformers", "ROUGE"],
      highlights: ["45.50% ROUGE-1", "86.69% BERTScore"],
      type: "Deep Learning",
      size: "medium" as const
    },
    {
      title: "Pix2Pix cGAN Image Translation",
      description: "Sketch-to-photo translation achieving SSIM 0.86 on facial image generation with UNet generator and PatchGAN discriminator.",
      icon: <Eye className="w-6 h-6" />,
      tech: ["Pix2Pix", "cGAN", "UNet", "PatchGAN"],
      highlights: ["SSIM: 0.86", "256x256 output"],
      type: "Deep Learning",
      size: "medium" as const
    },
    {
      title: "Autonomous Ball-Tracking Quadruped Robot",
      description: "Real-time CV pipeline with YOLOv8 detection and NanoTrack for robust ball tracking under varying conditions.",
      icon: <Bot className="w-6 h-6" />,
      tech: ["YOLOv8", "NanoTrack", "PID Control", "ROS"],
      highlights: ["Real-time tracking", "Low-latency"],
      type: "Research, A2IL Lab",
      size: "medium" as const
    }
  ];

  const additionalProjects = [
    {
      title: "Salary Prediction & Employment Analytics",
      tech: ["Random Forest", "XGBoost", "Neural Networks"],
      metric: "85%+ accuracy on 12K+ records"
    },
    {
      title: "LSTM Time Series Forecasting",
      tech: ["LSTM", "TensorBoard"],
      metric: "87.50% accuracy, R\u00b2: 0.81"
    },
    {
      title: "Vision Transformer (ViT) Classification",
      tech: ["ViT", "Transfer Learning", "PyTorch"],
      metric: "97.76% validation accuracy"
    },
    {
      title: "Multi-Modal Detection System",
      tech: ["YOLOv8n", "CRAFT"],
      metric: "95.0% mAP@0.5, 20.6ms inference"
    },
    {
      title: "SQL Database Optimization",
      tech: ["PostgreSQL", "Power BI"],
      metric: "4M+ records, 30% faster queries"
    },
    {
      title: "Job Market Trends Prediction",
      tech: ["Web Scraping", "8 ML Models"],
      metric: "75-86% accuracy"
    }
  ];

  const largeProjects = featuredProjects.filter((p) => p.size === "large");
  const mediumProjects = featuredProjects.filter((p) => p.size === "medium");

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end ML solutions from research to production
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid - Large featured cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {largeProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 group h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-primary rounded-xl text-white">
                        {project.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {project.type}
                        </Badge>
                        <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    {project.url && (
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-smooth">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h, i) => (
                      <Badge key={i} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bento Grid - Medium cards in varied layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediumProjects.map((project, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.08}>
              <Card className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 group h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-gradient-primary rounded-lg text-white">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((h, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Projects - compact */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl font-bold mb-6 text-center">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProjects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group border border-transparent hover:border-border"
              >
                <h4 className="font-semibold text-sm mb-2 group-hover:text-accent transition-all">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">{project.metric}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
