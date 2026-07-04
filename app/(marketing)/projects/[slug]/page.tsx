import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectHeader } from "@/components/project/project-header";
import { projectService } from "@/lib/projects";
import { getAdjacentProjects, getProjectContent } from "@/lib/content";
import { ProjectContent } from "@/components/project/project-content";
import { ProjectFooter } from "@/components/project/project-footer";
import { ProjectSummary } from "@/components/project/project-summary";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectService.getSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectService.getBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const { previousProject, nextProject } = getAdjacentProjects(slug);

  const Content = getProjectContent(slug);
  const project = projectService.getBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader project={project} />
      {/*<ProjectSummary project={project} />*/}
      {Content ? (
        <ProjectContent>
          <Content />
        </ProjectContent>
      ) : (
        <p>Case study coming soon.</p>
      )}

      <ProjectFooter
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </>
  );
}
