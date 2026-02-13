import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import './Navigation.css';

export const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
        setMobileOpen(false);
    };

    const isHomePage = location.pathname === '/';
    // Force scrolled (dark) background on non-home pages
    const shouldBeScrolled = scrolled || !isHomePage;

    const links = [
        { label: 'Accueil', path: '/' },
        { label: 'Solutions', path: '/services' },
        { label: 'À propos', path: '/about' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`nav-bar ${shouldBeScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div
                    className="nav-logo"
                    onClick={() => handleNavClick('/')}
                >
                    <img
                        src="/logo-chez.svg"
                        alt="Chez Energie"
                        className="h-[85%] w-auto object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {links.map(link => (
                        <button
                            key={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.label}
                            <span className="nav-link-indicator" />
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="nav-actions">
                    <button
                        className="btn-cta"
                        onClick={() => handleNavClick('/contact')}
                    >
                        Demander un devis
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    {links.map(link => (
                        <button
                            key={link.path}
                            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        className="btn-mobile-cta"
                        onClick={() => handleNavClick('/contact')}
                    >
                        Demander un devis
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
