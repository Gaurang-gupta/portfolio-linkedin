import Link from "next/link";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

import type { Project } from "@/types/project";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

import { RepositoryLinks } from "./repository-links";

interface ProjectFooterProps {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
}

export function ProjectFooter({
  project,
  previousProject,
  nextProject,
}: ProjectFooterProps) {
  return (
    <Section>
      <Container>
        <div className="space-y-10 border-t pt-10">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Project Resources</h2>

            <RepositoryLinks repositories={project.repositories} />

            {project.demoUrl && (
              <Button asChild>
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between border-t pt-8">
            {previousProject ? (
              <Button variant="ghost" asChild>
                <Link href={`/projects/${previousProject.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />

                  {previousProject.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Button variant="ghost" asChild>
                <Link href={`/projects/${nextProject.slug}`}>
                  {nextProject.title}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
