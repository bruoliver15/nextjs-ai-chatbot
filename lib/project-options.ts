import type { ProjectStep, ProjectType } from "@/lib/types/database";

export const projectTypeOptions: {
  value: ProjectType;
  label: string;
  description: string;
}[] = [
  {
    value: "ebook",
    label: "E-book",
    description: "Material digital para ensinar ou apresentar um tema.",
  },
  {
    value: "calendario_conteudo",
    label: "Calendário de conteúdo",
    description: "Planejamento de posts para redes sociais.",
  },
  {
    value: "roteiro_video",
    label: "Roteiro de vídeo",
    description: "Estrutura para gravar vídeos ou reels.",
  },
  {
    value: "planner",
    label: "Planner",
    description: "Ferramenta de organização para o dia a dia.",
  },
  {
    value: "checklist",
    label: "Checklist",
    description: "Lista prática de passos para seguir.",
  },
  {
    value: "apresentacao",
    label: "Apresentação",
    description: "Slides para expor uma ideia ou proposta.",
  },
  {
    value: "material_educativo",
    label: "Material educativo",
    description: "Conteúdo para ensinar algo passo a passo.",
  },
  {
    value: "servico_digital",
    label: "Serviço digital",
    description: "Uma oferta de serviço para divulgar.",
  },
  {
    value: "outro",
    label: "Outro projeto",
    description: "Um projeto com um formato diferente.",
  },
];

export const projectTypeLabels = Object.fromEntries(
  projectTypeOptions.map((option) => [option.value, option.label])
) as Record<ProjectType, string>;

export const projectStepOptions: { value: ProjectStep; label: string }[] = [
  { value: "ideia", label: "Ideia" },
  { value: "publico", label: "Público" },
  { value: "estrutura", label: "Estrutura" },
  { value: "producao", label: "Produção" },
  { value: "revisao", label: "Revisão" },
  { value: "divulgacao", label: "Divulgação" },
  { value: "concluido", label: "Concluído" },
];

export const projectStepLabels = Object.fromEntries(
  projectStepOptions.map((option) => [option.value, option.label])
) as Record<ProjectStep, string>;

export const projectStepProgress: Record<ProjectStep, number> = {
  ideia: 10,
  publico: 25,
  estrutura: 45,
  producao: 65,
  revisao: 85,
  divulgacao: 95,
  concluido: 100,
};
