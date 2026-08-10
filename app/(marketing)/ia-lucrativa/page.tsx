import {
  ArrowRight,
  Check,
  MessageCircleQuestion,
  Sparkles,
  X,
} from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "IA Lucrativa — Guia Interativo de Inteligência Artificial",
  description:
    "Aprenda a usar Inteligência Artificial na prática, do absoluto zero, em 7 dias. Sem termos complicados, sem precisar entender de tecnologia.",
};

const CHECKOUT_URL = "#oferta";

const APRENDIZADOS = [
  {
    titulo: "O que é Inteligência Artificial",
    descricao:
      "Uma explicação simples para quem nunca teve contato com o assunto.",
  },
  {
    titulo: "ChatGPT, Claude e Gemini",
    descricao: "O que são essas ferramentas e por onde começar.",
  },
  {
    titulo: "O que é um prompt",
    descricao:
      "E por que a maneira como você conversa com a IA muda tanto o resultado.",
  },
  {
    titulo: "Como fazer pedidos melhores",
    descricao: "Sem precisar decorar comandos gigantes.",
  },
  {
    titulo: "Método C.R.I.A.",
    descricao:
      "Uma estrutura simples para ajudar você a dizer à IA o que precisa.",
  },
  {
    titulo: "Como melhorar as respostas da IA",
    descricao:
      "Você vai descobrir que não precisa aceitar a primeira resposta que receber.",
  },
  {
    titulo: "Como utilizar IA com responsabilidade",
    descricao: "Inclusive entendendo que a IA também pode errar.",
  },
];

const METODO_CRIA = [
  {
    letra: "C",
    palavra: "Contexto",
    descricao: "Explique sua situação.",
  },
  {
    letra: "R",
    palavra: "Resultado",
    descricao: "Diga o que você quer.",
  },
  {
    letra: "I",
    palavra: "Informações",
    descricao: "Forneça os detalhes importantes.",
  },
  {
    letra: "A",
    palavra: "Apresentação",
    descricao: "Explique como deseja receber a resposta.",
  },
];

const CAMINHOS = [
  {
    titulo: "Criar conteúdo",
    descricao:
      "Use IA para desenvolver uma primeira criação para suas redes sociais.",
  },
  {
    titulo: "Explorar um produto digital",
    descricao: "Organize uma ideia e descubra o que precisaria desenvolver.",
  },
  {
    titulo: "Explorar um serviço",
    descricao:
      "Use suas habilidades como ponto de partida para pesquisar possibilidades.",
  },
  {
    titulo: "Produtividade",
    descricao: "Use IA para ajudar em uma tarefa real da sua rotina.",
  },
];

const DESAFIO = [
  {
    dia: "1",
    titulo: "Conheça",
    descricao: "Tenha uma conversa real com a IA.",
  },
  {
    dia: "2",
    titulo: "Aprenda a pedir",
    descricao: "Crie seu primeiro prompt usando o Método C.R.I.A.",
  },
  {
    dia: "3",
    titulo: "Continue a conversa",
    descricao: "Aprenda a melhorar uma resposta.",
  },
  { dia: "4", titulo: "Resolva", descricao: "Use IA em algo da sua rotina." },
  { dia: "5", titulo: "Crie", descricao: "Comece sua primeira criação." },
  {
    dia: "6",
    titulo: "Melhore",
    descricao: "Use a própria IA para revisar o que você fez.",
  },
  {
    dia: "7",
    titulo: "Finalize",
    descricao: "Chegue à sua primeira versão pronta.",
  },
];

const PARA_QUEM = [
  "Nunca utilizou Inteligência Artificial e quer começar.",
  "Já abriu o ChatGPT, mas não soube o que escrever.",
  "Faz perguntas para a IA e recebe respostas genéricas.",
  "Ouve falar de prompts, mas ainda não entende direito como funcionam.",
  "Quer descobrir maneiras práticas de utilizar IA no trabalho, estudos, conteúdo ou rotina.",
  "Quer aprender no seu ritmo, começando pelo básico.",
];

