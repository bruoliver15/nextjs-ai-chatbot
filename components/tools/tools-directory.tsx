"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ToolCard } from "@/components/tools/tool-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toolCategoryLabels } from "@/lib/tool-options";
import type { Tool, ToolCategory } from "@/lib/types/database";

export function ToolsDirectory({ tools }: { tools: Tool[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ToolCategory | "todas">("todas");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCategory =
        category === "todas" || tool.category === category;
      const matchesQuery =
        query.length === 0 ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [tools, search, category]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 size-4 text-muted-foreground" />
          <Input
            className="pl-9"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar ferramenta..."
            value={search}
          />
        </div>
        <Select
          onValueChange={(value) =>
            setCategory(value as ToolCategory | "todas")
          }
          value={category}
        >
          <SelectTrigger className="sm:w-56">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas as categorias</SelectItem>
            {Object.entries(toolCategoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed p-8 text-center text-muted-foreground text-sm">
          Nenhuma ferramenta encontrada.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
