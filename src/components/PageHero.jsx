import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable top banner for inner pages.
 * Props: emoji, title, highlight (gradient word), subtitle, bgImage (optional)
 */
const PageHero = ({ emoji, title, highlight, subtitle, bgImage }) => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Background */}
    {bgImage ? (
      <>
        <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-transparent to-pink-950/40" />
      </>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950" />
    )}

    {/* Animated orbs */}
    {[['#f43f5e','12%','60%'],['#7c3aed','85%','40%'],['#f59e0b','50%','80%']].map(([c,x,y],i)=>(
      <motion.div key={i} className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ width:350, height:350, background:`radial-gradient(circle,${c},transparent)`, left:x, top:y, transform:'translate(-50%,-50%)' }}
        animate={{ scale:[1,1.3,1] }} transition={{ duration:5+i, repeat:Infinity, delay:i*0.5 }}
      />
    ))}

    {/* Dot grid */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.4) 1px,transparent 0)',
      backgroundSize:'40px 40px',
    }}/>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.div initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} transition={{ type:'spring', stiffness:200 }}
        className="text-5xl mb-4"
      >{emoji}</motion.div>

      <motion.h1
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:0.2 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
        style={{ textShadow:'0 4px 20px rgba(0,0,0,0.4)' }}
      >
        {title}{' '}
        {highlight && (
          <span style={{ background:'linear-gradient(135deg,#f43f5e,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            {highlight}
          </span>
        )}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.35 }}
          className="text-gray-300 text-lg max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
