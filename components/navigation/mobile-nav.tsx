"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="md:hidden border-b bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-sm font-medium">Menu</span>

        <button onClick={onClose} aria-label="Close menu">
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-col px-6 pb-6">
        {navigationLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
