import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import PageHero from '../components/PageHero';

const eventTypes = [
  'Birthday Party','Wedding','Engagement','Housewarming',
  'Surprise Event','Flower Decoration','Lighting Setup','Romantic Surprise','Other',
];

const BookingPage = () => {
  const [form, setForm] = useState({
    name:'', phone:'', email:'', eventType:'', date:'', venue:'', guests:'', budget:'', message:''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.eventType || !form.date) {
      toast.error('Please fill in all required fields!');
      return;
    }
    setSubmitting(true);
    const msg = `Hi Chaitu Events! 🎉%0A%0A*Booking Request*%0A----%0A👤 Name: ${form.name}%0A📞 Phone: ${form.phone}%0A📧 Email: ${form.email}%0A🎪 Event: ${form.eventType}%0A📅 Date: ${form.date}%0A📍 Venue: ${form.venue}%0A👥 Guests: ${form.guests}%0A💰 Budget: ${form.budget}%0A📝 Notes: ${form.message}%0A%0APlease confirm availability!`;
    setTimeout(() => {
      window.open(`https://wa.me/919553638221?text=${msg}`, '_blank');
      toast.success('Opening WhatsApp with your booking details! 🎉');
      setSubmitting(false);
    }, 800);
  };

  const InputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 text-sm";

  return (
    <>
      <Helmet>
        <title>Book Now – Chaitu Events | Event Decoration Booking</title>
        <meta name="description" content="Book your premium event decoration with Chaitu Events. Fill our quick form and get a WhatsApp confirmation within 2 hours." />
      </Helmet>

      <PageHero
        emoji="📋"
        title="Book Your"
        highlight="Dream Event"
        subtitle="Fill in the details below and we'll confirm your booking via WhatsApp within 2 hours!"
        bgImage="/hero_bg.png"
      />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                className="rounded-3xl p-6" style={{background:'linear-gradient(135deg,#1a0533,#0f0a1e)'}}>
                <h3 className="font-display text-xl font-bold text-white mb-5">Why Book With Us?</h3>
                {[
                  ['🎨','Custom Themes','We design as per your vision'],
                  ['⏰','On-Time Setup','Always ready before guests arrive'],
                  ['💬','WhatsApp Support','Reach us 24/7'],
                  ['💰','Best Prices','Premium quality, honest pricing'],
                  ['✅','Trusted by 500+','Families across Nellore, Kavali & Prakasam'],
                ].map(([icon,title,desc],i)=>(
                  <div key={i} className="flex gap-3 mb-4">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-gray-400 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.1}}
                className="rounded-3xl p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">📞 Direct Contact</h3>
                <div className="space-y-3">
                  {[
                    ['📱','+91 95536 38221','tel:+919553638221'],
                    ['💬','Chat on WhatsApp','https://wa.me/919553638221'],
                    ['📧','chaituevents@gmail.com','mailto:chaituevents@gmail.com'],
                  ].map(([icon,text,href],i)=>(
                    <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <span>{icon}</span>{text}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Form */}
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              className="lg:col-span-3 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-xl">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Booking Details <span className="text-red-500">*</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={InputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required type="tel" className={InputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" className={InputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Event Type *</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange} required className={InputClass}>
                      <option value="">Select event</option>
                      {eventTypes.map(t=><option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Event Date *</label>
                    <input name="date" value={form.date} onChange={handleChange} type="date" required className={InputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Venue / Location</label>
                    <input name="venue" value={form.venue} onChange={handleChange} placeholder="Hall name or address" className={InputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">No. of Guests</label>
                    <input name="guests" value={form.guests} onChange={handleChange} placeholder="e.g. 50" type="number" className={InputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className={InputClass}>
                    <option value="">Select budget</option>
                    <option>Under ₹5,000</option>
                    <option>₹5,000 – ₹10,000</option>
                    <option>₹10,000 – ₹20,000</option>
                    <option>₹20,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Special Requests / Notes</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Theme colour, special requests…" className={InputClass} />
                </div>
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-white text-base shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ background:'linear-gradient(135deg,#25d366,#128c7e)' }}
                >
                  {submitting ? '⏳ Opening WhatsApp…' : '💬 Submit via WhatsApp'}
                </motion.button>
                <p className="text-center text-xs text-gray-400">Submits your booking details directly to our WhatsApp</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
