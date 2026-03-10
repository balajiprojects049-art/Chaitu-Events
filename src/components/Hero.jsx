import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FiCalendar,
  FiImage,
  FiTrendingUp,
  FiSmile,
  FiGrid,
  FiAward,
  FiZap,
} from 'react-icons/fi';

const HERO_WORDS = ['Unforgettable', 'Spectacular', 'Extraordinary'];

const PARTICLES = [...Array(20)].map((_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    size: 6 + Math.random() * 10,
  },
}));

const Hero = () => {
  const navigate = useNavigate();
  const [wordIdx, setWordIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Typing effect (type -> pause -> delete -> next)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTyped(HERO_WORDS[0]);
      return;
    }

    const current = HERO_WORDS[wordIdx];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseAfterTyped = 1100;
    const pauseAfterDeleted = 250;

    let timeoutId;

    if (!isDeleting && typed === current) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseAfterTyped);
    } else if (isDeleting && typed === '') {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIdx(prev => (prev + 1) % HERO_WORDS.length);
      }, pauseAfterDeleted);
    } else {
      timeoutId = window.setTimeout(() => {
        const next = isDeleting
          ? current.slice(0, Math.max(0, typed.length - 1))
          : current.slice(0, typed.length + 1);
        setTyped(next);
      }, typingSpeed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [typed, isDeleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-10 sm:pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Real hero background image */}
      <div className="absolute inset-0">
        <img
          src="/hero_bg.png"
          alt="Premium event decoration – balloon arch in luxury ballroom"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Colour tint overlay for brand feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-transparent to-pink-950/40" />
      </div>

      {/* Fallback gradient while image loads */}
      {!imgLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950" />
      )}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <motion.span
            key={p.id}
            className="absolute select-none rounded-full bg-pink-400/30"
            style={{
              left: p.style.left,
              top: p.style.top,
              width: p.style.size,
              height: p.style.size,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: parseFloat(p.style.animationDuration),
              repeat: Infinity,
              delay: parseFloat(p.style.animationDelay),
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-purple-300 text-sm font-medium">Available for Bookings</span>
          <span className="text-yellow-400">✨</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 leading-[1.05] tracking-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
        >
          Make Your<br />
          Celebrations{' '}
          <span className="relative inline-grid align-baseline">
            {/* Invisible longest word to define the fixed layout width so it NEVER jumps */}
            <span className="col-start-1 row-start-1 opacity-0 pointer-events-none">
              Extraordinary
            </span>
            <span
              className="col-start-1 row-start-1 typing-cursor"
              style={{
                background: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              aria-label={typed || HERO_WORDS[wordIdx]}
            >
              {typed || '\u00A0'}
            </span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          Premium Balloon Decorations, Surprise Events & Wedding Decorations — 
          We transform your special moments into{' '}
          <span className="text-yellow-400 font-semibold">magical memories</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-16"
        >
          <motion.button
            onClick={() => navigate('/booking')}
            whileHover={{ scale: 1.06, boxShadow: '0 20px 40px rgba(244,63,94,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' }}
          >
            <FiCalendar className="w-5 h-5" />
            <span>Book Now</span>
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/gallery')}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-lg border-2 border-yellow-400/60 hover:border-yellow-400 hover:bg-yellow-400/10 backdrop-blur-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          >
            <FiImage className="w-5 h-5" />
            <span>View Decorations</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Events Done', icon: FiTrendingUp },
            { number: '100%', label: 'Satisfaction', icon: FiSmile },
            { number: '8+', label: 'Event Types', icon: FiGrid },
            { number: '5+', label: 'Years Exp.', icon: FiAward },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10"
            >
              <div className="flex items-center justify-center mb-1">
                <stat.icon className="w-5 h-5 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
