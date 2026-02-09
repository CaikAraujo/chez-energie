import { LucideIcon, Thermometer, Sun, Zap, Battery, Wind, Home } from 'lucide-react';

export interface ServiceData {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    details?: string;
    benefits: string[];
    image: string;
    gradient: string;
    accent: string;
    border?: string;
}

export const servicesData: ServiceData[] = [
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
        image: "/img/services/heat-pump.jpg",
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
        image: "/img/services/solar-panels.jpg",
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
        image: "/img/services/battery.jpg",
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
        image: "/img/services/ev-charger.jpg",
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
        image: "/img/services/smart-home.jpg",
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
        image: "/img/services/hvac.jpg",
        gradient: "from-gray-300 to-gray-500",
        accent: "text-gray-500",
        border: "group-hover:border-gray-500/30"
    }
];
