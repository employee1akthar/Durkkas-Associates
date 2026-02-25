import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// Service pages
import Remote from "./pages/services/Remote";
import Gst from "./pages/services/Gst";
import CompanyFormation from "./pages/services/CompanyFormation";
import Accounting from "./pages/services/Accounting";
import Payroll from "./pages/services/Payroll";
import Mentorship from "./pages/services/Mentorship";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Service detail pages */}
        <Route path="/services/remote-business-associate" element={<Remote />} />
        <Route path="/services/gst-itr-tds" element={<Gst />} />
        <Route path="/services/company-formation" element={<CompanyFormation />} />
        <Route path="/services/accounting-auditing" element={<Accounting />} />
        <Route path="/services/payroll-compliance" element={<Payroll />} />
        <Route path="/services/startup-mentorship" element={<Mentorship />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
     
    </Routes>
  </BrowserRouter>
);

export default App;
