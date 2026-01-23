import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ScrollToTopButton from "@/components/site/ScrollToTopButton";

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    // Keep navigation feeling crisp on multi-page transitions.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <ScrollToTopButton />
    </div>
  );
}
