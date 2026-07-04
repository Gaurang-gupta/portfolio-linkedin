import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered SaaS platform that analyzes resumes, evaluates ATS compatibility, identifies skill gaps, and generates personalized interview preparation.",
    focus:
      "Production AI workflows, document processing, authentication, and scalable SaaS architecture.",
    coverImage: "/images/projects/ai-resume-analyzer/cover.png",
    repositories: [
      {
        name: "Frontend",
        url: "https://github.com/Gaurang-gupta/ai_resume_analyzer_frontend",
      },
      {
        name: "Backend",
        url: "https://github.com/Gaurang-gupta/ai_resume_analyzer_backend",
      },
    ],
    featured: true,
    demoUrl: "https://ai-resume-analyzer-frontend-sage.vercel.app",
    summary: [
      {
        label: "Status",
        value: "Production",
      },
      {
        label: "Platform",
        value: "Web SaaS",
      },
      {
        label: "Frontend",
        value: "Next.js",
      },
      {
        label: "Backend",
        value: "NodeJS",
      },
      {
        label: "Database",
        value: "Supabase PostgreSQL",
      },
      {
        label: "Worker",
        value: "Railway",
      },
      {
        label: "AI",
        value: "Gemini",
      },
    ],
  },
  {
    slug: "self-auditing-rag",
    title: "Self Auditing RAG",
    description:
      "A Retrieval-Augmented Generation system that validates its own responses using deterministic auditing and confidence scoring.",
    focus:
      "Reliable AI systems, retrieval pipelines, evaluation workflows, and hallucination reduction.",
    coverImage: "/images/projects/self-auditing-rag/cover.png",
    repositories: [
      {
        name: "Repository",
        url: "https://github.com/Gaurang-gupta/Self-Auditing-Retrieval-Augmented-Generation-RAG-System",
      },
    ],
    featured: true,
    summary: [
      {
        label: "Status",
        value: "Production",
      },
      {
        label: "Backend",
        value: "FastAPI",
      },
      {
        label: "AI",
        value: "Gemini",
      },
    ],
  },
  {
    slug: "latency-governed-ml-inference",
    title: "Latency-Governed ML Inference Service",
    description:
      "A backend service that dynamically balances latency and model quality while satisfying configurable service-level objectives.",
    focus:
      "Performance engineering, backend architecture, observability, and latency-aware inference.",
    coverImage: "/images/projects/latency-governed-ml-inference/cover.png",
    repositories: [
      {
        name: "Repository",
        url: "https://github.com/Gaurang-gupta/Latency-Governed-ML-Inference-Service-with-Circuit-Breakers",
      },
    ],
    featured: true,
    summary: [
      {
        label: "Status",
        value: "Production",
      },
      {
        label: "Backend",
        value: "FastAPI",
      },
      {
        label: "AI",
        value: "Gemini",
      },
    ],
  },
  {
    slug: "engineering-portfolio-system",
    title: "Engineering Portfolio System",
    description:
      "A documentation-driven portfolio system designed to present production-grade engineering projects with structured case studies and MDX-based architecture storytelling.",

    focus:
      "Frontend architecture, MDX-driven content systems, and engineering storytelling design.",

    coverImage: "/images/projects/engineering-portfolio-system/cover.png",

    repositories: [
      {
        name: "Repository",
        url: "https://github.com/Gaurang-gupta/portfolio-linkedin",
      },
    ],

    featured: false,
    demoUrl: "https://portfolio-linkedin-kappa.vercel.app/",
    summary: [
      {
        label: "Status",
        value: "Production",
      },
      {
        label: "Frontend",
        value: "Next.js",
      },
      {
        label: "Content",
        value: "MDX",
      },
    ],
  }
];
