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
        <title>Best Event Decoration in Nellore & Prakasam | Chaitu Events</title>
        <meta name="description" content="Chaitu Events offers premium balloon decoration, wedding decor, and birthday surprise planning in Nellore, Prakasam, Ongole, and across Andhra Pradesh. Book the best decorators today!" />
        <meta name="keywords" content="Balloon Decoration Nellore, Birthday Decoration Prakasam, Event Planner Andhra Pradesh, Wedding Decoration Nellore, Party Decorators Ongole, Chaitu Events" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Chaitu Events",
              "image": "https://chaituevents.com/hero_bg.png",
              "@id": "https://chaituevents.com",
              "url": "https://chaituevents.com",
              "telephone": "+919553638221",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hosanna Church Road",
                "addressLocality": "Nellore",
                "postalCode": "524003",
                "addressCountry": "IN",
                "addressRegion": "Andhra Pradesh"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 14.4426,
                "longitude": 79.9865
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/chaituevents",
                "https://www.instagram.com/chaituevents"
              ]
            }
          `}
        </script>
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
              Expert decoration services in Nellore, Kavali, and across Andhra Pradesh.
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

      {/* Areas We Serve - NEW SEO SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Areas We Serve Across Andhra Pradesh
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Providing premium decoration services in major districts and towns including Nellore and Prakasam.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Nellore', 'Ongole', 'Kavali', 'Gudur', 'Chirala', 'Vijayawada', 'Guntur', 'Tirupati', 'Naidupeta', 'Kandukur', 'Markapur', 'Andhra Pradesh'].map((city, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center font-medium text-gray-700 dark:text-gray-300">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Detailed SEO Content Section - NEW */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
          <h2 className="font-display text-center text-gray-900 dark:text-white mb-8">Premium Event Decoration Services in Andhra Pradesh</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to <strong>Chaitu Events</strong>, your premier partner for exquisite event decoration and seamless event planning in Andhra Pradesh. Based in the heart of <strong>Nellore District</strong> and extending our creative touch across <strong>Prakasam District</strong>, we specialize in turning ordinary venues into extraordinary experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you are looking for the <strong>best balloon decoration in Nellore</strong> or sophisticated <strong>wedding decoration in Andhra Pradesh</strong>, our team is equipped to bring your vision to life. From whimsical arches for birthdays to grand flower arrangements for traditional Telugu weddings, we handle every detail with precision.
          </p>
          
          <h3 className="text-gray-900 dark:text-white mt-8">Expert Balloon Decoration in Nellore District</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Searching for "balloon decorators near me" in Nellore? Chaitu Events offers custom-themed balloon setups that add a pop of joy to any occasion. We specialize in organic balloon arches, helium bouquets, and backdrop installations in <strong>Kavali, Gudur, and Naidupeta</strong>.
          </p>

          <h3 className="text-gray-900 dark:text-white mt-8">Wedding & Engagement Decorators in Prakasam</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our <strong>event planners in Prakasam District</strong> are experts at creating luxurious wedding stages and reception decors. We serve <strong>Ongole, Chirala, and Kandukur</strong>, providing everything from traditional flower work to modern crystal lighting. Chaitu Events is trusted by hundreds of families for its reliable service and premium aesthetics.
          </p>

          <h3 className="text-gray-900 dark:text-white mt-8">Surprise Planning & Party Decor</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Make your loved ones feel special with our <strong>surprise event planning in Andhra Pradesh</strong>. We curate romantic rooftop dinners, homecoming surprises, and intimate birthday setups right at your doorstep. No matter the scale—be it a small housewarming or a grand corporate launch—Chaitu Events is the top-rated <strong>event decoration service in Nellore and Prakasam</strong>.
          </p>
        </div>
      </section>

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
          <p className="text-gray-400 text-lg mb-8">Contact the best event planners in Andhra Pradesh today!</p>
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
