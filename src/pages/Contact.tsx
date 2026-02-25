"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  if (isLoading) return <PageLoader />;

  // ===== VALIDATE =====
  const validate = () => {
    const e: any = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.length > 50) e.name = "Name should not exceed 50 characters";

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(form.email))
      e.email = "Email must be a valid Gmail address";

    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9][0-9]{9}$/.test(form.phone))
      e.phone = "Phone must be 10 digits and start with 6, 7, 8, or 9";

    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    setSuccess(false);
    if (!validate()) return;

    emailjs
      .send(
        "service_yjgg3qf",
        "template_2rpk2ue",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "GE82Cqbt2o6SC-t37"
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("EMAIL ERROR:", err);
        alert("Email send failed — check console");
      });
  };

  return (
    <main className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/contact2.jpg')" }} />
        <div className="absolute inset-0 bg-blue-900/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We’re here to help your business grow with clarity, compliance, and confidence.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-5">
            {[
              { Icon: FaFacebookF, color: "bg-blue-600", link: "https://www.facebook.com/durkkasacademy/" },
              { Icon: FaLinkedinIn, color: "bg-blue-700", link: "https://www.linkedin.com/company/durkkasacademy/" },
              { Icon: FaInstagram, color: "bg-pink-600", link: "https://www.instagram.com/durkkasacademy/" },
              { Icon: FaWhatsapp, color: "bg-green-500", link: "https://wa.me/918838056560" },
            ].map(({ Icon, color, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-14 h-14 rounded-full ${color} text-white flex items-center justify-center cursor-pointer`}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ADDRESS WITH IFRAME (NO API KEY NEEDED) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">

          {/* Corporate */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-t-4 border-red-600">
            <h3 className="text-xl font-bold mb-3 text-red-600">Corporate Address</h3>
            <p className="text-black-600 mb-6">
              60, Karuppasamy Kovil Road,<br/>
              Nadar Sivan Kovil South Gate Side,<br/>
              Aruppukottai – 626101,<br/>
              Virudhunagar District, Tamil Nadu
            </p>
            <div className="rounded-2xl overflow-hidden h-[230px]">
              <iframe
                src="https://www.google.com/maps?q=60,+Karuppasamy+Kovil+Road,+Aruppukottai,+TN&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Head Office */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-t-4 border-red-600">
            <h3 className="text-xl font-bold mb-3 text-red-600">Head Office Address</h3>
            <p className="text-black-600 mb-6">
              58/2, MDR Nager North,<br/>
              SBK College Road,<br/>
              Aruppukottai – 626101,<br/>
              Virudhunagar District, Tamil Nadu
            </p>
 <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps?q=58/2,+MDR+Nagar+North,+SBK+College+Road,+Chokkalingapuram,+Vasantham+Nagar,+Aruppukottai,+TN+626101&output=embed"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
  />
  {/* Red dot overlay */}
  <div className="absolute top-[50%] left-[50%] w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
</div>


          </div>
        </div>
      </section>

      {/* IMAGE + FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img src="/contact7.png" className="rounded-3xl shadow-2xl object-cover h-[420px] w-full" />
          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl shadow-xl p-8 space-y-5">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <div>
              <input
                value={form.name}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^A-Za-z ]/g, "");
                  if (value.length <= 50) handleChange("name", value);
                }}
                className="w-full p-4 rounded-xl border"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-4 rounded-xl border"
                placeholder="Email (must be @gmail.com)"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                value={form.phone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) handleChange("phone", value);
                }}
                className="w-full p-4 rounded-xl border"
                placeholder="Phone (10 digits, start 6/7/8/9)"
                inputMode="numeric"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full p-4 rounded-xl border"
                placeholder="Message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition">
              Submit
            </button>
            {success && (
              <p className="text-green-600 font-semibold text-center">
                ✅ Message submitted successfully
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
