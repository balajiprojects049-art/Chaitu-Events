import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLayers, FiShield, FiClock, FiHeart, FiAward, FiStar, FiPhoneCall, FiInfo } from 'react-icons/fi';

const features = [
  { icon: FiLayers, title: 'Creative Themes', desc: 'Unique themes tailored to your vision' },
  { icon: FiShield, title: 'Premium Quality', desc: 'Top-grade materials and decorations' },
  { icon: FiClock, title: 'On-Time Setup', desc: 'Always ready before your event starts' },
  { icon: FiHeart, title: 'Made with Love', desc: 'Every detail crafted with passion' },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 dark:bg-pink-950/20 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 dark:bg-purple-950/20 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/hero_bg.png"
                alt="Luxury balloon arch decoration – Chaitu Events"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-end justify-end text-white p-6">
                <h3 className="font-display text-xl font-bold drop-shadow-lg">Premium Decorations</h3>
                <p className="text-white/80 text-sm mt-0.5">Wedding • Birthday • Engagement • Housewarming</p>
              </div>
            </div>

            {/* Floating Card – Experience */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-xl text-gray-900">
                  <FiAward />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-lg">5+ Years</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card – Events */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border border-pink-100 dark:border-pink-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-xl text-white">
                  <FiStar />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-lg">500+</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Events Decorated</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 text-sm font-medium mb-4 border border-pink-200 dark:border-pink-800">
              <FiInfo className="w-4 h-4" />
              <span>About Chaitu Events</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Crafting{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f43f5e, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Magical
              </span>{' '}
              Moments<br />Since 2019
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Chaitu Events specializes in creating unforgettable celebrations with premium balloon 
              decorations, elegant flower arrangements, creative surprise planning, and stunning lighting 
              setups. Whether it's a birthday, wedding, engagement, or housewarming ceremony, we transform 
              your special moments into{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">magical memories</span>.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors duration-300 group"
                >
                  <f.icon className="w-6 h-6 text-purple-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{f.title}</h4>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <motion.a
                href="tel:+919553638221"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-lg cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' }}
              >
                <FiPhoneCall className="w-5 h-5" />
                <span>Call Us Now</span>
              </motion.a>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p className="font-semibold text-gray-700 dark:text-gray-300">Mon–Sun</p>
                <p>9 AM – 9 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
