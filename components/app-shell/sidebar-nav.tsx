"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/components/app-shell/nav-items";
import { UserMenu } from "@/components/app-shell/user-menu";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function SidebarNav({
  name,
  email,
  avatarUrl,
}: {
  name: string;
  email: string;
  avatarUrl: string | null;
}) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-r bg-sidebar px-4 py-6 md:flex">
      <Link className="px-2" href="/inicio">
        <Logo className="text-lg" />
      </Link>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium text-muted-foreground text-sm transition-colors hover:bg-secondary hover:text-foreground",
                isActive && "bg-primary/10 text-primary hover:bg-primary/10"
              )}
              href={item.href}
              key={item.href}
            >
              <Icon className="size-5" strokeWidth={2} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <UserMenu avatarUrl={avatarUrl} email={email} name={name} />
    </aside>
  );
}
