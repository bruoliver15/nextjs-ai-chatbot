import type { SupabaseClient } from "@supabase/supabase-js";

function toDateKey(value: string | Date) {
  return new Date(value).toISOString().slice(0, 10);
}

/**
 * Atualiza a sequência de dias de estudo do usuário. Chamado quando o
 * usuário completa uma aula, um dia do desafio, ou conclui um projeto.
 */
export async function touchActivity(supabase: SupabaseClient, userId: string) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("streak_days, last_activity_at")
    .eq("id", userId)
    .single();

  const now = new Date();
  const today = toDateKey(now);
  const lastActivity = profile?.last_activity_at
    ? toDateKey(profile.last_activity_at)
    : null;

  if (lastActivity === today) {
    return;
  }

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isConsecutive = lastActivity === toDateKey(yesterday);
  const nextStreak = isConsecutive ? (profile?.streak_days ?? 0) + 1 : 1;

  await supabase
    .from("profiles")
    .update({ streak_days: nextStreak, last_activity_at: now.toISOString() })
    .eq("id", userId);
}