const FAQ = [
  {
    pergunta: "Nunca usei IA. Vou conseguir acompanhar?",
    resposta:
      "Sim. O conteúdo começa explicando o que é Inteligência Artificial antes de entrar em prompts e atividades práticas.",
  },
  {
    pergunta: "Preciso saber programação?",
    resposta: "Não. O material foi desenvolvido para iniciantes.",
  },
  {
    pergunta: "Preciso pagar ChatGPT, Claude ou Gemini?",
    resposta:
      "Não necessariamente. Você pode começar utilizando opções disponíveis gratuitamente, observando os limites e condições atuais de cada ferramenta.",
  },
  {
    pergunta: "É um curso com videoaulas?",
    resposta: "Não. Neste momento, o produto é um guia digital prático.",
  },
  {
    pergunta: "Vou ganhar dinheiro depois de ler o e-book?",
    resposta:
      "O material não promete renda ou resultado financeiro. Ele ensina fundamentos e aplicações práticas de Inteligência Artificial.",
  },
  {
    pergunta: "Como recebo?",
    resposta:
      "Após a confirmação da compra, você recebe acesso ao material digital.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center font-medium text-primary/70 text-sm uppercase tracking-widest">
      {children}
    </p>
  );
}

function CtaButton({
  href = CHECKOUT_URL,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild className={className} size="lg">
      <a href={href}>
        {children}
        <ArrowRight />
      </a>
    </Button>
  );
}

