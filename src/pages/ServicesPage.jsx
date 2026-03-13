import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Services from '../components/Services';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Our Services | Balloon & Wedding Decoration in Andhra Pradesh</title>
        <meta name="description" content="Explore Chaitu Events premium services: Balloon decoration in Nellore, wedding decor in Prakasam, surprise planning, and housewarming in Andhra Pradesh." />
        <meta name="keywords" content="Balloon Decoration Nellore, Wedding Decorators Prakasam, Event Planning Andhra Pradesh, Birthday Decoration Kavali" />
      </Helmet>

      <PageHero
        emoji="🎪"
        title="Our Premium"
        highlight="Services"
        subtitle="From intimate birthday surprises to grand wedding mandaps — every service crafted with love and perfection."
        bgImage="/birthday_decor.png"
      />

      {/* Intro strip */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🎈', val: '8+', label: 'Service Types' },
              { icon: '✅', val: '500+', label: 'Events Done' },
              { icon: '⭐', val: '5.0', label: 'Rating' },
              { icon: '⏰', val: '2hr', label: 'Response Time' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}} transition={{delay:i*0.1}}
                className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900"
              >
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.val}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* All Service Cards */}
      <Services />

      {/* Bottom CTA */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}}>
            <div className="text-4xl mb-4">🤔</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Not sure which service?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Tell us about your event and we'll suggest the perfect decoration package for you — for free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/booking')}
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-8 py-3.5 rounded-full font-bold text-white shadow-xl"
                style={{ background:'linear-gradient(135deg,#f43f5e,#7c3aed)' }}
              >
                🎉 Book Now
              </motion.button>
              <motion.a
                href="https://wa.me/919553638221?text=Hi%2C%20I%20need%20help%20choosing%20a%20decoration%20service!"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-8 py-3.5 rounded-full font-bold text-white shadow-xl"
                style={{ background:'linear-gradient(135deg,#25d366,#128c7e)' }}
              >
                💬 Ask on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
