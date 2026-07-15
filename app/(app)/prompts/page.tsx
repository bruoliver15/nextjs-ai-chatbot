import type { Metadata } from "next";
import { PromptLibrary } from "@/components/prompts/prompt-library";
import { createClient } from "@/lib/supabase/server";
import type { Prompt } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Biblioteca de prompts — IA Lucrativa",
};

export default async function PromptsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const [{ data: prompts }, { data: saved }] = await Promise.all([
    supabase.from("prompts").select("*").order("category"),
    supabase.from("saved_prompts").select("prompt_id").eq("user_id", user.id),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          Biblioteca de prompts
        </h1>
        <p className="text-muted-foreground">
          Prompts prontos para usar em conteúdo, produtos digitais, atendimento
          e muito mais.
        </p>
      </div>

      <PromptLibrary
        prompts={(prompts ?? []) as Prompt[]}
        savedPromptIds={(saved ?? []).map((row) => row.prompt_id as string)}
        userId={user.id}
      />
    </div>
  );
}
