import { ArrowRight, CheckCircle2, Zap, Thermometer, Sun, Timer, ShieldCheck, Leaf, TrendingUp, Smartphone, Battery, Home, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../types';


const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const detailedServices = [
    {
      id: "heat-pumps",
      title: "Pompes à Chaleur",
      projectType: ProjectType.HEATPUMP,
      category: "Solution 01",
      description: "La technologie de la pompe à chaleur remplace les chaudières au fioul et au gaz. Elle utilise l'énergie thermique de l'air extérieur pour chauffer votre maison avec une efficacité exceptionnelle.",
      image: "/img/services/pompe_chaleur.webp", // Ensure this path exists or use a placeholder if needed
      highlight: "Grâce au système d'injection de vapeur, elle maintient 100% de sa capacité de chauffage même à -15°C.",
      specs: [
        { label: "Économies", value: "Jusqu'à 75% sur la facture", icon: TrendingUp },
        { label: "Eau Chaude", value: "Disponible 24/7", icon: Thermometer },
        { label: "Efficacité", value: "COP jusqu'à 5.0", icon: Zap },
        { label: "Environnement", value: "0 Émissions Locales", icon: Leaf },
      ]
    },
    {
      id: "solar",
      title: "Énergie Solaire",
      projectType: ProjectType.SOLAR,
      category: "Solution 02",
      description: "Produisez votre propre électricité propre et gratuite. Nos systèmes photovoltaïques sont dimensionnés spécifiquement pour votre profil de consommation, maximisant le retour sur investissement.",
      image: "/img/services/panneau.webp",
      highlight: "Panneaux monocristallins PERC avec une garantie de production linéaire de 25 ans et une efficacité supérieure à 21%.",
      specs: [
        { label: "Retour", value: "4-5 Ans", icon: Timer },
        { label: "Garantie", value: "25 Ans de Performance", icon: ShieldCheck },
        { label: "Production", value: "Suivi App", icon: Smartphone },
        { label: "Économies", value: "Immédiate", icon: TrendingUp },
      ]
    },
    {
      id: "battery",
      title: "Stockage",
      projectType: ProjectType.BATTERY,
      category: "Solution 03",
      description: "Maximisez votre indépendance énergétique en stockant le surplus solaire. Utilisez votre énergie gratuite même la nuit ou lors de pannes de réseau.",
      image: "/img/services/energy.webp",
      highlight: "Batteries Lithium Fer Phosphate (LFP) avec +6000 cycles de vie et une profondeur de décharge de 90%.",
      specs: [
        { label: "Autonomie", value: "Jusqu'à 100% Hors Réseau", icon: Battery },
        { label: "Durée de Vie", value: "+15 Ans", icon: ShieldCheck },
        { label: "Secours", value: "Protection Coupure", icon: Zap },
        { label: "Gestion", value: "IA Intégrée", icon: Smartphone },
      ]
    },
    {
      id: "ev-charging",
      title: "Recharge VE",
      projectType: ProjectType.EVCHARGER,
      category: "Solution 04",
      description: "Intégrez la mobilité électrique dans votre écosystème. Rechargez votre voiture avec le surplus d'énergie solaire et réduisez vos coûts de carburant à zéro.",
      image: "/img/services/prise_eletrique.webp",
      highlight: "Chargeurs intelligents avec équilibrage de charge dynamique protégeant votre tableau électrique.",
      specs: [
        { label: "Vitesse", value: "Jusqu'à 22kW AC", icon: Zap },
        { label: "Mode Solaire", value: "Charge 100% Verte", icon: Sun },
        { label: "Connectivité", value: "Wi-Fi & 4G", icon: Smartphone },
        { label: "Compatible", value: "Universel Type 2", icon: CheckCircle2 },
      ]
    },
    {
      id: "hvac",
      title: "Climatisation",
      projectType: ProjectType.HVAC,
      category: "Solution 05",
      description: "Solutions de climatisation et chauffage au sol garantissant une température parfaite dans chaque pièce, avec une efficacité énergétique maximale.",
      image: "/img/services/clima.webp",
      highlight: "Systèmes inverter silencieux avec filtration d'air avancée et contrôle Wi-Fi intégré.",
      specs: [
        { label: "Efficacité", value: "Classe A+++", icon: Zap },
        { label: "Confort", value: "Multizone", icon: Home },
        { label: "Santé", value: "Filtres HEPA", icon: Wind },
        { label: "Bruit", value: "Ultra Silencieux", icon: ShieldCheck },
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
          Notre <span className="text-emerald-500">Écosystème</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Chaque service a été conçu pour fonctionner isolément ou intégré dans une solution complète d'indépendance énergétique.
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
                  Demander un Devis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors">
                  Voir les Projets
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
                      <h4 className="font-bold text-sm mb-1 text-white/90">Point Technique</h4>
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
                Demander un Devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors text-center">
                Voir les Projets
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;