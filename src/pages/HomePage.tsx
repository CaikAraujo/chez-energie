import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/shared/StatsSection';
import CTASection from '../components/shared/CTASection';
import { SectionId } from '../types';

import TestimonialsSection from '../components/home/TestimonialsSection'; // Import

import TrustMarquee from '../components/home/TrustMarquee'; // Import

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const scrollTo = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero scrollTo={scrollTo} />
            <FeaturesSection onLearnMoreClick={() => navigate('/solutions#calculator')} />
            <StatsSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};

export default HomePage;
