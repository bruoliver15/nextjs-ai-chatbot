"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/components/app-shell/nav-items";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex overflow-x-auto border-t bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80 md:hidden">
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        return (
          <Link
            className={cn(
              "flex min-w-16 flex-1 flex-col items-center gap-1 px-2 py-2.5 font-medium text-[11px] text-muted-foreground",
              isActive && "text-primary"
            )}
            href={item.href}
            key={item.href}
          >
            <Icon className="size-5" strokeWidth={2} />
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
