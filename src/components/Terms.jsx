import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24 relative overflow-hidden">
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
   
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Last Updated: July 26, 2026
          </p>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 text-gray-300 leading-relaxed">
          
          <section>
            <p>
              At <strong>GD Dental Lab</strong> ("we," "our," or "us"), we are committed to protecting the privacy and security of our clients, including dental professionals and their patients. This Privacy Policy outlines how we collect, use, and safeguard your personal and professional information when you use our website, contact us, or utilize our dental laboratory services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect information to provide you with the highest quality of dental restoration services. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Professional Information:</strong> Dentist's name, clinic name, physical address, email address, and phone numbers.</li>
              <li><strong>Patient Case Data:</strong> Information necessary for fabricating dental prosthetics, which may include physical impressions, digital intraoral scans, bite registrations, photographs, and specific case instructions. <em>(Note: We encourage clinics to use anonymized patient IDs rather than full names whenever possible).</em></li>
              <li><strong>Communication Data:</strong> Records of your inquiries, emails, or phone calls regarding case planning, technical support, or billing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">The information collected is used exclusively for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To fabricate, design, and deliver accurate dental restorations (CAD/CAM, Ceramics, Metal frameworks, etc.).</li>
              <li>To communicate with you regarding case clarifications, pickup/delivery schedules, and technical advice.</li>
              <li>For billing, invoicing, and maintaining accurate financial records.</li>
              <li>To improve our laboratory processes and customer service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection and Security</h2>
            <p>
              We implement strict physical, technical, and administrative security measures to protect your data and patient information from unauthorized access, alteration, disclosure, or destruction. Digital scans and case files are stored on secure systems with restricted access limited only to the technicians actively working on your cases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
            <p>
              <strong>We do not sell, rent, or trade your personal or professional information to third parties.</strong> We only share information under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-3">
              <li>With trusted logistics and courier partners strictly for the purpose of picking up impressions or delivering finished restorations.</li>
              <li>If required by law, regulation, or legal process within the jurisdiction of Maharashtra, India.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to request access to the professional data we hold about you, request corrections to any inaccurate information, or request the deletion of your clinic's data from our primary marketing or communication lists. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy periodically to reflect changes in our laboratory practices or legal regulations. The updated version will be indicated by an updated "Last Updated" date at the top of this page.
            </p>
          </section>

          <hr className="border-white/10 my-8" />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-950 rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row gap-8">
              <div>
                <h3 className="text-white font-semibold mb-2">GD Dental Lab</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In front of Rathod Eye Hospital,<br />
                  Ram Nagar, Toshniwal Layout,<br />
                  Akola, Maharashtra, India
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Contact Details</h3>
                <p className="text-gray-400 text-sm">
                  <span className="block mb-1">Phone: +91 94231 03127 / +91 94221 61075</span>
                  <span className="block">Email: <a href="mailto:g.d.dentallabakola@gmail.com" className="text-cyan-400 hover:underline">g.d.dentallabakola@gmail.com</a></span>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}