
import React, { useRef } from 'react';
// FIX: Import `Variants` from `framer-motion` to correctly type animation variants.
import { motion, useInView, Variants } from 'framer-motion';
import { StarIcon } from './IconComponents';

const testimonials = [
  {
    name: 'Alba K.',
    quote: 'Absolutely in love with my new hair! The stylists at Anderr Atelie are true artists. The atmosphere is so chic and relaxing. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Dren F.',
    quote: 'Best haircut I\'ve had in Prishtina. Professional, attentive, and they really listen to what you want. I\'ll definitely be a regular customer.',
    rating: 5,
  },
  {
    name: 'Era B.',
    quote: 'I came for a balayage and the result is stunning. The color is perfectly blended and looks so natural. Thank you for making me feel beautiful!',
    rating: 5,
  },
];

// FIX: Explicitly type animation variants with Variants from framer-motion to prevent type errors.
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// FIX: Explicitly type animation variants with Variants from framer-motion to prevent type errors.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-serif text-brand-gold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <motion.div 
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-brand-gray p-8 rounded-lg flex flex-col">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-light/80 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <p className="font-semibold text-brand-gold font-sans">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
