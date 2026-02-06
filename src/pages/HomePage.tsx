import React from 'react';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import { SectionId } from '../types';

import TestimonialsSection from '../components/TestimonialsSection'; // Import

import TrustMarquee from '../components/TrustMarquee'; // Import

const HomePage: React.FC = () => {

    const scrollTo = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero scrollTo={scrollTo} />
            <FeaturesSection onLearnMoreClick={() => scrollTo(SectionId.ABOUT)} />
            <StatsSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};

export default HomePage;
