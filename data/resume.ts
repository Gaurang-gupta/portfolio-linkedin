// data/resume.ts

export const resume = {
  hero: {
    title: "Resume",
    description:
      "Software Engineer with ~2.5 years of experience building production-grade backend infrastructure, AI systems, distributed services, and enterprise web applications.",
    resumeUrl: "/resume.pdf",
  },

  experience: [
    {
      company: "Samsung Research & Development Institute",
      location: "Bengaluru, India",
      role: "Software Engineer",
      period: "Nov 2023 – Present",

      teams: [
        {
          title: "Enterprise Web Architecture & Frontend Systems",
          period: "Mar 2026 – Present",

          highlights: [
            "Engineered client-side input masking and state sanitization for critical multi-factor authentication recovery flows.",
            "Architected localized UI components deployed across 80+ geographical regions with consistent behavior and multilingual support.",
            "Modernized legacy Angular modules as part of an incremental migration to React.",
            "Developed reusable, accessible UI components using Tailwind CSS from complex Figma designs.",
          ],
        },

        {
          title: "Data Engineering & Distributed Platforms",
          period: "Nov 2023 – Mar 2026",

          highlights: [
            "Designed production data pipelines on Google Cloud Platform processing over 30GB of telemetry data daily.",
            "Built incremental ingestion pipelines handling 5GB+ weekly delta loads while reducing cloud compute costs.",
            "Implemented field-level encryption and automated data retention workflows for PII compliance.",
            "Designed indexed transaction schemas powering revenue attribution across multiple business units.",
            "Improved attributed revenue by 10%+ through schema validation and proactive monitoring.",
            "Mentored four software engineering interns and conducted technical interviews.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      title: "AI Resume Analyzer",
      slug: "ai-resume-analyzer",

      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Row-Level Security",
      ],

      highlights: [
        "Production-oriented AI platform featuring asynchronous job processing, PostgreSQL-backed worker queues, and structured LLM evaluation.",
      ],
    },

    {
      title: "Self-Auditing Retrieval-Augmented Generation (RAG) System",
      slug: "self-auditing-rag",

      technologies: [
        "Python",
        "LangChain",
        "Gemini API",
        "ChromaDB",
      ],

      highlights: [
        "RAG system with deterministic auditing layers that validate queries and retrieved evidence before allowing LLM generation.",
      ],
    },

    {
      title: "Latency-Governed ML Inference Service",
      slug: "latency-governed-ml-inference",

      technologies: [
        "Python",
        "FastAPI",
        "Concurrency",
        "Load Testing",
      ],

      highlights: [
        "ML inference service demonstrating SLO monitoring, circuit breakers, admission control, and graceful degradation under load.",
      ],
    },
  ],

  education: [
    {
      institution: "National Institute of Technology (NIT), Jalandhar",
      location: "Jalandhar, India",

      degree:
        "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",

      period: "Graduated 2023",

      capstone: "Embedded Adaptive Lighting Networks (Arduino)",
    },
  ],

  certifications: [
    {
      title: "Deep Learning Specialization",
    },
  ],

  skills: {
    Languages: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL (PostgreSQL)",
    ],

    "Backend & Systems": [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Concurrency Control",
      "Row-Level Security (RLS)",
    ],

    "Frontend & Web": [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Redux",
    ],

    "AI Engineering": [
      "Retrieval-Augmented Generation (RAG)",
      "LLM Auditing",
      "Vector Search",
      "FAISS",
      "Embeddings",
      "Prompt Engineering",
    ],

    "Tools & Infrastructure": [
      "Google Cloud Platform",
      "Supabase",
      "Firebase",
      "Git",
      "GitHub Actions",
      "ArgoCD",
      "Vercel",
    ],
  },
};
