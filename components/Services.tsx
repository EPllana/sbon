import React, { useRef } from 'react';
// FIX: import Variants from framer-motion to resolve typing issues with animation variants.
import { motion, useInView, Variants } from 'framer-motion';
import { ScissorsIcon, ColorPaletteIcon, HairDryerIcon } from './IconComponents';

const services = [
  { name: 'Women\'s Haircut & Style', description: 'Customized cut and professional styling to fit your look.', price: '€25', icon: <ScissorsIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Blowout & Styling', description: 'Smooth, voluminous blowout for any occasion', price: '€20+', icon: <ScissorsIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Full Color', description: 'Rich, vibrant, single-process color from root to tip.', price: '€50+', icon: <ColorPaletteIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Balayage / Ombré', description: 'Hand-painted highlights for a natural, sun-kissed look.', price: '€90+', icon: <ColorPaletteIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Keratin Treatment', description: 'Smooth, frizz-free hair with a long-lasting keratin formula.', price: '€120+', icon: <HairDryerIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Special Occasion Updo', description: 'Elegant styling for weddings, proms, and other events.', price: '€40+', icon: <HairDryerIcon className="w-7 h-7 text-brand-gold"/> },
];

// FIX: Explicitly type animation variants with Variants from framer-motion to prevent type errors.
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// FIX: Explicitly type animation variants with Variants from framer-motion to prevent type errors.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 bg-brand-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-serif text-brand-gold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-brand-gray p-8 rounded-lg border border-transparent hover:border-brand-gold/50 transition-colors duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif text-brand-gold pr-4">{service.name}</h3>
                <div className="flex-shrink-0">{service.icon}</div>
              </div>
              <p className="text-brand-light/80 mb-4 font-light flex-grow">{service.description}</p>
              <p className="text-xl font-sans font-semibold text-brand-gold">{service.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;