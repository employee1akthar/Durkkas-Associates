import { useMemo, useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
        "relative py-2",
      ),
    [],
  );

  const activeDesktopClass = useMemo(
    () => "text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary",
    [],
  );

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Durkkas Associates">
          <LogoMark />
          {/* Show company name in mobile header as well */}
          <LogoWordmark className="block max-w-[200px]" />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
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

        <div className="hidden lg:block">
          <Button variant="brand" size="sm">Contact</Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="brandOutline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3 border-b pb-4">
                  <LogoMark />
                  <span className="text-base font-semibold">Durkkas Associates</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-1">
                {navItems.map((item) => (
                  <Button key={item.to} asChild variant="ghost" className="justify-start h-12 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200">
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className="w-full px-4 text-sm font-medium"
                      activeClassName="bg-primary/10 text-primary border-l-2 border-primary"
                      onClick={handleMenuClick}
                    >
                      {item.label}
                    </NavLink>
                  </Button>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t">
                <Button variant="brand" className="w-full h-11 font-medium">
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
