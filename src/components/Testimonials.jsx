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
    review: "Chaitu Events made my daughter's birthday unforgettable! The balloon arch was absolutely stunning, and they completed the setup 2 hours before the party. Every guest was amazed! Will definitely book again.",
    event: 'Birthday Party',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    role: 'Wedding Client',
    location: 'Nellore',
    avatar: '👨',
    rating: 5,
    review: "Amazing balloon decorations and perfect lighting! Our wedding reception looked like something out of a fairy tale. The team was professional, punctual, and so creative. Best decision we made for our wedding!",
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
    review: "Best surprise planners in the city! They kept everything secret from my husband and the reveal was perfect. The rose petal path, candles, and balloon ceiling looked breathtakingly beautiful. 10/10!",
    event: 'Romantic Surprise',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 4,
    name: 'Karthik Naidu',
    role: 'Engagement Client',
    location: 'Ongole',
    avatar: '👨‍💼',
    rating: 5,
    review: "The engagement decoration exceeded all our expectations! The floral backdrop, LED lighting, and overall setup was just gorgeous. Our families were absolutely thrilled. Thank you Chaitu Events team!",
    event: 'Engagement Ceremony',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 5,
    name: 'Meena Patel',
    role: 'Housewarming Client',
    location: 'Nellore',
    avatar: '👩‍💼',
    rating: 5,
    review: "We hired Chaitu Events for our housewarming and they truly made it special. The fresh flower arrangements, colorful balloons, and welcoming decor made everyone feel the warmth. Highly recommend!",
    event: 'Housewarming',
    color: 'from-indigo-400 to-blue-500',
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
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

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
              Real stories from real families whose celebrations we helped make magical.
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
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-6xl text-gray-100 dark:text-gray-800 font-serif select-none">
                    "
                  </div>

                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white text-xs font-semibold`}>
                      <span>🎉</span> {t.event}
                    </div>
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                    "{t.review}"
                  </p>

                  {/* Reviewer */}
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
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

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16 text-center"
        >
          {[
            { value: '500+', label: 'Happy Clients', icon: '😊' },
            { value: '5.0⭐', label: 'Average Rating', icon: '⭐' },
            { value: '100%', label: 'Satisfaction', icon: '💯' },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-800">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-bold text-xl text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
