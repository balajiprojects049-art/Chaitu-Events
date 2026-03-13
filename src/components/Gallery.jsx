import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const balloonImages = [
  'IMG_7150.JPG.jpeg', 'IMG_7435.JPG.jpeg', 'IMG_8028.PNG', 'IMG_8075.JPG.jpeg',
  'IMG_8076.JPG.jpeg', 'IMG_8077.JPG.jpeg', 'IMG_8239.JPG.jpeg', 'IMG_8275.JPG.jpeg',
  'IMG_8276.JPG.jpeg', 'IMG_8290.PNG', 'IMG_8291.PNG', 'IMG_8341.PNG',
  'IMG_8361.JPG.jpeg', 'IMG_8365.PNG', 'IMG_8426.JPG.jpeg', 'IMG_8443.JPG.jpeg',
  'IMG_8444.JPG.jpeg', 'IMG_8445.JPG.jpeg', 'IMG_8515.JPG.jpeg', 'IMG_8534.JPG.jpeg',
  'IMG_8693.JPG.jpeg'
].map((img, i) => ({
  id: `balloon-${i}`,
  image: `/Gallary images/Ballon/${img}`,
  title: 'Balloon Decoration',
  category: 'Balloon'
}));

const otherImages = [
  'IMG_4647.JPG.jpeg', 'IMG_4648.JPG.jpeg', 'IMG_4652.JPG.jpeg', 'IMG_4706.JPG.jpeg',
  'IMG_5299.JPG.jpeg', 'IMG_5300.JPG.jpeg', 'IMG_5301.JPG.jpeg', 'IMG_5315.JPG.jpeg',
  'IMG_5316.JPG.jpeg', 'IMG_5319.JPG.jpeg', 'IMG_5321.JPG.jpeg', 'IMG_5322.JPG.jpeg',
  'IMG_5324.JPG.jpeg', 'IMG_5548.JPG.jpeg', 'IMG_5567.JPG.jpeg', 'IMG_5813.JPG.jpeg',
  'IMG_5814.JPG.jpeg', 'IMG_5815.JPG.jpeg', 'IMG_5816.JPG.jpeg', 'IMG_5817.JPG.jpeg',
  'IMG_5818.JPG.jpeg', 'IMG_5835.JPG.jpeg', 'IMG_5836.JPG.jpeg', 'IMG_5841.JPG.jpeg',
  'IMG_5842.JPG.jpeg', 'IMG_5844.JPG.jpeg', 'IMG_5847.JPG.jpeg', 'IMG_5851.JPG.jpeg',
  'IMG_6291.JPG.jpeg', 'IMG_7421.JPG.jpeg', 'IMG_7422.JPG.jpeg', 'IMG_7423.JPG.jpeg',
  'IMG_8630.JPG.jpeg', 'IMG_8631.JPG.jpeg', 'IMG_8632.JPG.jpeg', 'IMG_8633.JPG.jpeg',
  'IMG_8634.JPG.jpeg', 'IMG_8635.JPG.jpeg', 'IMG_8636.JPG.jpeg', 'IMG_8637.JPG.jpeg',

].map((img, i) => ({
  id: `other-${i}`,
  image: `/Gallary images/${img}`,
  title: 'Event Decoration',
  category: i < 15 ? 'Flowers' : (i < 30 ? 'Wedding' : 'Engagement') // Preliminary sorting based on sample checks
}));

const GallerySection = ({ title, items }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div ref={ref} className="mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        className="flex items-center gap-4 mb-8"
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex-grow h-px bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <GalleryItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: (index % 4) * 0.07, duration: 0.45 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
      style={{ aspectRatio: '1 / 1' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.image}
        alt={`${item.title} in Nellore & Prakasam - Chaitu Events`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white font-medium uppercase tracking-wider">
          {item.category}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-4 z-10"
          >
            <button className="px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/60 hover:bg-white hover:text-gray-900 transition-all duration-200">
              Enlarge Image
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Gallery = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-4 border border-yellow-200 dark:border-yellow-800">
              <span>🖼️</span> Our Work Portfolio
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
              Real photos from our recent events. Each setup is crafted with love and attention to detail.
            </p>
          </motion.div>
        </div>

        <GallerySection title="🎈 Balloon Decorations" items={balloonImages} />
        <GallerySection title="🌸 Flower Decorations" items={otherImages.filter(i => i.category === 'Flowers')} />
        <GallerySection title="💍 Wedding & Engagement" items={otherImages.filter(i => i.category !== 'Flowers')} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Looking for a custom decoration for your special day?</p>
          <div className="flex flex-wrap justify-center gap-4">
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
              See More on Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
