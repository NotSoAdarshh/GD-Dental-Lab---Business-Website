import React from 'react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598885511440-218a568ce3d1?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gray-950/85 bg-linear-to-t from-gray-950 via-gray-950/80 to-gray-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-md">
            Comprehensive dental laboratory solutions combining traditional artistry with cutting-edge digital technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'CAD/CAM Milling',
              desc: 'High-precision digital dentistry featuring full contour Zirconia, custom implant abutments, and 3D printed models.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              )
            },
            {
              title: 'Advanced Ceramics',
              desc: 'Lifelike aesthetics with IPS e.max® press and layered ceramics, ensuring perfect shade matching and natural translucency.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )
            },
            {
              title: 'DMLS 3D Printing',
              desc: 'Direct Metal Laser Sintering (DMLS) for ultra-precise, biocompatible metal copings, crowns, and complex frameworks with superior marginal fit.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Layered/3D Printing Icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7L12 3L20 7M4 11L12 15L20 11M4 15L12 19L20 15" />
                </svg>
              )
            },
            {
              title: 'Metal Frameworks',
              desc: 'Durable and precise Cast Partial Dentures (CPD), PFM crowns, and bridges crafted from biocompatible, high-grade alloys.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: 'Implantology',
              desc: 'Complete implant solutions ranging from single units to full-arch restorations, utilizing titanium bases and custom milled bars.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: 'Removable Prosthetics',
              desc: 'High-quality acrylic dentures, flexible partials, and precision attachments designed for maximum patient comfort and fit.',
              icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/40"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-500/30 group-hover:bg-cyan-900/20">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}