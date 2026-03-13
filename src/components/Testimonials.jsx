import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Birthday Party Client',
    location: 'Nellore',
    avatar: '👩',
    rating: 5,
    review: "Chaitu Events provided the best balloon decoration in Nellore for my daughter's birthday! Punctual, creative, and very professional. Highly recommended for any event in Nellore district.",
    event: 'Birthday Party',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    role: 'Wedding Client',
    location: 'Ongole',
    avatar: '👨',
    rating: 5,
    review: "Stunning wedding decoration in Ongole! The stage setup and lighting were world-class. Chaitu Events is definitely the best event planner in Prakasam district.",
    event: 'Wedding Reception',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 3,
    name: 'Anu Reddy',
    role: 'Surprise Party Client',
    location: 'Kavali',
    avatar: '👩‍🦰',
    rating: 5,
    review: "Top-notch surprise event planning in Kavali. They managed the decor and the surprise elements perfectly. The best decorators in Andhra Pradesh for creative setups!",
    event: 'Romantic Surprise',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 4,
    name: 'Karthik Naidu',
    role: 'Engagement Client',
    location: 'Gudur',
    avatar: '👨‍💼',
    rating: 5,
    review: "Excellent engagement decoration in Gudur. The floral work and balloon arches were elegant. The team handled every detail with precision. Very happy with Chaitu Events.",
    event: 'Engagement Ceremony',
    color: 'from-green-400 to-teal-500',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        size={14}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-purple-100/40 dark:bg-purple-950/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-100/40 dark:bg-pink-950/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-4 border border-yellow-200 dark:border-yellow-800">
              <span>⭐</span> Client Stories
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #f43f5e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Clients Say
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Real stories from real families in Nellore and Prakasam whose celebrations we helped make magical.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[350px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="testimonial-card rounded-3xl p-8 md:p-12 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl relative">
                  <div className="absolute top-6 right-8 text-6xl text-gray-100 dark:text-gray-800 font-serif select-none">
                    "
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white text-xs font-semibold`}>
                      <span>🎉</span> {t.event}
                    </div>
                    <StarRating rating={t.rating} />
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                    "{t.review}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-2xl shadow-md`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-lg">{t.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{t.role}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1">
                        <span>📍</span> {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2.5 bg-gradient-to-r from-pink-400 to-purple-500'
                      : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Review CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 max-w-2xl mx-auto rounded-3xl p-8 text-center bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-800 shadow-xl"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={28} className="text-yellow-400 fill-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Are You a Happy Client?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">
            Help us reach more families in <span className="text-purple-600 dark:text-purple-400">Nellore, Ongole, and Kavali</span> by sharing your experience on Google.
          </p>
          <motion.a
            href="https://g.page/chaituevents/review"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white shadow-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
          >
            <span>Review Us on Google</span>
            <FiStar />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
