import {
  ArrowRight,
  Flame,
  MessageSquareText,
  Rocket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    title: "Primeiros passos com IA",
    description: "Entenda o que a Inteligência Artificial pode fazer por você.",
    href: "/aprender",
    icon: Sparkles,
  },
  {
    title: "Como criar bons prompts",
    description: "Aprenda a fórmula para conversar melhor com qualquer IA.",
    href: "/aprender",
    icon: MessageSquareText,
  },
  {
    title: "Seu primeiro projeto",
    description: "Comece a transformar uma ideia em um projeto real.",
    href: "/criar-projeto",
    icon: Rocket,
  },
  {
    title: "Desafio de 7 dias",
    description: "Uma jornada guiada para sair do zero até o primeiro projeto.",
    href: "/desafio",
    icon: Flame,
  },
];

export function StartHereCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CARDS.map((card) => {
        const Icon = card.icon;
        return (
          <Link
            className="group flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary"
            href={card.href}
            key={card.title}
          >
            <div className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-xl text-white">
              <Icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading font-semibold">{card.title}</p>
              <p className="mt-1 text-muted-foreground text-sm">
                {card.description}
              </p>
            </div>
            <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        );
      })}
    </div>
  );
}
