import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  ChallengeDay,
  ChallengeProgress,
  Lesson,
  Module,
  Profile,
  Project,
} from "@/lib/types/database";

type LessonWithModule = Lesson & { moduleId: string; moduleTitle: string };

export async function getLearningPath(supabase: SupabaseClient) {
  const { data: modules } = await supabase
    .from("modules")
    .select("*, lessons(*)")
    .order("position");

  const sortedModules = ((modules ?? []) as (Module & { lessons: Lesson[] })[])
    .slice()
    .sort((a, b) => a.position - b.position);

  const lessons: LessonWithModule[] = sortedModules.flatMap((module) =>
    (module.lessons ?? [])
      .slice()
      .sort((a, b) => a.position - b.position)
      .map((lesson) => ({
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
      }))
  );

  return { modules: sortedModules, lessons };
}

export async function getCompletedLessonIds(
  supabase: SupabaseClient,
  userId: string
) {
  const { data } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", userId)
    .eq("completed", true);

  return new Set((data ?? []).map((row) => row.lesson_id as string));
}

export async function getDashboardData(
  supabase: SupabaseClient,
  userId: string
) {
  const [{ data: profile }, { modules, lessons }, completedIds] =
    await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).single(),
      getLearningPath(supabase),
      getCompletedLessonIds(supabase, userId),
    ]);

  const nextLesson =
    lessons.find((lesson) => !completedIds.has(lesson.id)) ?? null;

  const [
    { data: projects },
    { count: savedPromptsCount },
    { count: challengeDaysDone },
  ] = await Promise.all([
    supabase
      .from("projects")
      .select("*")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .limit(1),
    supabase
      .from("saved_prompts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),
    supabase
      .from("challenge_progress")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("completed", true),
  ]);

  return {
    profile: profile as Profile | null,
    totalLessons: lessons.length,
    completedLessons: completedIds.size,
    nextLesson,
    currentProject: (projects?.[0] as Project | undefined) ?? null,
    savedPromptsCount: savedPromptsCount ?? 0,
    challengeDaysDone: challengeDaysDone ?? 0,
    modulesCount: modules.length,
  };
}

export async function getChallengeDays(supabase: SupabaseClient) {
  const { data } = await supabase
    .from("challenge_days")
    .select("*")
    .order("day_number");

  return (data ?? []) as ChallengeDay[];
}

export async function getChallengeProgressMap(
  supabase: SupabaseClient,
  userId: string
) {
  const { data } = await supabase
    .from("challenge_progress")
    .select("*")
    .eq("user_id", userId);

  const map = new Map<string, ChallengeProgress>();
  for (const row of (data ?? []) as ChallengeProgress[]) {
    map.set(row.challenge_day_id, row);
  }
  return map;
}

type TimelineEntry = {
  id: string;
  label: string;
  date: string;
  kind: "aula" | "desafio" | "projeto";
};

export async function getProgressData(
  supabase: SupabaseClient,
  userId: string
) {
  const [{ modules, lessons }, completedIds, { data: profile }] =
    await Promise.all([
      getLearningPath(supabase),
      getCompletedLessonIds(supabase, userId),
      supabase.from("profiles").select("*").eq("id", userId).single(),
    ]);

  const completedModules = modules.filter((module) =>
    (module.lessons ?? []).every((lesson) => completedIds.has(lesson.id))
  ).length;

  const [
    { data: completedLessonRows },
    { data: completedChallengeRows },
    { data: projects },
    { count: savedPromptsCount },
    { count: totalProjects },
  ] = await Promise.all([
    supabase
      .from("lesson_progress")
      .select("id, completed_at, lessons(title)")
      .eq("user_id", userId)
      .eq("completed", true)
      .order("completed_at", { ascending: false })
      .limit(8),
    supabase
      .from("challenge_progress")
      .select("id, completed_at, challenge_days(title, day_number)")
      .eq("user_id", userId)
      .eq("completed", true)
      .order("completed_at", { ascending: false })
      .limit(8),
    supabase
      .from("projects")
      .select("id, title, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("saved_prompts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),
    supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId),
  ]);

  const timeline: TimelineEntry[] = [
    ...(completedLessonRows ?? [])
      .filter((row) => row.completed_at)
      .map((row) => ({
        id: `lesson-${row.id}`,
        label: `Concluiu a aula "${(row.lessons as unknown as { title: string } | null)?.title ?? ""}"`,
        date: row.completed_at as string,
        kind: "aula" as const,
      })),
    ...(completedChallengeRows ?? [])
      .filter((row) => row.completed_at)
      .map((row) => {
        const day = row.challenge_days as unknown as {
          title: string;
          day_number: number;
        } | null;
        return {
          id: `challenge-${row.id}`,
          label: `Concluiu o Dia ${day?.day_number} do desafio: ${day?.title}`,
          date: row.completed_at as string,
          kind: "desafio" as const,
        };
      }),
    ...(projects ?? []).map((project) => ({
      id: `project-${project.id}`,
      label: `Criou o projeto "${project.title}"`,
      date: project.created_at as string,
      kind: "projeto" as const,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return {
    profile: profile as Profile | null,
    totalLessons: lessons.length,
    completedLessons: completedIds.size,
    totalModules: modules.length,
    completedModules,
    totalProjects: totalProjects ?? 0,
    savedPromptsCount: savedPromptsCount ?? 0,
    timeline,
  };
}
