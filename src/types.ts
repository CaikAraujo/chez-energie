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
    SOLAR = 'Panneaux Solaires',
    HEATPUMP = 'Pompes à Chaleur',
    BATTERY = 'Batteries & Stockage',
    EVCHARGER = 'Recharge Électrique',
    HVAC = 'Climatisation',
    OTHER = 'Autre'
}

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    projectType: ProjectType;
    message: string;
    // Dynamic fields
    monthlyConsumption?: string;
    availableArea?: string;
    currentHeatingType?: string;
    existingSolarSystem?: string;
    storageCapacity?: string;
    desiredPower?: string;
    distanceToPanel?: string;
    numberOfRooms?: string;
}

export interface AiFeedback {
    completeness: number; // 0-100
    suggestions: string[];
    tone: string;
}
