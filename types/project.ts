export interface Repository {
  name: string;
  url: string;
}

export interface ProjectSummaryItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  focus: string;
  coverImage: string;
  repositories: Repository[];
  featured: boolean;
  liveDemoUrl?: string;
  heroImage?: string;
  gallery?: string[];
  demoUrl?: string;
  summary: ProjectSummaryItem[];
}
