import Link from "next/link";
import { DeleteProjectButton } from "@/components/projects/delete-project-button";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { projectStepLabels, projectTypeLabels } from "@/lib/project-options";
import type { Project } from "@/lib/types/database";
import { formatDate } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate font-heading font-semibold">{project.title}</p>
          <p className="text-muted-foreground text-sm">
            {projectTypeLabels[project.project_type]} · criado em{" "}
            {formatDate(project.created_at)}
          </p>
        </div>
        <DeleteProjectButton
          projectId={project.id}
          projectTitle={project.title}
        />
      </div>

      <div className="flex items-center justify-between text-muted-foreground text-xs">
        <span>Etapa: {projectStepLabels[project.current_step]}</span>
        <span>{project.progress}%</span>
      </div>
      <Progress value={project.progress} />

      <div className="mt-1 flex gap-2">
        <Button asChild className="flex-1">
          <Link href={`/criar-projeto/${project.id}`}>Continuar</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/criar-projeto/${project.id}`}>Editar</Link>
        </Button>
      </div>
    </div>
  );
}
