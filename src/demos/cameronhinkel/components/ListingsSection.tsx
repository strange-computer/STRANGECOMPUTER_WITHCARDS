import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
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
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      status: "New Listing",
      neighborhood: "Stone Oak",
    },
    {
      id: 2,
      price: "$325,000",
      address: "5678 River Walk Lane, Southside",
      beds: 3,
      baths: 2,
      sqft: "1,950",
      image:
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
      status: "Price Reduced",
      neighborhood: "Southside",
    },
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
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div className="relative overflow-hidden">
                <motion.img
                  src={listing.image}
                  alt={`Home at ${listing.address}`}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {listing.status}
                </Badge>
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {listing.price}
                  </h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.neighborhood}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{listing.address}</p>
                <div className="flex justify-between items-center mb-6 text-gray-600">
                  <div className="flex items-center"><Bed className="w-4 h-4 mr-1" />{listing.beds} Beds</div>
                  <div className="flex items-center"><Bath className="w-4 h-4 mr-1" />{listing.baths} Baths</div>
                  <div className="flex items-center"><Square className="w-4 h-4 mr-1" />{listing.sqft} sqft</div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                  <Button variant="outline" className="flex-1">Schedule Tour</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}









