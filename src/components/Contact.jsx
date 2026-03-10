import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: <FiPhone />,
    label: 'Phone / Call',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'from-pink-500 to-rose-600',
    emoji: '📞',
  },
  {
    icon: null,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    color: 'from-green-500 to-teal-600',
    emoji: '💬',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'chaituevents@gmail.com',
    href: 'mailto:chaituevents@gmail.com',
    color: 'from-purple-500 to-violet-600',
    emoji: '📧',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Hyderabad, Telangana',
    href: 'https://maps.google.com/?q=Hyderabad,Telangana',
    color: 'from-yellow-500 to-amber-600',
    emoji: '📍',
  },
  {
    icon: <FiClock />,
    label: 'Working Hours',
    value: 'Mon – Sun: 9 AM – 9 PM',
    href: null,
    color: 'from-blue-500 to-indigo-600',
    emoji: '⏰',
  },
];

const Contact = () => {
  const [quickMsg, setQuickMsg] = useState('');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!quickMsg.trim()) {
      toast.error('Please type a message first!');
      return;
    }
    const encoded = encodeURIComponent(quickMsg);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
    toast.success('Opening WhatsApp...', { icon: '💬' });
    setQuickMsg('');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50/60 dark:bg-purple-950/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-50/60 dark:bg-pink-950/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 text-sm font-medium mb-4 border border-pink-200 dark:border-pink-800">
              <span>📞</span> Contact Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f43f5e, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Connect
              </span>{' '}
              & Plan Together
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to make your event magical? Reach out to us through any of these channels.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {info.emoji}
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-500 text-xs">{info.label}</p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <div className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-purple-400 transition-colors">
                        →
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-xl shadow-md`}>
                        {info.emoji}
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-500 text-xs">{info.label}</p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick WhatsApp Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 p-6"
            >
              <h3 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span>💬</span> Quick WhatsApp Message
              </h3>
              <form onSubmit={handleQuickSend} className="flex gap-3">
                <input
                  type="text"
                  value={quickMsg}
                  onChange={e => setQuickMsg(e.target.value)}
                  placeholder="Type your quick message..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-green-200 dark:border-green-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                >
                  <FiSend size={14} />
                  Send
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 h-full min-h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9040485267!2d78.24323089248898!3d17.412281011650835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chaitu Events Location - Hyderabad"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
