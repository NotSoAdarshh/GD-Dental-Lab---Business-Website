import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Enhance glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Our Story', path: '/#story' },
    { name: 'Team', path: '/#team' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-300 rounded-2xl border border-white/10 ${
        isScrolled
          ? 'bg-gray-950/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
          : 'bg-gray-900/50 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section - Redirects to hero */}
          <div className="shrink-0 flex items-center">
            <a href="/#hero" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
              GD <span className="text-cyan-500">Dental Lab</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger / Close Icon */}
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden rounded-b-2xl bg-gray-950/50 border-t border-white/5 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}