"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <DropdownMenuItem
      className="text-destructive focus:text-destructive"
      onClick={handleLogout}
    >
      <LogOut className="mr-2 size-4" />
      Sair
    </DropdownMenuItem>
  );
}
