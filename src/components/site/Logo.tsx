import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/dalogocrop.png"
      alt="Durkkas Associates Logo"
      loading="eager"
      decoding="async"
      className={cn(
        "h-14 md:h-16 w-auto object-contain select-none",
        className
      )}
    />
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("leading-tight", className)}>
      <p className="text-base font-bold tracking-tight">
        Durkkas Associates
      </p>
      <p className="text-xs text-muted-foreground whitespace-nowrap">
        Division of Durkkas Innovations Pvt. Ltd.
      </p>
    </div>
  );
}
