import { Clock, Lightbulb, ListChecks } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/copy-button";
import { LessonCompleteButton } from "@/components/lessons/lesson-complete-button";
import { Button } from "@/components/ui/button";
import { getCompletedLessonIds, getLearningPath } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const [{ lessons }, completedIds] = await Promise.all([
    getLearningPath(supabase),
    getCompletedLessonIds(supabase, user.id),
  ]);

  const lessonIndex = lessons.findIndex((item) => item.id === lessonId);

  if (lessonIndex === -1) {
    notFound();
  }

  const lesson = lessons[lessonIndex];
  const previousLesson = lessons[lessonIndex - 1] ?? null;
  const nextLesson = lessons[lessonIndex + 1] ?? null;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div>
        <p className="font-semibold text-primary text-xs uppercase tracking-wide">
          {lesson.moduleTitle}
        </p>
        <h1 className="mt-1 font-bold font-heading text-2xl sm:text-3xl">
          {lesson.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{lesson.description}</p>
        <div className="mt-3 flex items-center gap-1.5 text-muted-foreground text-sm">
          <Clock className="size-4" />
          {lesson.estimated_minutes} minutos
        </div>
      </div>

      <div className="flex flex-col gap-4 whitespace-pre-line text-[15px] text-foreground/90 leading-relaxed">
        {lesson.content}
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 font-heading font-semibold">
          <Lightbulb className="size-[18px] text-accent" />
          Exemplo prático
        </div>
        <p className="whitespace-pre-line text-muted-foreground text-sm">
          {lesson.example}
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-heading font-semibold">
            Prompt para copiar
          </div>
          <CopyButton text={lesson.prompt_text} />
        </div>
        <p className="whitespace-pre-line rounded-lg bg-secondary p-3 text-sm">
          {lesson.prompt_text}
        </p>
        <p className="mt-2 text-muted-foreground text-xs">
          Antes de utilizar, substitua as informações entre colchetes.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 font-heading font-semibold">
          <ListChecks className="size-[18px] text-primary" />
          Exercício
        </div>
        <p className="whitespace-pre-line text-muted-foreground text-sm">
          {lesson.exercise}
        </p>
      </div>

      <LessonCompleteButton
        initialCompleted={completedIds.has(lesson.id)}
        lessonId={lesson.id}
        userId={user.id}
      />

      <div className="flex items-center justify-between gap-3 border-t pt-6">
        {previousLesson ? (
          <Button asChild variant="outline">
            <Link
              href={`/aprender/${previousLesson.moduleId}/${previousLesson.id}`}
            >
              ← Aula anterior
            </Link>
          </Button>
        ) : (
          <Button disabled variant="outline">
            ← Aula anterior
          </Button>
        )}
        {nextLesson ? (
          <Button asChild>
            <Link href={`/aprender/${nextLesson.moduleId}/${nextLesson.id}`}>
              Próxima aula →
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/aprender">Voltar para Aprender</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
