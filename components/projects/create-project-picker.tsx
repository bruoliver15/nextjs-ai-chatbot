"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { projectTypeOptions } from "@/lib/project-options";
import { createClient } from "@/lib/supabase/client";
import type { ProjectType } from "@/lib/types/database";
import { cn } from "@/lib/utils";

export function CreateProjectPicker({ userId }: { userId: string }) {
  const router = useRouter();
  const [creatingType, setCreatingType] = useState<ProjectType | null>(null);

  async function handleSelect(type: ProjectType, label: string) {
    setCreatingType(type);
    const supabase = createClient();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        user_id: userId,
        project_type: type,
        title: `Novo ${label.toLowerCase()}`,
      })
      .select("id")
      .single();

    if (error || !data) {
      setCreatingType(null);
      return;
    }

    router.push(`/criar-projeto/${data.id}`);
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projectTypeOptions.map((option) => (
        <button
          className={cn(
            "flex flex-col items-start gap-1 rounded-xl border bg-card p-5 text-left shadow-sm transition-colors hover:border-primary hover:bg-primary/5 disabled:opacity-60"
          )}
          disabled={creatingType !== null}
          key={option.value}
          onClick={() => handleSelect(option.value, option.label)}
          type="button"
        >
          <div className="flex w-full items-center justify-between">
            <p className="font-heading font-semibold">{option.label}</p>
            {creatingType === option.value ? (
              <Loader2 className="size-4 animate-spin text-primary" />
            ) : null}
          </div>
          <p className="text-muted-foreground text-sm">{option.description}</p>
        </button>
      ))}
    </div>
  );
}
