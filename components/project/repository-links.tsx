import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Repository } from "@/types/project";
import { Button } from "@/components/ui/button";

interface RepositoryLinksProps {
  repositories: Repository[];
}

export function RepositoryLinks({ repositories }: RepositoryLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {repositories.map((repository) => (
        <Button key={repository.name} variant="outline" size="sm" asChild>
          <Link href={repository.url} target="_blank" rel="noopener noreferrer">
            {repository.name}

            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
