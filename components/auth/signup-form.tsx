"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setIsLoading(true);
    const supabase = createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${siteUrl}/auth/callback`,
      },
    });

    setIsLoading(false);

    if (signUpError) {
      setError(
        signUpError.message.includes("already registered")
          ? "Este e-mail já está cadastrado."
          : "Não foi possível criar sua conta. Tente novamente."
      );
      return;
    }

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="space-y-3 text-center">
        <h1 className="font-bold font-heading text-2xl">Quase lá</h1>
        <p className="text-muted-foreground text-sm">
          Enviamos um link de confirmação para <strong>{email}</strong>. Abra
          seu e-mail para ativar a conta e começar.
        </p>
        <Button asChild className="mt-2 w-full">
          <Link href="/login">Ir para o login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1.5">
        <h1 className="font-bold font-heading text-2xl">Criar conta</h1>
        <p className="text-muted-foreground text-sm">
          Comece a aprender Inteligência Artificial na prática, sem custo.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            autoComplete="name"
            id="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Seu nome"
            required
            value={name}
          />
        </div>

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
          <Label htmlFor="password">Senha</Label>
          <Input
            autoComplete="new-password"
            id="password"
            minLength={6}
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
          {isLoading ? "Criando conta..." : "Criar conta"}
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-sm">
        Já tem uma conta?{" "}
        <Link
          className="font-medium text-primary hover:underline"
          href="/login"
        >
          Entrar
        </Link>
      </p>
    </div>
  );
}
