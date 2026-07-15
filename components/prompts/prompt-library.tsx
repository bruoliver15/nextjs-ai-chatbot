"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PromptCard } from "@/components/prompts/prompt-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import type { Prompt } from "@/lib/types/database";

export function PromptLibrary({
  prompts,
  savedPromptIds,
  userId,
}: {
  prompts: Prompt[];
  savedPromptIds: string[];
  userId: string;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todas");
  const [savedSet, setSavedSet] = useState(new Set(savedPromptIds));
  const [pendingId, setPendingId] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(prompts.map((prompt) => prompt.category))).sort(),
    [prompts]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return prompts.filter((prompt) => {
      const matchesCategory =
        category === "todas" || prompt.category === category;
      const matchesQuery =
        query.length === 0 ||
        prompt.title.toLowerCase().includes(query) ||
        prompt.description.toLowerCase().includes(query) ||
        prompt.content.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [prompts, search, category]);

  async function toggleSave(promptId: string) {
    setPendingId(promptId);
    const supabase = createClient();
    const isSaved = savedSet.has(promptId);

    if (isSaved) {
      await supabase
        .from("saved_prompts")
        .delete()
        .eq("user_id", userId)
        .eq("prompt_id", promptId);
    } else {
      await supabase
        .from("saved_prompts")
        .upsert(
          { user_id: userId, prompt_id: promptId },
          { onConflict: "user_id,prompt_id" }
        );
    }

    setSavedSet((prev) => {
      const next = new Set(prev);
      if (isSaved) {
        next.delete(promptId);
      } else {
        next.add(promptId);
      }
      return next;
    });
    setPendingId(null);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 size-4 text-muted-foreground" />
          <Input
            className="pl-9"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por tema, palavra-chave..."
            value={search}
          />
        </div>
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="sm:w-56">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas as categorias</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-muted-foreground text-sm">
        Antes de utilizar, substitua as informações entre colchetes.
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed p-8 text-center text-muted-foreground text-sm">
          Nenhum prompt encontrado para essa busca.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prompt) => (
            <PromptCard
              category={prompt.category}
              content={prompt.content}
              description={prompt.description}
              isPending={pendingId === prompt.id}
              key={prompt.id}
              onToggleSave={() => toggleSave(prompt.id)}
              saved={savedSet.has(prompt.id)}
              title={prompt.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
