import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    icon: '💎',
    title: 'Premium Quality Decorations',
    desc: 'We use only the finest quality balloons, flowers, and decoration materials sourced from top suppliers.',
    color: 'from-purple-500 to-violet-600',
    delay: 0,
  },
  {
    icon: '🎨',
    title: 'Creative Theme Designs',
    desc: 'Our creative team crafts unique, personalized themes that perfectly match your vision and personality.',
    color: 'from-pink-500 to-rose-600',
    delay: 0.1,
  },
  {
    icon: '💰',
    title: 'Affordable Packages',
    desc: 'Luxury decorations don\'t have to break the bank. We offer competitive pricing for every budget.',
    color: 'from-yellow-500 to-amber-600',
    delay: 0.2,
  },
  {
    icon: '👨‍🎨',
    title: 'Professional Setup Team',
    desc: 'Our skilled decorators handle every detail professionally, so you can relax and enjoy your special day.',
    color: 'from-green-500 to-emerald-600',
    delay: 0.3,
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    desc: 'We respect your time. Our team arrives early and ensures everything is perfectly set up before guests arrive.',
    color: 'from-blue-500 to-indigo-600',
    delay: 0.4,
  },
  {
    icon: '⭐',
    title: 'Customer Satisfaction',
    desc: '500+ happy clients and counting! Your satisfaction and joy is our greatest reward and motivation.',
    color: 'from-orange-500 to-red-600',
    delay: 0.5,
  },
];

const WhyUs = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124,58,237,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4 border border-green-200 dark:border-green-800">
              <span>🏆</span> Why Choose Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7c3aed, #22c55e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Chaitu Events
              </span>{' '}
              Difference
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Here's why thousands of families trust us to decorate their most cherished moments.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reason.delay }}
              className="relative group flex gap-4 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                style={{
                  background: `linear-gradient(135deg, transparent, rgba(124,58,237,0.05))`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #1a0533 0%, #2d0a50 50%, #1a0533 100%)',
          }}
        >
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="text-5xl mb-4">🎊</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Dream Event?
              </span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Let's bring your vision to life! Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20an%20event%20decoration%20with%20Chaitu%20Events!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-gray-900 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #f43f5e)' }}
              >
                🚀 Get Free Quote
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                📞 Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
