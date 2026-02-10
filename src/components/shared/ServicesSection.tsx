import { ArrowRight, CheckCircle2, Zap, Thermometer, Sun, Timer, ShieldCheck, Leaf, TrendingUp, Smartphone, Battery, Home, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const detailedServices = [
    {
      id: "heat-pumps",
      title: "Bombas de Calor",
      category: "Solução 01",
      description: "A tecnologia de bomba de calor é o substituto moderno das caldeiras a gás e gasóleo. Utiliza a energia térmica presente no ar exterior para aquecer a sua casa com um rendimento excecional.",
      image: "/img/services/pompe_chaleur.jpg", // Ensure this path exists or use a placeholder if needed
      highlight: "Graças ao sistema de injeção de vapor, mantém 100% da capacidade de aquecimento mesmo a -15°C.",
      specs: [
        { label: "Poupança", value: "Até 75% na fatura", icon: TrendingUp },
        { label: "Água Quente", value: "Disponível 24/7", icon: Thermometer },
        { label: "Eficiência", value: "COP até 5.0", icon: Zap },
        { label: "Ambiente", value: "0 Emissões Locais", icon: Leaf },
      ]
    },
    {
      id: "solar",
      title: "Energia Solar",
      category: "Solução 02",
      description: "Produza a sua própria eletricidade limpa e gratuita. Os nossos sistemas fotovoltaicos são dimensionados especificamente para o seu perfil de consumo, maximizando o retorno.",
      image: "/img/services/panneau.jpg",
      highlight: "Painéis monocristalinos PERC com garantia de produção linear de 25 anos e eficiência superior a 21%.",
      specs: [
        { label: "Retorno", value: "4-5 Anos", icon: Timer },
        { label: "Garantia", value: "25 Anos Performance", icon: ShieldCheck },
        { label: "Produção", value: "Monitorização App", icon: Smartphone },
        { label: "Poupança", value: "Imediata", icon: TrendingUp },
      ]
    },
    {
      id: "battery",
      title: "Armazenamento",
      category: "Solução 03",
      description: "Maximize a sua independência energética armazenando o excedente solar. Utilize a sua energia gratuita mesmo durante a noite ou em falhas de rede.",
      image: "/img/services/energy.jpg",
      highlight: "Baterias de Lítio Ferro Fosfato (LFP) com +6000 ciclos de vida e profundidade de descarga de 90%.",
      specs: [
        { label: "Autonomia", value: "Até 100% Off-Grid", icon: Battery },
        { label: "Vida Útil", value: "+15 Anos", icon: ShieldCheck },
        { label: "Backup", value: "Proteção Blackout", icon: Zap },
        { label: "Gestão", value: "IA Integrada", icon: Smartphone },
      ]
    },
    {
      id: "ev-charging",
      title: "Carregamento EV",
      category: "Solução 04",
      description: "Integre a mobilidade elétrica no seu ecossistema. Carregue o seu carro com a energia solar excedente e reduza os custos de combustível a zero.",
      image: "/img/services/prise_eletrique.jpg",
      highlight: "Carregadores inteligentes com balanceamento de carga dinâmico que protegem o seu quadro elétrico.",
      specs: [
        { label: "Velocidade", value: "Até 22kW AC", icon: Zap },
        { label: "Modo Solar", value: "Carga 100% Verde", icon: Sun },
        { label: "Conectividade", value: "Wi-Fi & 4G", icon: Smartphone },
        { label: "Compatível", value: "Universal Type 2", icon: CheckCircle2 },
      ]
    },
    {
      id: "hvac",
      title: "Climatização",
      category: "Solução 05",
      description: "Soluções de Ar Condicionado e Piso Radiante que garantem a temperatura perfeita em cada divisão, com a máxima eficiência energética.",
      image: "/img/services/clima.jpg",
      highlight: "Sistemas inverter silenciosos com filtragem de ar avançada e controlo Wi-Fi integrado.",
      specs: [
        { label: "Eficiência", value: "Classe A+++", icon: Zap },
        { label: "Conforto", value: "Multizona", icon: Home },
        { label: "Saúde", value: "Filtros HEPA", icon: Wind },
        { label: "Ruído", value: "Ultra Silencioso", icon: ShieldCheck },
      ]
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="relative py-24 px-6 bg-slate-50 overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
          O Nosso <span className="text-emerald-500">Ecossistema</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Cada serviço foi desenhado para funcionar isoladamente ou integrado numa solução completa de independência energética.
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
                  onClick={handleContactClick}
                  className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors flex items-center gap-2 group"
                >
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors">
                  Ver Projetos
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative group">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl shadow-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
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
                      <h4 className="font-bold text-sm mb-1 text-white/90">Destaque Técnico</h4>
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
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors flex justify-center items-center gap-2 group"
              >
                Pedir Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-colors text-center">
                Ver Projetos
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;