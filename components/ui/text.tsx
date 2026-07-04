import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      lead: "text-xl text-muted-foreground leading-7",
      body: "text-base text-muted-foreground",
      muted: "text-sm text-muted-foreground",
      small: "text-sm",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: ReactNode;
  className?: string;
}

export function Text({ children, variant, className }: TextProps) {
  return <p className={cn(textVariants({ variant }), className)}>{children}</p>;
}
