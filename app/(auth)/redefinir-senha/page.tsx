import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export const metadata: Metadata = {
  title: "Redefinir senha — IA Lucrativa",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
