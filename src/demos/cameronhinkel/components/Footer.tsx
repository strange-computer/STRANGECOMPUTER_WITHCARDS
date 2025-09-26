import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-gray-300">&copy; 2025 Cameron Hinkel Realtor. All rights reserved.</div>
      </div>
    </motion.footer>
  );
}









