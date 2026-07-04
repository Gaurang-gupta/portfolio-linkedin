import Link from "next/link";

import { Container } from "./container";
import { socialLinks } from "@/data/social";

export function Footer() {
  const links = Object.values(socialLinks);

  return (
    <footer className="border-t">
      <Container>
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-6 py-8 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} Gaurang Gupta.</p>

          <nav aria-label="Social links" className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
