import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function InfoCard({
                           title,
                           description,
                           icon,
                         }: InfoCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 transition-colors hover:bg-muted/40">
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="mb-2 text-lg font-semibold">
        {title}
      </h3>

      <p className="text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
