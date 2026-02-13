import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';
import { LocaleProvider } from './contexts/LocaleContext';

type Locale = 'fr' | 'en';

const LocaleRoutes: React.FC = () => {
  const { locale } = useParams<{ locale: Locale }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Validate locale
    if (locale && !['fr', 'en'].includes(locale)) {
      navigate('/fr', { replace: true });
    }
  }, [locale, navigate]);

  const validLocale = (locale === 'fr' || locale === 'en') ? locale : 'fr';

  return (
    <LocaleProvider initialLocale={validLocale}>
      <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-brand-primary selection:text-white">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<SolutionsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to default locale */}
        <Route path="/" element={<Navigate to="/fr" replace />} />

        {/* Locale-based routes */}
        <Route path="/:locale/*" element={<LocaleRoutes />} />
      </Routes>
    </Router >
  );
};

export default App;