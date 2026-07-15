import {
  Flame,
  FolderKanban,
  GraduationCap,
  MessageSquareText,
} from "lucide-react";
import Link from "next/link";
import { PathSteps } from "@/components/dashboard/path-steps";
import { StartHereCards } from "@/components/dashboard/start-here-cards";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { projectTypeLabels } from "@/lib/project-options";
import { getDashboardData } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const {
    profile,
    totalLessons,
    completedLessons,
    nextLesson,
    currentProject,
    savedPromptsCount,
  } = await getDashboardData(supabase, user.id);

  const firstName = (profile?.name ?? "").split(" ")[0] || "por aí";
  const progressPercent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          Olá, {firstName}. O que vamos criar hoje?
        </h1>
        <p className="text-muted-foreground">
          Continue de onde parou ou comece um novo projeto.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={GraduationCap}
          label="Progresso geral"
          value={`${progressPercent}%`}
        />
        <StatCard
          icon={FolderKanban}
          label="Projeto atual"
          value={
            currentProject
              ? projectTypeLabels[currentProject.project_type]
              : "Nenhum ainda"
          }
        />
        <StatCard
          icon={MessageSquareText}
          label="Prompts salvos"
          value={String(savedPromptsCount)}
        />
        <StatCard
          icon={Flame}
          label="Sequência de dias"
          value={`${profile?.streak_days ?? 0} dias`}
        />
      </section>

      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-muted-foreground text-sm">
              Próxima aula recomendada
            </p>
            <p className="font-heading font-semibold text-lg">
              {nextLesson ? nextLesson.title : "Você concluiu todas as aulas!"}
            </p>
            {nextLesson ? (
              <p className="text-muted-foreground text-sm">
                {nextLesson.moduleTitle} · {nextLesson.estimated_minutes} min
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link
                href={
                  nextLesson
                    ? `/aprender/${nextLesson.moduleId}/${nextLesson.id}`
                    : "/aprender"
                }
              >
                Continuar aprendendo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/criar-projeto">Criar novo projeto</Link>
            </Button>
          </div>
        </div>
        <Progress className="mt-5" value={progressPercent} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-bold font-heading text-xl">
          Seu caminho recomendado
        </h2>
        <PathSteps />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-bold font-heading text-xl">Comece por aqui</h2>
        <StartHereCards />
      </section>
    </div>
  );
}
