import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (path: string, id?: string) => {
    if (path === '/') {
      if (isHome && id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'services', label: 'Soluções', path: '/services' },
    { id: 'contact', label: 'Contactos', path: '/contact' },
  ];

  // Dark Header Design (Glassmorphism)
  // When scrolled OR on other pages: use dark glass background.
  // When transparent (top of home): use transparent.
  // Text is ALWAYS white because background is always dark (either hero image or dark glass).
  const bgColor = scrolled || !isHome ? 'bg-[#0f1115]/80 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'bg-transparent border-transparent py-6';

  // Colors are always "light" because background is either Dark Hero OR Dark Header
  const logoColor = 'text-white';
  // Links: Default slate-300, Hover turns GREEN (brand-accent)
  const linkColor = 'text-slate-300 hover:text-brand-accent transition-colors duration-200';

  // Button: White for maximum contrast on dark glass
  const buttonVariant = 'bg-white text-slate-900 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${bgColor}`}
    >
      <div className="container mx-auto px-6 relative flex items-center justify-between h-auto">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer relative z-20"
          onClick={() => handleNavClick('/')}
        >
          <div className="bg-brand-primary text-white p-1.5 rounded-lg">
            <Zap className="w-5 h-5" fill="currentColor" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${logoColor}`}>
            chez<span className="text-brand-accent">energie</span>
          </span>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            // Active state is also GREEN
            const currentLinkColor = isActive ? 'text-brand-accent' : linkColor;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.path, link.id)}
                className={`text-sm font-bold transition-colors ${currentLinkColor}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Call to Action & Mobile Toggle - Right Aligned */}
        <div className="flex items-center gap-4 relative z-20">
          <button
            onClick={() => handleNavClick('/contact')}
            className={`hidden md:flex px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg ${buttonVariant}`}
          >
            Pedir Orçamento
          </button>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${logoColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.path, link.id)}
              className="text-left font-display text-lg font-bold text-slate-800 hover:text-brand-primary py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('/contact')}
            className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold text-base mt-2 shadow-lg shadow-brand-primary/20"
          >
            Pedir Orçamento Gratuito
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;