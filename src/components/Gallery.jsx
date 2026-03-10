import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryItems = [
  {
    id: 1,
    image: '/hero_bg.png',
    title: 'Balloon Arch Decoration',
    category: 'Balloon',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    image: '/birthday_decor.png',
    title: 'Birthday Party Setup',
    category: 'Birthday',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    image: '/wedding_decor.png',
    title: 'Wedding Stage Decor',
    category: 'Wedding',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    image: '/flower_decor.png',
    title: 'Flower Arrangements',
    category: 'Flowers',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    image: '/surprise_decor.png',
    title: 'Surprise Room Decoration',
    category: 'Surprise',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 6,
    image: '/engagement_decor.png',
    title: 'Engagement Setup',
    category: 'Engagement',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    image: '/lighting_decor.png',
    title: 'Fairy Light Canopy',
    category: 'Lighting',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    image: '/housewarming_decor.png',
    title: 'Housewarming Decor',
    category: 'Housewarming',
    span: 'col-span-1 row-span-1',
  },
];

const categories = ['All', 'Balloon', 'Birthday', 'Wedding', 'Flowers', 'Surprise', 'Engagement', 'Lighting', 'Housewarming'];

const GalleryItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
      style={{ aspectRatio: '1 / 1' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Real image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Category Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white font-medium">
          {item.category}
        </span>
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end p-4 z-10"
          >
            <h3 className="text-white font-bold text-sm text-center drop-shadow">{item.title}</h3>
            <button className="mt-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/60 hover:bg-white hover:text-gray-900 transition-all duration-200">
              View Details
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-100/50 dark:bg-yellow-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100/50 dark:bg-pink-950/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-4 border border-yellow-200 dark:border-yellow-800">
              <span>🖼️</span> Our Gallery
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #f43f5e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Stunning
              </span>{' '}
              Creations
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse of the magical moments we've created for our beloved clients.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                style={activeCategory === cat ? {
                  background: 'linear-gradient(135deg, #f43f5e, #7c3aed)',
                } : {}}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((item, i) => (
              <GalleryItem key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">See more of our work on Instagram</p>
          <motion.a
            href="https://www.instagram.com/chaituevents"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed, #f59e0b)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @ChaithuEvents
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
