"use client";

import { motion } from "framer-motion";
import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  usePageTitle("Contact | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) return <PageLoader />;

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
     <section className="relative min-h-[70vh] flex items-center justify-center text-center">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/contact2.jpg')" }}
  />
  <div className="absolute inset-0 bg-blue-900/70" />

  {/* CONTENT */}
  <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col items-center gap-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Contact Us
      </h1>
      <p className="text-blue-100 text-lg max-w-2xl mx-auto">
        We’re here to help your business grow with clarity, compliance, and confidence.
      </p>
    </motion.div>

    {/* SOCIAL ICONS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-5"
    >
      {[
        { Icon: FaFacebookF, link: "https://facebook.com", color: "bg-blue-600" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com", color: "bg-blue-700" },
        { Icon: FaInstagram, link: "https://instagram.com", color: "bg-pink-600" },
        { Icon: FaWhatsapp, link: "https://wa.me/919999999999", color: "bg-green-500" },
      ].map(({ Icon, link, color }, i) => (
        <motion.a
          key={i}
          href={link}
          target="_blank"
          whileHover={{ scale: 1.15, y: -6 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full ${color} text-white flex items-center justify-center shadow-xl`}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  </div>
</section>



      {/* ================= ADDRESS CARDS ================= */}
      <section className="py-20 bg-slate-50">
  <div className="w-full px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10">

    {/* Corporate Address */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-600"
    >
      <h3 className="text-xl font-bold text-[#0f172a] mb-3">
        Corporate Address
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        60, Karuppasamy Kovil Road,<br />
        Nadar Sivan Kovil South Gate Side,<br />
        Aruppukottai – 626101,<br />
        Virudhunagar District, Tamil Nadu
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg h-[230px]">
        <iframe
          src="https://www.google.com/maps?q=Karuppasamy%20Kovil%20Road%20Aruppukottai%20626101&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </motion.div>

    {/* Head Office Address */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-600"
    >
      <h3 className="text-xl font-bold text-[#0f172a] mb-3">
        Head Office Address
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        58/2, MDR Nagar North,<br />
        SBK College Road,<br />
        Aruppukottai – 626101,<br />
        Virudhunagar District, Tamil Nadu
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg h-[230px]">
        <iframe
          src="https://www.google.com/maps?q=SBK%20College%20Road%20Aruppukottai%20626101&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* ================= IMAGE + FORM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.img
            src="/contact6.jpg"
            alt="Contact"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl shadow-2xl object-cover h-[420px] w-full"
          />

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-50 rounded-3xl shadow-xl p-10 space-y-6"
          >
            <h2 className="text-2xl font-bold text-[#0f172a]">
              Send Us a Message
            </h2>

            <input className="w-full p-4 rounded-xl border" placeholder="Your Name" />
            <input className="w-full p-4 rounded-xl border" placeholder="Email Address" />
            <input className="w-full p-4 rounded-xl border" placeholder="Phone Number" />
            <textarea rows={4} className="w-full p-4 rounded-xl border" placeholder="Message" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </section>

    </main>
  );
}
