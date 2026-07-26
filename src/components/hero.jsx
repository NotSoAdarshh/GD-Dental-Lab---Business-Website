import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')" }}
      >
        
        <div className="absolute inset-0 bg-gray-950/75 bg-linear-to-b from-gray-950/90 via-gray-950/60 to-gray-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
          Precision crafting for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            perfect smiles.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Partnering with dental professionals to deliver high-quality, aesthetic, and durable restorations using state-of-the-art CAD/CAM technology.
        </p>
        
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            Explore Services
          </a>
       
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 border border-white/10 backdrop-blur-md text-white font-semibold text-lg transition-all shadow-xl hover:border-white/20"
          >
            Contact the Lab
          </a>
        </div>

      </div>
    </section>
  );
}