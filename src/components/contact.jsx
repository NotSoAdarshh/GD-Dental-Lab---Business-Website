import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gray-950/90 bg-gradient-to-b from-gray-950 via-gray-950/85 to-gray-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-md">
            Ready to elevate your dental restorations? Contact us today to discuss cases, request a pickup, or visit our laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Contact Information Cards */}
          <div className="space-y-6 flex flex-col justify-center">
            
            {/* Phone Card */}
            <div className="flex items-start gap-6 p-6 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 shadow-lg group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 font-medium tracking-wide">
                  +91 94231 03127
                  <br />
                  +91 94221 61075
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-6 p-6 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 shadow-lg group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:g.d.dentallabakola@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors break-all">
                  g.d.dentallabakola@gmail.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-6 p-6 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 shadow-lg group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visit the Lab</h3>
                <p className="text-gray-300 leading-relaxed">
                  GD Dental Lab <br />
                  In front of Rathod Eye Hospital,<br />
                  Ram Nagar, Toshniwal Layout,<br />
                  Akola, Maharashtra
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe Container */}
          <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl relative min-h-[400px] flex flex-col">
            
            {/* Subtle glow behind the map */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 flex-1 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gray-950">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14927.958904470795!2d77.00103901738282!3d20.71064180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72faaab2903a5%3A0xfea226f681525883!2sG.D%20Dental%20Lab!5e0!3m2!1sen!2sin!4v1785071817989!5m2!1sen!2sin" 
                title="GD Dental Lab Location Map"
                className="w-full h-full min-h-[400px]" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}