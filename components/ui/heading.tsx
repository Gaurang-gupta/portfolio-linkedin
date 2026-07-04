import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    size: {
      display: "text-5xl md:text-6xl",
      h1: "text-4xl md:text-5xl",
      h2: "text-3xl md:text-4xl",
      h3: "text-2xl md:text-3xl",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Heading({
  as: Component = "h2",
  children,
  className,
  size,
}: HeadingProps) {
  return (
    <Component className={cn(headingVariants({ size }), className)}>
      {children}
    </Component>
  );
}
