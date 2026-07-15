import {
  BookOpen,
  CalendarDays,
  Flame,
  FolderKanban,
  Layers,
  MessageSquareText,
} from "lucide-react";
import type { Metadata } from "next";
import { StatCard } from "@/components/dashboard/stat-card";
import { Progress } from "@/components/ui/progress";
import { getProgressData } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meu Progresso — IA Lucrativa",
};

const MOTIVATIONAL_MESSAGES = [
  "Você não precisa saber tudo para continuar.",
  "Um pequeno passo por dia também é progresso.",
  "Aprender, aplicar e revisar faz parte do processo.",
];

export default async function ProgressPage() {
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
    totalModules,
    completedModules,
    totalProjects,
    savedPromptsCount,
    timeline,
  } = await getProgressData(supabase, user.id);

  const percent =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const lastActivity = profile?.last_activity_at
    ? formatDate(profile.last_activity_at)
    : "Nenhuma atividade ainda";

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          Meu Progresso
        </h1>
        <p className="text-muted-foreground">
          Acompanhe sua evolução na IA Lucrativa.
        </p>
      </div>

      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Progresso geral nas aulas</span>
          <span className="text-muted-foreground">{percent}%</span>
        </div>
        <Progress className="mt-3" value={percent} />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={BookOpen}
          label="Aulas concluídas"
          value={`${completedLessons} de ${totalLessons}`}
        />
        <StatCard
          icon={Layers}
          label="Módulos concluídos"
          value={`${completedModules} de ${totalModules}`}
        />
        <StatCard
          icon={FolderKanban}
          label="Projetos criados"
          value={String(totalProjects)}
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
        <StatCard
          icon={CalendarDays}
          label="Última atividade"
          value={lastActivity}
        />
      </section>

      <section className="gradient-brand rounded-xl p-6 text-white shadow-sm">
        <p className="font-heading font-semibold text-lg">
          {
            MOTIVATIONAL_MESSAGES[
              completedLessons % MOTIVATIONAL_MESSAGES.length
            ]
          }
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-bold font-heading text-xl">Linha do tempo</h2>
        {timeline.length === 0 ? (
          <p className="rounded-xl border border-dashed p-8 text-center text-muted-foreground text-sm">
            Suas atividades vão aparecer aqui assim que você começar.
          </p>
        ) : (
          <ol className="flex flex-col gap-4 border-l pl-5">
            {timeline.map((item) => (
              <li className="relative" key={item.id}>
                <span className="-left-[1.45rem] absolute top-1.5 size-2.5 rounded-full bg-primary" />
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-muted-foreground text-xs">
                  {formatDate(item.date)}
                </p>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
