import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { engineeringPrinciples } from "@/data/principles";

export function EngineeringPrinciples() {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <SectionHeader
            title="Engineering Principles"
            description="The principles that guide how I design, build, and maintain production software."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {engineeringPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="hover:bg-muted/30 rounded-xl border p-8 transition-colors"
              >
                <div className="space-y-3">
                  <Heading as="h3" size="h3">
                    {principle.title}
                  </Heading>

                  <Text>{principle.description}</Text>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
