
import React, { useState, useEffect } from 'react';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useBooking } from '../BookingContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-3 group"
            >
              <Logo className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-semibold text-white tracking-tight">Sogion</span>
            </a>
            
            <nav className="hidden md:flex gap-8 text-sm text-slate-200/80 items-center">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="hover:text-white transition"
              >
                {t.header.features}
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleNavClick(e, 'process')}
                className="hover:text-white transition"
              >
                {t.header.docs}
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="hover:text-white transition"
              >
                {t.header.pricing}
              </a>
              
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-xs font-medium text-slate-300"
                aria-label="Switch language"
              >
                <Globe className="h-3 w-3" />
                {language === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
              </button>

              <button 
                onClick={openBooking}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/20 rounded-lg transition"
              >
                {t.header.start}
              </button>
            </nav>
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs font-medium text-slate-300"
                aria-label="Switch language"
              >
                {language === 'en' ? '🇧🇷' : '🇺🇸'}
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
