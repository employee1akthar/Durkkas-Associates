import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollToTopButtonProps = {
  className?: string;
  showAfterPx?: number;
};

export default function ScrollToTopButton({
  className,
  showAfterPx = 320,
}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfterPx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 transition-all duration-200",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
        className,
      )}
    >
      <Button
        type="button"
        variant="brand"
        size="icon"
        className="shadow-elevated"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
