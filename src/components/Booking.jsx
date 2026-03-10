import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';

const eventTypes = [
  'Birthday Party',
  'Wedding',
  'Engagement',
  'Housewarming',
  'Surprise Event',
  'Flower Decoration',
  'Romantic Setup',
  'Other',
];

const initialForm = {
  name: '',
  phone: '',
  eventType: '',
  eventDate: '',
  location: '',
  guestCount: '',
  budget: '',
  message: '',
};

const Booking = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.eventType || !form.eventDate) {
      toast.error('Please fill all required fields!', { icon: '⚠️' });
      return;
    }

    setLoading(true);

    // Compose WhatsApp message
    const message = encodeURIComponent(
      `🎉 *Chaitu Events - New Booking Request*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:*         ${form.name}\n` +
      `📞 *Phone:*        ${form.phone}\n` +
      `🎊 *Event Type:*   ${form.eventType}\n` +
      `📅 *Date:*          ${form.eventDate}\n` +
      `📍 *Location:*     ${form.location || 'Not specified'}\n` +
      `👥 *Guests:*       ${form.guestCount || 'Not specified'}\n` +
      `💰 *Budget:*       ${form.budget || 'Flexible'}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💬 *Message/Requirements:*\n` +
      `${form.message || 'No additional requirements provided.'}`
    );

    // Simulate API call delay then open WhatsApp
    setTimeout(() => {
      setLoading(false);
      toast.success('Booking request sent! We\'ll contact you shortly.', { icon: '🎉' });
      window.open(`https://wa.me/919553638221?text=${message}`, '_blank');
      setForm(initialForm);
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f0a1e 0%, #1a0533 50%, #0f0a1e 100%)',
    }}>
      {/* Background Orbs */}
      {[
        { color: '#f43f5e', x: '10%', y: '20%', size: 400 },
        { color: '#7c3aed', x: '80%', y: '60%', size: 500 },
        { color: '#f59e0b', x: '50%', y: '80%', size: 300 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-900/30 text-pink-400 text-sm font-medium mb-4 border border-pink-800/50">
              <span>📋</span> Book Now
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Dream Event
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Fill in your details and we'll get back to you within 2 hours with a personalized quote.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number <span className="text-pink-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 95536 38221"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Event Type <span className="text-pink-400">*</span>
                </label>
                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-500">Select event type</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type} className="text-white bg-gray-900">{type}</option>
                  ))}
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Event Date <span className="text-pink-400">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 cursor-pointer [color-scheme:dark]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Location / Venue</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Hall name or address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Expected Guests</label>
                <input
                  type="number"
                  name="guestCount"
                  value={form.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 50"
                  min="1"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Budget */}
              <div className="sm:col-span-2">
                <label className="block text-gray-300 text-sm font-medium mb-2">Approximate Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option value="">Select budget range</option>
                  <option value="Under ₹3,000">Under ₹3,000</option>
                  <option value="₹3,000 - ₹6,000">₹3,000 – ₹6,000</option>
                  <option value="₹6,000 - ₹12,000">₹6,000 – ₹12,000</option>
                  <option value="₹12,000 - ₹25,000">₹12,000 – ₹25,000</option>
                  <option value="Above ₹25,000">Above ₹25,000</option>
                  <option value="Flexible">Flexible / Discuss</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-gray-300 text-sm font-medium mb-2">Special Requirements / Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your vision, theme preferences, or any special requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02, boxShadow: '0 20px 40px rgba(244,63,94,0.4)' }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-lg shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #f43f5e, #7c3aed)' }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>🎉 Submit Booking</>
                )}
              </motion.button>

              <motion.a
                href="https://wa.me/919553638221?text=Hi%2C%20I%20want%20to%20book%20an%20event%21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-green-500/60 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
                WhatsApp Us
              </motion.a>
            </div>

            <p className="text-center text-gray-500 text-xs mt-4">
              🔒 Your information is safe. We'll never share your details. Expected response: Within 2 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
