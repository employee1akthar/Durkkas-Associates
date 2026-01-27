import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ================= HOOK : SCREEN SIZE ================= */
const useScreen = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 992,
    isDesktop: width >= 992,
  };
};

/* ================= ANIMATED INTRO TEXT ================= */
const AnimatedIntroText = ({ text }: { text: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    style={{
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "1.9",
      background:
        "linear-gradient(90deg, #0b4cff, #06b6d4, #1e40af, #0b4cff)",
      backgroundSize: "300% 300%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "gradientMove 6s ease infinite",
    }}
  >
    {text}
  </motion.p>
);

/* ================= SECTION CARD ================= */
type SectionProps = {
  title: string;
  content: string;
  img: string;
  reverse?: boolean;
};

const SectionCard = ({ title, content, img, reverse }: SectionProps) => {
  const { isMobile, isTablet, isDesktop } = useScreen();
  const isStacked = isMobile || isTablet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        flexDirection: isStacked
          ? "column"
          : reverse
          ? "row-reverse"
          : "row",
        marginBottom: "80px",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
      }}
    >
      {/* CONTENT */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #0b4cff, #1e40af)",
          color: "#fff",
          padding: isStacked
            ? "40px 24px"
            : reverse
            ? "60px 140px 60px 100px"
            : "60px 80px 60px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          clipPath:
            isDesktop
              ? reverse
                ? "ellipse(90% 100% at 100% 50%)"
                : "ellipse(90% 100% at 0% 50%)"
              : "none",
        }}
      >
        <h2
          style={{
            fontSize: isStacked ? "26px" : "34px",
            fontWeight: 700,
            marginBottom: "14px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            maxWidth: isStacked ? "100%" : "480px",
            textAlign: "justify",
            textIndent: "60px",
          }}
        >
          {content}
        </p>
      </div>

      {/* IMAGE */}
      <div
        style={{
          flex: 1,
          minHeight: isStacked ? "220px" : "auto",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </motion.div>
  );
};

/* ================= VISION / MISSION CARD ================= */
const VMCard = ({ title, content }: { title: string; content: string }) => {
  const { isMobile } = useScreen();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        flex: 1,
        minWidth: isMobile ? "100%" : "320px",
        background: "linear-gradient(135deg, #37edfa, #1e40af)",
        color: "#fff",
        padding: "36px",
        borderRadius: "24px",
        boxShadow: "0 18px 40px rgba(37,99,235,0.4)",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontSize: "16px", lineHeight: "1.7", opacity: 0.95 }}>
        {content}
      </p>
    </motion.div>
  );
};

/* ================= HERO CAROUSEL ================= */
const HeroCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setCurrent((p) => (p + 1) % images.length),
      5000
    );
    return () => clearInterval(i);
  }, [images.length]);

  return (
    <div style={{ position: "relative", height: "360px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(34, 222, 247, 0.97)), url(${images[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: 700 }}>About Us</h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ================= ABOUT PAGE ================= */
export default function About() {
  usePageTitle("About | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) return <PageLoader />;

  return (
    <main>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <HeroCarousel images={["/ass3.jpg", "/ass8.jpg", "/ass9.jpg"]} />

      <section style={{ padding: "80px 6%" }}>
        <div
        style={{
  maxWidth: "900px",
  margin: "0 auto",
  marginBottom: "80px",
  padding: "0 12px",
  textAlign: "center",
}}
        >
          <AnimatedIntroText text="Durkkas Associates is a professional business support and consulting division of Durkkas Innovations Pvt. Ltd." />
        </div>

        <SectionCard
          title="About Durkkas Innovations Pvt. Ltd."
          content="Durkkas Associates operates under Durkkas Innovations Pvt. Ltd., offering strategic business support to organizations of all sizes."
          img="/ass4.jpg"
        />

        <SectionCard
          title="What We Do"
          content="We offer comprehensive business solutions including accounting, auditing, taxation, payroll management, statutory compliance, and remote operational support to streamline your business operations."
          img="/ass5.jpg"
          reverse
        />

        <SectionCard
          title="Our Approach"
          content="We combine experienced professionals, standardized workflows, and modern technology to deliver consistent outcomes."
          img="/ass11.jpg"
        />

        {/* ================= VISION & MISSION ================= */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "120px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <VMCard
            title="Our Vision"
            content="To be the most trusted long-term business support and consulting partner for organizations worldwide."
          />
          <VMCard
            title="Our Mission"
            content="To simplify complex business operations through structured execution, expert guidance, and reliable support."
          />
        </div>
      </section>
    </main>
  );
}