// data/navigation.ts
import type { NavigationLink } from "@/types/config";
export const navigationLinks: NavigationLink[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const;
