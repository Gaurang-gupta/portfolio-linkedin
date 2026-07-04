"use client"
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Container } from "./container";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { MobileNav } from "@/components/navigation/mobile-nav";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Gaurang Gupta
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <div className="hidden md:block">
              <DesktopNav />
            </div>

            <ThemeToggle />

            {/* Mobile button */}
            <button
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
      {/* Mobile nav dropdown */}
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </header>
  );
}
