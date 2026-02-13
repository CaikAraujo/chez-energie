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
        title: "Pompes à Chaleur",
        subtitle: "Aérothermie Haute Efficacité",
        description: "La technologie de pompe à chaleur remplace les chaudières à gaz et fioul. Elle utilise l'énergie thermique de l'air extérieur pour chauffer votre maison et l'eau sanitaire avec un rendement exceptionnel.",
        details: "Contrairement aux systèmes traditionnels qui brûlent du combustible, la pompe à chaleur transfère simplement la chaleur. Pour chaque kWh d'électricité consommé, elle restitue jusqu'à 4 kWh de chaleur (COP de 4.0).",
        benefits: [
            "Économies jusqu'à 70%",
            "Eau Chaude (ECS) toute l'année",
            "Suppression de la facture de gaz",
            "Silencieux et écologique"
        ],
        image: "/img/services/heat-pump.jpg",
        gradient: "from-blue-400 to-indigo-500",
        accent: "text-blue-500",
        border: "group-hover:border-blue-500/30"
    },
    {
        icon: Sun,
        title: "Énergie Solaire",
        subtitle: "Autoconsommation Photovoltaïque",
        description: "Produisez votre propre électricité propre et gratuite. Nos systèmes photovoltaïques sont dimensionnés spécifiquement pour votre profil de consommation, maximisant le retour sur investissement.",
        details: "Nous utilisons des panneaux monocristallins de dernière génération avec technologie PERC, garantissant une production même par temps nuageux. Le système alimente directement la maison en priorité solaire.",
        benefits: [
            "Réduction immédiate de la facture",
            "Protection contre la hausse des prix",
            "Retour sur investissement en 4-5 ans",
            "Garantie de 25 ans"
        ],
        image: "/img/services/solar-panels.jpg",
        gradient: "from-amber-300 to-orange-500",
        accent: "text-amber-500",
        border: "group-hover:border-amber-500/30"
    },
    {
        icon: Battery,
        title: "Stockage",
        subtitle: "Batteries Intelligentes",
        description: "Ne gaspillez pas l'énergie solaire produite le jour. Stockez le surplus dans des batteries au lithium avancées pour l'utiliser gratuitement la nuit.",
        details: "Nos solutions de stockage hybride gèrent l'énergie intelligemment : d'abord la maison, puis les batteries, et enfin le réseau, garantissant une autosuffisance supérieure à 80%.",
        benefits: [
            "Énergie solaire 24h/24",
            "Backup en cas de panne",
            "Rentabilité maximale",
            "Gestion via App"
        ],
        image: "/img/services/battery.jpg",
        gradient: "from-emerald-400 to-teal-500",
        accent: "text-emerald-500",
        border: "group-hover:border-emerald-500/30"
    },
    {
        icon: Zap,
        title: "Recharge VE",
        subtitle: "Mobilité Électrique",
        description: "Rechargez votre véhicule électrique rapidement, sûrement et intelligemment, en intégrant le chargeur à votre production solaire pour rouler 'gratuitement'.",
        details: "Wallboxes intelligentes communiquant avec le compteur. Équilibrage de charge automatique pour éviter de faire sauter les plombs et recharge uniquement avec le surplus solaire.",
        benefits: [
            "Recharge 10x plus rapide",
            "Mode 'Solaire Uniquement'",
            "Équilibrage dynamique",
            "Compatibilité universelle"
        ],
        image: "/img/services/ev-charger.jpg",
        gradient: "from-cyan-400 to-blue-500",
        accent: "text-cyan-500",
        border: "group-hover:border-cyan-500/30"
    },
    {
        icon: Home,
        title: "Domotique",
        subtitle: "Maison Intelligente",
        description: "Contrôle total dans le creux de votre main. Centralisez la gestion de l'énergie, de la climatisation et de la sécurité dans une seule application intuitive.",
        details: "Intégration totale de l'écosystème. Créez des scénarios comme 'Je pars' qui éteint les lumières et baisse le chauffage, ou 'Vacances' qui simule une présence.",
        benefits: [
            "Gestion centralisée",
            "Contrôle à distance total",
            "Automatisation des routines",
            "Alertes de sécurité"
        ],
        image: "/img/services/smart-home.jpg",
        gradient: "from-purple-400 to-pink-500",
        accent: "text-purple-500",
        border: "group-hover:border-purple-500/30"
    },
    {
        icon: Wind,
        title: "Climatisation",
        subtitle: "Confort Thermique",
        description: "Solutions de Climatisation et Plancher Chauffant garantissant une température parfaite dans chaque pièce, avec une efficacité énergétique maximale.",
        details: "Nous concevons la solution de distribution thermique idéale pour l'architecture de votre maison. Systèmes inverter silencieux avec filtration d'air avancée et contrôle Wi-Fi.",
        benefits: [
            "Contrôle zone par zone",
            "Purification de l'air",
            "Design discret",
            "Efficacité A+++"
        ],
        image: "/img/services/hvac.jpg",
        gradient: "from-gray-300 to-gray-500",
        accent: "text-gray-500",
        border: "group-hover:border-gray-500/30"
    }
];
