"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (signInError) {
      setError("E-mail ou senha incorretos. Tente novamente.");
      return;
    }

    const redirectTo = searchParams.get("redirectTo") ?? "/inicio";
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1.5">
        <h1 className="font-bold font-heading text-2xl">Entrar</h1>
        <p className="text-muted-foreground text-sm">
          Acesse sua conta para continuar aprendendo.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            autoComplete="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            required
            type="email"
            value={email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link
              className="text-primary text-xs hover:underline"
              href="/recuperar-senha"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input
            autoComplete="current-password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        {error ? (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        ) : null}

        <Button className="mt-2" disabled={isLoading} type="submit">
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-sm">
        Ainda não tem conta?{" "}
        <Link
          className="font-medium text-primary hover:underline"
          href="/cadastro"
        >
          Criar conta gratuita
        </Link>
      </p>
    </div>
  );
}
