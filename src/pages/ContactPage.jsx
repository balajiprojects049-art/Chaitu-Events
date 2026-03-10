import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const contactInfo = [
  { icon:'📞', label:'Call Us', value:'+91 98765 43210', href:'tel:+919876543210', color:'from-pink-500 to-rose-600' },
  { icon:'💬', label:'WhatsApp', value:'Chat Instantly', href:'https://wa.me/919876543210?text=Hi%20Chaitu%20Events!', color:'from-green-500 to-teal-600' },
  { icon:'📧', label:'Email', value:'chaituevents@gmail.com', href:'mailto:chaituevents@gmail.com', color:'from-blue-500 to-indigo-600' },
  { icon:'📍', label:'Location', value:'Hyderabad, Telangana', href:'https://maps.google.com/?q=Hyderabad,Telangana', color:'from-purple-500 to-violet-600' },
  { icon:'🕐', label:'Working Hours', value:'Mon – Sun: 9 AM – 9 PM', href:null, color:'from-yellow-500 to-amber-600' },
  { icon:'📸', label:'Instagram', value:'@chaituevents', href:'https://www.instagram.com/chaituevents', color:'from-pink-500 to-purple-600' },
];

const faqs = [
  { q:'How far in advance should I book?', a:'We recommend booking at least 3–7 days in advance to ensure availability, especially for weekends.' },
  { q:'Do you travel outside Hyderabad?', a:'Yes! We cover all major areas around Hyderabad. Extra travel charges may apply for locations beyond 30 km.' },
  { q:'Can I customise the decoration theme?', a:'Absolutely! We specialise in fully custom themes based on your colour preferences and vision.' },
  { q:'What is the payment process?', a:'50% advance at booking confirmation, remaining 50% on the day of setup completion.' },
  { q:'How long does setup take?', a:'Typically 1.5–3 hours depending on the package. We always arrive well before your event time.' },
];

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us – Chaitu Events | Get In Touch</title>
      <meta name="description" content="Contact Chaitu Events Hyderabad — call, WhatsApp, or email us. Available Mon–Sun, 9 AM to 9 PM." />
    </Helmet>

    <PageHero
      emoji="📞"
      title="Get In"
      highlight="Touch"
      subtitle="We're just a call or WhatsApp away — reach out and we'll respond within 2 hours!"
      bgImage="/lighting_decor.png"
    />

    {/* Contact Cards */}
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*0.08 }}
              whileHover={{ y:-6 }}
            >
              {c.href ? (
                <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                  className="block p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 group text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-3xl shadow-md mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {c.icon}
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">{c.label}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{c.value}</p>
                </a>
              ) : (
                <div className="block p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-3xl shadow-md mx-auto mb-4`}>
                    {c.icon}
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white mb-1">{c.label}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{c.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map + FAQ side by side */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            className="rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-auto">
            <iframe
              title="Chaitu Events Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3168573856!2d78.24323113540625!3d17.412608597529367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border:0, minHeight:320 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ❓ Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                  className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Q: {faq.q}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* WhatsApp CTA */}
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="mt-16 rounded-3xl p-10 text-center" style={{background:'linear-gradient(135deg,#1a0533,#0f0a1e)'}}>
          <div className="text-5xl mb-4">💬</div>
          <h3 className="font-display text-3xl font-bold text-white mb-3">Quickest Way to Reach Us</h3>
          <p className="text-gray-400 mb-6">Send us a WhatsApp message and get a response within minutes during business hours.</p>
          <motion.a
            href="https://wa.me/919876543210?text=Hi%20Chaitu%20Events!%20I%20want%20to%20know%20more%20about%20your%20decorations."
            target="_blank" rel="noopener noreferrer"
            whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg shadow-2xl"
            style={{background:'linear-gradient(135deg,#25d366,#128c7e)'}}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/></svg>
            Message Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  </>
);

export default ContactPage;
