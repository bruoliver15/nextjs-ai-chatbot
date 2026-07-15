import Link from "next/link";
import { notFound } from "next/navigation";
import { ChallengeDayForm } from "@/components/challenge/challenge-day-form";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  getChallengeDays,
  getChallengeProgressMap,
} from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function ChallengeDayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const dayNumber = Number(day);

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

  const currentDay = days.find((d) => d.day_number === dayNumber);

  if (!currentDay) {
    notFound();
  }

  const progress = progressMap.get(currentDay.id);
  const previousDay = days.find((d) => d.day_number === dayNumber - 1);
  const nextDay = days.find((d) => d.day_number === dayNumber + 1);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div>
        <p className="font-semibold text-primary text-xs uppercase tracking-wide">
          Dia {currentDay.day_number} de {days.length}
        </p>
        <h1 className="mt-1 font-bold font-heading text-2xl sm:text-3xl">
          {currentDay.title}
        </h1>
      </div>

      <div className="flex flex-col gap-4 whitespace-pre-line text-[15px] text-foreground/90 leading-relaxed">
        {currentDay.description}
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <p className="mb-2 font-heading font-semibold">Tarefa de hoje</p>
        <p className="whitespace-pre-line text-muted-foreground text-sm">
          {currentDay.task}
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="font-heading font-semibold">Prompt recomendado</p>
          <CopyButton text={currentDay.prompt_text} />
        </div>
        <p className="whitespace-pre-line rounded-lg bg-secondary p-3 text-sm">
          {currentDay.prompt_text}
        </p>
      </div>

      <ChallengeDayForm
        dayId={currentDay.id}
        goal={currentDay.goal}
        initialCompleted={Boolean(progress?.completed)}
        initialNotes={progress?.notes ?? ""}
        userId={user.id}
      />

      <div className="flex items-center justify-between gap-3 border-t pt-6">
        {previousDay ? (
          <Button asChild variant="outline">
            <Link href={`/desafio/${previousDay.day_number}`}>
              ← Dia anterior
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/desafio">← Visão geral</Link>
          </Button>
        )}
        {nextDay ? (
          <Button asChild>
            <Link href={`/desafio/${nextDay.day_number}`}>Próximo dia →</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/desafio">Ver visão geral</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
