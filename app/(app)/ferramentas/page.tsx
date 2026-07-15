import type { Metadata } from "next";
import { ToolsDirectory } from "@/components/tools/tools-directory";
import { createClient } from "@/lib/supabase/server";
import type { Tool } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Ferramentas — IA Lucrativa",
};

export default async function ToolsPage() {
  const supabase = await createClient();
  const { data: tools } = await supabase
    .from("tools")
    .select("*")
    .order("name");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">
          Ferramentas
        </h1>
        <p className="text-muted-foreground">
          Conheça as principais ferramentas de IA para começar a criar.
        </p>
      </div>

      <ToolsDirectory tools={(tools ?? []) as Tool[]} />
    </div>
  );
}
