import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Chaitu Events – Premium Event Decorations & Surprise Planning</title>
      <meta name="description" content="Chaitu Events offers premium balloon decorations, wedding decor, birthday surprise planning, engagement decorations, housewarming, flower arrangements, and lighting setups. Book now!" />
      <meta name="keywords" content="event decoration, balloon decorations, birthday surprise, wedding decorations, engagement decor, housewarming, flower decorations, lighting setup, Chaitu Events" />
      <meta name="author" content="Chaitu Events" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Chaitu Events – Premium Event Decorations" />
      <meta property="og:description" content="Transform your celebrations into magical memories with Chaitu Events – Premium balloon decorations, surprise planning & more." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://chaituevents.com" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Chaitu Events – Premium Event Decorations" />
      <meta name="twitter:description" content="Transform your celebrations into magical memories with Chaitu Events." />
      <link rel="canonical" href="https://chaituevents.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
