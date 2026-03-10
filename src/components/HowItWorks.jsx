import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMessageCircle, FiEdit3, FiPackage, FiHeart } from 'react-icons/fi';

const steps = [
  {
    icon: FiMessageCircle,
    title: '1. Get in Touch',
    desc: 'Contact us via phone or WhatsApp to discuss your event date, location, and requirements.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: FiEdit3,
    title: '2. Select Design',
    desc: 'Browse our packages or share your custom theme ideas. We provide a clear quotation.',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: FiPackage,
    title: '3. We Setup',
    desc: 'Our professional team arrives on time and sets up the decorations flawlessly.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: FiHeart,
    title: '4. Enjoy & Celebrate',
    desc: 'Relax and create magical memories with your loved ones in a beautifully decorated space.',
    color: 'from-emerald-400 to-teal-500'
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4 border border-orange-200 dark:border-orange-800">
            <span>⚙️</span> Our Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It{' '}
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Works
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Booking your dream event decoration is simple, transparent, and completely hassle-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gray-200 via-purple-300 to-gray-200 dark:from-gray-800 dark:via-purple-800 dark:to-gray-800 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="mx-auto w-24 h-24 rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 shadow-xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-inner`}>
                  <step.icon size={28} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
