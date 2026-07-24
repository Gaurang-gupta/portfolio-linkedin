import AIResumeAnalyzer from "@/content/projects/ai-resume-analyzer.mdx";
import SelfAuditingRAG from "@/content/projects/self-auditing-rag.mdx";
import LatencyGovernedMLInference from "@/content/projects/latency-governed-ml-inference.mdx";
import EngineeringPortfolio from "@/content/projects/engineering-portfolio-system.mdx"
import AIInterviewSimulator from "@/content/projects/ai-interview-simulator.mdx"
import AIInvestmentResearchPlatform from "@/content/projects/ai-investment-research-platform.mdx"
import { projects } from "@/data/projects";

const projectContent = {
  "ai-resume-analyzer": AIResumeAnalyzer,
  "self-auditing-rag": SelfAuditingRAG,
  "latency-governed-ml-inference": LatencyGovernedMLInference,
  "engineering-portfolio-system": EngineeringPortfolio,
  "ai-interview-simulator": AIInterviewSimulator,
  "ai-investment-research-platform": AIInvestmentResearchPlatform
} as const;

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previousProject: index > 0 ? projects[index - 1] : undefined,
    nextProject: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export function getProjectContent(slug: string) {
  return projectContent[slug as keyof typeof projectContent];
}
