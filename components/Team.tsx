
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const teamMembers = [
  {
    name: 'Luljeta Rafuna',
    title: 'Hair Stylist',
    bio: 'Creative and passionate stylist, delivering modern cuts and personalized looks',
    image: 'https://pbs.twimg.com/media/GQbyhrdXsAACmO2?format=jpg&name=large',
  },
  {
    name: 'Mirjeta Zeka',
    title: 'Makeup Artist & Trainer',
    bio: 'Skilled in enhancing natural beauty with elegant and flawless makeup.',
    image: 'https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/504479537_10236506126376494_3222558751937458163_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=klovSSrhGsgQ7kNvwEXDTa7&_nc_oc=AdnFDEU5M2_B2_BnKVo8fBqTCgy_w55fy556bg2MDSipuZXAZDuxbx6yLye9Zzl1Qjk&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=8iGTelUyMjb2fRRiW4JFBg&oh=00_AfU3RHtRKByfF1SrqzEL5XjT0C_c798Y0wzHrQn7O-i4ig&oe=68BAA0A5'
  },
  {
    name: 'Elvira Xhemajli',
    title: 'Makeup Artist & Trainer',
    bio: 'Specialized in natural and artistic makeup, also leading inspiring workshops.',
    image: 'https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/486292281_2027421937736087_5797673079273366446_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lVeW-wTPGXUQ7kNvwG4E3F1&_nc_oc=Adnst5mKnFtYlCRwuUykskESgvFqP3NyoOVRIITyWabQ8D9HEXnSDX2SwYgBISjq6fY&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=cRuXrB6NI3xBKWuVkpUsgQ&oh=00_AfWZEpwzPYt313Z6Ktu3JENUcaguDIMQCMICcsMiVoTBfQ&oe=68BA9BF9',
  }
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Team: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="team" ref={ref} className="py-20 bg-brand-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-serif text-brand-gold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-64 w-64 rounded-full object-cover border-4 border-brand-gold shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-1">{member.name}</h3>
              <p className="text-brand-light/90 font-semibold uppercase tracking-wider text-sm mb-3">{member.title}</p>
              <p className="text-brand-light/70 font-light">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
