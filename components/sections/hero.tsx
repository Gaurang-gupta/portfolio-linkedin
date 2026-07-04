import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl space-y-6">
          <Heading as="h1" size="display">
            {siteConfig.name}
          </Heading>

          <Text className="text-muted-foreground text-xl font-medium">
            {siteConfig.role}
          </Text>

          <Text variant="lead" className="max-w-2xl">
            {siteConfig.tagline}
          </Text>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
