import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Inscrição confirmada | Ciclo das Viagens Infinitas",
  description:
    "Sua inscrição foi confirmada. Verifique seu e-mail (e o spam) para acessar o Ciclo das Viagens Infinitas.",
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
        <div className="-translate-x-1/2 pointer-events-none absolute top-[-10rem] left-1/2 h-[28rem] w-[28rem] rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] bottom-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#1f8a8c]/15 blur-3xl" />

        <main className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-20">
          <h1
            className={`${playfair.className} text-balance font-semibold text-3xl leading-tight sm:text-4xl`}
          >
            🎉 Parabéns! Sua inscrição foi confirmada.
          </h1>

          <p className="mt-4 max-w-xl text-[#cfc7b5] text-base sm:text-lg">
            Agora falta só seguir os passos abaixo para acessar tudo o que faz
            parte do seu{" "}
            <span className="text-[#2dd4bf]">Ciclo das Viagens Infinitas</span>.
          </p>

          {/* Passo 1: e-mail */}
          <div className="mt-10 w-full rounded-2xl border-2 border-[#2dd4bf] bg-[#16292c] p-6 text-left shadow-[0_0_40px_rgba(45,212,191,0.12)] sm:p-8">
            <h2
              className={`${playfair.className} font-semibold text-[#2dd4bf] text-xl sm:text-2xl`}
            >
              📩 1. Confira seu e-mail
            </h2>

            <p className="mt-3 text-[#e7e1d3]">Você receberá 2 e-mails:</p>

            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-[#2dd4bf]/20 bg-[#0d1b1e]/40 p-4">
                <p className="font-semibold text-[#f5efe4]">Hubla</p>
                <p className="mt-1 text-[#e7e1d3]">
                  Acesso à sua Área de Membros.
                </p>
              </div>
              <div className="rounded-lg border border-[#2dd4bf]/20 bg-[#0d1b1e]/40 p-4">
                <p className="font-semibold text-[#f5efe4]">Cursos Educa</p>
                <p className="mt-1 text-[#e7e1d3]">
                  Acesso à plataforma onde estão as aulas.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[#a89f8c] text-sm">
              Não encontrou? Verifique também as pastas{" "}
              <strong className="text-[#f5efe4]">
                Spam, Promoções e Lixo Eletrônico
              </strong>
              .
            </p>
          </div>

          {/* Passo 2: Área de membros */}
          <div className="mt-6 w-full rounded-2xl border-2 border-[#2dd4bf] bg-[#16292c] p-6 text-left shadow-[0_0_40px_rgba(45,212,191,0.12)] sm:p-8">
            <h2
              className={`${playfair.className} font-semibold text-[#2dd4bf] text-xl sm:text-2xl`}
            >
              👥 2. Entre na Área de Membros da Hubla
            </h2>

            <p className="mt-3 text-[#e7e1d3]">
              Na Hubla você encontrará os links para entrar no:
            </p>

            <ul className="mt-3 space-y-2 text-[#e7e1d3]">
              <li>✅ GOE (Grupo de Oportunidades Exclusivas)</li>
              <li>✅ Grupo Oficial da Turma</li>
            </ul>

            <p className="mt-4 text-[#a89f8c] text-sm">
              Esses grupos são onde enviamos avisos, atualizações e informações
              importantes.
            </p>
          </div>

          {/* Passo 3: aulas */}
          <div className="mt-6 w-full rounded-2xl border-2 border-[#2dd4bf] bg-[#16292c] p-6 text-left shadow-[0_0_40px_rgba(45,212,191,0.12)] sm:p-8">
            <h2
              className={`${playfair.className} font-semibold text-[#2dd4bf] text-xl sm:text-2xl`}
            >
              🎓 3. Comece as aulas
            </h2>

            <p className="mt-3 text-[#e7e1d3]">
              Utilize o acesso enviado pela Cursos Educa para entrar na
              plataforma e assistir às aulas do{" "}
              <strong className="text-[#f5efe4]">
                Ciclo das Viagens Infinitas
              </strong>
              .
            </p>
          </div>

          {/* Suporte */}
          <div className="mt-10 text-center">
            <p className={`${playfair.className} text-[#2dd4bf] text-lg`}>
              💙 Precisa de ajuda?
            </p>
            <p className="mt-2 max-w-xl text-[#e7e1d3]">
              Se tiver qualquer dificuldade para localizar seus acessos, fale
              com nosso suporte:
            </p>
            <p className="mt-2 font-semibold text-[#f5efe4] text-lg">
              📲 +55 51 3191-3156
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 font-semibold text-[#0d1b1e] transition-opacity hover:opacity-90"
              href="https://wa.me/5131913156"
              rel="noopener noreferrer"
              target="_blank"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
