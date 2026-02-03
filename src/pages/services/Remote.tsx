import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

export default function Remote() {
  usePageTitle("Remote Business Associate | Durkkas Associates");
  const isLoading = usePageLoader();
  const navigate = useNavigate();

  if (isLoading) return <PageLoader />;

  const keySupport = [
    "Finance & Accounting Support",
    "Administrative & Back-Office Operations",
    "Sales Coordination & Marketing Assistance",
    "HR Operations & Recruitment Support",
    "Data Management, MIS & Business Reporting",
  ];

  const whyChoose = [
    "Dedicated resources aligned with business objectives",
    "Flexible engagement models (Full-time / Part-time / Project-based)",
    "Significant cost savings on recruitment and infrastructure",
    "Defined KPIs, structured reporting, and performance monitoring",
    "Rapid scalability without long-term employment risk",
  ];

  return (
    <main className="bg-[#f7faff] min-h-screen">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[45vh] md:h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.55), rgba(37,99,235,0.6)), url('/remote1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4"
          >
            Remote Business Associate (RBA)
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-base sm:text-lg md:text-xl"
          >
            Smart, Scalable & Cost-Optimized Remote Workforce Solutions
          </motion.p>
        </div>
      </section>

      {/* ================= KEY SUPPORT AREAS ================= */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 text-center"
          >
            Key Support Areas
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySupport.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
                className={`flex flex-col gap-4 p-6 rounded-3xl cursor-pointer text-white shadow-lg
                  ${i % 2 === 0 ? "bg-blue-700" : "bg-blue-800"}
                `}
              >
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900 text-2xl font-bold">
                  {i + 1}
                </span>
                <p className="font-semibold text-base sm:text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE RBA ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-10 text-center"
          >
            Why Choose RBA
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className="group flex items-start gap-4 bg-blue-200 p-5 sm:p-6 rounded-2xl shadow-lg cursor-pointer"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold shadow-md">
                  ★
                </span>

                <p className="text-gray-800 text-base sm:text-lg font-medium group-hover:text-blue-900 transition">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
     <section className="bg-blue-40 py-16 md:py-20 text-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/contact")}
    className="relative inline-flex items-center gap-2 bg-green-400 hover:bg-green-700 text-white font-bold
               px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg overflow-hidden"
  >
    {/* Icon with shine animation */}
    <motion.span
      className="relative flex items-center"
      animate={{ scale: [1, 1.3, 1] }}   // Zoom animation
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      <FiPhoneCall className="text-xl relative z-10" />
      {/* Shine overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-red-400
                       opacity-30 animate-shine rounded-full z-0"></span>
    </motion.span>

    Contact Us for Consultation
  </motion.button>
</section>



    </main>
  );
}
