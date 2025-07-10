import React from 'react';
import { X } from 'lucide-react'; // Assicurati di avere lucide-react installato

// Importa le tue immagini
import logoImage from '../assets/Logo Senza Sfondo copy copy.png';
import vLogoImage from '../assets/Logo Senza Sfondo copy copy.png';

interface NavbarProps {
  activeSection: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  isMobileMenuOpen, 
  toggleMobileMenu, 
  handleNavClick 
}) => {
  return (
    <> 
       <div className="min-h-screen bg-white md:overflow-hidden">
      {/* Lateral Frames - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block fixed top-0 left-0 w-24 h-full bg-slate-50 z-40" />
      <div className="hidden md:block fixed top-0 right-0 w-24 h-full bg-slate-50 z-40" />
      {/* Navigation Bar - Full width */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-24 relative">
            {/* Logo */}
            <div className="text-3xl font-zain text-slate-800 tracking-wide flex items-center">
              <img src={vLogoImage} alt="V Logo" className="inline-block h-6 -mr-1 relative -translate-y-1.5" />
              <span> 
                ospra.
              </span>
            </div>
            
            {/* Center Phrase - Absolutely positioned to center */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-2xl font-zain text-slate-800 tracking-wide">
            Più in alto.
            </div>
            
            {/* Desktop Navigation Links - Pushed to the right */}
            <div className="hidden md:flex items-center space-x-12 ml-auto">
              <a 
                href="#home" 
                onClick={() => handleNavClick('home')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  activeSection === 'home' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => handleNavClick('about')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 flex items-center pb-1 border-b-2 ${
                  activeSection === 'about' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
                About <img src={logoImage} alt="Logo" className="inline-block h-4 ml-2 align-middle -translate-y-0.5" />
              </a>
              <a 
                href="#workflow" 
                onClick={() => handleNavClick('workflow')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  activeSection === 'workflow' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
               Il Metodo
              </a>
              <a 
                href="#pricing" 
                onClick={() => handleNavClick('pricing')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  activeSection === 'pricing' 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
                V-Class
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-slate-50 border-t border-slate-200`}>
          <div className="px-8 py-4 space-y-4">
            {/* Center Phrase for Mobile */}
            <div className="text-center text-xl font-zain text-slate-800 tracking-wide mb-6 pb-4 border-b border-slate-200">
              Più in alto.
            </div>
            
            <a 
              href="#home" 
              onClick={() => handleNavClick('home')}
              className={`block font-medium transition-colors duration-200 py-2 border-l-4 pl-4 ${
                activeSection === 'home' 
                  ? 'border-slate-900 text-slate-900 bg-slate-100' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => handleNavClick('about')}
              className={`block font-medium transition-colors duration-200 py-2 flex items-center border-l-4 pl-4 ${
                activeSection === 'about' 
                  ? 'border-slate-900 text-slate-900 bg-slate-100' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              About <img src={logoImage} alt="Logo" className="inline-block h-4 ml-2 align-middle" />
            </a>
            <a 
              href="#workflow" 
              onClick={() => handleNavClick('workflow')}
              className={`block font-medium transition-colors duration-200 py-2 border-l-4 pl-4 ${
                activeSection === 'workflow' 
                  ? 'border-slate-900 text-slate-900 bg-slate-100' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Il Metodo
            </a>
            <a 
              href="#pricing" 
              onClick={() => handleNavClick('pricing')}
              className={`block font-medium transition-colors duration-200 py-2 border-l-4 pl-4 ${
                activeSection === 'pricing' 
                  ? 'border-slate-900 text-slate-900 bg-slate-100' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              V-Class
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;