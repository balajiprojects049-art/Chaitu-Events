import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: 'Who provides the best balloon decoration in Nellore?',
    a: 'Chaitu Events is recognized as a leader for the best balloon decoration in Nellore and surrounding areas. We offer creative, theme-based balloon setups for birthdays, shop openings, and private events with premium quality and on-time execution.',
  },
  {
    q: 'How early should I book my event decoration in Prakasam District?',
    a: 'For major events in Prakasam District or Nellore, we recommend booking at least 1-2 weeks in advance. During peak wedding seasons, booking 1 month early ensures you get your preferred dates for wedding and engagement decorations.',
  },
  {
    q: 'Do you offer surprise event planning across Andhra Pradesh?',
    a: 'Yes! We are the top surprise event planners in Andhra Pradesh. We serve Nellore, Ongole, Kavali, and even major cities like Vijayawada and Guntur for romantic surprises, anniversaries, and homecoming events.',
  },
  {
    q: 'What types of birthday decoration themes do you have in Kavali?',
    a: 'We offer specialized birthday decoration in Kavali with themes like Jungle, Boss Baby, Cocomelon, and Princess. We can also customize any theme based on your vision and budget.',
  },
  {
    q: 'How long does it take to set up wedding decoration in Ongole?',
    a: 'A standard wedding decoration in Ongole or Nellore typically takes 4-6 hours depending on the scale. Small party setups take about 1-2 hours. We always ensure the setup is completed well before the guests arrive.',
  },
  {
    q: 'Is there a travel fee for decoration services in Gudur or Chirala?',
    a: 'We serve all major towns like Gudur, Chirala, and Naidupeta. A nominal travel fee may be applicable depending on the distance from our main hubs, but we strive to keep our pricing affordable for all customers in AP.',
  },
];

const FAQ = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800">
            <span>💬</span> Got Questions?
          </div>
          <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked{' '}
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-700 shadow-md' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
