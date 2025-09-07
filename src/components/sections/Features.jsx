import { motion } from 'framer-motion';
import { Award, Users, Shield, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Medical Team",
      description: "Our licensed medical professionals bring years of experience and advanced training to ensure optimal outcomes.",
    },
    {
      icon: Shield,
      title: "Bespoke Treatment Plans",
      description: "Personalized care tailored to your unique needs and goals, ensuring the best possible results.",
    },
    {
      icon: Users,
      title: "Premium Environment",
      description: "Experience luxury and comfort in our state-of-the-art facility designed for your complete relaxation.",
    },
    {
      icon: Clock,
      title: "Results & Maintenance",
      description: "Long-lasting results with customized maintenance plans to keep you looking and feeling your best.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Medical Excellence Redefined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to medical excellence and patient care sets us apart, delivering transformative results in a luxurious setting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;