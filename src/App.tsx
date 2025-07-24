import React, { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from './Components/Navbar';
import gemelloImage from './assets/Gemello Da Polso.jpg';
import logoImage from './assets/Logo Senza Sfondo copy copy.png';
import vLogoImage from './assets/Logo Senza Sfondo copy copy.png';
import aereoImage from './assets/Jet MotionBlur.jpg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white md:overflow-hidden">
      {/* Lateral Frames - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block fixed top-0 left-0 w-24 h-full bg-[#fbfbf5] z-40" />
      <div className="hidden md:block fixed top-0 right-0 w-24 h-full bg-[#fbfbf5] z-40" />

      {/* Navigation Bar - Full width on mobile, with lateral margins on desktop */}
    <Navbar 
    currentPath="/"
    isMobileMenuOpen={isMobileMenuOpen}
    toggleMobileMenu={toggleMobileMenu}
    handleNavClick={handleNavClick}
  />

      {/* Hero Section - Vertical stack on mobile, horizontal on desktop */}
      <div className="mt-24 min-h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row relative px-4 md:px-24">
        {/* Market Section */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden cursor-pointer group flex items-center justify-center md:justify-end z-1">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${aereoImage})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-700/50" />
          
          <div className="relative text-white z-10">
            <div className="text-center md:text-right md:mr-40 relative">
              <h2 className="text-3xl font-serif tracking-wider transition-transform duration-1000 ease-out group-hover:scale-90 text-center">MARKET</h2>
              <p className="text-xl font-serif mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-center md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:mt-2 md:whitespace-nowrap">La vetrina selettiva per <br /> acquistare o vendere valore.</p>
            </div>
          </div>
        </div>

        {/* Central Circle - Positioned absolutely to stay centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-48 h-48 relative">
            {/* Optimized rotating circle with reduced blur and simplified glow */}
            <div 
              className="relative w-full h-full backdrop-blur-sm"
              style={{
                borderRadius: '50%',
                border: '4px solid white',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                animation: 'spin 8s linear infinite, optimized-glow 3s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Advisory Section */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden cursor-pointer group flex items-center justify-center md:justify-start z-1">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${gemelloImage})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/80 via-slate-800/70 to-slate-700/50" />
          
          <div className="relative text-white z-10">
            <div className="text-center md:text-left md:ml-40 relative">
              <h2 className="text-3xl font-serif tracking-wider transition-transform duration-1000 ease-out group-hover:scale-90 text-center">VOSPRA <br /> STUDIO</h2>
              <p className="text-xl font-serif mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-center md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:mt-2 md:whitespace-nowrap">Soluzioni strategiche per <br />business digitali.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;