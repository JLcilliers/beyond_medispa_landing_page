import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-transparent"></div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Expert Care.
              <br />
              Exceptional
              <br />
              Results
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Where medical expertise meets luxury wellness. Get a perfect practitioner-patient
              transformative experience in the prestigious Harley Nichols setting, blending med
              services in confidence for exceptional body results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                View Treatments
              </button>
            </div>

            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span>Licensed Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/20 to-accent-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=800&fit=crop" 
                alt="Medical spa treatment"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;