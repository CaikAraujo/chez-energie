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
}

export enum ProjectType {
    SOLAR = 'Painéis Solares',
    INSULATION = 'Isolamento Térmico',
    HVAC = 'Climatização',
    AUDIT = 'Auditoria Energética',
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
