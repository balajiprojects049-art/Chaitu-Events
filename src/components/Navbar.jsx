import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiPhone, FiGift } from 'react-icons/fi';

const navLinks = [
  { name: 'Home',     to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Gallery',  to: '/gallery' },
  { name: 'Booking',  to: '/booking' },
  { name: 'Contact',  to: '/contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'py-2 backdrop-blur-xl bg-white/90 dark:bg-gray-950/90 shadow-lg shadow-purple-500/10'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-yellow-400 flex items-center justify-center text-lg shadow-lg">
              <FiGift className="text-white" />
            </div>
            <div>
              <h1
                className="font-display text-xl font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #f43f5e, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Chaitu Events
              </h1>
              <p className="text-[10px] text-yellow-500 tracking-widest font-medium">
                PREMIUM DECORATIONS
              </p>
            </div>
          </motion.div>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                    isActive
                      ? (!scrolled && isHome ? 'text-white dark:text-purple-400' : 'text-purple-600 dark:text-purple-400')
                      : (!scrolled && isHome)
                        ? 'text-gray-200 hover:text-white dark:text-gray-300 dark:hover:text-purple-400 hover:bg-white/10 dark:hover:bg-white/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBar"
                        className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                          !scrolled && isHome ? 'bg-white dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-600'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Right side actions ── */}
          <div className="flex items-center gap-3">
            {/* Call button */}
            <motion.a
              href="tel:+919553638221"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full shadow-md hover:shadow-pink transition-all duration-300"
            >
              <FiPhone size={14} />
              <span>Call Us</span>
            </motion.a>

            {/* Dark mode */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                !scrolled && isHome
                  ? 'bg-white/20 text-white hover:bg-white/30 dark:bg-gray-800/50 dark:text-yellow-400'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-purple-100 dark:hover:bg-purple-900/30'
              }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(o => !o)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                !scrolled && isHome
                  ? 'bg-white/20 text-white dark:bg-gray-800/50 dark:text-gray-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-3xl bg-white/95 dark:bg-[#0f0a1e]/95 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-gray-200/50 dark:border-white/10 origin-top"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-5 py-3.5 rounded-2xl font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-purple-600 dark:hover:text-purple-400'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                href="tel:+919553638221"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center justify-center gap-2 mt-4 px-4 py-4 rounded-2xl font-bold text-white shadow-xl"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' }}
              >
                <FiPhone size={18} />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
