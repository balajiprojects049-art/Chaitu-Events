import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 'basic',
    name: 'Silver',
    emoji: '🥈',
    tagline: 'Perfect for small celebrations',
    price: '2,999',
    originalPrice: '4,999',
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900',
    borderColor: 'border-gray-200 dark:border-gray-700',
    features: [
      '✅ Basic Balloon Decoration',
      '✅ 2 Balloon Pillars',
      '✅ Happy Birthday Banner',
      '✅ Table Centerpiece',
      '✅ Setup + Cleanup',
      '❌ Theme Decoration',
      '❌ Lighting Setup',
      '❌ Photography Support',
    ],
    category: 'Birthday',
    popular: false,
  },
  {
    id: 'premium',
    name: 'Gold',
    emoji: '🥇',
    tagline: 'Most Popular Choice',
    price: '5,999',
    originalPrice: '9,999',
    color: 'from-yellow-400 to-amber-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
    borderColor: 'border-yellow-300 dark:border-yellow-700',
    features: [
      '✅ Premium Balloon Arch',
      '✅ 4 Balloon Columns',
      '✅ Theme-based Decoration',
      '✅ Flower Arrangements',
      '✅ LED Fairy Lights',
      '✅ Personalized Backdrop',
      '✅ Setup + Cleanup',
      '❌ Photography Support',
    ],
    category: 'Birthday/Engagement',
    popular: true,
  },
  {
    id: 'luxury',
    name: 'Platinum',
    emoji: '💎',
    tagline: 'Ultimate luxury experience',
    price: '12,999',
    originalPrice: '19,999',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-300 dark:border-purple-700',
    features: [
      '✅ Full Venue Decoration',
      '✅ Premium Floral Mandap',
      '✅ customized Theme Design',
      '✅ LED + Neon Lighting',
      '✅ Welcome Arch + Backdrop',
      '✅ Flower Stage Decor',
      '✅ Photography Support',
      '✅ Day-of Coordination',
    ],
    category: 'Wedding/Grand Events',
    popular: false,
  },
];

const categories = ['All', 'Birthday', 'Wedding', 'Engagement'];

const Pricing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeTab === 'All' ? plans : plans.filter(p => p.category.includes(activeTab));

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-100/50 dark:bg-purple-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100/50 dark:bg-yellow-950/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 text-sm font-medium mb-4 border border-pink-200 dark:border-pink-800">
              <span>💰</span> Pricing Packages
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Transparent &{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7c3aed, #f43f5e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Affordable
              </span>{' '}
              Pricing
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Premium quality decorations at prices that won't break your budget. All packages include professional setup and cleanup.
            </p>
          </motion.div>

          {/* Tab Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}
                style={activeTab === cat ? { background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' } : {}}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {filtered.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl border-2 ${plan.borderColor} ${plan.bgColor} p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-yellow-400 ring-offset-2 dark:ring-offset-gray-900' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-400 shadow-gold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.emoji}</div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{plan.tagline}</p>
                  <div className="mt-1">
                    <span className="text-xs text-gray-400 line-through">₹{plan.originalPrice}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-full py-3 rounded-2xl bg-gradient-to-r ${plan.color}`}>
                    <span className="text-white text-sm font-semibold">Starting at</span>
                    <span className="text-white text-3xl font-bold ml-2">₹{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">*Price varies by location & requirements</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Category badge */}
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-400 italic">Best for: {plan.category}</span>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/booking')}
                  className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Book This Package
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom Package Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-800 max-w-xl mx-auto"
        >
          <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">🎨 Need a Custom Package?</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Every event is unique! Contact us for a personalized quote tailored to your vision.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20a%20custom%20decoration%20package%20for%20my%20event!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          >
            <span>💬</span> Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
