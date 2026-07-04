import { AlertCircle, CheckCircle2, Info, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

type CalloutType = "info" | "note" | "success" | "warning";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const variants = {
  info: {
    icon: Info,
    container:
      "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40",
    iconClass: "text-blue-600 dark:text-blue-400",
    title: "Information",
  },

  note: {
    icon: Lightbulb,
    container:
      "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
    iconClass: "text-amber-600 dark:text-amber-400",
    title: "Engineering Decision",
  },

  success: {
    icon: CheckCircle2,
    container:
      "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40",
    iconClass: "text-green-600 dark:text-green-400",
    title: "Result",
  },

  warning: {
    icon: AlertCircle,
    container:
      "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40",
    iconClass: "text-red-600 dark:text-red-400",
    title: "Warning",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <aside className={cn("my-8 rounded-xl border p-5", variant.container)}>
      <div className="flex items-start gap-4">
        <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", variant.iconClass)} />

        <div className="min-w-0 flex-1">
          <h4 className="mb-2 font-semibold">{title ?? variant.title}</h4>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
