import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [activeLang, setActiveLang] = useState('EN');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-8 md:px-16 py-7 bg-transparent">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer select-none">
        <div className="flex flex-col leading-none tracking-wider">
          <span className="text-[15px] font-black tracking-widest text-white">POWER</span>
          <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-400">TUNING</span>
        </div>
        <div className="relative w-5 h-5 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-neutral-300" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a7.5 7.5 0 00-7.5 7.5c0 2.4 1.1 4.5 2.8 5.9M12 4.5a7.5 7.5 0 017.5 7.5c0 2.4-1.1 4.5-2.8 5.9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l2.5-3.5" stroke="#06b6d4" strokeWidth="2.5" />
          </svg>
        </div>
      </Link>

      {/* Nav Menu */}
      <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.25em] font-medium text-neutral-400">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="hover:text-white transition-colors"
        >
          COMPANY
        </Link>
        <a 
          href="#showroom" 
          onClick={(e) => handleNavClick(e, 'showroom')} 
          className="hover:text-white transition-colors cursor-pointer"
        >
          SHOWROOM
        </a>
        <a 
          href="#services" 
          onClick={(e) => handleNavClick(e, 'services')} 
          className="hover:text-white transition-colors cursor-pointer"
        >
          SERVICES
        </a>
        <Link 
          to="/configurator" 
          className={`hover:text-white transition-colors ${location.pathname === '/configurator' ? 'text-cyan-400 font-bold' : ''}`}
        >
          CONFIGURATION
        </Link>
        <Link 
          to="/news" 
          className={`hover:text-white transition-colors ${location.pathname === '/news' ? 'text-cyan-400 font-bold' : ''}`}
        >
          NEWS
        </Link>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')} 
          className="hover:text-white transition-colors cursor-pointer"
        >
          CONTACT
        </a>
      </nav>

      {/* Language Switcher */}
      <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider">
        <button 
          onClick={() => setActiveLang('RU')} 
          className={activeLang === 'RU' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}
        >
          RU
        </button>
        <span className="text-neutral-600">|</span>
        <button 
          onClick={() => setActiveLang('EN')} 
          className={activeLang === 'EN' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}
        >
          EN
        </button>
      </div>
    </header>
  );
}