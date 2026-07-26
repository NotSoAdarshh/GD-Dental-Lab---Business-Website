import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      
      {/* Subtle cyan background glow to keep the premium feel */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/10 rounded-t-[100%] blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Minimalist Tooth Icon */}
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
              <span className="text-white font-bold text-2xl tracking-wider">
                GD Dental Lab
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Precision crafting for perfect smiles. Delivering high-quality, aesthetic, and durable dental restorations using state-of-the-art technology across Maharashtra and central India since 1998.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/#hero' },
                { name: 'Our Story', href: '/#story' },
                { name: 'Our Team', href: '/#team' },
                { name: 'Services', href: '/#services' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm leading-relaxed">
                  In front of Rathod Eye Hospital,<br />
                  Ram Nagar, Toshniwal Layout,<br />
                  Akola, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-400 text-sm">
                  <p>+91 94231 03127</p>
                  <p>+91 94221 61075</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:g.d.dentallabakola@gmail.com" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  g.d.dentallabakola@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GD Dental Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Added proper routes for the newly created pages */}
            <a href="/privacy-policy" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}