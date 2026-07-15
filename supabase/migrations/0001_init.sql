-- IA Lucrativa — schema inicial, RLS e triggers
-- Rode este arquivo (e os seguintes, em ordem) no SQL editor do Supabase
-- ou via `supabase db push`.

create extension if not exists "pgcrypto";

-- =========================================================================
-- ENUMS
-- =========================================================================

create type main_goal as enum (
  'produtividade',
  'conteudo',
  'produto_digital',
  'servicos',
  'aprender_do_zero',
  'ainda_nao_sei'
);

create type knowledge_level as enum (
  'nunca_usei',
  'testei_algumas',
  'uso_as_vezes',
  'uso_no_trabalho'
);

create type available_time as enum (
  '10min',
  '20min',
  '30min',
  'mais_30min'
);

create type first_project as enum (
  'ebook',
  'conteudo_instagram',
  'roteiros_video',
  'planner_checklist',
  'apresentacao',
  'servico_digital',
  'ainda_nao_sei'
);

create type project_type as enum (
  'ebook',
  'calendario_conteudo',
  'roteiro_video',
  'planner',
  'checklist',
  'apresentacao',
  'material_educativo',
  'servico_digital',
  'outro'
);

create type project_step as enum (
  'ideia',
  'publico',
  'estrutura',
  'producao',
  'revisao',
  'divulgacao',
  'concluido'
);

create type tool_difficulty as enum (
  'iniciante',
  'intermediario',
  'avancado'
);

create type tool_category as enum (
  'texto',
  'imagem',
  'pesquisa',
  'organizacao',
  'design',
  'produtividade'
);

-- =========================================================================
-- TABLES
-- =========================================================================

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text,
  avatar_url text,
  main_goal main_goal,
  knowledge_level knowledge_level,
  available_time available_time,
  first_project first_project,
  onboarding_completed boolean not null default false,
  streak_days integer not null default 0,
  last_activity_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  "position" integer not null,
  created_at timestamptz not null default now()
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules (id) on delete cascade,
  title text not null,
  description text not null,
  content text not null,
  example text not null,
  exercise text not null,
  prompt_text text not null,
  estimated_minutes integer not null default 10,
  "position" integer not null,
  created_at timestamptz not null default now()
);

create table public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  completed boolean not null default false,
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

create table public.prompts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  category text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create table public.saved_prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  prompt_id uuid not null references public.prompts (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, prompt_id)
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null default 'Novo projeto',
  project_type project_type not null,
  theme text,
  audience text,
  problem text,
  objective text,
  structure jsonb not null default '{}'::jsonb,
  content jsonb not null default '{}'::jsonb,
  review_checklist jsonb not null default '{}'::jsonb,
  promotion_text jsonb not null default '{}'::jsonb,
  current_step project_step not null default 'ideia',
  progress integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.challenge_days (
  id uuid primary key default gen_random_uuid(),
  day_number integer not null unique,
  title text not null,
  description text not null,
  task text not null,
  goal text not null,
  prompt_text text not null
);

create table public.challenge_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  challenge_day_id uuid not null references public.challenge_days (id) on delete cascade,
  notes text,
  completed boolean not null default false,
  completed_at timestamptz,
  unique (user_id, challenge_day_id)
);

create table public.tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  use_cases text not null,
  difficulty tool_difficulty not null default 'iniciante',
  free_version boolean not null default true,
  category tool_category not null,
  external_url text not null,
  precautions text not null
);

-- =========================================================================
-- INDEXES
-- =========================================================================

create index lessons_module_id_idx on public.lessons (module_id);
create index lesson_progress_user_id_idx on public.lesson_progress (user_id);
create index saved_prompts_user_id_idx on public.saved_prompts (user_id);
create index projects_user_id_idx on public.projects (user_id);
create index challenge_progress_user_id_idx on public.challenge_progress (user_id);
create index prompts_category_idx on public.prompts (category);

-- =========================================================================
-- updated_at TRIGGER
-- =========================================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger set_projects_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- Cria automaticamente um perfil vazio quando um usuário se cadastra
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, new.raw_user_meta_data ->> 'name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =========================================================================
-- ROW LEVEL SECURITY
-- =========================================================================

alter table public.profiles enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.prompts enable row level security;
alter table public.saved_prompts enable row level security;
alter table public.projects enable row level security;
alter table public.challenge_days enable row level security;
alter table public.challenge_progress enable row level security;
alter table public.tools enable row level security;

-- profiles: cada usuário só vê e altera o próprio perfil
create policy "profiles: select own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "profiles: insert own" on public.profiles
  for insert with check (auth.uid() = id);

-- modules / lessons / prompts / tools: leitura para qualquer usuário autenticado
create policy "modules: read for authenticated" on public.modules
  for select using (auth.role() = 'authenticated');

create policy "lessons: read for authenticated" on public.lessons
  for select using (auth.role() = 'authenticated');

create policy "prompts: read for authenticated" on public.prompts
  for select using (auth.role() = 'authenticated');

create policy "tools: read for authenticated" on public.tools
  for select using (auth.role() = 'authenticated');

create policy "challenge_days: read for authenticated" on public.challenge_days
  for select using (auth.role() = 'authenticated');

-- lesson_progress: cada usuário só vê e altera o próprio progresso
create policy "lesson_progress: select own" on public.lesson_progress
  for select using (auth.uid() = user_id);

create policy "lesson_progress: insert own" on public.lesson_progress
  for insert with check (auth.uid() = user_id);

create policy "lesson_progress: update own" on public.lesson_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "lesson_progress: delete own" on public.lesson_progress
  for delete using (auth.uid() = user_id);

-- saved_prompts: cada usuário só vê e altera os próprios prompts salvos
create policy "saved_prompts: select own" on public.saved_prompts
  for select using (auth.uid() = user_id);

create policy "saved_prompts: insert own" on public.saved_prompts
  for insert with check (auth.uid() = user_id);

create policy "saved_prompts: delete own" on public.saved_prompts
  for delete using (auth.uid() = user_id);

-- projects: cada usuário só vê e altera os próprios projetos
create policy "projects: select own" on public.projects
  for select using (auth.uid() = user_id);

create policy "projects: insert own" on public.projects
  for insert with check (auth.uid() = user_id);

create policy "projects: update own" on public.projects
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "projects: delete own" on public.projects
  for delete using (auth.uid() = user_id);

-- challenge_progress: cada usuário só vê e altera as próprias respostas do desafio
create policy "challenge_progress: select own" on public.challenge_progress
  for select using (auth.uid() = user_id);

create policy "challenge_progress: insert own" on public.challenge_progress
  for insert with check (auth.uid() = user_id);

create policy "challenge_progress: update own" on public.challenge_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "challenge_progress: delete own" on public.challenge_progress
  for delete using (auth.uid() = user_id);
