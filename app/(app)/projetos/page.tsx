import { FolderKanban } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Meus Projetos — IA Lucrativa",
};

export default async function ProjectsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  const hasProjects = (projects ?? []).length > 0;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-bold font-heading text-2xl sm:text-3xl">
            Meus Projetos
          </h1>
          <p className="text-muted-foreground">
            Acompanhe e continue os projetos que você está criando.
          </p>
        </div>
        <Button asChild>
          <Link href="/criar-projeto">Criar novo projeto</Link>
        </Button>
      </div>

      {hasProjects ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed p-12 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <FolderKanban className="size-6" />
          </div>
          <div>
            <p className="font-heading font-semibold">
              Você ainda não criou nenhum projeto
            </p>
            <p className="text-muted-foreground text-sm">
              Comece agora e transforme uma ideia em um projeto real.
            </p>
          </div>
          <Button asChild>
            <Link href="/criar-projeto">Criar meu primeiro projeto</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
