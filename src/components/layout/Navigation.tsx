import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe, ChevronDown } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import './Navigation.css';

export const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { locale, setLocale } = useLocale();
    const { t } = useTranslations('navigation');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLanguageDropdownOpen(false);
            }
        };

        if (languageDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [languageDropdownOpen]);

    const handleNavClick = (path: string) => {
        const localePath = `/${locale}${path}`;
        navigate(localePath);
        window.scrollTo(0, 0);
        setMobileOpen(false);
    };

    const handleLanguageChange = (newLocale: 'fr' | 'en') => {
        setLocale(newLocale);
        setLanguageDropdownOpen(false);
    };

    const isHomePage = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;
    // Force scrolled (dark) background on non-home pages
    const shouldBeScrolled = scrolled || !isHomePage;

    const links = [
        { label: t('home'), path: '/' },
        { label: t('solutions'), path: '/services' },
        { label: t('about'), path: '/about' },
        { label: t('contact'), path: '/contact' }
    ];

    const languages = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ];

    const currentLanguage = languages.find(lang => lang.code === locale);

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
                            className={`nav-link ${location.pathname === `/${locale}${link.path}` ? 'active' : ''}`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.label}
                            <span className="nav-link-indicator" />
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="nav-actions">
                    {/* Language Switcher Dropdown */}
                    <div className="language-dropdown-wrapper" ref={dropdownRef}>
                        <button
                            className="language-switcher"
                            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                            aria-label="Switch Language"
                        >
                            <Globe size={18} />
                            <span className="text-sm font-medium uppercase">{locale}</span>
                            <ChevronDown size={16} className={`transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {languageDropdownOpen && (
                            <div className="language-dropdown-menu">
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`language-dropdown-item ${locale === lang.code ? 'active' : ''}`}
                                        onClick={() => handleLanguageChange(lang.code as 'fr' | 'en')}
                                    >
                                        <span className="language-flag">{lang.flag}</span>
                                        <span className="language-label">{lang.label}</span>
                                        {locale === lang.code && (
                                            <span className="language-check">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        className="btn-cta"
                        onClick={() => handleNavClick('/contact')}
                    >
                        {t('getQuote')}
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle Menu"
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
                            className={`mobile-link ${location.pathname === `/${locale}${link.path}` ? 'active' : ''}`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.label}
                        </button>
                    ))}

                    {/* Mobile Language Options */}
                    <div className="mobile-language-section">
                        {languages.map(lang => (
                            <button
                                key={lang.code}
                                className={`mobile-link ${locale === lang.code ? 'active' : ''}`}
                                onClick={() => handleLanguageChange(lang.code as 'fr' | 'en')}
                            >
                                <span>{lang.flag}</span>
                                <span className="ml-2">{lang.label}</span>
                                {locale === lang.code && <span className="ml-auto">✓</span>}
                            </button>
                        ))}
                    </div>

                    <button
                        className="btn-mobile-cta"
                        onClick={() => handleNavClick('/contact')}
                    >
                        {t('getQuote')}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
