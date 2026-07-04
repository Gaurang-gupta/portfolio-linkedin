import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProjectGrid } from "@/components/project/project-grid";

import { projectService } from "@/lib/projects";

export function FeaturedProjects() {
  const featuredProjects = projectService.getFeatured();

  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Selected Engineering Projects"
            description="A selection of projects focused on production software, backend engineering, and reliable AI systems."
          />

          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </Section>
  );
}
