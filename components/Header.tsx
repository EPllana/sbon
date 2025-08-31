
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './IconComponents';

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
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            {isMenuOpen ? <XIcon className="w-7 h-7 text-brand-gold" /> : <MenuIcon className="w-7 h-7 text-brand-gold" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
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

export default Header;