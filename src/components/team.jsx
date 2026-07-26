import React from 'react';

export default function OurTeam() {
  return (
    <section id="team" className="relative py-24 bg-gray-950 overflow-hidden">

      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Experts</h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The skilled technicians and leadership driving precision and quality in every restoration.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { 
              name: 'Gopal Deshmukh', 
              role: 'Founder & Director', 
              initials: 'GD'
            },
            { 
              name: 'Atharva Deshmukh', 
              role: 'Head of CAD/CAM & Digital Dentistry', 
              initials: 'AD'
            },
            { 
              name: 'Yogini Deshmukh', 
              role: 'Head of Ceramics Department', 
              initials: 'YD'
            },
            { 
              name: 'Mohan Deshmukh', 
              role: 'Core Management & Operations', 
              initials: 'MD'
            },
            { 
              name: 'Shekhar Deshmukh', 
              role: 'Core Management & Operations', 
              initials: 'SD'
            }
          ].map((member, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
            >
              <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300">
                
                
                <div className="relative w-32 h-32 mx-auto mb-6">
                  
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 animate-[spin_10s_linear_infinite]"></div>
                  
                  
                  <div className="absolute inset-1 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-gray-900">
                    
                    
                
                    <span className="text-2xl font-bold text-gray-500">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium text-sm px-4 py-1.5 bg-cyan-500/10 rounded-full inline-block border border-cyan-500/20">
                  {member.role}
                </p>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}