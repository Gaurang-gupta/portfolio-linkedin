import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { Badge } from "@/components/mdx/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { resume } from "@/data/resume";

export default function ResumePage() {
  return (
    <>
      {/* Hero */}

      <Section>
        <Container>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              {resume.hero.title}
            </h1>

            <p className="text-xl leading-7 text-muted-foreground">
              {resume.hero.description}
            </p>

            <Link
              href={resume.hero.resumeUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4"/>
              Download Resume
            </Link>
          </div>
        </Container>
      </Section>

      {/* Experience */}

      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Professional Experience
              </h2>

              <p className="text-muted-foreground leading-7">
                Experience building production-grade backend infrastructure,
                distributed systems, enterprise web applications, and AI-powered
                software at scale.
              </p>
            </div>

            {resume.experience.map((job) => (
              <div
                key={job.company}
                className="rounded-xl border p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-muted-foreground">
                      {job.company} • {job.location}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>

                <div className="mt-10 space-y-10">
                  {job.teams.map((team) => (
                    <div key={team.title}>
                      <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h4 className="font-semibold">
                          {team.title}
                        </h4>

                        <span className="text-sm text-muted-foreground">
                          {team.period}
                        </span>
                      </div>

                      <ul className="space-y-3 text-muted-foreground">
                        {team.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>

                            <span className="leading-7">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Skills */}

      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Technical Skills
              </h2>

              <p className="text-muted-foreground leading-7">
                Technologies I use to build backend systems, AI applications,
                and production-ready web platforms.
              </p>
            </div>

            <div className="space-y-10">
              {Object.entries(resume.skills).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-semibold">{category}</h3>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Selected Engineering Work */}

      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Selected Engineering Work
              </h2>

              <p className="text-muted-foreground leading-7">
                A selection of production-oriented systems focused on backend
                architecture, AI reliability, and distributed systems.
              </p>
            </div>

            <div className="space-y-8">
              {resume.projects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-xl border p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-3 text-muted-foreground">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />

                            <span className="leading-7">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="group inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      View Case Study

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Education */}

      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Education
              </h2>

              <p className="text-muted-foreground leading-7">
                Academic background and relevant coursework that laid the
                foundation for my engineering career.
              </p>
            </div>

            {resume.education.map((education) => (
              <div
                key={education.institution}
                className="rounded-xl border p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {education.degree}
                    </h3>

                    <p className="mt-1 text-muted-foreground">
                      {education.institution} • {education.location}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {education.period}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      Capstone Project
                    </p>

                    <p className="mt-1 leading-7">
                      {education.capstone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}

      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">
                Certifications
              </h2>

              <p className="text-muted-foreground leading-7">
                Professional certifications that complement my practical
                software engineering experience.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {resume.certifications.map((certification) => (
                <div
                  key={certification.title}
                  className="rounded-xl border p-6"
                >
                  <h3 className="font-semibold">
                    {certification.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Download Resume */}

      <Section>
        <Container>
          <div className="rounded-2xl border bg-muted/30 p-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Want the complete résumé?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Download the latest PDF version for the complete details,
              including professional experience, technical skills, and
              production engineering projects.
            </p>

            <Link
              href={resume.hero.resumeUrl}
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
