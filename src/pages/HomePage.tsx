import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/shared/StatsSection';
import CTASection from '../components/shared/CTASection';
import DocumentTitle from '../components/shared/DocumentTitle';
import { SectionId } from '../types';
import { useLocale } from '../contexts/LocaleContext';
import { useTranslations } from '../i18n/useTranslations';

import TestimonialsSection from '../components/home/TestimonialsSection'; // Import

import TrustMarquee from '../components/home/TrustMarquee'; // Import

import SEO from '../components/shared/SEO';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { locale } = useLocale();
    const { t } = useTranslations('seo');

    const scrollTo = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <DocumentTitle
                title={t('home.title')}
                description={t('home.description')}
            />
            <Hero scrollTo={scrollTo} />
            <FeaturesSection onLearnMoreClick={() => navigate(`/${locale}/solutions#calculator`)} />
            <StatsSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};

export default HomePage;
