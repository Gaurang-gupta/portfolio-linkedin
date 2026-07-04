import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { Project } from "@/types/project";
import { RepositoryLinks } from "./repository-links";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <Heading as="h1" size="h1">
              {project.title}
            </Heading>

            <Text variant="lead">{project.description}</Text>
          </div>

          <div className="border-border border-l-2 pl-5">
            <Heading as="h3" size="h3">
              Engineering Focus
            </Heading>

            <Text variant="muted" className="mt-3">
              {project.focus}
            </Text>
          </div>

          <RepositoryLinks repositories={project.repositories} />
        </div>
      </Container>
    </Section>
  );
}
