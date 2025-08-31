
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPinIcon, PhoneIcon, ClockIcon } from './IconComponents';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-brand-bg-light scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-serif text-brand-dark text-center mb-12"
        >
          Visit Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:w-1/2 text-brand-dark"
          >
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Contact & Hours</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-brand-dark">Address</h4>
                  <p className="text-brand-gray">Shefqet Shkupi, Prishtina 10000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-brand-dark">Phone</h4>
                  <a href="tel:+38345924333" className="text-brand-gray hover:text-brand-gold transition-colors">+383 45 924 333</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-brand-dark">Opening Hours</h4>
                  <p className="text-brand-gray">Monday - Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="lg:w-1/2 w-full h-96 lg:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.931751182283!2d21.15171367664871!3d42.66311697116819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee436034031%3A0x88ba0b1265885c39!2sRruga%20Shefqet%20Shkupi%2C%20Pristina!5e0!3m2!1sen!2s!4v1716307616233!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;