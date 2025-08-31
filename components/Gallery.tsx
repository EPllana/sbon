
import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';

const allImages = [
  { src: 'https://media.licdn.com/dms/image/v2/C4D22AQGZqjcVltOcPg/feedshare-shrink_800/feedshare-shrink_800/0/1643725056162?e=2147483647&v=beta&t=zgX-ehuuwAdsdCY1aQbXKH3K7O8bkDn7pjC_QC8hY9g', category: 'Coloring' },
  { src: 'https://gjenibiznese.com/wp-content/uploads/2025/03/AF1QipM8Ckvh6f8G5sktpkXKF34AjjBZWk6NEvwHs3pKw800-h500-k-no-375x408.jpeg', category: 'Styling' },
  { src: 'https://media.licdn.com/dms/image/v2/D4D22AQESFcn00r8vTA/feedshare-shrink_800/feedshare-shrink_800/0/1698921771887?e=2147483647&v=beta&t=s6cp7OdkLgM-ui3OwaLLZi5Kh5y7h762HYpmTzhX_VQ ', category: 'Cuts' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQEIME7x15g_DA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728233423675?e=2147483647&v=beta&t=IxIZU7GwM91Q21sjjfMah6O7t_7QIEndZPDl06vVDag', category: 'Coloring' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHNuBn4p_GjnA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728128287708?e=2147483647&v=beta&t=iuJWMB2fHnTpSJK85V-hsZrqamNMm-OJpLTXxy4ZE3o', category: 'Styling' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHSm7NEsBgwlA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728233476161?e=2147483647&v=beta&t=b3zMO8lPIkf-P5TCd9wnnE7Kzkx7ERtk7sxnvUI33Yc', category: 'Cuts' },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } },
};

const Gallery: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return allImages;
    return allImages.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  const filters = ['All', 'Coloring', 'Styling', 'Cuts'];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-brand-bg-light scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-serif text-brand-dark text-center mb-8"
        >
          Our Work
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-sm font-sans font-semibold transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-brand-gold text-brand-dark'
                  : 'bg-transparent text-brand-dark border-2 border-brand-gold hover:bg-brand-gold/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div 
                key={image.src} 
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden rounded-lg group aspect-w-3 aspect-h-4"
              >
                <img 
                  src={image.src} 
                  alt={`Hair style example ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;