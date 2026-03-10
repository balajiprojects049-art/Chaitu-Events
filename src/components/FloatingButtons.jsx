import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiPhone } from 'react-icons/fi';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsAppHint, setShowWhatsAppHint] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show WhatsApp hint only once per session (less intrusive UX)
  useEffect(() => {
    const key = 'ce_whatsapp_hint_shown';
    if (sessionStorage.getItem(key) === '1') return;

    const t = window.setTimeout(() => {
      setShowWhatsAppHint(true);
      sessionStorage.setItem(key, '1');
      // Auto-hide after a short moment
      window.setTimeout(() => setShowWhatsAppHint(false), 3500);
    }, 1500);

    return () => window.clearTimeout(t);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #f43f5e)' }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        href="tel:+919553638221"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(244, 63, 94, 0.4)',
            '0 0 0 12px rgba(244, 63, 94, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
        style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}
        aria-label="Call Chaitu Events"
      >
        <FiPhone size={22} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919553638221?text=Hi%2C%20I%20want%20to%20book%20an%20event%20decoration%20with%20Chaitu%20Events!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl"
        style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowWhatsAppHint(true)}
        onMouseLeave={() => setShowWhatsAppHint(false)}
        onFocus={() => setShowWhatsAppHint(true)}
        onBlur={() => setShowWhatsAppHint(false)}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
        </svg>
      </motion.a>

      {/* Tooltip Label */}
      <AnimatePresence>
        {showWhatsAppHint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute -left-28 bottom-0 text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          >
            Chat with us
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-l-[6px] border-l-teal-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
