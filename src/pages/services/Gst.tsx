import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Gst() {
  return (
    <main className="bg-[#f7faff] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.6), rgba(37,99,235,0.6)), url('/gst4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-extrabold mb-4"
          >
            GST, ITR & TDS Compliance Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-lg md:text-xl"
          >
            Accurate, Timely & Proactive Tax Filing Solutions
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO CONTENT ================= */}
     <section className="relative py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative grid md:grid-cols-2 items-center gap-12">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img
          src="/gst1.jpg" // 👉 replace with your image path
          alt="Payroll Services"
          className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
        />
      </motion.div>

      {/* RIGHT CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative md:-ml-24 bg-white rounded-3xl shadow-2xl p-10 z-10"
      >
        <h3 className="text-3xl font-extrabold text-[#0f172a] leading-tight mb-6">
          Payroll is a <span className="text-yellow-500">crucial</span> aspect of managing
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our <span className="font-semibold text-blue-700">
            GST, Income Tax (ITR), and TDS compliance services
          </span>{" "}
          ensure accurate filings, timely submissions, and year-round statutory compliance.
          <br /><br />
          We help businesses minimize penalties, manage tax exposure, and stay prepared
          for audits and assessments with confidence.
        </p>
      </motion.div>

    </div>
  </div>
</section>


      {/* ================= TAX SERVICES ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-14"
          >
            Our Tax Services Include
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "GST Registration & Return Filing",
              "Monthly, Quarterly & Annual GST Returns",
              "Income Tax Return (ITR) Filing",
              "TDS Computation & Return Filing",
              "Handling Tax Notices & Scrutiny",
              "Assessments & Regulatory Support",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(67, 101, 250, 0.92)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 cursor-pointer"
              >
                <span className="text-blue-600 text-2xl mt-1">
                  <FiCheckCircle />
                </span>
                <p className="text-gray-800 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY ADVANTAGES ================= */}
  <section className="bg-white py-24 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-16"
    >
      Key Advantages
    </motion.h2>

    {/* Continuous Track */}
    <motion.div
      className="flex gap-8 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 22,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...Array(2)].flatMap(() =>
        [
          "On-time compliance with reduced penalties",
          "Lower exposure to audits & regulatory disputes",
          "Expert tax planning & compliance guidance",
          "Continuous support throughout the financial year",
        ].map((item) => (
          <motion.div
            key={Math.random()}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
            className="
              relative 
              min-w-[5px]   /* 👈 width kammi */
              h-[100px]       /* 👈 perfect circle */
              rounded-full
              bg-gradient-to-br from-blue-600 to-blue-800
              text-white
              flex items-center justify-center
              text-center
              px-6
              cursor-pointer
              shadow-2xl
            "
          >
            {/* Rotating Glow Ring */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-40"
            />

            {/* Pulse Ring */}
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-4 rounded-full bg-blue-700 opacity-60"
            />

            {/* Text */}
            <p className="relative z-10 text-sm font-semibold leading-snug">
              {item}
            </p>
          </motion.div>
        ))
      )}
    </motion.div>
  </div>
</section>




    </main>
  );
}
