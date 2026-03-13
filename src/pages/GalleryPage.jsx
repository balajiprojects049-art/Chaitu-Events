import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Decoration Gallery | Chaitu Events | Best Event Portfolio Nellore</title>
        <meta name="description" content="Browse Chaitu Events portfolio: Best balloon decoration in Nellore, wedding decor in Prakasam, and surprise events across Andhra Pradesh. Real photos of our work." />
        <meta name="keywords" content="Event Gallery Nellore, Decoration Photos Ongole, Wedding Decor Portfolio AP, Chaitu Events Gallery" />
      </Helmet>

      <PageHero
        emoji="🖼️"
        title="Our Decoration"
        highlight="Gallery"
        subtitle="Every photo tells a story of joy, love, and celebration. Browse our work across all event categories."
        bgImage="/flower_decor.png"
      />

      {/* Gallery component (handles its own filters) */}
      <div className="pt-4">
        <Gallery />
      </div>

      {/* Instagram prompt */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}}>
            <div className="text-4xl mb-4">📸</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Want to See More?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Follow us on Instagram for daily decoration updates, behind-the-scenes setup videos, and client reveals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.instagram.com/chaituevents"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-8 py-3.5 rounded-full font-bold text-white shadow-xl inline-flex items-center gap-2"
                style={{ background:'linear-gradient(135deg,#f43f5e,#7c3aed,#f59e0b)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Follow on Instagram
              </motion.a>
              <motion.button
                onClick={() => navigate('/booking')}
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-8 py-3.5 rounded-full font-bold text-white shadow-xl"
                style={{ background:'linear-gradient(135deg,#f43f5e,#7c3aed)' }}
              >
                🎉 Book Similar Decor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
