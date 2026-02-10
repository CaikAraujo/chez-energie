import React from 'react';

export enum SectionId {
    HERO = 'hero',
    ABOUT = 'about',
    SERVICES = 'services',
    PROJECTS = 'projects',
    CONTACT = 'contact'
}

export interface ServiceCardProps {
    title: string;
    subtitle: string;
    image: string;
    icon: React.ElementType;
    delay?: number;
    imagePosition?: string;
    imageScale?: number;
    className?: string;
    onClick?: () => void;
}

export enum ProjectType {
    SOLAR = 'Painéis Solares',
    HEATPUMP = 'Bombas de Calor',
    BATTERY = 'Baterias & Armazenamento',
    EVCHARGER = 'Carregamento Elétrico',
    HVAC = 'Climatização',
    OTHER = 'Outro'
}

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    projectType: ProjectType;
    message: string;
}

export interface AiFeedback {
    completeness: number; // 0-100
    suggestions: string[];
    tone: string;
}
