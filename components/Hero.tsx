
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://comfortelfurniture.com/wp-content/uploads/Stella.Hair_SalonOpener1.jpg')" }}
    >
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
      <div className="relative text-center text-white z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-gold mb-4 leading-tight"
        >
          Anderr Atelie Hair
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-brand-light mb-8 max-w-2xl mx-auto"
        >
          Experience the Art of Hair in the Heart of Prishtina
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          href="#services" 
          onClick={(e) => handleScrollClick(e, '#services')}
          className="cursor-pointer bg-transparent border-2 border-brand-gold text-brand-gold font-sans font-semibold py-3 px-8 rounded-sm hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
        >
          Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;