import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: `${150 + i * 60}px`,
                height: `${150 + i * 60}px`,
                background: i % 3 === 0
                  ? 'radial-gradient(circle, #f43f5e, transparent)'
                  : i % 3 === 1
                    ? 'radial-gradient(circle, #7c3aed, transparent)'
                    : 'radial-gradient(circle, #f59e0b, transparent)',
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.25, 0.1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-yellow-400 flex items-center justify-center shadow-2xl">
            <span className="text-3xl">🎉</span>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-2 rounded-full border-2 border-transparent"
            style={{
              background: 'conic-gradient(from 0deg, #f43f5e, #7c3aed, #f59e0b, #f43f5e) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl font-bold mb-2"
          style={{
            background: 'linear-gradient(135deg, #f43f5e, #7c3aed, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Chaitu Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-purple-300 text-sm mb-10 tracking-widest uppercase"
        >
          Premium Event Decorations
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #f43f5e, #7c3aed, #f59e0b)',
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 text-xs mt-3"
        >
          Loading magical experiences...
        </motion.p>

        {/* Floating Emojis */}
        {['🎈', '🌸', '✨', '💐', '🎊', '💍'].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl pointer-events-none"
            style={{
              left: `${10 + i * 14}%`,
              bottom: '15%',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
