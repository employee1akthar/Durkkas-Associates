"use client";

import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";

export default function Careers() {
  usePageTitle("Careers | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) return <PageLoader />;

  return (
    <main className="bg-gradient-to-br from-slate-50 to-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/career.jpg')", // 🔥 change image here
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 to-[#1e293b]/50" />

        {/* Floating Blurs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-40 h-40 bg-blue-50/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-56 h-56 bg-yellow-400/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            CAREERS
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-blue-100"
          >
            Build Your Career with Purpose, Growth & Professional Excellence
          </motion.p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto"
        >
          At our firm, we believe that strong businesses are built by strong people.
          We seek motivated, ethical, and growth-oriented professionals passionate
          about consulting, accounting, compliance, and operational excellence.
        </motion.p>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-20 bg-blue-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[white] mb-14">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Exposure to diverse industries & clients",
              "Structured processes & professional culture",
              "Continuous learning & skill development",
              "Mentorship from experienced professionals",
              "Clear accountability & growth path",
              "Ethical, transparent work environment",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white"
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full mb-4" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRENT OPPORTUNITIES ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-14">
          Current Opportunities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Remote Business Associate (RBA)",
            "Accounts Executive / Accountant",
            "Audit & Compliance Executive",
            "GST, Income Tax & TDS Specialist",
            "Payroll & HR Operations Executive",
            "Business Analyst / MIS Executive",
            "Startup Support & Consulting Associate",
          ].map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-2xl"
            >
              <span className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
              {role}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLY ================= */}
     <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white text-center relative overflow-hidden">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="max-w-4xl mx-auto px-6 relative z-10"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
      Join Our Team
    </h2>

    <p className="mb-4 text-lg">
      Email your resume to
      <span className="font-semibold"> careers@yourbusinesssupport.com</span>
    </p>

    <p className="mb-8">
      Subject Line: <strong>Application for [Position Name]</strong>
    </p>

    <p className="text-xl font-medium text-blue-200 mb-10">
      Strong professionals build strong systems —  
      strong systems build successful businesses.
    </p>

    {/* ================= CTA BUTTON ================= */}
    <motion.a
      href="/contact"
      initial={{ scale: 0.9 }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: "0px 0px 40px rgba(59,130,246,0.8)",
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 px-10 py-4 
                 rounded-full font-bold text-lg 
                 bg-gradient-to-r from-blue-500 to-blue-600
                 shadow-2xl cursor-pointer"
    >
      🚀 Apply Now
    </motion.a>
  </motion.div>

  {/* Background Glow */}
  <motion.div
    animate={{ opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute -bottom-24 left-1/2 -translate-x-1/2 
               w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
  />
</section>


    </main>
  );
}
