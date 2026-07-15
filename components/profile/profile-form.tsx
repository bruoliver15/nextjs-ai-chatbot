"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  availableTimeOptions,
  firstProjectOptions,
  knowledgeLevelOptions,
  mainGoalOptions,
} from "@/lib/onboarding-options";
import { createClient } from "@/lib/supabase/client";
import type {
  AvailableTime,
  FirstProject,
  KnowledgeLevel,
  MainGoal,
  Profile,
} from "@/lib/types/database";
import { getInitials } from "@/lib/utils";

export function ProfileForm({
  profile,
  userId,
}: {
  profile: Profile;
  userId: string;
}) {
  const router = useRouter();
  const [name, setName] = useState(profile.name ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar_url ?? "");
  const [mainGoal, setMainGoal] = useState<MainGoal | "">(
    profile.main_goal ?? ""
  );
  const [knowledgeLevel, setKnowledgeLevel] = useState<KnowledgeLevel | "">(
    profile.knowledge_level ?? ""
  );
  const [availableTime, setAvailableTime] = useState<AvailableTime | "">(
    profile.available_time ?? ""
  );
  const [firstProject, setFirstProject] = useState<FirstProject | "">(
    profile.first_project ?? ""
  );
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSave() {
    setIsSaving(true);
    setSuccess(false);
    const supabase = createClient();

    await supabase
      .from("profiles")
      .update({
        name,
        avatar_url: avatarUrl || null,
        main_goal: mainGoal || null,
        knowledge_level: knowledgeLevel || null,
        available_time: availableTime || null,
        first_project: firstProject || null,
      })
      .eq("id", userId);

    setIsSaving(false);
    setSuccess(true);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          {avatarUrl ? <AvatarImage alt={name} src={avatarUrl} /> : null}
          <AvatarFallback className="bg-primary/10 text-lg text-primary">
            {getInitials(name || "Você")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Label htmlFor="avatarUrl">URL da foto (opcional)</Label>
          <Input
            id="avatarUrl"
            onChange={(event) => setAvatarUrl(event.target.value)}
            placeholder="https://..."
            value={avatarUrl}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label>Objetivo principal</Label>
          <Select
            onValueChange={(value) => setMainGoal(value as MainGoal)}
            value={mainGoal}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {mainGoalOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Nível de conhecimento</Label>
          <Select
            onValueChange={(value) =>
              setKnowledgeLevel(value as KnowledgeLevel)
            }
            value={knowledgeLevel}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {knowledgeLevelOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Tempo diário disponível</Label>
          <Select
            onValueChange={(value) => setAvailableTime(value as AvailableTime)}
            value={availableTime}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {availableTimeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Projeto principal</Label>
          <Select
            onValueChange={(value) => setFirstProject(value as FirstProject)}
            value={firstProject}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {firstProjectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {success ? (
        <p className="text-accent-foreground text-sm">
          Alterações salvas com sucesso.
        </p>
      ) : null}

      <Button className="w-fit gap-2" disabled={isSaving} onClick={handleSave}>
        {isSaving ? <Loader2 className="size-4 animate-spin" /> : null}
        Salvar alterações
      </Button>
    </div>
  );
}
