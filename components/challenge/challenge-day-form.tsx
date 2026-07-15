"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { touchActivity } from "@/lib/supabase/activity";
import { createClient } from "@/lib/supabase/client";

export function ChallengeDayForm({
  dayId,
  userId,
  goal,
  initialCompleted,
  initialNotes,
}: {
  dayId: string;
  userId: string;
  goal: string;
  initialCompleted: boolean;
  initialNotes: string;
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(initialNotes);
  const [goalChecked, setGoalChecked] = useState(initialCompleted);
  const [completed, setCompleted] = useState(initialCompleted);
  const [isSaving, setIsSaving] = useState(false);

  async function save(nextCompleted: boolean) {
    setIsSaving(true);
    const supabase = createClient();

    await supabase.from("challenge_progress").upsert(
      {
        user_id: userId,
        challenge_day_id: dayId,
        notes,
        completed: nextCompleted,
        completed_at: nextCompleted ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,challenge_day_id" }
    );

    if (nextCompleted) {
      await touchActivity(supabase, userId);
    }

    setCompleted(nextCompleted);
    setIsSaving(false);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <p className="mb-3 font-heading font-semibold">Checklist do dia</p>
        <div className="flex items-start gap-3 text-sm">
          <Checkbox
            checked={goalChecked}
            id="goal-checklist"
            onCheckedChange={(value) => setGoalChecked(value === true)}
          />
          <Label
            className="cursor-pointer font-normal"
            htmlFor="goal-checklist"
          >
            {goal}
          </Label>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <Label className="font-heading font-semibold" htmlFor="notes">
          Suas anotações
        </Label>
        <Textarea
          className="mt-3 min-h-28"
          id="notes"
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Anote ideias, dúvidas ou o que você produziu hoje..."
          value={notes}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          className="gap-2"
          disabled={isSaving || !goalChecked}
          onClick={() => save(true)}
        >
          {isSaving ? <Loader2 className="size-4 animate-spin" /> : null}
          {completed ? "Dia concluído" : "Concluir dia"}
        </Button>
        {!goalChecked && (
          <p className="text-muted-foreground text-xs">
            Marque a meta do dia para poder concluir.
          </p>
        )}
      </div>
    </div>
  );
}
