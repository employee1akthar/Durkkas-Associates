import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ScrollToTopButton from "@/components/site/ScrollToTopButton";

export default function SiteLayout() {
  const location = useLocation();
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  useEffect(() => {
    // Keep navigation feeling crisp on multi-page transitions.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const checkHideHeader = () => {
      setHideHeaderFooter(document.body.classList.contains("hide-site-header-footer"));
    };

    checkHideHeader();
    const observer = new MutationObserver(checkHideHeader);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {!hideHeaderFooter && <SiteHeader />}
      <Outlet />
      {!hideHeaderFooter && <SiteFooter />}
      <ScrollToTopButton />
    </div>
  );
}
