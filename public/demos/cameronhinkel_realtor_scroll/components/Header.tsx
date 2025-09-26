import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-xl font-bold text-gray-900">CAMERON HINKEL</h1>
            <motion.span 
              className="ml-2 text-sm text-gray-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
            >
              REALTOR®
            </motion.span>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["Home", "About", "Listings", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition-colors relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.nav>
          
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="tel:+1234567890" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4 mr-1" />
              </motion.div>
              (210) 555-0123
            </motion.a>
            <motion.a 
              href="mailto:cameron@cameronhinkelrealtor.com" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4 mr-1" />
              </motion.div>
              Email
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}