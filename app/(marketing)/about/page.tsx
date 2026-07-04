import { Badge } from "@/components/mdx/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { about } from "@/data/about";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      <Section>
        <Container>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              {about.hero.title}
            </h1>

            <p className="text-xl leading-7 text-muted-foreground">
              {about.hero.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* What I Build */}

      <Section>
        <Container>
          <div className="mb-12 max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              What I Build
            </h2>

            <p className="text-muted-foreground leading-7">
              My interests have gradually shifted from building machine
              learning models to designing reliable software systems around
              them.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {about.focus.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-6 transition-colors hover:bg-muted/40"
              >
                <h3 className="mb-3 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills */}

      <Section>
        <Container>
          <div className="mb-12 max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Technical Expertise
            </h2>

            <p className="text-muted-foreground leading-7">
              Technologies I regularly use while building production-oriented
              applications.
            </p>
          </div>

          <div className="space-y-10">
            {Object.entries(about.skills).map(([title, skills]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-lg font-semibold">{title}</h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Principles */}

      <Section>
        <Container>
          <div className="mb-12 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Engineering Principles
            </h2>

            <p className="text-muted-foreground leading-7">
              A few principles that guide how I design and build software.
            </p>
          </div>

          <div className="space-y-5">
            {about.principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />

                <p className="text-muted-foreground leading-7">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beyond Engineering */}

      <Section>
        <Container>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Beyond Engineering
            </h2>

            <p className="leading-7 text-muted-foreground">
              {about.beyond}
            </p>
          </div>
        </Container>
      </Section>

      {/* Currently Exploring */}

      <Section>
        <Container>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Currently Exploring
            </h2>

            <div className="flex flex-wrap gap-3">
              <Badge>Production AI Systems</Badge>
              <Badge>Retrieval-Augmented Generation</Badge>
              <Badge>Inference Infrastructure</Badge>
              <Badge>Distributed Systems</Badge>
              <Badge>Observability</Badge>
              <Badge>Backend Architecture</Badge>
            </div>

            <p className="leading-7 text-muted-foreground">
              {about.current}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
