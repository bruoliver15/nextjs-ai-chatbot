import type { Metadata } from "next";
import { CreateProjectPicker } from "@/components/projects/create-project-picker";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Criar projeto — IA Lucrativa",
};

export default async function CreateProjectPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          O que você deseja criar?
        </h1>
        <p className="text-muted-foreground">
          Escolha um formato para começar. Você vai ser guiado passo a passo.
        </p>
      </div>

      <CreateProjectPicker userId={user.id} />
    </div>
  );
}
