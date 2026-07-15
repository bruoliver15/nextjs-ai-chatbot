"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  availableTimeOptions,
  firstProjectOptions,
  knowledgeLevelOptions,
  mainGoalOptions,
} from "@/lib/onboarding-options";
import { createClient } from "@/lib/supabase/client";
import type {
  AvailableTime,
  FirstProject,
  KnowledgeLevel,
  MainGoal,
} from "@/lib/types/database";
import { cn } from "@/lib/utils";

type Answers = {
  main_goal: MainGoal | null;
  knowledge_level: KnowledgeLevel | null;
  available_time: AvailableTime | null;
  first_project: FirstProject | null;
};

const STEPS = [
  {
    key: "main_goal" as const,
    question: "Qual é o seu principal objetivo com a Inteligência Artificial?",
    options: mainGoalOptions,
  },
  {
    key: "knowledge_level" as const,
    question: "Qual é o seu nível de conhecimento?",
    options: knowledgeLevelOptions,
  },
  {
    key: "available_time" as const,
    question: "Quanto tempo você consegue estudar por dia?",
    options: availableTimeOptions,
  },
  {
    key: "first_project" as const,
    question: "Qual projeto você gostaria de criar primeiro?",
    options: firstProjectOptions,
  },
];

export function OnboardingFlow() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    main_goal: null,
    knowledge_level: null,
    available_time: null,
    first_project: null,
  });
  const [isDone, setIsDone] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = STEPS.length;
  const progressValue = isDone
    ? 100
    : ((stepIndex + 1) / (totalSteps + 1)) * 100;

  function selectOption(value: string) {
    const step = STEPS[stepIndex];
    setAnswers((prev) => ({ ...prev, [step.key]: value }));

    if (stepIndex < totalSteps - 1) {
      setTimeout(() => setStepIndex((prev) => prev + 1), 150);
    } else {
      setTimeout(() => setIsDone(true), 150);
    }
  }

  function goBack() {
    setStepIndex((prev) => Math.max(0, prev - 1));
  }

  async function finish() {
    setIsSaving(true);
    setError(null);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("Sessão expirada. Faça login novamente.");
      setIsSaving(false);
      return;
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        main_goal: answers.main_goal,
        knowledge_level: answers.knowledge_level,
        available_time: answers.available_time,
        first_project: answers.first_project,
        onboarding_completed: true,
      })
      .eq("id", user.id);

    setIsSaving(false);

    if (updateError) {
      setError("Não foi possível salvar suas respostas. Tente novamente.");
      return;
    }

    router.push("/inicio");
    router.refresh();
  }

  if (isDone) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <div className="gradient-brand flex size-16 items-center justify-center rounded-full">
          <CheckCircle2 className="size-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold font-heading text-2xl">
            Seu caminho na IA Lucrativa está pronto.
          </h1>
          <p className="text-muted-foreground">
            Preparamos uma trilha de aprendizado com base nas suas respostas.
            Você pode ajustar isso a qualquer momento no seu perfil.
          </p>
        </div>
        {error ? (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        ) : null}
        <Button
          className="w-full"
          disabled={isSaving}
          onClick={finish}
          size="lg"
        >
          {isSaving ? "Preparando..." : "Começar"}
        </Button>
      </div>
    );
  }

  const step = STEPS[stepIndex];

  return (
    <div className="flex w-full max-w-lg flex-col gap-8">
      <div className="space-y-2">
        <Progress value={progressValue} />
        <p className="text-muted-foreground text-xs">
          Etapa {stepIndex + 1} de {totalSteps}
        </p>
      </div>

      <h1 className="text-balance font-bold font-heading text-2xl">
        {step.question}
      </h1>

      <div className="grid gap-3">
        {step.options.map((option) => (
          <button
            className={cn(
              "flex items-center justify-between rounded-xl border bg-card px-5 py-4 text-left font-medium text-sm shadow-sm transition-colors hover:border-primary hover:bg-primary/5",
              answers[step.key] === option.value &&
                "border-primary bg-primary/5"
            )}
            key={option.value}
            onClick={() => selectOption(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>

      {stepIndex > 0 ? (
        <Button className="self-start" onClick={goBack} variant="ghost">
          Voltar
        </Button>
      ) : null}
    </div>
  );
}
