import type { ReactNode } from "react";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

interface SectionHeaderProps {
  title: ReactNode;
  description: ReactNode;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <Heading size="h2">{title}</Heading>

      <Text variant="lead">{description}</Text>
    </div>
  );
}
