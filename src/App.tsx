import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-brand-primary selection:text-white">

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>

        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;