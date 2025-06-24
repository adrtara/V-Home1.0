import React, { useState } from 'react';
import { X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Lateral Frames */}
      <div className="fixed top-0 left-0 w-24 h-full bg-white border-b border-slate-200 z-40" />
      <div className="fixed top-0 right-0 w-24 h-full bg-white border-b border-slate-200 z-40" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-24 right-24 z-50 bg-white border-b border-slate-200">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="text-2xl font-light text-slate-800 tracking-wide">
              Prestige Digital
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                About Us
              </a>
              <a href="#workflow" className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                Workflow
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                Prices and Plans
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
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-slate-200`}>
          <div className="px-8 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#workflow" 
              className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Workflow
            </a>
            <a 
              href="#pricing" 
              className="block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prices and Plans
            </a>
          </div>
        </div>
      </nav>

      {/* Split Hero Section */}
      <div className="h-screen flex relative px-24">
        {/* Sell Section */}
        <div className="relative w-1/2 overflow-hidden cursor-pointer group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center items-end pr-24 text-white">
            <div className="text-center">
              <h2 className="text-6xl font-light tracking-wider transition-transform duration-1000 ease-out group-hover:scale-90">SELL</h2>
            </div>
          </div>
        </div>

        {/* Central Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-40 h-40 relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 w-full h-full rounded-full bg-white/30 blur-xl animate-pulse"
              style={{
                animationDuration: '3s'
              }}
            />
            {/* Rotating circle with cuts */}
            <div 
              className="relative w-full h-full backdrop-blur-xl bg-white/90 shadow-2xl animate-spin"
              style={{
                borderRadius: '50%',
                border: '3px solid white',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                animationDuration: '8s',
                animationTimingFunction: 'linear',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 90px rgba(255, 255, 255, 0.2)'
              }}
            />
          </div>
        </div>

        {/* Buy Section */}
        <div className="relative w-1/2 overflow-hidden cursor-pointer group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/70 via-slate-800/60 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center items-start pl-24 text-white">
            <div className="text-center">
              <h2 className="text-6xl font-light tracking-wider transition-transform duration-1000 ease-out group-hover:scale-90">BUY</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;