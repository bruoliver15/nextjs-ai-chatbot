import { projectTypeLabels } from "@/lib/project-options";
import type { Project } from "@/lib/types/database";

export function buildProductionPrompts(project: Project): {
  title: string;
  content: string;
}[] {
  const tipo = projectTypeLabels[project.project_type];
  const tema = project.theme || "[tema do projeto]";
  const publico = project.audience || "[público-alvo]";
  const objetivo = project.objective || "[objetivo do projeto]";

  return [
    {
      title: "Estrutura inicial",
      content: `Você é um especialista em criação de conteúdo. Crie uma estrutura completa para um(a) ${tipo.toLowerCase()} sobre ${tema}, direcionado para ${publico}. O objetivo é ${objetivo}. Organize em tópicos claros, na ordem em que devem aparecer.`,
    },
    {
      title: "Desenvolver o conteúdo",
      content: `Com base na estrutura de um(a) ${tipo.toLowerCase()} sobre ${tema}, desenvolva o conteúdo completo do tópico [nome do tópico]. Use linguagem simples, direta e exemplos práticos para o público: ${publico}.`,
    },
    {
      title: "Revisar e melhorar",
      content: `Revise o texto abaixo de um(a) ${tipo.toLowerCase()} sobre ${tema} e sugira melhorias de clareza, correção e adequação ao público ${publico}, mantendo o mesmo objetivo (${objetivo}):\n\n[cole aqui o seu texto]`,
    },
  ];
}
