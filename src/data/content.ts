/**
 * Single source of truth for all portfolio copy.
 * Edit this file to update the site; components only render what is here.
 * Source: resume (LaTeX), Apr 2026. Do not add numbers that are not in the resume.
 */

export const profile = {
  name: "Atharva Prabhu",
  role: "AI Engineer",
  headline: "I build AI systems that run in the real world.",
  subline:
    "AI engineer shipping LLM assistants, RAG and closed-loop control software for oilfield operations, with earlier work in computer vision and MLOps pipelines.",
  location: "Odessa, TX",
  email: "atharvaprabhu6@gmail.com",
  linkedin: "https://linkedin.com/in/atharva-prabhu21/",
  github: "https://github.com/APrabhu21",
  resume: "/resume.pdf",
  siteUrl: "https://atharvaprabhu.qzz.io",
};

export const stats = [
  { value: "78%", label: "genome pipeline time cut (18h → 4h)" },
  { value: "221", label: "RAG eval questions, run in CI" },
  { value: "10,000+", label: "genomic datasets auto-classified" },
  { value: "≥95%", label: "in-range dosing target (1–4 ppm)" },
];

export const about = {
  title: "About",
  paragraphs: [
    "AI engineer at JAN Resources, where I build tool-calling LLM assistants, a RAG service with a 221-question eval, and a shadow-mode H₂S dosing controller for oilfield customers.",
    "Before that: an MS in Computer Science at Buffalo (3.83 GPA, computer vision and deep learning) and pipeline work in bioinformatics and archival film.",
  ],
};

export const education = [
  {
    degree: "MS Computer Science",
    school: "University at Buffalo, SUNY",
    period: "Aug 2024 – Dec 2025",
    note: "GPA 3.83 / 4.0",
    courses: ["Deep Learning (A)", "Machine Learning (A)", "Pattern Recognition (A-)", "Operating Systems (A)"],
  },
  {
    degree: "BE Computer Science",
    school: "Savitribai Phule Pune University",
    period: "Aug 2019 – Jul 2023",
    note: "Deep learning, AI, NLP, computer graphics, HPC",
    courses: [] as string[],
  },
];

export interface Role {
  id: string;
  title: string;
  company: string;
  place?: string;
  period: string;
  blurb: string;
  bullets: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    id: "jan",
    title: "AI Engineer",
    company: "JAN Resources",
    place: "Odessa, TX",
    period: "Apr 2026 – Present",
    blurb:
      "Building AI and software products for an oilfield chemical company; I choose the architecture and tooling.",
    // TODO(atharva): add outcome metrics if you have them (assistant usage, controller pilot results, pilot-site status).
    bullets: [
      "Built an LLM assistant that lets customers ask about their own sites; it queries live TimescaleDB telemetry through tool calls (Claude Haiku 4.5), with tenant isolation, streamed and spoken replies, and admin review.",
      "Engineered an H₂S chemical-dosing controller (feedforward plus PID trim) with stale-data rejection, safe fallback and shadow-mode rollout, targeting at least 95% of time in the 1–4 ppm range.",
      "Built an operations system in 4 days: append-only chemical ledger, tank and load reconciliation, digital BOLs and OpenInvoice export, sized for up to $750K in monthly invoices for a single customer.",
      "Designed a 221-question RAG evaluation (20 hand-written, 201 generated) that measures how documentation wording differs from customer phrasing; it runs in CI.",
      "Built a RAG service that searches PDF, DOCX and PPTX documents using hybrid retrieval plus reranking, with a CLI for ingestion, querying and synthetic Q&A generation.",
      "Built a multi-tenant SCADA monitoring platform streaming about 20 Ignition tags per site every 5 seconds over WebSockets, with site-scoped access and SMS alarms.",
      "Fixed cross-user cache leaks, N+1 queries and other security and performance issues, and recovered a failed blue/green deploy by batching a 2.4M-row backfill behind an advisory lock.",
      "Launched a public AI sales assistant with local text-to-speech and guardrails protecting the proprietary dosing method.",
      "Built a gateway that routes requests between a local Ollama model and Claude, with direct-API fallback, deployed as a resource-capped container on a shared GPU server.",
    ],
    tags: ["Claude API", "Tool calling", "RAG", "Ollama", "TimescaleDB", "React", "Express", "TypeScript", "Docker"],
  },
  {
    id: "filmic",
    title: "AI/ML Intern",
    company: "Filmic Technologies",
    place: "via CSE 611",
    period: "Aug – Dec 2025",
    blurb: "Automated quality analysis for digitized archival film.",
    bullets: [
      "Architected a 5-stage Snakemake pipeline running 13 ML models over archival film footage, resource-aware for GPU memory limits.",
      "Built PyTorch models for sprocket-hole pattern (1R vs 2R), aspect ratio and optical soundtrack detection; integrated Synchformer, Whisper ASR and Tesseract OCR.",
      "Shipped a React + MySQL front end with automated ingestion of detection results for archivists.",
    ],
    tags: ["PyTorch", "Snakemake", "Computer vision", "Whisper", "React", "MySQL"],
  },
  {
    id: "ncc",
    title: "Bioinformatics Research Intern",
    company: "National Centre for Cell Science",
    place: "Pune",
    period: "Aug 2023 – Jul 2024",
    blurb: "Faster genomics workflows for a 7-member interdisciplinary team.",
    bullets: [
      "Cut bacterial genome processing from 18 to 4 hours (78%) with Snakemake.",
      "Built Anvi'o dashboards for automated classification of 10,000+ genomic datasets.",
    ],
    tags: ["Snakemake", "Anvi'o", "Python", "Statistics"],
  },
  {
    id: "indio",
    title: "Embedded Systems Intern",
    company: "Indio Networks",
    place: "Pune",
    period: "Jul – Oct 2022",
    blurb: "Automation tooling for router firmware.",
    bullets: [
      "Cut router firmware installation time by 60% with Python deployment automation.",
      "Built diagnostic automation for system error detection, credited with a 40% operational-efficiency gain.",
      "Wrote documentation for 6 router models, cutting onboarding time 30% across a 46-member team.",
    ],
    tags: ["Python", "Embedded", "Automation"],
  },
];

