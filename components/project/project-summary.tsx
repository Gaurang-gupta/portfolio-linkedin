import type { Project } from "@/types/project";

interface ProjectSummaryProps {
  project: Project;
}

export function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <section className="bg-card my-10 rounded-2xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">Project Summary</h2>

      <dl className="grid gap-5 sm:grid-cols-2">
        {project.summary.map((item) => (
          <div key={item.label}>
            <dt className="text-muted-foreground text-sm">{item.label}</dt>

            <dd className="mt-1 font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
