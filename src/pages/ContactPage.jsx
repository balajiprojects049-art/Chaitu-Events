import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageSquare, FiUser, FiCalendar } from 'react-icons/fi';
import PageHero from '../components/PageHero';

const contactInfo = [
  { id: 1, icon: <FiPhone />, label: 'Call Us', value: '+91 95536 38221', href: 'tel:+919553638221', color: 'from-pink-500 to-rose-600' },
  { id: 2, icon: <FiMessageSquare />, label: 'WhatsApp', value: 'Chat Instantly', href: 'https://wa.me/919553638221?text=Hi%20Chaitu%20Events!', color: 'from-green-500 to-teal-600' },
  { id: 3, icon: <FiMail />, label: 'Email', value: 'chaituevents@gmail.com', href: 'mailto:chaituevents@gmail.com', color: 'from-blue-500 to-indigo-600' },
  { id: 4, icon: <FiMapPin />, label: 'Location', value: 'Hosanna Church Road, Nellore 524003', href: 'https://maps.google.com/?q=Hosanna+Church+Road,Nellore+524003,AP,India', color: 'from-purple-500 to-violet-600' },
  { id: 5, icon: <FiClock />, label: 'Working Hours', value: 'Mon – Sun: Open 24 Hours', href: null, color: 'from-yellow-500 to-amber-600' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields (Name, Phone, Message).');
      return;
    }
    
    setIsSubmitting(true);

    // Compose WhatsApp message
    const whatsappMsg = encodeURIComponent(
      `📩 *Chaitu Events - New General Inquiry*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:*         ${formData.name}\n` +
      `📞 *Phone:*        ${formData.phone}\n` +
      `📧 *Email:*        ${formData.email || 'Not provided'}\n` +
      `🎊 *Event Type:*   ${formData.eventType || 'Not specified'}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💬 *Message:*\n` +
      `${formData.message}`
    );

    setTimeout(() => {
      toast.success('Opening WhatsApp to send your message...', {
        style: {
          borderRadius: '10px',
          background: '#1a0533',
          color: '#fff',
        },
        iconTheme: {
          primary: '#22c55e',
          secondary: '#fff',
        },
      });
      window.open(`https://wa.me/919553638221?text=${whatsappMsg}`, '_blank');
      setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – Chaitu Events | Get In Touch</title>
        <meta name="description" content="Contact Chaitu Events — call, WhatsApp, or email us. We are open 24 hours to serve your event decoration needs in Nellore, Kavali, and Prakasam." />
      </Helmet>

      <PageHero
        title="Get In"
        highlight="Touch"
        subtitle="We're just a message away! Fill out the form or reach out directly to plan your dream event."
        bgImage="/lighting_decor.png"
      />

      <section className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - 3 Columns wide */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 dark:border-gray-800 h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Send Us A Message</h2>
                  <p className="text-gray-500 dark:text-gray-400">Fill in your details below and we'll get back to you within 2 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="+91 90000 00000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiMail className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiCalendar className="text-gray-400" />
                        </div>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select Event...</option>
                          <option value="Birthday">Birthday Decoration</option>
                          <option value="Wedding">Wedding / Reception</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Haldi">Haldi / Mehendi</option>
                          <option value="Housewarming">Housewarming</option>
                          <option value="Other">Other Event</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your theme, venue, or any specific requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                    style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' }}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        Send Request
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Details & Map - 2 Columns wide */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact Info Cards */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-xl shadow-md`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 flex-grow min-h-[250px] relative">
                <iframe
                  title="Chaitu Events Location - Nellore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61592.515904838016!2d79.94634065691065!3d14.45330889270928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cb494f6c449%3A0xc37537dbb8a4f475!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
