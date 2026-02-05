import { useMemo, useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoMark, LogoWordmark } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = useMemo(
    () =>
      cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        "relative py-2"
      ),
    []
  );

  const activeDesktopClass = useMemo(
    () =>
      "text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary",
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur overflow-x-hidden">
      
      {/* ✅ container width safe — no horizontal scroll */}
      <div className="max-w-7xl mx-auto px-4 flex h-20 items-center justify-between gap-4">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <LogoMark />
          <LogoWordmark className="hidden sm:block max-w-[220px]" />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={desktopLinkClass}
              activeClassName={activeDesktopClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block shrink-0">
          <Button asChild variant="brand" size="sm">
            <NavLink to="/contact">Contact</NavLink>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden shrink-0">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="brandOutline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] flex flex-col">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3 border-b pb-4">
                  <LogoMark className="h-12" />
                  <span className="text-base font-semibold">
                    Durkkas Associates
                  </span>
                </SheetTitle>
              </SheetHeader>

              {/* MOBILE NAV */}
              <div className="mt-6 grid gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    asChild
                    variant="ghost"
                    className="justify-start h-12 rounded-lg"
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className="w-full px-4 text-sm font-medium"
                      activeClassName="bg-primary/10 text-primary border-l-2 border-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </Button>
                ))}
              </div>

              {/* MOBILE CONTACT */}
              <div className="mt-auto pt-6 border-t">
                <Button asChild variant="brand" className="w-full h-11">
                  <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </NavLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
