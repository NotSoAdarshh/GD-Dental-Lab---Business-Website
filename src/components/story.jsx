import React from 'react';

export default function OurStory() {
  return (
    <section id="story" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Subtle background glow to maintain the dark tech aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Narrative */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in <span className="text-white font-semibold">1998</span> by <span className="text-white font-semibold">Gopal Deshmukh</span> in the heart of <span className="text-cyan-400 font-semibold">Akola, Maharashtra</span>, GD Dental Lab began with a singular vision: to empower dental professionals with precision-crafted, high-quality restorations.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Through decades of relentless dedication to craftsmanship and the integration of advanced dental technology, we have grown far beyond our local roots. We understand that every restoration represents a patient's smile and confidence, which is why we have never compromised on our standards.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Today, what started as a regional lab has evolved into a trusted partner for hundreds of clinics. We proudly serve the entirety of <span className="text-gray-200 font-medium">Maharashtra</span>, extending our dedicated services and logistics across neighboring states including <span className="text-gray-200 font-medium">Madhya Pradesh</span>, <span className="text-gray-200 font-medium">Telangana</span>, and <span className="text-gray-200 font-medium">Chhattisgarh</span>.
            </p>
          </div>

          {/* Right Column: Glassmorphism Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Established */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Established</h3>
              <p className="text-gray-400">1998</p>
            </div>

            {/* Card 2: Founder */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Founder</h3>
              <p className="text-gray-400">Gopal Deshmukh</p>
            </div>

            {/* Card 3: Headquarters */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Headquarters</h3>
              <p className="text-gray-400">Akola, Maharashtra</p>
            </div>

            {/* Card 4: Regions Served */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Regions Served</h3>
              <p className="text-gray-400 text-sm mt-1">Maharashtra, MP, Telangana, Chhattisgarh</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}