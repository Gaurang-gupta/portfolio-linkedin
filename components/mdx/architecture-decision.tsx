import { Building2 } from "lucide-react";

interface ArchitectureDecisionProps {
  title: string;
  children: React.ReactNode;
}

export function ArchitectureDecision({
  title,
  children,
}: ArchitectureDecisionProps) {
  return (
    <section className="bg-card my-10 rounded-xl border">
      <div className="flex items-center gap-3 border-b px-6 py-4">
        <Building2 className="text-primary h-5 w-5" />

        <div>
          <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Architecture Decision
          </p>

          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none px-6 py-5">
        {children}
      </div>
    </section>
  );
}
