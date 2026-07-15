import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-bold font-heading tracking-tight",
        className
      )}
    >
      <span aria-hidden className="gradient-brand size-2.5 rounded-full" />
      IA Lucrativa
    </span>
  );
}
