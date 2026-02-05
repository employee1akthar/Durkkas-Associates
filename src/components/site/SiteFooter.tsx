import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b1d3a] text-gray-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-14">

        {/* ✅ Responsive Grid */}
        {/* mobile: 1 col */}
        {/* small tablet: 2 col */}
        {/* desktop: 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Durkkas Associates
            </h3>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Strategic guidance and compliance-driven solutions to help
              businesses grow with confidence and clarity.
            </p>
          </div>

          {/* ================= LINKS ================= */}
          <div className="grid grid-cols-2 gap-8">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/careers" className="hover:text-white">Career</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>

              <ul className="space-y-2 text-sm">
                <li><a href="/services/remote-business-associate" className="hover:text-white">RBA</a></li>
                <li><a href="/services/gst-itr-tds" className="hover:text-white">GST / ITR / TDS</a></li>
                <li><a href="/services/company-formation" className="hover:text-white">Company Formation</a></li>
                <li><a href="/services/accounting-auditing" className="hover:text-white">Accounting</a></li>
                <li><a href="/services/payroll-compliance" className="hover:text-white">Payroll</a></li>
                <li><a href="/services/startup-mentorship" className="hover:text-white">Startup</a></li>
              </ul>
            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Details
            </h4>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              58/2, MDR Nagar North,<br />
              SBK College Road,<br />
              Aruppukottai – 626101,<br />
              Virudhunagar District,<br />
              Tamil Nadu
            </p>

            {/* ✅ Social Icons Wrap on Mobile */}
            <div className="flex flex-wrap gap-4">
              <a href="https://facebook.com" target="_blank"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition">
                <FaFacebookF className="text-white" />
              </a>

              <a href="https://linkedin.com" target="_blank"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition">
                <FaLinkedinIn className="text-white" />
              </a>

              <a href="https://instagram.com" target="_blank"
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:scale-110 transition">
                <FaInstagram className="text-white" />
              </a>

              <a href="https://wa.me/919999999999" target="_blank"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition">
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2026 Durkkas Innovations Pvt. Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
