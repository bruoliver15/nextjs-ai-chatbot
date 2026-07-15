// Tipos alinhados ao schema definido em supabase/migrations/0001_init.sql

export type MainGoal =
  | "produtividade"
  | "conteudo"
  | "produto_digital"
  | "servicos"
  | "aprender_do_zero"
  | "ainda_nao_sei";

export type KnowledgeLevel =
  | "nunca_usei"
  | "testei_algumas"
  | "uso_as_vezes"
  | "uso_no_trabalho";

export type AvailableTime = "10min" | "20min" | "30min" | "mais_30min";

export type FirstProject =
  | "ebook"
  | "conteudo_instagram"
  | "roteiros_video"
  | "planner_checklist"
  | "apresentacao"
  | "servico_digital"
  | "ainda_nao_sei";

export type ProjectType =
  | "ebook"
  | "calendario_conteudo"
  | "roteiro_video"
  | "planner"
  | "checklist"
  | "apresentacao"
  | "material_educativo"
  | "servico_digital"
  | "outro";

export type ProjectStep =
  | "ideia"
  | "publico"
  | "estrutura"
  | "producao"
  | "revisao"
  | "divulgacao"
  | "concluido";

export type ToolDifficulty = "iniciante" | "intermediario" | "avancado";

export type ToolCategory =
  | "texto"
  | "imagem"
  | "pesquisa"
  | "organizacao"
  | "design"
  | "produtividade";

export type Profile = {
  id: string;
  name: string | null;
  avatar_url: string | null;
  main_goal: MainGoal | null;
  knowledge_level: KnowledgeLevel | null;
  available_time: AvailableTime | null;
  first_project: FirstProject | null;
  onboarding_completed: boolean;
  streak_days: number;
  last_activity_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ProfileUpdate = {
  name?: string | null;
  avatar_url?: string | null;
  main_goal?: MainGoal | null;
  knowledge_level?: KnowledgeLevel | null;
  available_time?: AvailableTime | null;
  first_project?: FirstProject | null;
  onboarding_completed?: boolean;
  streak_days?: number;
  last_activity_at?: string | null;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  position: number;
  created_at: string;
};

export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  description: string;
  content: string;
  example: string;
  exercise: string;
  prompt_text: string;
  estimated_minutes: number;
  position: number;
  created_at: string;
};

export type LessonProgress = {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
};

export type Prompt = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  created_at: string;
};

export type SavedPrompt = {
  id: string;
  user_id: string;
  prompt_id: string;
  created_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  title: string;
  project_type: ProjectType;
  theme: string | null;
  audience: string | null;
  problem: string | null;
  objective: string | null;
  structure: Record<string, unknown> | null;
  content: Record<string, unknown> | null;
  review_checklist: Record<string, boolean> | null;
  promotion_text: Record<string, unknown> | null;
  current_step: ProjectStep;
  progress: number;
  created_at: string;
  updated_at: string;
};

export type ChallengeDay = {
  id: string;
  day_number: number;
  title: string;
  description: string;
  task: string;
  goal: string;
  prompt_text: string;
};

export type ChallengeProgress = {
  id: string;
  user_id: string;
  challenge_day_id: string;
  notes: string | null;
  completed: boolean;
  completed_at: string | null;
};

export type Tool = {
  id: string;
  name: string;
  description: string;
  use_cases: string;
  difficulty: ToolDifficulty;
  free_version: boolean;
  category: ToolCategory;
  external_url: string;
  precautions: string;
};