export interface Project {
  id: string;
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  tech: string[];
  details: string[];
  demo?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "energy",
    title: "Energy Demand Forecasting",
    kind: "MLOps · Full-stack ML",
    summary: "Self-running MLOps platform that forecasts US electricity demand every 6 hours and retrains itself when data drifts, on free-tier infrastructure.",
    highlights: ["MAE 4,800 MWh (24 h)", "<50 ms inference", "Auto-retrains on drift"],
    tech: ["LightGBM", "MLflow", "DagsHub", "FastAPI", "Evidently AI", "GitHub Actions", "Streamlit"],
    details: [
      "GitHub Actions ETL every 6 h pulls EIA and Open-Meteo data: 720 hourly records over 30-day rolling windows, 20+ engineered features, <1% ETL error rate.",
      "LightGBM model with automated hyperparameter search: R² 0.54, MAPE 17–18%, 95% confidence intervals.",
      "Evidently AI drift detection (30% threshold) triggers retraining; MLflow registry on DagsHub handles versioning and champion selection across 100+ runs.",
      "FastAPI service with Pydantic validation, Prometheus metrics and health checks; Streamlit dashboard for performance, drift and feature importance.",
      "4 daily CI/CD workflows cover data ingestion, drift monitoring, retraining and Git-based data versioning, all on free tiers.",
    ],
    demo: "https://mlops-energy.streamlit.app/",
  },
  {
    id: "grant",
    title: "GrantMatcherAI",
    kind: "Full-stack AI app",
    summary: "Semantic grant discovery for nonprofits, researchers and startups, ranked by a hybrid score.",
    highlights: ["Hybrid semantic + eligibility ranking", "Thousands of federal grants", "Free-tier deployment"],
    tech: ["Next.js 16", "FastAPI", "PostgreSQL", "FastEmbed", "NextAuth", "Docker"],
    details: [
      "FastEmbed (BAAI/bge-small-en-v1.5) embeds grant descriptions and mission statements; cosine matching across thousands of federal opportunities.",
      "Hybrid scoring blends semantic similarity with eligibility and focus-area boosts.",
      "Automated ingestion from Grants.gov and SAM.gov with audit logs.",
      "JWT + bcrypt + OAuth2 + NextAuth sessions; 6-stage application tracker (interested → awarded/rejected).",
      "Deployed on Vercel, Render (Docker) and Neon PostgreSQL, all on free tiers.",
    ],
    demo: "https://grantmatcher-ai.vercel.app/",
  },
  {
    id: "plailist",
    title: "Plailist",
    kind: "AI party DJ",
    summary: "An AI DJ that reads the room and the guest list, then curates and announces the next song.",
    highlights: ["Gemini + audio classifier", "Crowd-energy aware", "Voiced by ElevenLabs"],
    tech: ["Google Gemini", "Spotify API", "OAuth 2.0", "ElevenLabs", "Audio ML"],
    details: [
      "Acoustic scene classification detects rising, energetic and calming-down crowd states in real time.",
      "Aggregates listening history, genres and favourite artists from connected guests via OAuth 2.0.",
      "Gemini balances individual taste against crowd energy for smooth transitions; ElevenLabs voices the DJ.",
    ],
  },
  {
    id: "rag",
    title: "Personal RAG System",
    kind: "NLP · LLM",
    summary: "Semantic search and Q&A over 1,000+ personal documents with sub-second queries.",
    highlights: ["1,000+ docs", "Sub-second queries", "Dockerized"],
    tech: ["LangChain", "GPT-4", "Pinecone", "FAISS", "Sentence Transformers", "FastAPI"],
    details: [
      "LangChain + GPT-4 + Pinecone pipeline with sentence-transformer embeddings and FAISS similarity search.",
      "Custom prompt engineering for context-aware answers; Streamlit front end, FastAPI back end, Docker deploy.",
    ],
  },
  {
    id: "robot",
    title: "Ball-Tracking Quadruped",
    kind: "Computer vision · Robotics",
    summary: "A Unitree Go2 that sees a ball and chases it, built as a research assistant in the A2IL Lab.",
    highlights: ["YOLOv8 + NanoTrack", "PID control", "ROS"],
    tech: ["YOLOv8", "NanoTrack", "ROS", "Unitree Go2 SDK", "PID"],
    details: [
      "Real-time detection and tracking that holds up under varying lighting.",
      "Vision-to-motion control: ball coordinates become smooth trajectories via PID and gait optimization.",
      "Contributed to the ROS architecture linking vision and motion for low-latency autonomous navigation.",
    ],
  },
  {
    id: "dl",
    title: "Deep Learning Lab",
    kind: "NLP · CV · Time series",
    summary: "Four graduate deep-learning projects, benchmarked properly.",
    highlights: ["BART 45.5 ROUGE-1", "Pix2Pix SSIM 0.86", "LSTM R² 0.81"],
    tech: ["PyTorch", "BART", "Pix2Pix cGAN", "ViT", "LSTM"],
    details: [
      "News summarization: BART on Multi-News (44,972 articles) — 45.50% ROUGE-1, 17.10% ROUGE-2, 86.69% BERTScore F1; mixed precision cut training time 30%.",
      "Sketch-to-photo Pix2Pix (UNet + PatchGAN, LSGAN + L1): SSIM 0.86, dataset augmented from 188 to 1,504 pairs.",
      "5-layer LSTM for air-quality forecasting: 87.50% accuracy, R² 0.81.",
      "Vision Transformer on Cats vs Dogs (24,998 images): 97.76% validation, 97.47% test accuracy.",
    ],
  },
];

