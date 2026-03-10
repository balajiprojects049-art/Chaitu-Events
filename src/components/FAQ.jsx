import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: 'How early should I book my event decoration?',
    a: 'We recommend booking at least 1-2 weeks in advance to ensure availability, especially during peak wedding and festival seasons. However, we also try our best to accommodate last-minute bookings depending on our schedule.',
  },
  {
    q: 'Can you create a custom theme for my party?',
    a: 'Absolutely! We love bringing your unique ideas to life. Just share your inspiration, preferred colors, and references, and our creative team will design a custom setup tailored exactly for you.',
  },
  {
    q: 'Do you charge extra for transportation?',
    a: 'Transportation is usually included in our standard packages for locations within the city limits. For venues outside the city limits, a nominal travel fee may apply based on the distance.',
  },
  {
    q: 'How long does it take to set up the decorations?',
    a: 'Setup time depends on the complexity of the design. Standard birthday balloon decorations usually take 1-2 hours, while larger wedding or engagement setups may take 4-6 hours. We will give you an exact time estimate when you book.',
  },
  {
    q: 'Is a deposit required to confirm the booking?',
    a: 'Yes, we require a 50% advance deposit to secure your date and begin sourcing materials for your specific theme. The remaining balance can be paid on the day of the event after the setup is complete.',
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
