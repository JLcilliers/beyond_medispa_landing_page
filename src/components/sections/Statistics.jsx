import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 15, suffix: '+', label: 'Years of Excellence' },
    { value: 97, suffix: '%', label: 'Patient Satisfaction' },
    { value: 0, suffix: '', label: 'Complications Rate', isZero: true },
  ];

  const AnimatedCounter = ({ end, suffix, duration = 2, isZero }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      if (isZero) {
        setCount(0);
        return;
      }

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, isVisible, isZero]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-primary-600">
        {isZero ? 'Zero' : count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Evidence-Based Approach
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix} 
                isZero={stat.isZero}
              />
              <p className="text-xl text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;