import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: "London - Harley Nichols",
      subtitle: "MAIN CLINIC",
      address: "123 Harley Street, Marylebone, London W1G 6BA",
      phone: "+44 20 7123 4567",
      email: "harley@beyondmedispa.com",
      hours: "Mon-Fri: 9AM-7PM, Sat: 10AM-6PM",
      image: "https://images.unsplash.com/photo-1631248055158-80b10b3b8aa9?w=600&h=400&fit=crop",
      features: ["State-of-the-art facility", "Comprehensive treatments", "VIP suites available"]
    },
    {
      name: "Edinburgh - Harvey Nichols",
      subtitle: "FLAGSHIP",
      address: "30-34 St Andrew Square, Edinburgh EH2 2AD",
      phone: "+44 131 524 8388",
      email: "edinburgh@beyondmedispa.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-5PM",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
      features: ["Exclusive spa environment", "Premium skincare boutique", "Private consultation rooms"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Visit Our Exclusive Locations
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary-600">{location.subtitle}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{location.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <p className="text-gray-600">{location.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <ul className="space-y-2">
                    {location.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 w-full bg-primary-500 text-white py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors">
                  Book at This Location
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;