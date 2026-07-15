import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo className="text-base" />
        <p className="text-muted-foreground text-sm">
          IA Lucrativa — plataforma educacional de Inteligência Artificial.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <Link className="hover:text-foreground" href="/login">
            Entrar
          </Link>
          <Link className="hover:text-foreground" href="/cadastro">
            Criar conta
          </Link>
        </div>
      </div>
    </footer>
  );
}
