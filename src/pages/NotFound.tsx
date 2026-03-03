import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add("hide-site-header-footer");
    return () => document.body.classList.remove("hide-site-header-footer");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <div className="text-[6.5rem] md:text-[8rem] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
          404
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">We couldn't find the page you're looking for. It might have moved or never existed.</p>

    
      </motion.div>
    </main>
  );
};

export default NotFound;
