import React, { useState } from 'react';

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 mx-auto w-[95%] max-w-6xl z-50 bg-gray-900/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl transition-all">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-8 h-8 text-cyan-400"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 21.5V15"/>
              <path d="M12 21.5c-1.5 0-2-2-2-2L9 12c-1-1-2-1.5-2.5-3.5S7 4 9 4c1 0 2.5.5 3 2 0 0 1-2 2-2s2 4.5 1.5 6.5S14 11 13 12l-1 7.5s-.5 2-2 2z"/>
            </svg>
            <span className="text-white font-bold text-xl tracking-wider">
              GD Dental Lab
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Our Story', href: '#story' },
                { name: 'Our Team', href: '#team' },
                { name: 'Services', href: '#services' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {[
              { name: 'Home', href: '#hero' },
              { name: 'Our Story', href: '#story' },
              { name: 'Our Team', href: '#team' },
              { name: 'Services', href: '#services' },
              { name: 'Contact Us', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}