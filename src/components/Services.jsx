import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    image: '/birthday_decor.png',
    title: 'Birthday Balloon Decorations',
    desc: 'Create stunning birthday setups with premium balloon arches, columns, and theme-based arrangements that wow every guest.',
    color: 'from-pink-500 to-rose-600',
    border: 'border-pink-200 dark:border-pink-800',
    badge: 'Most Popular',
    details: ['Balloon arches & columns', 'Themed backdrops', 'Table centrepieces', 'Happy Birthday banners', 'Confetti & streamers'],
  },
  {
    id: 2,
    image: '/wedding_decor.png',
    title: 'Wedding Decorations',
    desc: 'Elegant floral mandaps, stage decorations, and romantic lighting that create a dream wedding everyone will remember.',
    color: 'from-red-500 to-pink-600',
    border: 'border-red-200 dark:border-red-800',
    badge: 'Premium',
    details: ['Floral mandap setup', 'Stage decoration', 'Flower wall backdrop', 'Entry gate design', 'Table & chair draping'],
  },
  {
    id: 3,
    image: '/engagement_decor.png',
    title: 'Engagement Decorations',
    desc: 'Romantic and elegant engagement setups with premium floral work, balloon backdrops, and personalized themes.',
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-200 dark:border-purple-800',
    badge: 'Trending',
    details: ['Balloon & floral arch', 'Ring ceremony setup', 'Personalized backdrop', 'Fairy light canopy', 'Couple name signage'],
  },
  {
    id: 4,
    image: '/housewarming_decor.png',
    title: 'Housewarming Decorations',
    desc: 'Welcome to your new home! Fresh flower decorations, colorful balloon arrangements, and festive lighting setups.',
    color: 'from-yellow-500 to-amber-600',
    border: 'border-yellow-200 dark:border-yellow-800',
    badge: '',
    details: ['Door torana decoration', 'Rangoli design', 'Marigold garlands', 'Festive balloon setup', 'Diya & lamp arrangement'],
  },
  {
    id: 5,
    image: '/surprise_decor.png',
    title: 'Surprise Event Planning',
    desc: 'Turn ordinary moments into extraordinary surprises with perfectly planned setups, hidden decorations, and dramatic reveals.',
    color: 'from-red-600 to-pink-700',
    border: 'border-red-200 dark:border-red-800',
    badge: 'Fan Favorite',
    details: ['Secret setup (you\'re away)', 'Balloon ceiling fill', 'Rose petal pathways', 'Custom photo wall', 'Surprise reveal kit'],
  },
  {
    id: 6,
    image: '/flower_decor.png',
    title: 'Flower Decorations',
    desc: 'Fresh and artificial floral arrangements to add natural beauty and fragrance to any event or occasion.',
    color: 'from-rose-500 to-pink-600',
    border: 'border-rose-200 dark:border-rose-800',
    badge: '',
    details: ['Fresh flower arrangements', 'Flower wall panels', 'Aisle decoration', 'Centrepiece bouquets', 'Seasonal blooms'],
  },
  {
    id: 7,
    image: '/lighting_decor.png',
    title: 'Home Lighting Decorations',
    desc: 'Fairy lights, LED setups, neon signs, and ambient lighting to create the perfect atmosphere for any event.',
    color: 'from-indigo-500 to-blue-600',
    border: 'border-indigo-200 dark:border-indigo-800',
    badge: '',
    details: ['Fairy light canopy', 'LED strip lighting', 'Neon custom signs', 'Paper lanterns', 'Candle light setup'],
  },
  {
    id: 8,
    image: '/surprise_decor.png',
    title: 'Romantic Surprise Setups',
    desc: 'Candlelit dinners, rose petal arrangements, and dreamy balloon setups for anniversaries and romantic proposals.',
    color: 'from-green-500 to-teal-600',
    border: 'border-green-200 dark:border-green-800',
    badge: '',
    details: ['Rose petal "LOVE" spell', 'Candlelit dinner setup', 'Heart balloon arch', 'Wine & gift arrangement', 'Romantic lighting'],
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, type: 'spring' }}
      className={`relative rounded-3xl border ${service.border} bg-white dark:bg-gray-900 flex flex-col group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        {service.badge && (
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${service.color} shadow`}>
              {service.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>

        {/* Feature list */}
        <ul className="space-y-1 mb-4">
          {service.details.map((d, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#f43f5e,#7c3aed)' }} />
              {d}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/booking')}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${service.color} shadow-md hover:shadow-lg transition-all duration-300`}
        >
          Book Now →
        </motion.button>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-5 pointer-events-none`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
