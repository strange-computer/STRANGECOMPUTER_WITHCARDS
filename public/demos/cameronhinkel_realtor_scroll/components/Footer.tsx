import { motion } from "motion/react";

export function Footer() {
  const quickLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#listings", text: "Current Listings" },
    { href: "#contact", text: "Contact" },
    { href: "/resources", text: "Buyer Resources" },
    { href: "/sellers", text: "Seller Information" }
  ];

  const serviceAreas = [
    "Stone Oak",
    "Alamo Heights", 
    "King William District",
    "Southside",
    "Downtown San Antonio",
    "Northwest Side"
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              CAMERON HINKEL
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your trusted San Antonio real estate professional, dedicated to helping 
              you find the perfect home or sell your property with confidence.
            </motion.p>
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>License #: 123456789</p>
              <p>Equal Housing Opportunity</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4 
              className="text-lg font-semibold mb-4"
              whileHover={{ color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ 
                      color: "#60a5fa",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h4 
              className="text-lg font-semibold mb-4"
              whileHover={{ color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              Service Areas
            </motion.h4>
            <ul className="space-y-2 text-gray-300">
              {serviceAreas.map((area, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ 
                    x: -5,
                    color: "#e5e7eb",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {area}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            &copy; 2025 Cameron Hinkel Realtor. All rights reserved.
          </motion.p>
          <motion.p 
            className="mt-2"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            Website:{" "}
            <motion.span 
              className="text-blue-400"
              whileHover={{ 
                scale: 1.05,
                color: "#60a5fa"
              }}
              transition={{ duration: 0.2 }}
            >
              CAMERONHINKELREALTOR.com
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}