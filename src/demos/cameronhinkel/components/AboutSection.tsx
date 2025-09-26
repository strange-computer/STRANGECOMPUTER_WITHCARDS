import { Award, Clock, Heart, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Top Homes",
      description:
        "Consistently finding the best homes of San Antonio",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Quick Response",
      description: "Fast response to client inquiries",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Client Focused",
      description:
        "Personalized service tailored to your unique needs and goals",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Expert",
      description:
        "Deep knowledge of San Antonio neighborhoods and market trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose{" "}
            <motion.span
              className="text-blue-600"
              initial={{ color: "#1f2937" }}
              animate={{ color: "#2563eb" }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Cameron Hinkel?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            As a San Antonio local and passionate realtor, I
            bring local expertise, market knowledge, and
            unwavering commitment to every transaction.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  {achievement.icon}
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                {achievement.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                The World in San Antonio
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Having family in San Antonio as well as living
                here myself, I understand the unique character
                of each neighborhood, from the historic charm of
                King William to the family-friendly communities
                of Stone Oak. This local knowledge gives my
                clients a distinct advantage in finding the
                perfect home or investment property.
              </motion.p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1000's", text: "Hidden Spots of San Antonio" },
                  { number: "10,000's", text: "to be discovered" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-blue-600"
                      initial={{ y: 10 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600">
                      {stat.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="text-center lg:text-right"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="inline-block bg-white rounded-lg p-6 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  shadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
                initial={{ rotateY: -10 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  98%
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Client Satisfaction Rate
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-500 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Based on post-transaction surveys
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



