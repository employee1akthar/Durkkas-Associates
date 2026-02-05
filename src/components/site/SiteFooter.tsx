import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b1d3a] text-gray-300">
      <div className="w-full px-6 md:px-12 lg:px-20 py-14">

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Durkkas Associates
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Strategic guidance and compliance-driven solutions to help
              businesses grow with confidence and clarity.
            </p>
          </div>

          {/* LINKS */}
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

            <h5 className="text-white font-semibold mt-6 mb-3">
              Our Services
            </h5>
           <ul className="space-y-2 text-sm">
  <li>
    <a href="/services/remote-business-associate" className="hover:text-white">
      Remote Business Associate
    </a>
  </li>

  <li>
    <a href="/services/gst-itr-tds" className="hover:text-white">
      GST / ITR / TDS Compliance
    </a>
  </li>

  <li>
    <a href="/services/company-formation" className="hover:text-white">
      Company Formation & Compliance
    </a>
  </li>

  <li>
    <a href="/services/accounting-auditing" className="hover:text-white">
      Accounting & Auditing
    </a>
  </li>

  <li>
    <a href="/services/payroll-compliance" className="hover:text-white">
      Payroll & Statutory Compliance
    </a>
  </li>

  <li>
    <a href="/services/startup-mentorship" className="hover:text-white">
      Startup Guidance & Mentorship
    </a>
  </li>
</ul>

          </div>

          {/* ADDRESS + SOCIAL */}
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

            <div className="flex gap-4">
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

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2026 Durkkas Innovations Pvt. Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
