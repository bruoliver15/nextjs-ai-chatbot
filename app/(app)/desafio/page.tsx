import { CheckCircle2, Circle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import {
  getChallengeDays,
  getChallengeProgressMap,
} from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Desafio de 7 dias — IA Lucrativa",
};

export default async function ChallengePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const [days, progressMap] = await Promise.all([
    getChallengeDays(supabase),
    getChallengeProgressMap(supabase, user.id),
  ]);

  const completedCount = days.filter(
    (day) => progressMap.get(day.id)?.completed
  ).length;
  const percent =
    days.length > 0 ? Math.round((completedCount / days.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="font-semibold text-primary text-xs uppercase tracking-wide">
          Jornada guiada
        </p>
        <h1 className="mt-1 font-bold font-heading text-2xl sm:text-3xl">
          Seu Primeiro Projeto com IA em 7 Dias
        </h1>
        <p className="mt-2 text-muted-foreground">
          Um passo pequeno por dia, até você ter um projeto real nas mãos.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            {completedCount} de {days.length} dias concluídos
          </span>
          <span className="text-muted-foreground">{percent}%</span>
        </div>
        <Progress className="mt-3" value={percent} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {days.map((day) => {
          const progress = progressMap.get(day.id);
          const isCompleted = Boolean(progress?.completed);

          return (
            <Link
              className={cn(
                "flex flex-col gap-2 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary",
                isCompleted && "border-accent/40 bg-accent/5"
              )}
              href={`/desafio/${day.day_number}`}
              key={day.id}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary text-xs uppercase tracking-wide">
                  Dia {day.day_number}
                </span>
                {isCompleted ? (
                  <CheckCircle2 className="size-5 text-accent" />
                ) : (
                  <Circle className="size-5 text-muted-foreground" />
                )}
              </div>
              <p className="font-heading font-semibold">{day.title}</p>
              <p className="text-muted-foreground text-sm">{day.goal}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
