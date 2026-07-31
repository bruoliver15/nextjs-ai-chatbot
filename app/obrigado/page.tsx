import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Compra confirmada | Plano Viagens Vitalícias com Milhas",
  description:
    "Sua compra foi confirmada. Verifique seu e-mail (e o spam) para acessar o Plano Viagens Vitalícias com Milhas.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export default function ObrigadoPage() {
  return (
    <div
      className={`${playfair.variable} min-h-screen bg-[#0d1b1e] text-[#f5efe4]`}
    >
      <div className="relative overflow-hidden">
        <div className="-translate-x-1/2 pointer-events-none absolute top-[-10rem] left-1/2 h-[28rem] w-[28rem] rounded-full bg-[#c9a24b]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] bottom-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#1f8a8c]/15 blur-3xl" />

        <main className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1f8a8c]/40 bg-[#1f8a8c]/10 px-4 py-1.5 font-medium text-[#7fd4d6] text-sm tracking-wide">
            ✓ Compra aprovada com sucesso
          </p>

          <h1
            className={`${playfair.className} mt-6 text-balance font-semibold text-3xl leading-tight sm:text-4xl`}
          >
            Parabéns! Sua vaga no{" "}
            <span className="text-[#e2bd6f]">
              Plano Viagens Vitalícias com Milhas
            </span>{" "}
            está garantida
          </h1>

          <p className="mt-4 max-w-xl text-[#cfc7b5] text-base sm:text-lg">
            Falta só um passo antes de você começar a planejar suas próximas
            viagens: liberar seu acesso pelo e-mail.
          </p>

          {/* Aviso principal: e-mail e spam */}
          <div className="mt-10 w-full rounded-2xl border-2 border-[#e2bd6f] bg-[#16292c] p-6 text-left shadow-[0_0_40px_rgba(226,189,111,0.08)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📩</span>
              <div>
                <h2
                  className={`${playfair.className} font-semibold text-[#e2bd6f] text-xl sm:text-2xl`}
                >
                  Olhe seu e-mail agora — inclusive o SPAM
                </h2>
                <p className="mt-2 text-[#e7e1d3]">
                  Neste exato momento estamos enviando para o seu e-mail de
                  cadastro os{" "}
                  <strong className="text-[#f5efe4]">
                    links de acesso ao Plano Viagens Vitalícias
                  </strong>
                  . Esse e-mail pode levar alguns minutos para chegar e, com
                  frequência, cai direto na caixa de{" "}
                  <strong className="text-[#f5efe4]">
                    Spam, Lixo Eletrônico ou Promoções
                  </strong>{" "}
                  em vez da caixa de entrada.
                </p>
              </div>
            </div>

            <ol className="mt-6 space-y-4 border-[#e2bd6f]/30 border-t pt-6">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e2bd6f] font-semibold text-[#0d1b1e] text-sm">
                  1
                </span>
                <span className="text-[#e7e1d3]">
                  Abra a caixa de entrada do e-mail que você usou na compra.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e2bd6f] font-semibold text-[#0d1b1e] text-sm">
                  2
                </span>
                <span className="text-[#e7e1d3]">
                  Não encontrou? Verifique as pastas de{" "}
                  <strong className="text-[#f5efe4]">
                    Spam / Lixo Eletrônico
                  </strong>{" "}
                  e Promoções — é o lugar mais comum onde ele acaba caindo.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e2bd6f] font-semibold text-[#0d1b1e] text-sm">
                  3
                </span>
                <span className="text-[#e7e1d3]">
                  Ao encontrar o e-mail, marque como "não é spam" e clique no
                  link de acesso para liberar seu conteúdo.
                </span>
              </li>
            </ol>
          </div>

          <p className="mt-6 text-[#a89f8c] text-sm">
            Se depois de alguns minutos o e-mail ainda não aparecer, confira se
            o endereço digitado na compra está correto antes de tentar
            novamente.
          </p>

          <p
            className={`${playfair.className} mt-14 text-[#e2bd6f] text-lg italic`}
          >
            Obrigado por confiar no Plano Viagens Vitalícias com Milhas.
          </p>
          <p className="mt-2 text-[#7c7666] text-xs">
            Sua próxima viagem começa nesse e-mail.
          </p>
        </main>
      </div>
    </div>
  );
}
