import type { Metadata } from "next";
import { ChangePasswordForm } from "@/components/profile/change-password-form";
import { ProfileForm } from "@/components/profile/profile-form";
import { StandaloneLogoutButton } from "@/components/profile/standalone-logout-button";
import { createClient } from "@/lib/supabase/server";
import type { Profile } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Perfil — IA Lucrativa",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-10">
      <div>
        <h1 className="font-bold font-heading text-2xl sm:text-3xl">Perfil</h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>

      <section className="rounded-xl border bg-card p-6 shadow-sm">
        <ProfileForm profile={profile as Profile} userId={user.id} />
      </section>

      <section className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="font-bold font-heading text-lg">Alterar senha</h2>
        <ChangePasswordForm />
      </section>

      <StandaloneLogoutButton />
    </div>
  );
}
