import { Button } from "./ui/button";
import { MapPin, Star, Users } from "lucide-react";
import cameronImage from "figma:asset/11982ea7fc74838e44ee4e2fef9c11d03d5f4c2b.png";
import { motion } from "motion/react";

export function HeroSection() {
  const achievements = [
    { icon: MapPin, text: "San Antonio Specialist" },
    { icon: Star, text: "5-Star Rated" },
    { icon: Users, text: "100% Happy Clients" }
  ];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trusted San Antonio{" "}
              <motion.span
                className="text-blue-600"
                initial={{ color: "#1f2937" }}
                animate={{ color: "#2563eb" }}
                transition={{ duration: 1, delay: 1 }}
              >
                Real Estate Expert
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With years of experience in the San Antonio
              market, I help families find their dream homes and
              make smart investment decisions. Let me guide you
              through every step of your real estate journey.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                    </motion.div>
                    <span className="text-gray-700">
                      {achievement.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Current Listings
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={cameronImage}
                alt="Cameron Hinkel - San Antonio Realtor"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                delay: 1,
                type: "spring",
                stiffness: 100
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.2,
                type: "spring",
                stiffness: 150
              }}
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}