"use client";

import { Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export function DeleteProjectButton({
  projectId,
  projectTitle,
}: {
  projectId: string;
  projectTitle: string;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    const supabase = createClient();
    await supabase.from("projects").delete().eq("id", projectId);
    setIsDeleting(false);
    router.refresh();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button aria-label="Excluir projeto" size="icon" variant="ghost">
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir "{projectTitle}"?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Todo o conteúdo desse projeto será
            removido permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={isDeleting} onClick={handleDelete}>
            {isDeleting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Excluir"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
