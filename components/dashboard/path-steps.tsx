import {
  ClipboardCheck,
  FileEdit,
  ListChecks,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

const STEPS = [
  { title: "Conheça as ferramentas", icon: Wrench },
  { title: "Aprenda a criar prompts", icon: Sparkles },
  { title: "Escolha um projeto", icon: ListChecks },
  { title: "Crie sua primeira versão", icon: FileEdit },
  { title: "Organize e revise", icon: ClipboardCheck },
  { title: "Compartilhe seu projeto", icon: Rocket },
];

export function PathSteps() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            className="flex flex-col items-start gap-2 rounded-xl border bg-card p-4 shadow-sm"
            key={step.title}
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
              <Icon className="size-[18px]" />
            </div>
            <p className="font-medium text-muted-foreground text-xs">
              Etapa {index + 1}
            </p>
            <p className="font-heading font-semibold text-sm leading-snug">
              {step.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
