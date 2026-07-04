import { navigationLinks } from "@/data/navigation";
import { NavLink } from "./nav-link";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigationLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}
