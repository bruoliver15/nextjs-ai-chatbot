import type {
  AvailableTime,
  FirstProject,
  KnowledgeLevel,
  MainGoal,
} from "@/lib/types/database";

export const mainGoalOptions: { value: MainGoal; label: string }[] = [
  { value: "produtividade", label: "Ganhar produtividade" },
  { value: "conteudo", label: "Criar conteúdos" },
  { value: "produto_digital", label: "Criar um produto digital" },
  { value: "servicos", label: "Prestar serviços" },
  { value: "aprender_do_zero", label: "Aprender IA do zero" },
  { value: "ainda_nao_sei", label: "Ainda não sei" },
];

export const knowledgeLevelOptions: { value: KnowledgeLevel; label: string }[] =
  [
    { value: "nunca_usei", label: "Nunca utilizei IA" },
    { value: "testei_algumas", label: "Já testei algumas ferramentas" },
    { value: "uso_as_vezes", label: "Utilizo IA às vezes" },
    { value: "uso_no_trabalho", label: "Já utilizo no meu trabalho" },
  ];

export const availableTimeOptions: { value: AvailableTime; label: string }[] = [
  { value: "10min", label: "10 minutos" },
  { value: "20min", label: "20 minutos" },
  { value: "30min", label: "30 minutos" },
  { value: "mais_30min", label: "Mais de 30 minutos" },
];

export const firstProjectOptions: { value: FirstProject; label: string }[] = [
  { value: "ebook", label: "E-book" },
  { value: "conteudo_instagram", label: "Conteúdo para Instagram" },
  { value: "roteiros_video", label: "Roteiros de vídeos" },
  { value: "planner_checklist", label: "Planner ou checklist" },
  { value: "apresentacao", label: "Apresentação" },
  { value: "servico_digital", label: "Serviço digital" },
  { value: "ainda_nao_sei", label: "Ainda não sei" },
];

export const mainGoalLabels = Object.fromEntries(
  mainGoalOptions.map((option) => [option.value, option.label])
) as Record<MainGoal, string>;

export const knowledgeLevelLabels = Object.fromEntries(
  knowledgeLevelOptions.map((option) => [option.value, option.label])
) as Record<KnowledgeLevel, string>;

export const availableTimeLabels = Object.fromEntries(
  availableTimeOptions.map((option) => [option.value, option.label])
) as Record<AvailableTime, string>;

export const firstProjectLabels = Object.fromEntries(
  firstProjectOptions.map((option) => [option.value, option.label])
) as Record<FirstProject, string>;