export default function IaLucrativaPage() {
  return (
    <main className="bg-background text-foreground">
      {/* 1. PRIMEIRA DOBRA */}
      <section className="relative overflow-hidden border-b px-4 py-20 sm:py-28">
        <div
          aria-hidden
          className="-z-10 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--chart-3)/0.15),transparent_60%)]"
        />
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-1.5 font-medium text-secondary-foreground text-sm">
            <Sparkles className="size-4" />
            IA Lucrativa
          </div>
          <h1 className="text-balance font-semibold text-3xl leading-tight sm:text-5xl">
            Você ainda olha para a Inteligência Artificial e pensa:
            <br />
            <span className="text-muted-foreground">
              &ldquo;Tá&hellip; mas como eu uso isso na prática?&rdquo;
            </span>
          </h1>
          <p className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl">
            Conheça o <strong className="text-foreground">IA Lucrativa</strong>,
            um guia prático criado para quem quer começar do absoluto zero e
            aprender a usar Inteligência Artificial sem termos complicados e sem
            precisar entender de tecnologia.
          </p>
          <p className="mt-4 text-balance text-lg text-muted-foreground sm:text-xl">
            Em 7 dias, você vai aprender a conversar com uma IA, criar seus
            próprios prompts e usar a ferramenta para fazer sua primeira
            criação.
          </p>
          <CtaButton className="mt-8">Quero começar agora</CtaButton>
          <p className="mt-4 text-muted-foreground text-sm">
            Acesso imediato · Material digital · Para iniciantes
          </p>
        </div>
      </section>

      {/* 2. IDENTIFICAÇÃO */}
      <section className="border-b px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-center font-semibold text-2xl sm:text-3xl">
            Talvez IA ainda pareça complicada para você&hellip;
          </h2>
          <p className="mt-6 text-center text-muted-foreground">
            Você vê todo mundo falando sobre ChatGPT, Claude, Gemini, prompts e
            automações&hellip; Mas ninguém começa realmente do começo. E aí
            surgem aquelas dúvidas:
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3">
            {[
              "O que exatamente é IA?",
              "Qual ferramenta eu uso?",
              "O que eu escrevo no ChatGPT?",
              "O que é esse tal de prompt?",
              "Como as pessoas conseguem respostas tão boas?",
              "Como isso poderia ser útil para mim?",
            ].map((pergunta) => (
              <li
                className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-card-foreground"
                key={pergunta}
              >
                <MessageCircleQuestion className="size-5 shrink-0 text-muted-foreground" />
                <span>{pergunta}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center font-medium">
            Se você se identificou, esse guia foi pensado para você.
          </p>
          <p className="mt-4 text-balance text-center text-muted-foreground">
            Você não precisa saber programar. Não precisa entender de
            tecnologia. E não precisa ter usado Inteligência Artificial antes.
          </p>
        </div>
      </section>

      {/* 3. APRESENTAÇÃO DO PRODUTO */}
      <section className="border-b px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Conheça o IA Lucrativa</SectionEyebrow>
          <h2 className="text-balance font-semibold text-2xl sm:text-3xl">
            Um guia para você parar de apenas ouvir falar sobre IA e começar a
            USAR.
          </h2>
          <p className="mt-6 text-muted-foreground">
            O IA Lucrativa começa pelo básico e vai avançando junto com você.
          </p>
          <div className="mx-auto mt-6 flex max-w-xs flex-col gap-2 text-left">
            {[
              "Você primeiro entende.",
              "Depois vê exemplos.",
              "Depois testa.",
              "E então começa a criar.",
            ].map((etapa) => (
              <div className="flex items-center gap-3" key={etapa}>
                <Check className="size-5 shrink-0 text-primary" />
                <span>{etapa}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            A ideia não é terminar o e-book pensando:
          </p>
          <p className="mt-2 text-muted-foreground italic">
            &ldquo;Nossa, aprendi bastante sobre IA.&rdquo;
          </p>
          <p className="mt-4 text-muted-foreground">
            A ideia é terminar pensando:
          </p>
          <p className="mt-2 font-semibold text-xl">
            &ldquo;Agora eu sei como usar isso.&rdquo;
          </p>
        </div>
      </section>

      {/* 4. O QUE ELA VAI APRENDER */}
      <section className="border-b bg-secondary/40 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-center font-semibold text-2xl sm:text-3xl">
            Você vai aprender, passo a passo
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {APRENDIZADOS.map((item) => (
              <Card className="p-5" key={item.titulo}>
                <h3 className="font-semibold">{item.titulo}</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  {item.descricao}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center font-medium">
            E então você vai colocar tudo isso em prática.
          </p>
        </div>
      </section>

      {/* 5. MÉTODO C.R.I.A. */}
      <section className="border-b px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-semibold text-2xl sm:text-3xl">
            Você também vai conhecer o Método C.R.I.A.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Uma maneira simples de lembrar das informações que ajudam a IA a
            entender melhor o que você deseja.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {METODO_CRIA.map((item) => (
              <Card className="flex flex-col items-center p-6" key={item.letra}>
                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xl">
                  {item.letra}
                </span>
                <h3 className="mt-4 font-semibold">{item.palavra}</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  {item.descricao}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-8 font-medium">Clareza gera respostas melhores.</p>
        </div>
      </section>

      {/* 6. A PARTE MAIS IMPORTANTE */}
      <section className="border-b bg-secondary/40 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-semibold text-2xl sm:text-3xl">
            Você não vai apenas ler.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Durante o guia, você será convidada(o) a abrir uma ferramenta de IA
            e colocar o que acabou de aprender em prática. Você poderá escolher
            um caminho:
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CAMINHOS.map((item) => (
              <Card className="p-5 text-left" key={item.titulo}>
                <h3 className="font-semibold">{item.titulo}</h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  {item.descricao}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-8 font-medium">
            Você escolhe o caminho que mais combina com o seu momento.
          </p>
        </div>
      </section>

      {/* 7. DESAFIO */}
      <section className="border-b px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-center font-semibold text-2xl sm:text-3xl">
            Desafio IA Lucrativa
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            7 dias colocando IA em prática
          </p>
          <ol className="mt-10 flex flex-col gap-4">
            {DESAFIO.map((item) => (
              <li
                className="flex items-start gap-4 rounded-lg border bg-card p-4"
                key={item.dia}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                  {item.dia}
                </span>
                <div>
                  <h3 className="font-semibold">
                    Dia {item.dia} — {item.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.descricao}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8 & 9. PARA QUEM É / NÃO É PARA */}
      <section className="border-b bg-secondary/40 px-4 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-semibold text-2xl">
              O IA Lucrativa é para você que&hellip;
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {PARA_QUEM.map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Não é para&hellip;</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Um curso avançado de programação ou desenvolvimento de IA.",
                "Uma promessa de dinheiro fácil.",
                'Fórmulas mágicas do tipo: "Digite este prompt e ganhe R$10 mil."',
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <X className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              O objetivo é outro: ensinar uma habilidade que você poderá
              continuar desenvolvendo.
            </p>
          </div>
        </div>
      </section>

      {/* 10. OFERTA */}
      <section className="border-b px-4 py-20" id="oferta">
        <div className="mx-auto max-w-lg">
          <Card className="flex flex-col items-center p-8 text-center">
            <p className="text-muted-foreground">Comece hoje por apenas</p>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-muted-foreground line-through">
                R$ 47,00
              </span>
              <span className="font-bold text-4xl">R$ 17,00</span>
            </div>
            <p className="mt-1 text-muted-foreground text-sm">
              Pagamento único.
            </p>
            <div className="mt-6 w-full border-t pt-6 text-left">
              <p className="font-medium">Você recebe acesso ao:</p>
              <p className="mt-1 text-muted-foreground text-sm">
                IA Lucrativa — Guia Interativo de Inteligência Artificial
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  "Método C.R.I.A.",
                  "Prompts práticos dentro do guia",
                  "Desafio IA Lucrativa de 7 dias",
                  "Exercícios de aplicação",
                ].map((item) => (
                  <li className="flex items-center gap-3 text-sm" key={item}>
                    <Check className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <CtaButton
              className="mt-8 w-full"
              href={CHECKOUT_URL === "#oferta" ? "#" : CHECKOUT_URL}
            >
              Quero meu IA Lucrativa por R$17
            </CtaButton>
            <p className="mt-4 text-muted-foreground text-xs">
              Acesso digital após a confirmação do pagamento.
            </p>
          </Card>
        </div>
      </section>

      {/* 11. O QUE EU QUERO QUE A PESSOA PENSE */}
      <section className="border-b bg-primary px-4 py-20 text-primary-foreground">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-balance font-semibold text-2xl sm:text-3xl">
            Não compre para apenas ler.
          </p>
          <p className="mt-6 text-balance text-lg opacity-90">
            Abra o guia.
            <br />
            Abra sua IA.
            <br />
            Teste.
            <br />
            Pergunte.
            <br />
            Melhore.
            <br />
            Crie.
          </p>
          <p className="mt-6 text-sm opacity-80">
            Esse é o objetivo do IA Lucrativa.
          </p>
        </div>
      </section>

      {/* 12. SOBRE VOCÊ */}
      <section className="border-b px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl sm:text-3xl">
            Prazer, eu sou Bruna Oliveira
          </h2>
          <p className="mt-6 text-muted-foreground">
            E talvez justamente por eu não querer transformar Inteligência
            Artificial em um assunto complicado, nasceu o IA Lucrativa.
          </p>
          <p className="mt-4 text-muted-foreground">
            Criei este guia pensando em quem vê tanta gente falando sobre IA,
            mas ainda não encontrou uma explicação que realmente comece do
            começo.
          </p>
          <p className="mt-4 text-muted-foreground">
            Minha proposta aqui não é ensinar termos difíceis. É mostrar de
            maneira simples como começar, o que escrever e como colocar a
            ferramenta para trabalhar junto com você.
          </p>
          <p className="mt-4 font-medium">
            E esse guia é apenas o seu primeiro passo. 💙
          </p>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="border-b bg-secondary/40 px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-center font-semibold text-2xl sm:text-3xl">
            Ainda ficou alguma dúvida?
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {FAQ.map((item) => (
              <details
                className="group rounded-lg border bg-card px-5 py-4 text-card-foreground open:pb-4"
                key={item.pergunta}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.pergunta}
                  <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. ÚLTIMA DOBRA */}
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="text-balance text-lg text-muted-foreground">
            Daqui a 7 dias, você pode continuar apenas ouvindo falar sobre
            IA&hellip; ou já pode ter começado a usar.
          </p>
          <p className="mt-4 text-balance">
            Você não precisa aprender tudo hoje.
            <br />
            <span className="font-medium">Precisa apenas começar.</span>
          </p>
          <div className="mt-10 flex flex-col items-center gap-1">
            <p className="font-semibold text-xl">IA LUCRATIVA</p>
            <p className="text-muted-foreground text-sm">
              Guia Interativo de Inteligência Artificial
            </p>
            <p className="mt-2 font-bold text-3xl">R$ 17,00</p>
          </div>
          <CtaButton className="mt-8">Quero começar agora</CtaButton>
          <p className="mt-4 text-muted-foreground text-sm">
            Pagamento único · Acesso digital
          </p>
        </div>
      </section>
    </main>
  );
}
