
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { InstagramIcon, FacebookIcon } from './IconComponents';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-brand-dark py-8 border-t border-brand-gray/50"
    >
      <div className="container mx-auto px-6 text-center text-brand-light/70">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="Instagram" className="hover:text-brand-gold transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-brand-gold transition-colors">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Anderr Atelie Hair. All Rights Reserved.</p>
        <p className="text-sm mt-1">Prishtina, Kosovo</p>
      </div>
    </motion.footer>
  );
};

export default Footer;