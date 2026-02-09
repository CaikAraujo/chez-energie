import React from 'react';
import ServicesSection from '../components/shared/ServicesSection';
import StatsSection from '../components/shared/StatsSection';
import CTASection from '../components/shared/CTASection';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            {/* Spacer for StatsSection negative margin */}
            <div className="h-24 md:h-32 w-full"></div>
            <StatsSection />
            <ServicesSection />
            <CTASection />
        </div>
    );
};

export default ServicesPage;
