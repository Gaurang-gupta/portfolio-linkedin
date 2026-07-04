import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}
