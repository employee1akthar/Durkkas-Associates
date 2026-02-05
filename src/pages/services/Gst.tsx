"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const advantages = [
  "On-time compliance",
  "Lower audit exposure",
  "Expert tax planning",
  "Year-round support",
  "Penalty risk reduction",
  "Dedicated advisor help",
];

const colors = [
  "from-blue-500 to-indigo-600",
  "from-blue-500 to-emerald-600",
  "from-blue-500 to-fuchsia-600",
  "from-blue-500 to-amber-600",
  "from-blue-500 to-rose-600",
  "from-blue-500 to-sky-600",
];

export default function Gst() {
  return (
    <main className="bg-[#f7faff] min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.6), rgba(37,99,235,0.6)), url('/gst4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl w-full px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4"
          >
            GST, ITR & TDS Compliance Services
          </motion.h1>

          <p className="text-blue-100 text-base sm:text-lg md:text-xl">
            Accurate, Timely & Proactive Tax Filing Solutions
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <motion.img
              src="/gst1.jpg"
              alt="GST"
              className="w-full h-[380px] object-cover rounded-3xl shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 w-full"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">
                Payroll is a <span className="text-yellow-500">crucial</span> aspect
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our <span className="font-semibold text-blue-700">
                  GST, ITR & TDS compliance services
                </span>{" "}
                ensure accurate filings and audit-ready compliance.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= TAX SERVICES ================= */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Our Tax Services Include
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "GST Registration & Return Filing",
              "Monthly, Quarterly & Annual GST Returns",
              "Income Tax Return Filing",
              "TDS Computation & Return Filing",
              "Handling Tax Notices",
              "Regulatory Support",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex gap-4 w-full"
              >
                <FiCheckCircle className="text-blue-600 text-2xl mt-1" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= KEY ADVANTAGES ================= */}
      <section className="bg-white py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Key Advantages
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">

            {advantages.map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.18 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative cursor-pointer"
              >

                {/* rotating glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 rounded-full blur-md opacity-40 bg-gradient-to-r ${colors[i]}`}
                />

                {/* border ring */}
                <div className="absolute inset-2 rounded-full border-2 border-white/50" />

                {/* circle card */}
                <div
                  className={`
                  relative z-10
                  w-[150px] h-[150px]
                  sm:w-[170px] sm:h-[170px]
                  md:w-[190px] md:h-[190px]
                  rounded-full
                  bg-gradient-to-br ${colors[i]}
                  text-white
                  flex items-center justify-center
                  text-center
                  p-5
                  shadow-2xl
                  `}
                >
                  <p className="text-sm sm:text-base font-semibold">
                    {text}
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
