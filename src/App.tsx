import React, { useState } from 'react';
import { X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
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
          <div className="px-6 py-4 space-y-4">
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
      <div className="h-screen flex relative">
        {/* Sell Section */}
        <div className="relative w-1/2 overflow-hidden cursor-pointer group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center items-end pr-24 text-white">
            <div className="text-center">
              <h2 className="text-6xl font-light tracking-wider">SELL</h2>
            </div>
          </div>
        </div>

        {/* Central Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-48 h-48 rounded-full border-2 border-slate-400/60 backdrop-blur-md bg-white/10 shadow-2xl"></div>
        </div>

        {/* Buy Section */}
        <div className="relative w-1/2 overflow-hidden cursor-pointer group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/70 via-slate-800/60 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center items-start pl-24 text-white">
            <div className="text-center">
              <h2 className="text-6xl font-light tracking-wider">BUY</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;