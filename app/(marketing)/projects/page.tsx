import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/project/project-grid";
import { ProjectsHero } from "@/components/sections/projects-hero";

import { projectService } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = projectService.getAll();

  return (
    <>
      <ProjectsHero />

      <Section>
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </Section>
    </>
  );
}
