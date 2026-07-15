import {
  BookOpen,
  Clock3,
  FileText,
  Flame,
  Layers,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "IA Lucrativa — Aprenda Inteligência Artificial na prática",
};

const AUDIENCE_POINTS = [
  "Você nunca usou nenhuma ferramenta de Inteligência Artificial.",
  "Você não entende de programação ou tecnologia.",
  "Você quer ganhar tempo no trabalho e na rotina.",
  "Você quer criar conteúdos, produtos digitais ou serviços.",
  "Você prefere aprender de forma simples, no seu ritmo.",
];

const LEARN_ITEMS = [
  {
    icon: Clock3,
    title: "Ganhar tempo",
    description: "Use IA para otimizar tarefas do trabalho e da rotina.",
  },
  {
    icon: Sparkles,
    title: "Criar conteúdos",
    description: "Produza posts, legendas e roteiros para redes sociais.",
  },
  {
    icon: FileText,
    title: "Produtos digitais",
    description: "Desenvolva e-books, planners e materiais para vender.",
  },
  {
    icon: Rocket,
    title: "Prestar serviços",
    description: "Ofereça serviços apoiados por Inteligência Artificial.",
  },
  {
    icon: Layers,
    title: "Organizar ideias",
    description: "Estruture projetos e planejamentos com mais clareza.",
  },
  {
    icon: MessageSquareText,
    title: "Escrever bons prompts",
    description: "Aprenda a fórmula para conversar melhor com qualquer IA.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Responda o onboarding",
    description: "Contamos seu objetivo e nível para montar seu caminho.",
  },
  {
    step: "2",
    title: "Aprenda com aulas práticas",
    description: "Módulos curtos, direto ao ponto, sem enrolação.",
  },
  {
    step: "3",
    title: "Use a biblioteca de prompts",
    description: "Prompts prontos para copiar e aplicar no seu dia a dia.",
  },
  {
    step: "4",
    title: "Crie o seu primeiro projeto",
    description:
      "Um assistente guiado, etapa por etapa, até o resultado final.",
  },
];

