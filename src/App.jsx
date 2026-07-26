import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/navbar';
import Hero from './components/hero';
import OurStory from './components/story';
import OurTeam from './components/team';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

// Import Pages
import PrivacyPolicy from './components/privacyPolicy';
import TermsOfService from './components/Terms';

// A wrapper component for the main landing page sections
const Home = () => {
  return (
    <main>
      <div id="hero"><Hero /></div>
      <div id="story"><OurStory /></div>
      <div id="team"><OurTeam /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 flex flex-col">
        
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* Dedicated Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </Router>
  );
}