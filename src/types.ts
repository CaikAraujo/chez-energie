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
    icon: any;
    delay?: number;
}
