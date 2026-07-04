import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn("relative flex gap-5 py-4", className)}>
      {/* Number */}
      <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-semibold">
        {number}
      </div>

      {/* Vertical connector */}
      <div className="bg-border absolute top-12 left-5 h-[calc(100%-2.5rem)] w-px last:hidden" />

      {/* Content */}
      <div className="min-w-0 flex-1 pb-6">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
