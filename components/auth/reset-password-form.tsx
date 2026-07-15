"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });
    setIsLoading(false);

    if (updateError) {
      setError("Não foi possível redefinir sua senha. Solicite um novo link.");
      return;
    }

    router.push("/inicio");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1.5">
        <h1 className="font-bold font-heading text-2xl">Criar nova senha</h1>
        <p className="text-muted-foreground text-sm">
          Escolha uma nova senha para acessar sua conta.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Nova senha</Label>
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

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
          <Input
            autoComplete="new-password"
            id="confirmPassword"
            minLength={6}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            type="password"
            value={confirmPassword}
          />
        </div>

        {error ? (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        ) : null}

        <Button className="mt-2" disabled={isLoading} type="submit">
          {isLoading ? "Salvando..." : "Salvar nova senha"}
        </Button>
      </form>
    </div>
  );
}
