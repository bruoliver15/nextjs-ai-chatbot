"use client";

import { Bookmark } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromptCard({
  title,
  description,
  category,
  content,
  saved,
  isPending,
  onToggleSave,
}: {
  title: string;
  description: string;
  category: string;
  content: string;
  saved: boolean;
  isPending: boolean;
  onToggleSave: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <Badge className="mb-2" variant="secondary">
            {category}
          </Badge>
          <p className="font-heading font-semibold leading-snug">{title}</p>
          <p className="mt-1 text-muted-foreground text-sm">{description}</p>
        </div>
        <Button
          aria-label={saved ? "Remover dos salvos" : "Salvar prompt"}
          className="shrink-0"
          disabled={isPending}
          onClick={onToggleSave}
          size="icon"
          variant="ghost"
        >
          <Bookmark
            className={cn(
              "size-5",
              saved ? "fill-primary text-primary" : "text-muted-foreground"
            )}
          />
        </Button>
      </div>

      <p className="max-h-40 overflow-y-auto whitespace-pre-line rounded-lg bg-secondary p-3 text-foreground/90 text-sm">
        {content}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs">
          Substitua as informações entre colchetes.
        </p>
        <CopyButton text={content} />
      </div>
    </div>
  );
}
