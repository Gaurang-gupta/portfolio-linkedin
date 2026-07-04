import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function ProjectsHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-6">
          <Heading as="h1" size="h1">
            Engineering Projects
          </Heading>

          <Text variant="lead">
            A collection of production-focused software systems exploring
            backend engineering, enterprise web applications, and reliable AI
            infrastructure.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
