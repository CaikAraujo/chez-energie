import React from 'react';
import { Thermometer, Sun, Zap, Battery, Wind, Home, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Thermometer,
      title: "Bombas de Calor",
      subtitle: "Aerotermia de Alta Eficiência",
      description: "A tecnologia de bomba de calor é o substituto moderno das caldeiras a gás e gasóleo. Utiliza a energia térmica presente no ar exterior para aquecer a sua casa e águas sanitárias com um rendimento excecional.",
      details: "Ao contrário dos sistemas tradicionais que queimam combustível para gerar calor, a bomba de calor apenas transporta o calor de um lado para o outro. Por cada 1kWh de eletricidade que consome, consegue entregar até 4kWh de calor à sua casa (COP de 4.0).",
      benefits: [
        "Poupança até 70% na fatura",
        "Água Quente (AQS) todo o ano",
        "Eliminação da fatura de gás",
        "Silencioso e ecológico"
      ],
      image: "https://images.unsplash.com/photo-1635334795326-784869c368d5?q=80&w=2232&auto=format&fit=crop",
      gradient: "from-blue-400 to-indigo-500",
      accent: "text-blue-500",
      border: "group-hover:border-blue-500/30"
    },
    {
      icon: Sun,
      title: "Energia Solar",
      subtitle: "Autoconsumo Fotovoltaico",
      description: "Produza a sua própria eletricidade limpa e gratuita. Os nossos sistemas fotovoltaicos são dimensionados especificamente para o seu perfil de consumo, maximizando o retorno do investimento.",
      details: "Utilizamos painéis monocristalinos de última geração com tecnologia PERC, que garantem produção de energia mesmo em dias nublados. O sistema liga-se diretamente ao quadro elétrico, alimentando a casa com prioridade solar.",
      benefits: [
        "Redução imediata da fatura",
        "Proteção contra aumentos de preço",
        "Retorno em 4-5 anos",
        "Garantia de 25 anos"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2344&auto=format&fit=crop",
      gradient: "from-amber-300 to-orange-500",
      accent: "text-amber-500",
      border: "group-hover:border-amber-500/30"
    },
    {
      icon: Battery,
      title: "Armazenamento",
      subtitle: "Baterias Inteligentes",
      description: "Não desperdice a energia solar que produz durante o dia. Armazene o excesso em baterias de lítio avançadas para utilizar gratuitamente durante a noite.",
      details: "As nossas soluções de armazenamento híbrido gerem a energia de forma inteligente: primeiro alimentam a casa, depois carregam as baterias e só no fim injetam na rede, garantindo autossuficiência superior a 80%.",
      benefits: [
        "Energia solar 24h por dia",
        "Backup em falhas de luz",
        "Máxima rentabilização",
        "Gestão via App"
      ],
      image: "https://images.unsplash.com/photo-1688649439600-4740e53a391d?q=80&w=2187&auto=format&fit=crop",
      gradient: "from-emerald-400 to-teal-500",
      accent: "text-emerald-500",
      border: "group-hover:border-emerald-500/30"
    },
    {
      icon: Zap,
      title: "Carregamento EV",
      subtitle: "Mobilidade Elétrica",
      description: "Carregue o seu veículo elétrico de forma rápida, segura e inteligente, integrando o carregador com a sua produção solar para conduzir a 'custo zero'.",
      details: "Wallboxes inteligentes que comunicam com o contador da casa. Fazem o balanceamento de carga automático para o quadro não disparar e permitem carregar apenas com o excesso solar disponível.",
      benefits: [
        "Carregamento 10x mais rápido",
        "Modo 'Solar Only'",
        "Balanceamento dinâmico",
        "Compatibilidade universal"
      ],
      image: "https://images.unsplash.com/photo-1623080061327-142270940cc7?q=80&w=2187&auto=format&fit=crop",
      gradient: "from-cyan-400 to-blue-500",
      accent: "text-cyan-500",
      border: "group-hover:border-cyan-500/30"
    },
    {
      icon: Home,
      title: "Domótica",
      subtitle: "Casa Inteligente",
      description: "Controlo total na palma da sua mão. Centralize a gestão da energia, climatização e segurança numa única aplicação intuitiva.",
      details: "Integração total do ecossistema. Crie cenários automáticos como 'Sair de Casa' que desliga luzes e baixa o aquecimento, ou 'Férias' que simula presença e monitoriza consumos remotamente.",
      benefits: [
        "Gestão centralizada",
        "Controlo remoto total",
        "Automatização de rotinas",
        "Alertas de segurança"
      ],
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-purple-400 to-pink-500",
      accent: "text-purple-500",
      border: "group-hover:border-purple-500/30"
    },
    {
      icon: Wind,
      title: "Climatização",
      subtitle: "Conforto Térmico",
      description: "Soluções de Ar Condicionado e Piso Radiante que garantem a temperatura perfeita em cada divisão, com a máxima eficiência energética.",
      details: "Desenhamos a solução de distribuição térmica ideal para a arquitetura da sua casa. Sistemas inverter silenciosos com filtragem de ar avançada e controlo Wi-Fi integrado.",
      benefits: [
        "Controlo zona a zona",
        "Purificação do ar",
        "Design discreto",
        "Eficiência A+++"
      ],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-gray-300 to-gray-500",
      accent: "text-gray-500",
      border: "group-hover:border-gray-500/30"
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Soluções 360º
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-6">
            O nosso <span className="text-gradient">Ecossistema</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Cada serviço foi desenhado para funcionar isoladamente ou integrado numa solução completa de eficiência energética.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 border border-white/50 bg-white/60 ${service.border}`}
            >
              {/* Dynamic Background Glow */}
              <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${service.gradient} opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-all duration-700`}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xs font-bold uppercase tracking-wider mb-1 ${service.accent}`}>
                        {service.subtitle}
                      </h3>
                      <h2 className="text-3xl font-display font-bold text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <ArrowUpRight className={`w-6 h-6 text-gray-400 group-hover:text-slate-900 transition-colors duration-300`} />
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                  {/* Left Column: Text & Benefits */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed font-light text-lg">
                        {service.description}
                      </p>
                      <div className="p-4 rounded-xl bg-white/50 border border-gray-100 text-sm text-slate-500 leading-relaxed">
                        <span className="text-slate-900 font-medium block mb-1">Detalhe Técnico:</span>
                        {service.details}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/40 border border-gray-100 group-hover:border-gray-200 transition-colors">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${service.accent}`} />
                          <span className="text-sm font-medium text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                        Pedir Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-6 py-3 rounded-full border border-gray-200 text-slate-700 font-medium hover:bg-white transition-colors flex items-center justify-center bg-white/50">
                        Ver Projetos
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className={`relative w-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 group-hover:border-gray-200 transition-all ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Overlay subtil para unificar a imagem */}
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>

                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Floating Badge on Image */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="px-4 py-2 rounded-full glass-panel border border-white/20 backdrop-blur-xl flex items-center gap-2 bg-white/90">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`}></div>
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Instalação Certificada</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;