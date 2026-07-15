"use client";

import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { projectStepProgress, projectTypeLabels } from "@/lib/project-options";
import { buildProductionPrompts } from "@/lib/project-prompts";
import { touchActivity } from "@/lib/supabase/activity";
import { createClient } from "@/lib/supabase/client";
import type { Project, ProjectStep } from "@/lib/types/database";

const STEP_ORDER: ProjectStep[] = [
  "ideia",
  "publico",
  "estrutura",
  "producao",
  "revisao",
  "divulgacao",
];

const REVIEW_ITEMS: { key: string; label: string }[] = [
  { key: "clareza", label: "O conteúdo está claro?" },
  { key: "erros", label: "Existem erros?" },
  { key: "informacoesVerificadas", label: "As informações foram verificadas?" },
  { key: "exemplos", label: "O material possui exemplos?" },
  { key: "adaptadoPublico", label: "O resultado foi adaptado para o público?" },
  { key: "linguagemAdequada", label: "A linguagem está adequada?" },
];

type ContentShape = {
  ideia?: { oQueCriar?: string };
  publico?: { dificuldade?: string; resultado?: string };
};

type StructureShape = {
  subtitulo?: string;
  secoes?: string;
  conteudosNecessarios?: string;
};

type PromotionShape = {
  mensagem?: string;
  legenda?: string;
  chamada?: string;
  onde?: string;
};

