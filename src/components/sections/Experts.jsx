import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope } from 'lucide-react';

const Experts = () => {
  const experts = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Medical Director",
      specialties: ["Facial Aesthetics", "Non-Surgical Rejuvenation"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
      credentials: "MD, FRCS",
    },
    {
      name: "Dr. James Chen",
      role: "Senior Aesthetic Physician",
      specialties: ["Body Contouring", "Skin Treatments"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
      credentials: "MD, MBBS",
    },
    {
      name: "Dr. Emma Thompson",
      role: "Lead Dermatologist",
      specialties: ["Advanced Skincare", "Laser Treatments"],
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
      credentials: "MD, PhD",
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
            Meet Your Medical Aesthetic Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified medical professionals combines years of expertise with a passion
            for helping you achieve your aesthetic goals safely and effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">{expert.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{expert.credentials}</p>
                <p className="text-gray-600 mb-4">{expert.role}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8"
        >
          <div className="text-center">
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Board Certified</h4>
            <p className="text-gray-600 text-sm">All practitioners are fully licensed and certified</p>
          </div>
          <div className="text-center">
            <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Continuous Education</h4>
            <p className="text-gray-600 text-sm">Regular training on the latest techniques and technologies</p>
          </div>
          <div className="text-center">
            <Stethoscope className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Patient-Centered Care</h4>
            <p className="text-gray-600 text-sm">Your safety and satisfaction are our top priorities</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experts;