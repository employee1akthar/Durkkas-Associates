import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  path: string;
  image: string;
}

const services: Service[] = [
  { title: "Remote Business Associate", path: "/services/remote-business-associate", image: "/services1.jpg" },
  { title: "GST / ITR / TDS Compliance", path: "/services/gst-itr-tds", image: "/ass13.jpg" },
  { title: "Company Formation & Compliance", path: "/services/company-formation", image: "/services2.jpg" },
  { title: "Accounting & Auditing", path: "/services/accounting-auditing", image: "/services3.jpg" },
  { title: "Payroll & Statutory Compliance", path: "/services/payroll-compliance", image: "/services4.jpg" },
  { title: "Startup Guidance & Mentorship", path: "/services/startup-mentorship", image: "/ass18.jpg" },
];

export default function Services() {
  usePageTitle("Services | Durkkas Associates");
  const isLoading = usePageLoader();
  const navigate = useNavigate();

  if (isLoading) return <PageLoader />;

  return (
    <main className="bg-[#f7faff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.55), rgba(37,99,235,0.75)), url('/services7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white text-6xl md:text-7xl font-extrabold"
          >
            SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-blue-100 text-lg md:text-xl"
          >
            Structured business solutions designed for growth, compliance, and long-term success.
          </motion.p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-10 rounded-full" />
        </div>
      </section>

      {/* ================= INTRO BOXES ================= */}
      <section className="relative -mt-32 z-30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Structured Execution",
              desc: "Process-driven services ensuring accuracy, efficiency, and consistency.",
            },
            {
              title: "Compliance Confidence",
              desc: "Complete statutory and regulatory support without complexity.",
            },
            {
              title: "Scalable Support",
              desc: "Flexible solutions that evolve with your business growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 text-center"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl flex items-center justify-center shadow-lg">
                ★
              </div>
              <h4 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-44 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-28"
        >
          Our Professional Services
        </motion.h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -14 }}
              transition={{ delay: i * 0.12 }}
              className="group relative h-[300px] rounded-[2.5rem] cursor-pointer"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-xl border border-blue-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent" />
                <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 px-8 text-center">
                  <h3 className="text-white text-2xl font-semibold mb-6">{service.title}</h3>
                  <button
                    onClick={() => navigate(service.path)}
                    className="px-10 py-3 rounded-full text-sm font-bold text-white
                               bg-gradient-to-r from-blue-500 to-blue-700
                               opacity-0 translate-y-6
                               group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-500"
                  >
                    EXPLORE SERVICE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(219,234,254,0.7), rgba(239,246,255,0.9)), url('/ass14.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-3">Quick Online Consultancy</h3>
            <p className="text-gray-600 mb-8">
              Speak with our experts and get structured business guidance.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="border-b border-gray-400 focus:border-blue-600 outline-none py-2" placeholder="First Name" />
                <input className="border-b border-gray-400 focus:border-blue-600 outline-none py-2" placeholder="Last Name" />
              </div>
              <input className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2" placeholder="Email Address" />
              <textarea rows={3} className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 resize-none" placeholder="Your Message" />
              <button className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                BOOK A CONSULTATION
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
