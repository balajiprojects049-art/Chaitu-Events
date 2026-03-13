import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const plans = [
  {
    name: 'Silver',
    emoji: '🥈',
    price: '₹3,999',
    color: 'from-gray-400 to-gray-600',
    border: 'border-gray-200 dark:border-gray-700',
    popular: false,
    features: [
      'Basic balloon decoration',
      'Welcome banner',
      'Simple table setup',
      '2 colour theme',
      'Setup within 2 hours',
      'WhatsApp support',
    ],
  },
  {
    name: 'Gold',
    emoji: '⭐',
    price: '₹7,999',
    color: 'from-yellow-400 to-amber-600',
    border: 'border-yellow-300 dark:border-yellow-700',
    popular: true,
    features: [
      'Premium balloon arch',
      'Flower arrangements',
      'Custom backdrop',
      'LED fairy lights',
      '4 colour theme',
      'Setup within 1.5 hours',
      'On-call support',
      'Photo-ready finish',
    ],
  },
  {
    name: 'Platinum',
    emoji: '💎',
    price: '₹14,999',
    color: 'from-purple-500 to-pink-600',
    border: 'border-purple-300 dark:border-purple-700',
    popular: false,
    features: [
      'Grand balloon & floral setup',
      'Custom neon/LED signage',
      'Premium floral wall',
      'Full lighting setup',
      'Surprise reveal kit',
      'Dedicated event coordinator',
      'Next-day cleanup',
      'HD photography (1 hr)',
      'Unlimited revisions',
    ],
  },
];

const PricingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Pricing Packages | Chaitu Events | Affordable Decor Nellore</title>
        <meta name="description" content="Transparent pricing for balloon decoration in Nellore and wedding decor in Prakasam. Packages start from ₹3,999. Best rates in Andhra Pradesh." />
        <meta name="keywords" content="Decoration Price Nellore, Wedding Decor Cost Prakasam, Birthday Decoration Packages AP, Chaitu Events Pricing" />
      </Helmet>

      <PageHero
        emoji="💰"
        title="Simple, Transparent"
        highlight="Pricing"
        subtitle="No hidden charges. Choose a package and we handle everything end-to-end."
        bgImage="/engagement_decor.png"
      />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i*0.15 }}
                whileHover={{ y:-8 }}
                className={`relative rounded-3xl border-2 ${plan.border} bg-white dark:bg-gray-900 p-8 flex flex-col shadow-xl ${plan.popular ? 'ring-2 ring-yellow-400' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-5 py-1.5 rounded-full text-sm font-bold text-white shadow-lg" style={{ background:'linear-gradient(135deg,#f43f5e,#7c3aed)' }}>
                      ✨ Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-2xl shadow-md mb-5`}>
                  {plan.emoji}
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-1">{plan.price}</div>
                <p className="text-gray-400 text-sm mb-6">per event · all inclusive</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold bg-gradient-to-br from-pink-500 to-purple-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale:1.04 }}
                  whileTap={{ scale:0.96 }}
                  onClick={() => navigate('/booking')}
                  className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  Book {plan.name} Package
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Custom quote */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="mt-14 rounded-3xl p-8 text-center"
            style={{ background:'linear-gradient(135deg,#1a0533,#0f0a1e)' }}
          >
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Need a Custom Package?</h3>
            <p className="text-gray-400 mb-6">Large venue? Special theme? Tie-up for multiple events? We'll build a quote just for you.</p>
            <motion.a
              href="https://wa.me/919553638221?text=Hi%2C%20I%20need%20a%20custom%20decoration%20quote!"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-xl"
              style={{ background:'linear-gradient(135deg,#25d366,#128c7e)' }}
            >
              💬 Get Custom Quote on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
