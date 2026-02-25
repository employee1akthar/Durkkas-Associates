import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const payrollCoverage = [
  "Monthly Salary Processing & Payslip Generation",
  "PF, ESI & Statutory Deductions",
  "Payroll Tax & TDS Reporting",
  "Employee Records & Documentation Management",
  "Labor Law & Statutory Compliance Support",
];

const payrollBenefitsData = [
  {
    title: "Secure Payroll",
    description: "Your payroll is processed with utmost security and accuracy.",
    image: "/pay3.jpg",
    details: [
      "Encrypted data handling",
      "Timely salary disbursement",
      "Zero errors in processing",
    ],
  },
  {
    title: "Statutory Compliance",
    description: "We ensure all statutory regulations are met flawlessly.",
    image: "/pay4.jpg",
    details: [
      "PF & ESI compliance",
      "TDS & tax filings",
      "Labor law adherence",
    ],
  },
  {
    title: "Reduced HR Risk",
    description: "Minimize legal and operational HR risks effectively.",
    image: "/pay5.jpg",
    details: [
      "Automated record keeping",
      "Compliance monitoring",
      "Audit-ready documentation",
    ],
  },
  {
    title: "Scalable Solutions",
    description: "Payroll solutions that grow with your organization.",
    image: "/pay6.jpg",
    details: [
      "Supports multiple locations",
      "Flexible for different team sizes",
      "Customizable payroll rules",
    ],
  },
];

export default function Payroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % payrollCoverage.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    const total = payrollCoverage.length;
    return [
      payrollCoverage[(currentIndex - 1 + total) % total],
      payrollCoverage[currentIndex],
      payrollCoverage[(currentIndex + 1) % total],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <main className="bg-white text-slate-800 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/payroll.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 to-[#0f172a]/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Payroll & Statutory Compliance
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 h-[3px] w-24 md:w-32 bg-gradient-to-r from-blue-400 to-white rounded-full"
          />
          <p className="mt-4 md:mt-6 text-white/90 text-sm md:text-lg">
            Accurate, Secure & Fully Compliant Payroll Management
          </p>
        </motion.div>
      </section>

      {/* ================= PAYROLL COVERAGE CAROUSEL ================= */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          >
            Payroll Coverage
          </motion.h2>

          <div className="relative flex justify-center items-center gap-6 overflow-x-auto md:overflow-hidden py-4">
            {visibleCards.map((item, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, x: i === 0 ? -150 : i === 2 ? 150 : 0 }}
                  animate={{ opacity: 1, scale: isCenter ? 1.15 : 0.95, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    scale: isCenter ? 1.2 : 1,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                  }}
                  className={`flex items-start gap-3 p-6 rounded-2xl cursor-pointer transition-all relative min-w-[260px] md:min-w-[280px] max-w-[320px] ${
                    isCenter
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-2xl"
                      : "bg-white text-gray-700 shadow-lg"
                  }`}
                >
                  <span
                    className={`mt-1 w-3 h-3 rounded-full ${
                      isCenter ? "bg-white" : "bg-blue-600"
                    }`}
                  />
                  <p className="text-sm md:text-base">{item}</p>

                  {isCenter && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none bg-gradient-to-r from-white/20 via-white/10 to-white/20"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PAYROLL BENEFITS CARDS ================= */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-12">
          Why Choose Our Payroll Services
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {payrollBenefitsData.map((benefit, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-[350px] md:h-[380px]"
              whileHover={{ scale: 1.03 }}
            >
              {/* Background Image with proper cover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${benefit.image}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-500 rounded-2xl" />

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-500" />

              {/* Content */}
              <div className="relative p-4 md:p-5 flex flex-col justify-end h-full">
                <h3 className="text-yellow-500 text-xl md:text-2xl font-bold mb-1">
                  {benefit.title}
                </h3>
                <p className="text-white text-sm md:text-base mb-1">
                  {benefit.description}
                </p>
                {benefit.details.map((line, idx) => (
                  <p key={idx} className="text-white text-sm md:text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <motion.img
          src="/ass25.png"
          alt="Payroll Services"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 sm:h-72 md:h-[420px] object-cover rounded-3xl shadow-xl"
        />
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
            Secure & Compliant Payroll Management
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We handle payroll end-to-end, ensuring accurate salary processing, timely payments, 
            and full compliance with statutory regulations, while keeping employee data secure.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
