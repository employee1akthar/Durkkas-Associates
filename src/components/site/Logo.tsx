import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "grid h-9 w-9 place-items-center rounded-xl border bg-secondary text-primary shadow-soft",
        className,
      )}
    >
      <span className="text-sm font-semibold">DA</span>
    </div>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("leading-tight", className)}>
      <p className="text-sm font-semibold tracking-tight">Durkkas Associates</p>
      <p className="text-xs text-muted-foreground">Durkkas Innovations Pvt. Ltd.</p>
    </div>
  );
}
