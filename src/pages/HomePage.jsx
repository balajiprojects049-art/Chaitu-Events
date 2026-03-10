import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiLayers, FiGift, FiPhoneCall } from 'react-icons/fi';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

// Mini service preview for home
const serviceHighlights = [
  { img: '/birthday_decor.png', title: 'Birthday Decorations', slug: 'Birthday' },
  { img: '/wedding_decor.png',  title: 'Wedding Decorations',  slug: 'Wedding' },
  { img: '/engagement_decor.png', title: 'Engagement Decor',  slug: 'Engagement' },
  { img: '/lighting_decor.png', title: 'Lighting Setups',     slug: 'Lighting' },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Chaitu Events – Premium Event Decorations & Surprise Planning</title>
        <meta name="description" content="Chaitu Events – Premium balloon decorations, wedding decor, birthday surprise planning, engagement and housewarming decorations in Nellore, Kavali, and Prakasam districts." />
      </Helmet>

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Quick Service Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
              <FiLayers className="w-4 h-4" />
              <span>What We Do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our{' '}
              <span style={{ background: 'linear-gradient(135deg,#f43f5e,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Specialities
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
              A taste of what we create — see all 8 services on our dedicated Services page.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {serviceHighlights.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg aspect-square"
                onClick={() => navigate('/services')}
              >
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm drop-shadow">{s.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-bold text-white shadow-xl"
              style={{ background: 'linear-gradient(135deg,#f43f5e,#7c3aed)' }}
            >
              View All 8 Services →
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image (Fixed scroll effect) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: "url('/birthday_decor.png')" }}
        >
          {/* Mirror Transparent / Glassmorphism */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Colour tint overlay for brand feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 mix-blend-overlay" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[['#f43f5e','15%','30%'],['#7c3aed','75%','20%'],['#f59e0b','50%','70%']].map(([c,x,y],i)=>(
            <motion.div key={i} className="absolute rounded-full blur-3xl opacity-15"
              style={{ width: 400, height: 400, background: `radial-gradient(circle,${c},transparent)`, left: x, top: y, transform:'translate(-50%,-50%)' }}
              animate={{ scale:[1,1.3,1] }} transition={{ duration:5+i, repeat:Infinity }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <FiGift className="w-10 h-10 text-yellow-300" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Plan Your{' '}
            <span style={{ background:'linear-gradient(135deg,#f43f5e,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              Dream Event?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Fill in our easy booking form and we'll get back to you within 2 hours!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/booking')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-gray-900 shadow-xl"
              style={{ background: 'linear-gradient(135deg,#f59e0b,#f43f5e)' }}
            >
              <FiGift className="inline-block w-5 h-5 mr-2" />
              <span>Book Now</span>
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:border-white transition-all duration-300"
            >
              <FiPhoneCall className="inline-block w-5 h-5 mr-2" />
              <span>Contact Us</span>
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
