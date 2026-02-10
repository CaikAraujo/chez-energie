import SolutionsHero from '../components/solutions/SolutionsHero';
import ServicesSection from '../components/shared/ServicesSection';
import SolutionsFAQ from '../components/solutions/SolutionsFAQ';
import SolarCalculator from '../components/solutions/SolarCalculator';
import { SectionId } from '../types';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SolutionsPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');

            // Retry mechanism to ensure element is found after render
            const scrollToElement = (retries = 0) => {
                const element = document.getElementById(id);
                if (element) {
                    // Timeout to allow layout to settle
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                } else if (retries < 5) {
                    setTimeout(() => scrollToElement(retries + 1), 200);
                }
            };

            scrollToElement();
        }
    }, [location]);

    const scrollTo = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-900"> {/* Dark background base */}
            <SolutionsHero scrollTo={scrollTo} />
            <div id="solutions-content" className="relative z-10 bg-slate-50 space-y-24 pb-24">
                {/* Calculator Section - Full Width */}
                <div id="calculator" className="w-full">
                    <SolarCalculator />
                </div>

                <div id="services">
                    <ServicesSection />
                </div>

                <SolutionsFAQ />
            </div>
        </div>
    );
};

export default SolutionsPage;