const FEATURES = [
  {
    icon: MessageSquareText,
    title: "Biblioteca de prompts",
    description:
      "Prompts prontos organizados por categoria — Instagram, e-books, atendimento, vendas e muito mais. É só copiar, adaptar e usar.",
  },
  {
    icon: Rocket,
    title: "Criador de projetos",
    description:
      "Um assistente em etapas leva você da ideia até a divulgação: público, estrutura, produção, revisão e divulgação.",
  },
  {
    icon: Flame,
    title: "Desafio de 7 dias",
    description:
      "Uma jornada guiada, um passo por dia, até você ter o seu primeiro projeto pronto para compartilhar.",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    description:
      "Conheça ChatGPT, Gemini, Claude, Canva e Perplexity: para que servem, como usar e os cuidados necessários.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Preciso saber programar para usar a plataforma?",
    answer:
      "Não. A IA Lucrativa foi criada para pessoas que nunca usaram Inteligência Artificial e não entendem de tecnologia.",
  },
  {
    question: "Vou ganhar dinheiro garantido usando IA?",
    answer:
      "Não prometemos renda garantida nem resultados milagrosos. Ensinamos, de forma prática, a usar IA para produtividade, conteúdo, produtos e serviços — o resultado depende do seu esforço e contexto.",
  },
  {
    question: "Preciso já ter experiência com Inteligência Artificial?",
    answer:
      "Não. As aulas começam do zero, com uma trilha adaptada ao seu nível de conhecimento e ao tempo que você tem disponível.",
  },
  {
    question: "Quais ferramentas de IA eu vou usar?",
    answer:
      "Você vai conhecer ferramentas gratuitas como ChatGPT, Gemini, Claude, Canva e Perplexity, entendendo para que cada uma serve.",
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer:
      "Você escolhe: a plataforma se adapta a partir de 10 minutos por dia, no seu ritmo.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="rounded-full border bg-secondary px-4 py-1.5 font-semibold text-muted-foreground text-xs">
            Educação prática em Inteligência Artificial
          </span>
          <h1 className="text-balance font-extrabold font-heading text-3xl leading-tight sm:text-5xl">
            Aprenda Inteligência Artificial do zero e transforme ideias em
            projetos reais.
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            Uma plataforma prática para aprender a usar IA, criar produtos
            digitais, desenvolver serviços e trabalhar com mais produtividade.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/cadastro">Quero começar</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>
        </section>

        <section className="border-y bg-secondary/30 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-semibold text-primary text-xs uppercase tracking-wide">
                O que é a IA Lucrativa
              </p>
              <h2 className="mt-2 font-bold font-heading text-2xl sm:text-3xl">
                Uma plataforma educacional para quem está começando na IA.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A IA Lucrativa ensina pessoas comuns a usar Inteligência
                Artificial de forma simples, prática e responsável — sem jargões
                técnicos e sem promessas de dinheiro fácil. O foco é aprender
                fazendo: aulas curtas, prompts prontos e um projeto real
                construído passo a passo.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <p className="mb-4 font-semibold text-primary text-xs uppercase tracking-wide">
                Para quem é
              </p>
              <ul className="flex flex-col gap-3">
                {AUDIENCE_POINTS.map((point) => (
                  <li className="flex items-start gap-2.5 text-sm" key={point}>
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
          id="o-que-aprende"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-primary text-xs uppercase tracking-wide">
              O que você vai aprender
            </p>
            <h2 className="mt-2 font-bold font-heading text-2xl sm:text-3xl">
              Da teoria à prática, em pequenos passos.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEARN_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm"
                  key={item.title}
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="font-heading font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y bg-secondary/30 py-20" id="como-funciona">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold text-primary text-xs uppercase tracking-wide">
                Como a plataforma funciona
              </p>
              <h2 className="mt-2 font-bold font-heading text-2xl sm:text-3xl">
                Um caminho guiado, do primeiro acesso ao primeiro projeto.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((item) => (
                <div
                  className="rounded-xl border bg-card p-5 shadow-sm"
                  key={item.step}
                >
                  <span className="gradient-brand-text font-extrabold font-heading text-2xl">
                    {item.step}
                  </span>
                  <p className="mt-2 font-heading font-semibold">
                    {item.title}
                  </p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-primary text-xs uppercase tracking-wide">
              Recursos da plataforma
            </p>
            <h2 className="mt-2 font-bold font-heading text-2xl sm:text-3xl">
              Tudo que você precisa para praticar.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm"
                  key={feature.title}
                >
                  <div className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-xl text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y bg-secondary/30 py-20" id="faq">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="font-semibold text-primary text-xs uppercase tracking-wide">
                Perguntas frequentes
              </p>
              <h2 className="mt-2 font-bold font-heading text-2xl sm:text-3xl">
                Ainda com dúvidas?
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <details
                  className="group rounded-xl border bg-card p-5 shadow-sm"
                  key={item.question}
                >
                  <summary className="cursor-pointer list-none font-heading font-semibold marker:content-none">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-8 text-center shadow-sm sm:flex-row sm:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-2xl text-primary">
              BO
            </div>
            <div>
              <p className="font-semibold text-primary text-xs uppercase tracking-wide">
                Criado por Bruna Oliveira
              </p>
              <p className="mt-2 text-muted-foreground">
                Bruna trabalha com tecnologia, criação de conteúdo, automações e
                produtos digitais. Criou a IA Lucrativa para ensinar pessoas
                comuns a utilizarem Inteligência Artificial de forma simples e
                prática.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6">
          <div className="gradient-brand rounded-2xl p-10 text-white shadow-sm sm:p-14">
            <BookOpen className="mx-auto size-8" />
            <h2 className="mt-4 font-bold font-heading text-2xl sm:text-3xl">
              Comece a aprender Inteligência Artificial hoje.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-white/90">
              Crie sua conta gratuita e siga o seu caminho, no seu ritmo.
            </p>
            <Button
              asChild
              className="mt-6 bg-white text-brand-navy hover:bg-white/90"
              size="lg"
            >
              <Link href="/cadastro">Quero começar</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