export const moreWork = [
  { title: "Multi-modal detection (YOLOv8, CRAFT)", metric: "95.0% mAP@0.5 person detection" },
  { title: "Salary prediction analytics", metric: "85%+ accuracy, 12,000+ records" },
  { title: "Job-market trends prediction", metric: "8 models, 75–86% accuracy" },
  { title: "IMDb relational DB (BCNF, SQL)", metric: "30% faster joins via indexing" },
];

export const skills = [
  { group: "LLMs & RAG", items: ["Claude API", "Tool calling", "Ollama", "Hybrid retrieval", "Cross-encoder reranking", "RAG evaluation", "Guardrails"] },
  { group: "ML / DL", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "OpenCV", "Computer vision", "NLP"] },
  { group: "MLOps & Deploy", items: ["Docker", "CI/CD", "MLflow", "FastAPI", "Flask", "Streamlit"] },
  { group: "Web & Data", items: ["React", "Express", "WebSockets", "TimescaleDB", "PostgreSQL", "SCADA (Ignition)"] },
  { group: "Languages & Big Data", items: ["Python", "TypeScript", "C/C++", "R", "SQL", "Bash/Linux", "Git", "Spark", "Hadoop"] },
];

export interface SectionDef {
  id: string;
  label: string;
}

export const sections: SectionDef[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
