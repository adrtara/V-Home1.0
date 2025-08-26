import React from 'react';
import { X } from 'lucide-react'; // Assicurati di avere lucide-react installato


interface NavbarProps {
  currentPath?: string; // Nuovo prop per determinare la sezione attiva
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPath = '/', 
  isMobileMenuOpen, 
  toggleMobileMenu, 
  handleNavClick 
}) => {
  // Funzione per determinare se una sezione è attiva
  const isActiveSection = (section: string) => {
    switch (section) {
      case 'home':
        return currentPath === '/' || currentPath === '/home';
      case 'about':
        return currentPath === '/about';
      case 'workflow':
        return currentPath === '/workflow' || currentPath === '/metodo';
      case 'pricing':
        return currentPath === '/pricing' || currentPath === '/vclass';
      default:
        return false;
    }
  };
  return (
    <>
      {/* Navigation Bar - Full width */}
      <nav className="fixed top-0 left-0 right-0 md:left-24 md:right-24 z-50 bg-[#fbfbf5]">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-24 lg:grid lg:grid-cols-3">
            {/* Logo */}
            <div className="text-[28px] font-zain text-slate-800 tracking-wide flex items-center">
              <img src="https://i.postimg.cc/BnjzvK3Z/Logo-Senza-Sfondo.png" alt="V Logo" className="inline-block h-6 -translate-y-[7px] -mr-[6px] relative" />
              <span> 
                ospra.
              </span>
            </div>
            
            {/* Mobile Menu Button - Solo visibile su mobile */}
            <div className="lg:hidden">
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
            
            {/* Center Phrase - Seconda colonna */}
            <div className="hidden lg:block italic text-center text-[18px] font-semibold text-slate-800 tracking-wide">
              Più in alto.
            </div>
            
            {/* Desktop Navigation Links - Terza colonna */}
            <div className="hidden lg:flex items-center space-x-12 justify-end">
              <a 
                href="#home" 
                onClick={() => handleNavClick('home')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  isActiveSection('home') 
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
                  isActiveSection('about') 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
                About <img src="https://i.postimg.cc/BnjzvK3Z/Logo-Senza-Sfondo.png" alt="Logo" className="inline-block h-4 ml-2 align-middle -translate-y-0.5" />
              </a>
              <a 
                href="#workflow" 
                onClick={() => handleNavClick('workflow')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  isActiveSection('workflow') 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
               Percorso
              </a>
              <a 
                href="#pricing" 
                onClick={() => handleNavClick('pricing')}
                className={`text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  isActiveSection('pricing') 
                    ? 'border-slate-900 text-slate-900' 
                    : 'border-transparent'
                }`}
              >
                V-Class
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#fbfbf5] border-t border-slate-200`}>
          <div className="px-8 py-4 space-y-4">
            {/* Center Phrase for Mobile */}
            <div className="text-center text-[16px] italic font-semibold text-slate-800 tracking-wide mb-6 pb-4 border-b border-slate-200">
              Più in alto.
            </div>
            
            <a 
              href="#home" 
              onClick={() => handleNavClick('home')}
              className={`block font-medium transition-colors duration-200 py-2 border-l-4 pl-4 ${
                isActiveSection('home') 
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
                isActiveSection('about') 
                  ? 'border-slate-900 text-slate-900 bg-slate-100' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              About <img src="https://i.postimg.cc/BnjzvK3Z/Logo-Senza-Sfondo.png" alt="Logo" className="inline-block h-4 ml-2 align-middle -translate-y-0.5" />
            </a>
            <a 
              href="#workflow" 
              onClick={() => handleNavClick('workflow')}
              className={`block font-medium transition-colors duration-200 py-2 border-l-4 pl-4 ${
                isActiveSection('workflow') 
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
                isActiveSection('pricing') 
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