import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const transformations = [
    {
      id: 1,
      treatment: "Facial Rejuvenation",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      treatment: "Body Contouring",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      treatment: "Skin Resurfacing",
      image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      treatment: "Lip Enhancement",
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      treatment: "Anti-Aging Treatment",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      treatment: "Laser Treatment",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop"
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What can we help you with?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of medical aesthetic treatments designed to enhance your natural beauty
            and boost your confidence. Our expert team will create a personalized treatment plan tailored to your unique goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.treatment}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{item.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;