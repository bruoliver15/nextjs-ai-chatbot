import { notFound } from "next/navigation";
import { ProjectWizard } from "@/components/projects/project-wizard";
import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/lib/types/database";

export default async function ProjectWizardPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .eq("user_id", user.id)
    .single();

  if (!project) {
    notFound();
  }

  return <ProjectWizard project={project as Project} userId={user.id} />;
}
