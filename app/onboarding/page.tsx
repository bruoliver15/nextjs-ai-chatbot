import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";

export const metadata: Metadata = {
  title: "Vamos montar seu caminho — IA Lucrativa",
};

export default function OnboardingPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-secondary/40 px-4 py-12">
      <OnboardingFlow />
    </div>
  );
}
