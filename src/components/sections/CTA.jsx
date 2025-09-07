import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Join thousands who have achieved their aesthetic goals with Beyond Medispa's
            expert care and cutting-edge treatments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </button>
            
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Live Chat</span>
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-white">
              <p className="text-3xl font-bold mb-2">15,000+</p>
              <p className="text-gray-200">Happy Patients</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-2">98%</p>
              <p className="text-gray-200">Satisfaction Rate</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold mb-2">5★</p>
              <p className="text-gray-200">Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;