import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

function getAll(): Project[] {
  return projects;
}

function getFeatured(): Project[] {
  return projects.filter((project) => project.featured);
}

function getBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

function getSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export const projectService = {
  getAll,
  getFeatured,
  getBySlug,
  getSlugs,
} as const;
