
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LeafIcon, PeopleIcon, SparklesIcon } from './IconComponents';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const philosophyItems = [
    {
      icon: <LeafIcon className="w-8 h-8 text-brand-gold"/>,
      title: 'Premium Products',
      text: 'We use only industry-leading, high-quality products to ensure the health and vitality of your hair.'
    },
    {
      icon: <PeopleIcon className="w-8 h-8 text-brand-gold"/>,
      title: 'Personalized Consultations',
      text: 'Every appointment begins with a thorough consultation to understand your vision and tailor a look that is uniquely you.'
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-brand-gold"/>,
      title: 'Relaxing Atmosphere',
      text: 'Our salon is designed to be a tranquil escape, where you can unwind and feel pampered from start to finish.'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-brand-bg-light scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-serif text-brand-dark mb-6">Welcome to Anderr Atelie</h2>
          <p className="text-lg text-brand-gray leading-relaxed mb-4">
            Nestled in the vibrant city of Prishtina, Anderr Atelie Hair is a sanctuary of style and relaxation. Our mission is to provide an unparalleled salon experience, combining artistic vision with the finest techniques to bring your hair to life.
          </p>
          <p className="text-lg text-brand-gray leading-relaxed">
            Our team of dedicated stylists is passionate about the craft of hairdressing. We believe in continuous education and staying ahead of the latest trends to offer you contemporary, classic, and personalized looks that celebrate your unique beauty.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
             <h3 className="text-3xl font-serif text-brand-dark mb-8">Our Philosophy</h3>
             <div className="space-y-6">
                {philosophyItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-xl text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-brand-gray leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-96 rounded-lg overflow-hidden shadow-xl"
            >
            <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" alt="Elegant salon interior" className="w-full h-full object-cover"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;