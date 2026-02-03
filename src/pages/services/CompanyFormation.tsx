import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "End-to-End Compliance",
    desc: "We manage all statutory and regulatory obligations seamlessly.",
  },
  {
    title: "Single Point Partner",
    desc: "One trusted partner for legal, compliance & governance.",
  },
  {
    title: "Governance Ready",
    desc: "Strong documentation and future-ready structures.",
  },
];

export default function CompanyFormation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-slate-800 overflow-hidden">

      {/* ================= HERO ================= */}
     <section
  className="relative h-[70vh] flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: "url('/services9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#0f172a]/75" />

  {/* Blue glow shadows */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-4xl text-center px-6"
  >
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.04 }}
      className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg"
    >
      {"Company Formation & Compliance Management"
        .split("")
        .map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {char}
          </motion.span>
        ))}
    </motion.h1>

    {/* Glow line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mx-auto mt-6 h-[3px] w-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
    />

    {/* Sub text */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-6 text-lg text-slate-200"
    >
      End-to-End Legal, Statutory & Regulatory Support
    </motion.p>
  </motion.div>
</section>

      {/* ================= CAROUSEL ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-500 rounded-3xl shadow-xl p-12"
            >
              <h3 className="text-2xl font-bold text-white">
                {slides[index].title}
              </h3>
              <p className="mt-4 text-slate-200 text-lg">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${
                  i === index ? "bg-blue-600" : "bg-slate-300"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE + CIRCLES ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/services10.jpg"
              className="rounded-3xl shadow-2xl"
              alt="Compliance"
            />
          </motion.div>

          {/* CIRCLES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-100 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-2xl" />

            <h2 className="text-3xl font-bold mb-6">
              Compliance Made Simple
            </h2>
            <p className="text-slate-600 mb-6">
              We act as a single-point compliance partner, ensuring businesses
              remain legally compliant while leadership focuses on growth.
            </p>

            <ul className="space-y-4">
              {[
                "Structured Company Setup",
                "Ongoing ROC & MCA Compliance",
                "Transparent Timelines",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
   <section className="relative py-32 bg-[#0b1224] overflow-hidden">

      {/* ANIMATED BACKGROUND ORBS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/30 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-40 w-[460px] h-[460px] bg-white/20 rounded-full blur-[160px]"
      />

      

      <div className="relative max-w-6xl mx-auto px-6 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-24"
        >
          Why Businesses Trust Us
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            "Complete ownership and accountability",
            "Experienced legal professionals",
            "Proactive compliance reminders",
            "Strong governance standards",
          ].map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -14 }}
              className="relative group"
            >
              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/40 to-white/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

              {/* ROTATING OUTER RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute -top-7 -right-7 w-24 h-24 rounded-full border border-blue-400/40"
              >
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full" />
              </motion.div>

              {/* CARD */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-9 h-full shadow-2xl overflow-hidden">
                
                {/* ICON CIRCLE */}
                <div className="relative mb-6 flex items-center justify-center">
  {/* STAR GLOW */}
  <div className="absolute inset-0 bg-yellow-400/50 blur-2xl rounded-full animate-pulse" />

  {/* STAR ICON */}
  <svg
    width="46"
    height="46"
    viewBox="0 0 24 24"
    fill="gold"
    className="relative drop-shadow-[0_0_20px_rgba(253,224,71,1)]"
  >
    <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.3 5.8 22 7 14.2 2 9.3l7.1-.7L12 2z" />
  </svg>
</div>


                <p className="text-slate-200 text-sm leading-relaxed">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    </main>
  );
}
