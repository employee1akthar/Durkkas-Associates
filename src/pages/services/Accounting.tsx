import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  "Accurate & audit-ready financial records",
  "Strong internal controls & governance",
  "Decision-ready MIS & reporting",
];

const cards = [
  {
    title: "Accurate Accounting Systems",
    description: "Structured, audit-ready financial records for compliance.",
    bg: "/accounting-slide.jpg",
  },
  {
    title: "Payroll & Tax Services",
    description: "GST, ITR, TDS compliance and timely submissions.",
    bg: "/payroll-slide.jpg",
  },
  {
    title: "Financial Compliance & MIS",
    description: "Management reporting and regulatory compliance support.",
    bg: "/compliance-slide.jpg",
  },
];

export default function Accounting() {
  const [index, setIndex] = useState(0);

  // Auto-slide for hero slides
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
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/services12.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center px-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Accounting & Auditing Services
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 h-[3px] w-24 md:w-32 bg-gradient-to-r from-blue-400 to-white rounded-full"
          />

          <p className="mt-6 text-sm md:text-lg text-slate-200">
            Accurate Financial Management with Complete Transparency
          </p>
        </motion.div>
      </section>

      {/* ================= SIDE IMAGE + CONTENT ================= */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* LEFT IMAGE with aspect ratio */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="w-full aspect-w-4 aspect-h-3 md:aspect-h-4">
                <img
                  src="/account10.png"
                  alt="Payroll Services"
                  className="w-full h-full object-contain rounded-3xl shadow-xl"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:-ml-0 lg:-ml-24 bg-white rounded-3xl shadow-2xl p-6 md:p-10 z-10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] leading-tight mb-4 md:mb-6">
                Our <span className="text-blue-600">Accounting</span> Expertise
              </h3>

              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Accurate accounting systems built for{" "}
                <span className="font-semibold text-blue-700">
                  compliance, clarity, and management-level decision making
                </span>.
                <br />
                We go beyond bookkeeping by creating structured, audit-ready financial records.
              </p>

              <ul className="space-y-3 md:space-y-4">
                {[
                  "Day-to-Day Bookkeeping & Ledger Maintenance",
                  "Finalization of Accounts & Year-End Closures",
                  "MIS & Management Reporting",
                  "Regulatory & Financial Compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-slate-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LEFT CONTENT + RIGHT IMAGE ================= */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* LEFT CONTENT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:-mr-0 lg:-mr-24 bg-white rounded-3xl shadow-2xl p-6 md:p-10 z-10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] leading-tight mb-4 md:mb-6">
                Payroll is a <span className="text-yellow-500">crucial</span> aspect of managing
              </h3>

              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our <span className="font-semibold text-blue-700">
                  GST, Income Tax (ITR), and TDS compliance services
                </span>{" "}
                ensure accurate filings, timely submissions, and year-round statutory compliance.
                <br /><br />
                We help businesses minimize penalties, manage tax exposure, and stay prepared
                for audits and assessments with confidence.
              </p>
            </motion.div>

            {/* RIGHT IMAGE with aspect ratio */}
           <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
          <img
             src="/account11.png"
             alt="Payroll Services"
            className="w-full max-h-90 md:max-h-106 object-contain rounded-3xl shadow-xl"
  />
</motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3-CARD SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                backdropFilter: "blur(8px)",
                boxShadow: "0 20px 40px rgba(46, 73, 228, 0.81)",
              }}
              className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer bg-white"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${card.bg})` }}
              />
              {/* Content */}
              <div className="relative p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3 md:mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
