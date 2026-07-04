import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { RepositoryLinks } from "@/components/project/repository-links";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-card overflow-hidden rounded-xl border">
      <div className="relative aspect-[16/9]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="cover"
        />
      </div>

      <div className="space-y-5 p-6">
        <Heading as="h3" size="h3">
          {project.title}
        </Heading>

        <Text>{project.description}</Text>

        <div className="border-border border-l-2 pl-4">
          <Text className="text-foreground font-medium">Engineering Focus</Text>

          <Text variant="muted" className="mt-2">
            {project.focus}
          </Text>
        </div>

        <div className="flex flex-wrap gap-3">
          <RepositoryLinks repositories={project.repositories} />

          <Button asChild size="sm">
            <Link href={`/projects/${project.slug}`}>
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
