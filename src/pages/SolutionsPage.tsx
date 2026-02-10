import SolutionsHero from '../components/solutions/SolutionsHero';
import ServicesSection from '../components/shared/ServicesSection';
import SolutionsFAQ from '../components/solutions/SolutionsFAQ';
import SolarCalculator from '../components/solutions/SolarCalculator';
import SolutionsCTA from '../components/solutions/SolutionsCTA';
import { SectionId } from '../types';

const SolutionsPage: React.FC = () => {
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
            <SolutionsCTA />
        </div>
    );
};

export default SolutionsPage;
