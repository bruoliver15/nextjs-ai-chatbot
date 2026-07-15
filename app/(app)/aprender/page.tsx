import { CheckCircle2, Circle, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getCompletedLessonIds, getLearningPath } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aprender — IA Lucrativa",
};

export default async function AprenderPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const [{ modules }, completedIds] = await Promise.all([
    getLearningPath(supabase),
    getCompletedLessonIds(supabase, user.id),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          Aprender
        </h1>
        <p className="text-muted-foreground">
          Módulos e aulas para você sair do zero até o seu primeiro projeto.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {modules.map((module, moduleIndex) => {
          const lessons = module.lessons
            .slice()
            .sort((a, b) => a.position - b.position);
          const completedInModule = lessons.filter((lesson) =>
            completedIds.has(lesson.id)
          ).length;

          return (
            <section
              className="rounded-xl border bg-card shadow-sm"
              key={module.id}
            >
              <div className="flex flex-col gap-1 border-b p-5">
                <p className="font-semibold text-primary text-xs uppercase tracking-wide">
                  Módulo {moduleIndex + 1}
                </p>
                <h2 className="font-bold font-heading text-lg">
                  {module.title}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {module.description}
                </p>
                <p className="mt-1 text-muted-foreground text-xs">
                  {completedInModule} de {lessons.length} aulas concluídas
                </p>
              </div>

              <ul>
                {lessons.map((lesson) => {
                  const isCompleted = completedIds.has(lesson.id);
                  return (
                    <li className="border-b last:border-b-0" key={lesson.id}>
                      <Link
                        className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-secondary/60"
                        href={`/aprender/${module.id}/${lesson.id}`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="size-5 shrink-0 text-accent" />
                        ) : (
                          <Circle className="size-5 shrink-0 text-muted-foreground" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p
                            className={cn(
                              "truncate font-medium",
                              isCompleted && "text-muted-foreground"
                            )}
                          >
                            {lesson.title}
                          </p>
                          <p className="truncate text-muted-foreground text-sm">
                            {lesson.description}
                          </p>
                        </div>
                        <span className="flex shrink-0 items-center gap-1 text-muted-foreground text-xs">
                          <Clock className="size-3.5" />
                          {lesson.estimated_minutes} min
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
