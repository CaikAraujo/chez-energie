import { ArrowRight, CheckCircle2, Zap, Thermometer, Sun, Timer, ShieldCheck, Leaf, TrendingUp, Smartphone, Battery, Home, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../types';
import { useTranslations } from '../../i18n/useTranslations';


const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslations('services');

  const detailedServices = [
    {
      id: "heat-pumps",
      title: t('detailed.heatPumps.title'),
      projectType: ProjectType.HEATPUMP,
      category: t('detailed.heatPumps.category'),
      description: t('detailed.heatPumps.description'),
      image: "/img/services/pompe_chaleur.webp",
      highlight: t('detailed.heatPumps.highlight'),
      specs: [
        { label: t('detailed.heatPumps.specs.savings.label'), value: t('detailed.heatPumps.specs.savings.value'), icon: TrendingUp },
        { label: t('detailed.heatPumps.specs.hotWater.label'), value: t('detailed.heatPumps.specs.hotWater.value'), icon: Thermometer },
        { label: t('detailed.heatPumps.specs.efficiency.label'), value: t('detailed.heatPumps.specs.efficiency.value'), icon: Zap },
        { label: t('detailed.heatPumps.specs.environment.label'), value: t('detailed.heatPumps.specs.environment.value'), icon: Leaf },
      ]
    },
    {
      id: "solar",
      title: t('detailed.solar.title'),
      projectType: ProjectType.SOLAR,
      category: t('detailed.solar.category'),
      description: t('detailed.solar.description'),
      image: "/img/services/panneau.webp",
      highlight: t('detailed.solar.highlight'),
      specs: [
        { label: t('detailed.solar.specs.return.label'), value: t('detailed.solar.specs.return.value'), icon: Timer },
        { label: t('detailed.solar.specs.warranty.label'), value: t('detailed.solar.specs.warranty.value'), icon: ShieldCheck },
        { label: t('detailed.solar.specs.production.label'), value: t('detailed.solar.specs.production.value'), icon: Smartphone },
        { label: t('detailed.solar.specs.savings.label'), value: t('detailed.solar.specs.savings.value'), icon: TrendingUp },
      ]
    },
    {
      id: "battery",
      title: t('detailed.battery.title'),
      projectType: ProjectType.BATTERY,
      category: t('detailed.battery.category'),
      description: t('detailed.battery.description'),
      image: "/img/services/energy.webp",
      highlight: t('detailed.battery.highlight'),
      specs: [
        { label: t('detailed.battery.specs.autonomy.label'), value: t('detailed.battery.specs.autonomy.value'), icon: Battery },
        { label: t('detailed.battery.specs.lifespan.label'), value: t('detailed.battery.specs.lifespan.value'), icon: ShieldCheck },
        { label: t('detailed.battery.specs.backup.label'), value: t('detailed.battery.specs.backup.value'), icon: Zap },
        { label: t('detailed.battery.specs.management.label'), value: t('detailed.battery.specs.management.value'), icon: Smartphone },
      ]
    },
    {
      id: "ev-charging",
      title: t('detailed.evCharging.title'),
      projectType: ProjectType.EVCHARGER,
      category: t('detailed.evCharging.category'),
      description: t('detailed.evCharging.description'),
      image: "/img/services/prise_eletrique.webp",
      highlight: t('detailed.evCharging.highlight'),
      specs: [
        { label: t('detailed.evCharging.specs.speed.label'), value: t('detailed.evCharging.specs.speed.value'), icon: Zap },
        { label: t('detailed.evCharging.specs.solarMode.label'), value: t('detailed.evCharging.specs.solarMode.value'), icon: Sun },
        { label: t('detailed.evCharging.specs.connectivity.label'), value: t('detailed.evCharging.specs.connectivity.value'), icon: Smartphone },
        { label: t('detailed.evCharging.specs.compatible.label'), value: t('detailed.evCharging.specs.compatible.value'), icon: CheckCircle2 },
      ]
    },
    {
      id: "hvac",
      title: t('detailed.hvac.title'),
      projectType: ProjectType.HVAC,
      category: t('detailed.hvac.category'),
      description: t('detailed.hvac.description'),
      image: "/img/services/clima.webp",
      highlight: t('detailed.hvac.highlight'),
      specs: [
        { label: t('detailed.hvac.specs.efficiency.label'), value: t('detailed.hvac.specs.efficiency.value'), icon: Zap },
        { label: t('detailed.hvac.specs.comfort.label'), value: t('detailed.hvac.specs.comfort.value'), icon: Home },
        { label: t('detailed.hvac.specs.health.label'), value: t('detailed.hvac.specs.health.value'), icon: Wind },
        { label: t('detailed.hvac.specs.noise.label'), value: t('detailed.hvac.specs.noise.value'), icon: ShieldCheck },
      ]
    }
  ];

  const handleContactClick = (type: ProjectType) => {
    navigate(`/contact?project=${encodeURIComponent(type)}`);
  };

  return (
    <section id="services" className="relative py-24 px-6 bg-slate-50 overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
          {t('section.title')} <span className="text-emerald-500">{t('section.titleHighlight')}</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          {t('section.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {detailedServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-8">

              <h3 className="font-display font-bold text-4xl md:text-5xl text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <spec.icon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">{spec.label}</div>
                        <div className="font-bold text-slate-700 text-sm">{spec.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions (Desktop Only) */}
              <div className="hidden lg:flex items-center gap-4 pt-4">
                <button
                  onClick={() => handleContactClick(service.projectType)}
                  className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors flex items-center gap-2 group"
                >
                  {t('section.requestQuote')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors">
                  {t('section.viewProjects')}
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative group">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl shadow-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                {/* Glassmorphism Highlight Card */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 text-white/90">{t('section.technicalPoint')}</h4>
                      <p className="text-xs leading-relaxed text-white/80 font-medium">
                        {service.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Behind */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr ${index === 0 ? 'from-blue-200/40 to-emerald-200/40' :
                index === 1 ? 'from-amber-200/40 to-orange-200/40' :
                  index === 2 ? 'from-purple-200/40 to-pink-200/40' :
                    index === 3 ? 'from-cyan-200/40 to-blue-200/40' :
                      'from-gray-200/40 to-slate-200/40'
                } rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
            </div>

            {/* Actions (Mobile Only - After Image) */}
            <div className="flex lg:hidden flex-col sm:flex-row items-center gap-4 w-full">
              <button
                onClick={() => handleContactClick(service.projectType)}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors flex justify-center items-center gap-2 group"
              >
                {t('section.requestQuote')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors text-center">
                {t('section.viewProjects')}
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;