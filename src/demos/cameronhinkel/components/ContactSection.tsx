import { useState } from "react";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Cameron will get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "(210) 555-0123", subtitle: "Available 7 days a week" },
    { icon: Mail, title: "Email", content: "cameron@cameronhinkelrealtor.com", subtitle: "Response within 30 minutes" },
    { icon: MapPin, title: "Service Area", content: "San Antonio & Surrounding Areas", subtitle: "Stone Oak, Alamo Heights, King William, and more" },
    { icon: Clock, title: "Office Hours", content: "Mon-Fri: 8am - 7pm", subtitle: "Sat-Sun: 9am - 5pm" },
  ];

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
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
            Let's Find Your <span className="text-blue-600">Dream Home</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to buy or sell? I'm here to help you navigate the San Antonio real estate market
            with confidence and expertise.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in Touch
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-700">{info.content}</div>
                      <div className="text-sm text-gray-500">{info.subtitle}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                  <input id="name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} required />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                  <input id="phone" type="tel" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})} required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                <input id="email" type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



