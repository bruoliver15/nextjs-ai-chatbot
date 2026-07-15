"use client";

import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { touchActivity } from "@/lib/supabase/activity";
import { createClient } from "@/lib/supabase/client";

export function LessonCompleteButton({
  lessonId,
  userId,
  initialCompleted,
}: {
  lessonId: string;
  userId: string;
  initialCompleted: boolean;
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [isLoading, setIsLoading] = useState(false);

  async function toggle() {
    setIsLoading(true);
    const supabase = createClient();
    const nextCompleted = !completed;

    await supabase.from("lesson_progress").upsert(
      {
        user_id: userId,
        lesson_id: lessonId,
        completed: nextCompleted,
        completed_at: nextCompleted ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,lesson_id" }
    );

    if (nextCompleted) {
      await touchActivity(supabase, userId);
    }

    setCompleted(nextCompleted);
    setIsLoading(false);
    router.refresh();
  }

  return (
    <Button
      className="gap-2"
      disabled={isLoading}
      onClick={toggle}
      variant={completed ? "secondary" : "default"}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Check className="size-4" />
      )}
      {completed ? "Aula concluída" : "Marcar como concluída"}
    </Button>
  );
}