export function ProjectWizard({
  project,
  userId,
}: {
  project: Project;
  userId: string;
}) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<ProjectStep>(
    project.current_step === "concluido" ? "divulgacao" : project.current_step
  );
  const [title, setTitle] = useState(project.title);
  const [theme, setTheme] = useState(project.theme ?? "");
  const [problem, setProblem] = useState(project.problem ?? "");
  const [audience, setAudience] = useState(project.audience ?? "");
  const [objective, setObjective] = useState(project.objective ?? "");
  const content = (project.content ?? {}) as ContentShape;
  const structure = (project.structure ?? {}) as StructureShape;
  const promotion = (project.promotion_text ?? {}) as PromotionShape;
  const reviewChecklist = (project.review_checklist ?? {}) as Record<
    string,
    boolean
  >;

  const [oQueCriar, setOQueCriar] = useState(content.ideia?.oQueCriar ?? "");
  const [dificuldade, setDificuldade] = useState(
    content.publico?.dificuldade ?? ""
  );
  const [resultado, setResultado] = useState(content.publico?.resultado ?? "");
  const [subtitulo, setSubtitulo] = useState(structure.subtitulo ?? "");
  const [secoes, setSecoes] = useState(structure.secoes ?? "");
  const [conteudos, setConteudos] = useState(
    structure.conteudosNecessarios ?? ""
  );
  const [checklist, setChecklist] =
    useState<Record<string, boolean>>(reviewChecklist);
  const [mensagem, setMensagem] = useState(promotion.mensagem ?? "");
  const [legenda, setLegenda] = useState(promotion.legenda ?? "");
  const [chamada, setChamada] = useState(promotion.chamada ?? "");
  const [onde, setOnde] = useState(promotion.onde ?? "");

  const [savedStep, setSavedStep] = useState(project.current_step);
  const [isSaving, setIsSaving] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  async function persist(patch: Record<string, unknown>) {
    setIsSaving(true);
    const supabase = createClient();
    await supabase.from("projects").update(patch).eq("id", project.id);
    setIsSaving(false);
  }

  function currentStepIndex(step: ProjectStep) {
    const index = STEP_ORDER.indexOf(step);
    return index === -1 ? STEP_ORDER.length - 1 : index;
  }

  async function goToStep(step: ProjectStep) {
    setActiveStep(step);

    if (currentStepIndex(step) > currentStepIndex(savedStep)) {
      setSavedStep(step);
      await persist({
        current_step: step,
        progress: projectStepProgress[step],
      });
      router.refresh();
    }
  }

  async function finishProject() {
    setIsFinishing(true);
    await persist({ current_step: "concluido", progress: 100 });
    await touchActivity(createClient(), userId);
    setIsFinishing(false);
    router.push("/projetos");
  }

  const productionPrompts = buildProductionPrompts({
    ...project,
    theme,
    audience,
    objective,
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 rounded-xl border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold text-primary text-xs uppercase tracking-wide">
              {projectTypeLabels[project.project_type]}
            </p>
            <Input
              className="mt-1 h-auto border-none p-0 font-bold font-heading text-xl shadow-none focus-visible:ring-0"
              onBlur={() => persist({ title })}
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          {isSaving ? (
            <span className="flex shrink-0 items-center gap-1 text-muted-foreground text-xs">
              <Loader2 className="size-3 animate-spin" /> salvando...
            </span>
          ) : null}
        </div>
        <Progress value={projectStepProgress[savedStep]} />
      </div>

      <Tabs
        onValueChange={(value) => goToStep(value as ProjectStep)}
        value={activeStep}
      >
        <TabsList className="grid h-auto w-full grid-cols-3 gap-1 sm:grid-cols-6">
          <TabsTrigger value="ideia">1. Ideia</TabsTrigger>
          <TabsTrigger value="publico">2. Público</TabsTrigger>
          <TabsTrigger value="estrutura">3. Estrutura</TabsTrigger>
          <TabsTrigger value="producao">4. Produção</TabsTrigger>
          <TabsTrigger value="revisao">5. Revisão</TabsTrigger>
          <TabsTrigger value="divulgacao">6. Divulgação</TabsTrigger>
        </TabsList>

        <TabsContent className="flex flex-col gap-4 pt-4" value="ideia">
          <Field label="Qual é o tema?">
            <Input
              onBlur={() => persist({ theme })}
              onChange={(event) => setTheme(event.target.value)}
              value={theme}
            />
          </Field>
          <Field label="O que você deseja criar?">
            <Textarea
              onBlur={() =>
                persist({ content: { ...content, ideia: { oQueCriar } } })
              }
              onChange={(event) => setOQueCriar(event.target.value)}
              value={oQueCriar}
            />
          </Field>
          <Field label="Qual problema será resolvido?">
            <Textarea
              onBlur={() => persist({ problem })}
              onChange={(event) => setProblem(event.target.value)}
              value={problem}
            />
          </Field>
        </TabsContent>

        <TabsContent className="flex flex-col gap-4 pt-4" value="publico">
          <Field label="Para quem é este projeto?">
            <Input
              onBlur={() => persist({ audience })}
              onChange={(event) => setAudience(event.target.value)}
              value={audience}
            />
          </Field>
          <Field label="Qual dificuldade essa pessoa possui?">
            <Textarea
              onBlur={() =>
                persist({
                  content: { ...content, publico: { dificuldade, resultado } },
                })
              }
              onChange={(event) => setDificuldade(event.target.value)}
              value={dificuldade}
            />
          </Field>
          <Field label="Qual resultado ela procura?">
            <Textarea
              onBlur={() =>
                persist({
                  content: { ...content, publico: { dificuldade, resultado } },
                })
              }
              onChange={(event) => setResultado(event.target.value)}
              value={resultado}
            />
          </Field>
        </TabsContent>

        <TabsContent className="flex flex-col gap-4 pt-4" value="estrutura">
          <Field label="Título">
            <Input
              onBlur={() => persist({ title })}
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </Field>
          <Field label="Subtítulo">
            <Input
              onBlur={() =>
                persist({
                  structure: {
                    ...structure,
                    subtitulo,
                    secoes,
                    conteudosNecessarios: conteudos,
                  },
                })
              }
              onChange={(event) => setSubtitulo(event.target.value)}
              value={subtitulo}
            />
          </Field>
          <Field label="Objetivo">
            <Textarea
              onBlur={() => persist({ objective })}
              onChange={(event) => setObjective(event.target.value)}
              value={objective}
            />
          </Field>
          <Field label="Seções">
            <Textarea
              onBlur={() =>
                persist({
                  structure: {
                    ...structure,
                    subtitulo,
                    secoes,
                    conteudosNecessarios: conteudos,
                  },
                })
              }
              onChange={(event) => setSecoes(event.target.value)}
              placeholder="Uma seção por linha"
              value={secoes}
            />
          </Field>
          <Field label="Conteúdos necessários">
            <Textarea
              onBlur={() =>
                persist({
                  structure: {
                    ...structure,
                    subtitulo,
                    secoes,
                    conteudosNecessarios: conteudos,
                  },
                })
              }
              onChange={(event) => setConteudos(event.target.value)}
              placeholder="Imagens, dados, referências..."
              value={conteudos}
            />
          </Field>
        </TabsContent>

        <TabsContent className="flex flex-col gap-4 pt-4" value="producao">
          <p className="text-muted-foreground text-sm">
            Use estes prompts para desenvolver o conteúdo do seu projeto.
          </p>
          {productionPrompts.map((prompt) => (
            <div
              className="rounded-xl border bg-card p-4 shadow-sm"
              key={prompt.title}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="font-heading font-semibold">{prompt.title}</p>
                <CopyButton text={prompt.content} />
              </div>
              <p className="whitespace-pre-line rounded-lg bg-secondary p-3 text-sm">
                {prompt.content}
              </p>
            </div>
          ))}
        </TabsContent>

        <TabsContent className="flex flex-col gap-4 pt-4" value="revisao">
          <p className="text-muted-foreground text-sm">
            Confira o material antes de divulgar.
          </p>
          <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm">
            {REVIEW_ITEMS.map((item) => (
              <div className="flex items-center gap-3 text-sm" key={item.key}>
                <Checkbox
                  checked={Boolean(checklist[item.key])}
                  id={`review-${item.key}`}
                  onCheckedChange={(value) => {
                    const next = { ...checklist, [item.key]: value === true };
                    setChecklist(next);
                    persist({ review_checklist: next });
                  }}
                />
                <Label
                  className="cursor-pointer font-normal"
                  htmlFor={`review-${item.key}`}
                >
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent className="flex flex-col gap-4 pt-4" value="divulgacao">
          <Field label="Mensagem de apresentação">
            <Textarea
              onBlur={() =>
                persist({
                  promotion_text: { mensagem, legenda, chamada, onde },
                })
              }
              onChange={(event) => setMensagem(event.target.value)}
              value={mensagem}
            />
          </Field>
          <Field label="Legenda">
            <Textarea
              onBlur={() =>
                persist({
                  promotion_text: { mensagem, legenda, chamada, onde },
                })
              }
              onChange={(event) => setLegenda(event.target.value)}
              value={legenda}
            />
          </Field>
          <Field label="Chamada para ação">
            <Input
              onBlur={() =>
                persist({
                  promotion_text: { mensagem, legenda, chamada, onde },
                })
              }
              onChange={(event) => setChamada(event.target.value)}
              value={chamada}
            />
          </Field>
          <Field label="Onde será divulgado?">
            <Input
              onBlur={() =>
                persist({
                  promotion_text: { mensagem, legenda, chamada, onde },
                })
              }
              onChange={(event) => setOnde(event.target.value)}
              value={onde}
            />
          </Field>

          <Button
            className="mt-2 w-fit gap-2"
            disabled={isFinishing}
            onClick={finishProject}
          >
            {isFinishing ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Check className="size-4" />
            )}
            Concluir projeto
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
