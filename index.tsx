
import React, { useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';

// --- Icon Components ---

interface IconProps {
    className?: string;
}

const MapPinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ScissorsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
);
const ColorPaletteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path><circle cx="12" cy="12" r="1"></circle><path d="M15 15.5c-1.33 1-3.67 1-5 0"></path><path d="M8.5 12.5c0-1.67 1.33-3 3.5-3s3.5 1.33 3.5 3"></path></svg>
);
const HairDryerIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.4c0-1.7-1.3-3-3-3H6c-1.7 0-3 1.3-3 3v0c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3Z"></path><path d="M12 18.6c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3v0c0-1.7-1.3-3-3-3h-3c-1.7 0-3 1.3-3 3Z"></path><path d="M10 9.4V7.5c0-1.1-.9-2-2-2"></path><path d="M14 14.6V17c0 1.1.9 2 2 2"></path><path d="M18 12h.5c1.1 0 2-.9 2-2v-2"></path><path d="M6 12H5.5C4.4 12 3.5 12.9 3.5 14v2"></path></svg>
);

const LeafIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M15 10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z"></path><path d="M20 14a7 7 0 0 1-7 7h-1"></path></svg>
);
const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);
const PeopleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);


// --- Header Component ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', title: 'About Us' },
    { href: '#services', title: 'Services' },
    { href: '#team', title: 'Our Team' },
    { href: '#gallery', title: 'Our Work' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-4">
          <img 
            src="https://portalpune.com/storage/bad34376d819470ca0967624b2a1f599/conversions/Anderr-avatar.jpg" 
            alt="Anderr Atelie Hair Logo" 
            className="h-16 w-16 rounded-full object-cover border-2 border-brand-gold shadow-md"
          />
          <span className="text-2xl font-serif text-brand-gold font-bold hidden sm:inline">
            Anderr Atelie Hair
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
             <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-pointer text-brand-light hover:text-brand-gold transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-brand-gold"
              >
                {link.title}
             </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-brand-gold text-brand-dark font-sans font-semibold py-2 px-6 rounded-sm hover:bg-opacity-80 transition-colors duration-300"
          >
            Book Now
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            {isMenuOpen ? <XIcon className="w-7 h-7 text-brand-gold" /> : <MenuIcon className="w-7 h-7 text-brand-gold" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-dark flex flex-col items-center space-y-6 py-8">
           {navLinks.map(link => (
             <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="cursor-pointer text-xl text-brand-light hover:text-brand-gold transition-colors duration-300"
              >
                {link.title}
             </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-brand-gold text-brand-dark font-sans font-semibold py-3 px-8 rounded-sm hover:bg-opacity-80 transition-colors duration-300 mt-4"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
};


// --- Hero Component ---

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


// --- About Component ---

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


// --- Services Component ---

const services = [
  { name: 'Women\'s Haircut & Style', description: 'Customized cut and professional styling to fit your look.', price: '€25', icon: <ScissorsIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Men\'s Haircut', description: 'Classic and modern cuts, finished with a sharp style.', price: '€15', icon: <ScissorsIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Full Color', description: 'Rich, vibrant, single-process color from root to tip.', price: '€50+', icon: <ColorPaletteIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Balayage / Ombré', description: 'Hand-painted highlights for a natural, sun-kissed look.', price: '€90+', icon: <ColorPaletteIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Keratin Treatment', description: 'Smooth, frizz-free hair with a long-lasting keratin formula.', price: '€120+', icon: <HairDryerIcon className="w-7 h-7 text-brand-gold"/> },
  { name: 'Special Occasion Updo', description: 'Elegant styling for weddings, proms, and other events.', price: '€40+', icon: <HairDryerIcon className="w-7 h-7 text-brand-gold"/> },
];

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const servicesSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const servicesItemVariants: Variants = {
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
          variants={servicesSectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={servicesItemVariants}
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


// --- Team Component ---

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

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const teamSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const teamItemVariants: Variants = {
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
          variants={teamSectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={teamItemVariants}
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


// --- Gallery Component ---

const allImages = [
  { src: 'https://media.licdn.com/dms/image/v2/C4D22AQGZqjcVltOcPg/feedshare-shrink_800/feedshare-shrink_800/0/1643725056162?e=2147483647&v=beta&t=zgX-ehuuwAdsdCY1aQbXKH3K7O8bkDn7pjC_QC8hY9g', category: 'Coloring' },
  { src: 'https://gjenibiznese.com/wp-content/uploads/2025/03/AF1QipM8Ckvh6f8G5sktpkXKF34AjjBZWk6NEvwHs3pKw800-h500-k-no-375x408.jpeg', category: 'Styling' },
  { src: 'https://media.licdn.com/dms/image/v2/D4D22AQESFcn00r8vTA/feedshare-shrink_800/feedshare-shrink_800/0/1698921771887?e=2147483647&v=beta&t=s6cp7OdkLgM-ui3OwaLLZi5Kh5y7h762HYpmTzhX_VQ ', category: 'Cuts' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQEIME7x15g_DA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728233423675?e=2147483647&v=beta&t=IxIZU7GwM91Q21sjjfMah6O7t_7QIEndZPDl06vVDag', category: 'Coloring' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHNuBn4p_GjnA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728128287708?e=2147483647&v=beta&t=iuJWMB2fHnTpSJK85V-hsZrqamNMm-OJpLTXxy4ZE3o', category: 'Styling' },
  { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHSm7NEsBgwlA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728233476161?e=2147483647&v=beta&t=b3zMO8lPIkf-P5TCd9wnnE7Kzkx7ERtk7sxnvUI33Yc', category: 'Cuts' },
];

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const galleryItemVariants: Variants = {
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
            {filteredImages.map((image) => (
              <motion.div 
                key={image.src} 
                layout
                variants={galleryItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden rounded-lg group aspect-w-3 aspect-h-4"
              >
                <img 
                  src={image.src} 
                  alt={`Hair style example for ${image.category}`} 
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


// --- Testimonials Component ---

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

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const testimonialsSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// FIX: Explicitly type animation variants with the Variants type to prevent type errors.
const testimonialsItemVariants: Variants = {
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
            variants={testimonialsSectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={testimonialsItemVariants} className="bg-brand-gray p-8 rounded-lg flex flex-col">
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


// --- Contact Component ---

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


// --- Footer Component ---

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


// --- App Component ---

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};


// --- Mount Application ---

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);