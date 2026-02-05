import { motion } from "framer-motion";

const supportList = [
  "Business Idea Validation & Feasibility Assessment",
  "Business Model Structuring & Process Design",
  "Company Setup & Initial Compliance Roadmap",
  "Financial Planning, Budgeting & Cash Flow Management",
  "Accounting, Tax & Compliance Framework for Startups",
  "Operational Setup & Back-Office Structuring",
  "Founder Mentorship & Strategic Advisory",
];

const benefitsList = [
  "Clear business direction and execution roadmap",
  "Strong compliance and financial foundation from day one",
  "Reduced early-stage risks and cash flow issues",
  "Practical, experience-driven mentorship",
  "Scalable systems ready for growth and funding",
];

export default function Mentorship() {
  return (
    <main className="bg-white text-slate-800 overflow-x-hidden">

      {/* ================= HERO ================= */}
<section
  className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
>
  {/* ===== BACKGROUND IMAGE ===== */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{
      backgroundImage: "url('/services16.jpg')", // 👉 your image path
    }}
  />

  {/* ===== DARK OVERLAY ===== */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/60 to-[#1e293b]/90" />

  {/* ===== CONTENT ===== */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative z-10 text-center px-6 max-w-4xl"
  >
    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
    >
      Startup Guidance &{" "}
      <span className="text-white-400">Business Mentorship</span>
    </motion.h1>

    {/* LINE */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "8rem" }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="mx-auto mt-6 h-[3px] bg-gradient-to-r from-blue-400 to-white rounded-full"
    />

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="mt-6 text-yellow-400/90 text-sm md:text-lg"
    >
      Strategic Guidance, Practical Mentorship & Scalable Growth Support
    </motion.p>
  </motion.div>
</section>

      {/* ================= INTRO CONTENT ================= */}
    <section className="py-16 md:py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* HORIZONTAL CARD */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-500 to-white 
                 rounded-3xl shadow-xl p-8 md:p-12 
                 flex flex-col md:flex-row gap-8 items-center"
    >
      {/* LEFT LINE / ACCENT */}
      <div className="hidden md:block w-1 h-full bg-yellow-400 rounded-full" />

      {/* CONTENT */}
      <div className="text-center md:text-left">
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-4xl">
          Starting and scaling a business requires more than registrations and compliance — it requires clarity,
          direction, and informed decision-making. Our{" "}
          <span className="font-semibold text-yellow-700">
            Startup Guidance & Business Mentorship
          </span>{" "}
          services are designed to support founders at every stage of their journey.
        </p>

        <p className="mt-5 text-gray-700 text-sm md:text-lg leading-relaxed max-w-4xl">
          We work closely with entrepreneurs to convert ideas into structured, compliant, and{" "}
          <span className="font-semibold text-blue-700">
            investor-ready businesses
          </span>{" "}
          while avoiding common financial, operational, and compliance pitfalls.
        </p>
      </div>
    </motion.div>

  </div>
</section>

      {/* ================= STARTUP SUPPORT ================= */}
      <section className="py-16 md:py-24 bg-blue-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold text-center text-[#0f172a] mb-14"
    >
      Startup Support Includes
    </motion.h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {supportList.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92, y: -10 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          viewport={{ once: true }}
          className={`relative bg-blue-500 p-6 rounded-2xl 
            shadow-lg hover:shadow-2xl transition-all cursor-pointer
            border border-yellow-800
            ${index >= 4 ? "lg:col-span-1 lg:translate-x-1/2" : ""}
          `}
        >
          {/* SHINE CIRCLE */}
          <div className="relative flex items-start gap-4">
            <span className="relative mt-2 w-4 h-4 rounded-full 
              bg-gradient-to-br from-yellow-400 to-yellow-700 
              shadow-[0_0_12px_rgba(37,99,235,0.9)] 
              animate-pulse"
            />

            <p className="text-white text-sm md:text-base leading-relaxed">
              {item}
            </p>
          </div>

          {/* GLOW BORDER */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none 
            opacity-0 hover:opacity-100 transition
            ring-2 ring-yellow-500/80"
          />
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* ================= KEY BENEFITS ================= */}
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] overflow-hidden">
      
      {/* MOVING BACKGROUND */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 opacity-30"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16"
        >
          Key Benefits for Startups
        </motion.h2>

        {/* CIRCLES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">

          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center"
            >

              {/* ROTATING OUTER CIRCLE */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full 
                  border-4 border-dashed 
                  border-cyan-300/70"
              />

              {/* INNER CIRCLE */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-40 h-40 md:w-48 md:h-48 
                  rounded-full 
                  bg-gradient-to-br from-blue-400 to-blue-700
                  shadow-[0_0_40px_rgba(56,189,248,0.8)]
                  flex items-center justify-center text-center p-6 cursor-pointer"
              >
                <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                  {benefit}
                </p>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>

    </main>
  );
}
