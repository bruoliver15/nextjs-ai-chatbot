"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const supabase = createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email,
      { redirectTo: `${siteUrl}/auth/callback?next=/redefinir-senha` }
    );

    setIsLoading(false);

    if (resetError) {
      setError("Não foi possível enviar o e-mail. Tente novamente.");
      return;
    }

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="space-y-3 text-center">
        <h1 className="font-bold font-heading text-2xl">
          Verifique seu e-mail
        </h1>
        <p className="text-muted-foreground text-sm">
          Se houver uma conta com o e-mail <strong>{email}</strong>, você vai
          receber um link para redefinir sua senha.
        </p>
        <Button asChild className="mt-2 w-full" variant="outline">
          <Link href="/login">Voltar para o login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1.5">
        <h1 className="font-bold font-heading text-2xl">Recuperar senha</h1>
        <p className="text-muted-foreground text-sm">
          Informe seu e-mail e enviaremos um link para você criar uma nova
          senha.
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

        {error ? (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        ) : null}

        <Button className="mt-2" disabled={isLoading} type="submit">
          {isLoading ? "Enviando..." : "Enviar link de recuperação"}
        </Button>
      </form>

      <p className="text-center text-muted-foreground text-sm">
        <Link
          className="font-medium text-primary hover:underline"
          href="/login"
        >
          Voltar para o login
        </Link>
      </p>
    </div>
  );
}
