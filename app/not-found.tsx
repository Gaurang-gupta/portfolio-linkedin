import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container className="max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Page not found
          </h1>

          <p className="text-lg text-muted-foreground leading-7">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </Container>
    </Section>
  );
}
