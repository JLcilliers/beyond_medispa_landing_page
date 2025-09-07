import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know which treatment is right for me?",
      answer: "During your initial consultation, our medical experts will assess your skin, discuss your goals, and create a personalized treatment plan tailored to your unique needs. We'll explain all available options and recommend the most effective approach for achieving your desired results."
    },
    {
      question: "Are the treatments painful?",
      answer: "Most of our treatments are designed to be comfortable with minimal discomfort. We use advanced techniques, numbing creams, and cooling devices where appropriate. Your comfort is our priority, and we'll ensure you're relaxed throughout your treatment."
    },
    {
      question: "How long do results typically last?",
      answer: "Results vary depending on the treatment and individual factors. Some treatments like Botox last 3-4 months, while others like dermal fillers can last 6-18 months. During your consultation, we'll provide specific timelines for your chosen treatments and discuss maintenance plans."
    },
    {
      question: "What's your Beyond Medispa difference from other clinics?",
      answer: "We combine medical expertise with luxury spa services in prestigious locations. Our board-certified practitioners use the latest technology and techniques, ensuring both safety and exceptional results. We pride ourselves on personalized care and achieving natural-looking enhancements."
    },
    {
      question: "Is there downtime after treatments?",
      answer: "Downtime varies by treatment. Many of our procedures have minimal to no downtime, allowing you to return to daily activities immediately. More intensive treatments may require a few days of recovery. We'll provide detailed aftercare instructions for your specific treatment."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our treatments and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors">
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;