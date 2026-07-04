import type { MDXComponents } from "mdx/types";
import {
  ArchitectureDecision,
  Badge,
  Callout,
  Image,
  Mermaid,
  CodeBlock,
  Step,
  BadgeGroup,
} from "@/components/mdx";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArchitectureDecision,
    Badge,
    Callout,
    Image,
    Mermaid,
    CodeBlock,
    Step,
    BadgeGroup,
    ...components,
  };
}
