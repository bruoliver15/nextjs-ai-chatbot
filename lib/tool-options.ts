import type { ToolCategory, ToolDifficulty } from "@/lib/types/database";

export const toolCategoryLabels: Record<ToolCategory, string> = {
  texto: "Texto",
  imagem: "Imagem",
  pesquisa: "Pesquisa",
  organizacao: "Organização",
  design: "Design",
  produtividade: "Produtividade",
};

export const toolDifficultyLabels: Record<ToolDifficulty, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};
