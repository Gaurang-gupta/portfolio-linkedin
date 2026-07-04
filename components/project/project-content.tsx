import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface ProjectContentProps {
  children: React.ReactNode;
}

export function ProjectContent({ children }: ProjectContentProps) {
  return (
    <Section>
      <Container>
        <article className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-h1:mb-8 prose-h2:mt-16 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-p:leading-8 prose-ul:my-6 prose-li:my-2 prose-pre:my-8 prose-img:my-8 prose-figure:my-8 max-w-none">
          {children}
        </article>
      </Container>
    </Section>
  );
}
