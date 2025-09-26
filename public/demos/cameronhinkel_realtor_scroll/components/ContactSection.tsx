import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    priceRange: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Cameron will get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      priceRange: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(210) 555-0123",
      subtitle: "Available 7 days a week"
    },
    {
      icon: Mail,
      title: "Email",
      content: "cameron@cameronhinkelrealtor.com",
      subtitle: "Response within 30 minutes"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "San Antonio & Surrounding Areas",
      subtitle: "Stone Oak, Alamo Heights, King William, and more"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 7:00 PM",
      subtitle: "Saturday - Sunday: 9:00 AM - 5:00 PM"
    }
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
            Let's Find Your{" "}
            <motion.span
              className="text-blue-600"
              initial={{ color: "#1f2937" }}
              animate={{ color: "#2563eb" }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Dream Home
            </motion.span>
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
                const IconComponent = info.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start group cursor-pointer"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h4 
                        className="font-semibold text-gray-900"
                        whileHover={{ color: "#2563eb" }}
                        transition={{ duration: 0.2 }}
                      >
                        {info.title}
                      </motion.h4>
                      <p className="text-gray-600">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                    </motion.div>
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
            whileHover={{ 
              shadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileFocus={{ scale: 1.02 }}
              >
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="propertyType">I'm interested in</Label>
                  <Select onValueChange={(value) => handleChange("propertyType", value)}>
                    <SelectTrigger className="mt-1 transition-all duration-300 hover:border-blue-400">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying a home</SelectItem>
                      <SelectItem value="selling">Selling my home</SelectItem>
                      <SelectItem value="both">Both buying and selling</SelectItem>
                      <SelectItem value="investment">Investment property</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="priceRange">Price Range</Label>
                  <Select onValueChange={(value) => handleChange("priceRange", value)}>
                    <SelectTrigger className="mt-1 transition-all duration-300 hover:border-blue-400">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-300k">Under $300,000</SelectItem>
                      <SelectItem value="300k-500k">$300,000 - $500,000</SelectItem>
                      <SelectItem value="500k-750k">$500,000 - $750,000</SelectItem>
                      <SelectItem value="over-750k">Over $750,000</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
                whileFocus={{ scale: 1.02 }}
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me about your real estate goals..."
                  className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300" 
                  size="lg"
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Send Message
                  </motion.span>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}