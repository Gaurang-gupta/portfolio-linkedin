import { Badge } from "@/components/mdx/badge";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export function SkillGroup({
                             title,
                             skills,
                           }: SkillGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
