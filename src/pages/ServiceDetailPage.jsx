import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiPhoneCall, FiCalendar, FiMapPin } from 'react-icons/fi';
import { SERVICE_SEO_DATA } from '../data/serviceSeoData';
import PageHero from '../components/PageHero';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = SERVICE_SEO_DATA[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-full"
        >
          <FiArrowLeft /> Back to Services
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <PageHero
        title={data.headline}
        subtitle="Professional Decoration Services in Andhra Pradesh"
        bgImage={data.image}
      />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">{data.headline}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {data.content}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose">
              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-purple-400">
                  <FiMapPin className="w-6 h-6" />
                  <h3 className="font-bold text-xl">Service Availability</h3>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Nellore District (Kavali, Gudur)</li>
                  <li>• Prakasam District (Ongole, Chirala)</li>
                  <li>• Across Andhra Pradesh</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-800">
                <div className="flex items-center gap-3 mb-4 text-pink-600 dark:text-pink-400">
                  <FiPhoneCall className="w-6 h-6" />
                  <h3 className="font-bold text-xl">Quick Booking</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ready to decor your event? Call us for a free estimate!
                </p>
                <a 
                  href="tel:+919553638221"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg shadow-lg"
                >
                  Call +91 95536 38221
                </a>
              </div>
            </div>

            <div className="mt-16 text-center not-prose">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/booking')}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-2xl text-xl"
              >
                <FiCalendar className="inline-block mr-2" /> Book Your Decoration Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
