import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function ListingsSection() {
  const listings = [
    {
      id: 1,
      price: "$485,000",
      address: "1234 Oak Hill Drive, Stone Oak",
      beds: 4,
      baths: 3,
      sqft: "2,850",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NTc4OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "New Listing",
      neighborhood: "Stone Oak"
    },
    {
      id: 2,
      price: "$325,000",
      address: "5678 River Walk Lane, Southside",
      beds: 3,
      baths: 2,
      sqft: "1,950",
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1NzIwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Price Reduced",
      neighborhood: "Southside"
    },
    {
      id: 3,
      price: "$650,000",
      address: "9012 Alamo Heights Blvd, Alamo Heights",
      beds: 5,
      baths: 4,
      sqft: "3,400",
      image: "https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTU3MTU4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Luxury Home",
      neighborhood: "Alamo Heights"
    },
    {
      id: 4,
      price: "$275,000",
      address: "3456 Historic Street, King William",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      image: "https://images.unsplash.com/photo-1624431926585-7dbdd65cfe10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwZmFjYWRlfGVufDF8fHx8MTc1NTgxMjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Historic Charm",
      neighborhood: "King William"
    }
  ];

  return (
    <section id="listings" className="py-20 bg-gray-50 overflow-hidden">
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
            Featured San Antonio{" "}
            <motion.span
              className="text-blue-600"
              initial={{ color: "#1f2937" }}
              animate={{ color: "#2563eb" }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Listings
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover beautiful homes across San Antonio's most desirable neighborhoods. 
            Each property is carefully selected to offer exceptional value and lifestyle.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {listings.map((listing, index) => (
            <motion.div 
              key={listing.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                shadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src={listing.image} 
                  alt={`Home at ${listing.address}`}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 shadow-lg"
                  >
                    {listing.status}
                  </Badge>
                </motion.div>
                
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              >
                <motion.div 
                  className="flex justify-between items-start mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ color: "#2563eb" }}
                    transition={{ duration: 0.2 }}
                  >
                    {listing.price}
                  </motion.h3>
                  <motion.div 
                    className="text-sm text-gray-500 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                    </motion.div>
                    {listing.neighborhood}
                  </motion.div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                >
                  {listing.address}
                </motion.p>
                
                <motion.div 
                  className="flex justify-between items-center mb-6"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                >
                  {[
                    { icon: Bed, text: `${listing.beds} Beds` },
                    { icon: Bath, text: `${listing.baths} Baths` },
                    { icon: Square, text: `${listing.sqft} sqft` }
                  ].map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                        whileHover={{ 
                          scale: 1.1,
                          color: "#2563eb"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-4 h-4 mr-1" />
                        </motion.div>
                        <span className="text-sm">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
                
                <motion.div 
                  className="flex gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                >
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
                      View Details
                    </Button>
                  </motion.div>
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="outline" className="w-full shadow-sm hover:shadow-md transition-all duration-300">
                      Schedule Tour
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="outline" size="lg" className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              View All Listings
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}