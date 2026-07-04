import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Badge } from "@/components/mdx/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}

      <Section>
        <Container>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              {contact.title}
            </h1>

            <p className="text-xl leading-8 text-muted-foreground">
              {contact.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Links */}

      <Section>
        <Container>
          <div className="space-y-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Get in Touch
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Email */}

              <div className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />

                  <h3 className="font-semibold">Email</h3>
                </div>

                <p className="mt-4 break-all text-muted-foreground">
                  {contact.email}
                </p>

                <Link
                  href={`mailto:${contact.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  Send Email

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Other Links */}

              {contact.links.map((link) => (
                <div
                  key={link.title}
                  className="rounded-xl border p-6"
                >
                  <h3 className="font-semibold">
                    {link.title}
                  </h3>

                  <p className="mt-4 break-all text-muted-foreground">
                    {link.value}
                  </p>

                  <Link
                    href={link.href}
                    target={
                      link.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                  >
                    {link.title === "Resume" ? (
                      <>
                        Download

                        <Download className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Open

                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Interests */}

      <Section>
        <Container>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Currently Interested In
            </h2>

            <div className="flex flex-wrap gap-3">
              {contact.interests.map((interest) => (
                <Badge key={interest}>{interest}</Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}

      <Section>
        <Container>
          <div className="rounded-2xl border bg-muted/30 p-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Let's Build Something Great
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Whether it's discussing backend engineering, AI systems, or
              potential opportunities, I'd be happy to connect.
            </p>

            <Link
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}

              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
