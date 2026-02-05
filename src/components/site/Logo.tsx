import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/dalogo.jpg"
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
      <p className="text-sm text-muted-foreground">
        Durkkas Innovations Pvt. Ltd.
      </p>
    </div>
  );
}
