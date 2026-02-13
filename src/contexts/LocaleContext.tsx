import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Locale = 'fr' | 'en';

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within LocaleProvider');
    }
    return context;
};

interface LocaleProviderProps {
    children: ReactNode;
    initialLocale: Locale;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children, initialLocale }) => {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);
    const navigate = useNavigate();
    const location = useLocation();

    const setLocale = (newLocale: Locale) => {
        // Store preference
        localStorage.setItem('preferred-locale', newLocale);
        setLocaleState(newLocale);

        // Update URL
        const currentPath = location.pathname;
        const pathWithoutLocale = currentPath.replace(/^\/(fr|en)/, '');
        navigate(`/${newLocale}${pathWithoutLocale || ''}`, { replace: true });
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
