import { AlertTriangle, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toolCategoryLabels, toolDifficultyLabels } from "@/lib/tool-options";
import type { Tool } from "@/lib/types/database";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-heading font-semibold text-lg">{tool.name}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <Badge variant="secondary">
              {toolCategoryLabels[tool.category]}
            </Badge>
            <Badge variant="outline">
              {toolDifficultyLabels[tool.difficulty]}
            </Badge>
            {tool.free_version ? (
              <Badge className="border-accent/30 bg-accent/10 text-accent-foreground">
                Versão gratuita
              </Badge>
            ) : null}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm">{tool.description}</p>

      <div>
        <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wide">
          Principais usos
        </p>
        <p className="mt-1 text-sm">{tool.use_cases}</p>
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-secondary p-3 text-muted-foreground text-xs">
        <AlertTriangle className="mt-0.5 size-3.5 shrink-0" />
        {tool.precautions}
      </div>

      <Button asChild className="mt-1 w-fit gap-2" variant="outline">
        <a href={tool.external_url} rel="noopener noreferrer" target="_blank">
          Acessar site
          <ExternalLink className="size-3.5" />
        </a>
      </Button>
    </div>
  );
}
