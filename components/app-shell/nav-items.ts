import {
  BookOpen,
  FolderKanban,
  Home,
  MessageSquareText,
  PlusCircle,
  TrendingUp,
  UserCircle,
  Wrench,
} from "lucide-react";

export const NAV_ITEMS = [
  { href: "/inicio", label: "Início", icon: Home },
  { href: "/aprender", label: "Aprender", icon: BookOpen },
  { href: "/prompts", label: "Prompts", icon: MessageSquareText },
  { href: "/criar-projeto", label: "Criar Projeto", icon: PlusCircle },
  { href: "/projetos", label: "Meus Projetos", icon: FolderKanban },
  { href: "/ferramentas", label: "Ferramentas", icon: Wrench },
  { href: "/progresso", label: "Meu Progresso", icon: TrendingUp },
  { href: "/perfil", label: "Perfil", icon: UserCircle },
] as const;
