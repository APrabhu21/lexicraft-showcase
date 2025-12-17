import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Brain, Database, Eye, Zap, Music } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Plailist - AI-Powered Dynamic Party DJ System",
      description: "Architected real-time music recommendation system integrating Spotify/Apple Music APIs, Google Gemini LLM, and audio classification models to autonomously curate party playlists based on attendee preferences and crowd energy dynamics.",
      icon: <Music className="w-6 h-6" />,
      tech: ["Google Gemini", "Spotify API", "OAuth 2.0", "Audio Classification", "ElevenLabs TTS", "Real-time Sync"],
      highlights: ["Multi-user preference aggregation", "AI DJ voice synthesis", "Dynamic playlist adaptation"],
      type: "Full-Stack ML Application"
    },
    {
      title: "AI-Powered Retrieval-Augmented Generation System",
      description: "Architected full-stack RAG pipeline integrating LangChain, OpenAI GPT-4, and Pinecone vector database to enable semantic search across 1000+ personal documents with sub-second query response times.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["LangChain", "OpenAI GPT-4", "Pinecone", "FAISS", "Streamlit", "FastAPI", "Docker"],
      highlights: ["Sub-second query response", "1000+ documents", "Production-ready system"],
      type: "Personal Project"
    },
    {
      title: "Natural Language Processing - Text Summarization System",
      description: "Engineered production-ready abstractive text summarization system using BART transformer architecture, achieving 45.50% ROUGE-1 and 86.69% BERTScore F1 on Multi-News dataset.",
      icon: <Database className="w-6 h-6" />,
      tech: ["BART", "PyTorch", "Transformers", "ROUGE", "BERTScore", "Seq2Seq"],
      highlights: ["45.50% ROUGE-1", "17.10% ROUGE-2", "44,972+ articles processed"],
      type: "Advanced Deep Learning Project"
    },
    {
      title: "Computer Vision - Generative AI for Image Translation",
      description: "Developed production-ready Pix2Pix cGAN system for sketch-to-photo translation, achieving final generator loss of 3.68 and SSIM score of 0.86 on facial image generation.",
      icon: <Eye className="w-6 h-6" />,
      tech: ["Pix2Pix", "cGAN", "UNet", "PatchGAN", "SSIM", "PSNR"],
      highlights: ["SSIM: 0.86", "Generator loss: 3.68", "256×256 output images"],
      type: "Advanced Deep Learning Project"
    },
    {
      title: "Autonomous Ball-Tracking Quadruped Robot",
      description: "Implemented real-time computer vision pipeline using YOLOv8 for object detection and NanoTrack for continuous tracking, achieving robust ball detection under varying lighting conditions.",
      icon: <Zap className="w-6 h-6" />,
      tech: ["YOLOv8", "NanoTrack", "PID Control", "ROS", "Unitree Go2 SDK", "Computer Vision"],
      highlights: ["Real-time tracking", "Varying lighting conditions", "Low-latency communication"],
      type: "Research Assistant, A2IL Lab"
    }
  ];

  const additionalProjects = [
    {
      title: "Automated Salary Prediction & Employment Analytics",
      description: "Developed ensemble ML models achieving 85%+ prediction accuracy on 12,000+ employment records from 4 integrated datasets.",
      tech: ["Random Forest", "XGBoost", "Neural Networks", "Streamlit"],
      metrics: ["85%+ accuracy", "12,000+ records", "4 datasets integrated"]
    },
    {
      title: "Machine Learning - Time Series Forecasting System",
      description: "Production-ready LSTM forecasting model achieving 87.50% accuracy on air quality time-series prediction.",
      tech: ["LSTM", "Time Series", "TensorBoard", "StandardScaler"],
      metrics: ["87.50% accuracy", "RMSE: 0.3370", "R²: 0.8109"]
    },
    {
      title: "Vision Transformer (ViT) for Image Classification", 
      description: "Implemented Vision Transformer architecture achieving 97.76% validation accuracy on Cats vs Dogs dataset.",
      tech: ["Vision Transformer", "Transfer Learning", "PyTorch", "ImageNet"],
      metrics: ["97.76% validation accuracy", "24,998 images processed"]
    },
    {
      title: "Multi-Modal Detection & Recognition System",
      description: "Comprehensive person detection pipeline using YOLOv8n architecture, achieving 95.0% mAP@0.5.",
      tech: ["YOLOv8n", "CRAFT", "Object Detection", "Text Recognition"],
      metrics: ["95.0% mAP@0.5", "92.9% precision", "20.6ms inference time"]
    },
    {
      title: "SQL Database Optimization for Movie Analytics",
      description: "Architected comprehensive relational database with 15+ normalized tables for IMDb dataset, optimizing query performance by 30%.",
      tech: ["SQL", "PostgreSQL", "Database Design", "Power BI"],
      metrics: ["4+ million records", "30% performance improvement", "6+ visualizations"]
    },
    {
      title: "Job Market Trends Prediction Analytics",
      description: "Architected predictive modeling system integrating university data and labor statistics to forecast job market trends.",
      tech: ["Web Scraping", "API Integration", "8 ML Models", "Streamlit"],
      metrics: ["75-86% accuracy", "SQLite integration", "32% job application increase"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end ML solutions from research to production, showcasing expertise in deep learning and computer vision
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 group animate-scale-in hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg text-white">
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
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card border-0 group animate-fade-in">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div>
                      <h5 className="font-medium text-xs mb-1">Metrics</h5>
                      <div className="space-y-1">
                        {project.metrics.map((metric, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20 block w-fit">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-xs mb-1">Tech</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;