import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PersonalizedPath = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation & Assessment",
      description: "A detailed consultation with our medical experts to understand your goals and create a personalized treatment plan.",
      features: ["Comprehensive skin analysis", "Medical history review", "Personalized treatment planning"]
    },
    {
      number: "2",
      title: "Personalized Treatment Plan",
      description: "Our experts craft a bespoke treatment protocol tailored to your unique needs, ensuring optimal results.",
      features: ["Customized treatment protocol", "Timeline and milestones", "Cost transparency"]
    },
    {
      number: "3",
      title: "Advanced Technology Sessions",
      description: "Experience our state-of-the-art treatments delivered by skilled practitioners in our luxurious facility.",
      features: ["Latest medical technology", "Expert practitioners", "Comfort-focused care"]
    },
    {
      number: "4",
      title: "Results & Maintenance",
      description: "Enjoy your transformation with ongoing support and maintenance plans to preserve your results.",
      features: ["Progress monitoring", "Maintenance protocols", "Long-term support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Your Personalized Path to Body Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless experience crafted around your unique goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary-500 opacity-20">{step.number}</span>
                  <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedPath;