import SolutionsHero from '../components/SolutionsHero';
import ServicesSection from '../components/ServicesSection';
import SolutionsFAQ from '../components/SolutionsFAQ';
import SolutionsCTA from '../components/SolutionsCTA';
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
            <div id="solutions-content" className="relative z-10 bg-slate-50">
                <ServicesSection />
                <SolutionsFAQ />
            </div>
            <SolutionsCTA />
        </div>
    );
};

export default SolutionsPage;
