import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function AboutSection({
                          title,
                          description,
                          children,
                        }: SectionProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}
