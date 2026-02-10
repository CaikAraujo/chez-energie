import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

export type ServiceColor = 'orange' | 'yellow' | 'blue' | 'emerald' | 'indigo';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: ServiceColor;
    delay?: number;
}

const colorStyles: Record<ServiceColor, {
    iconBg: string;
    iconColor: string;
    hoverBg: string;
    lineColor: string;
    borderColor: string;
}> = {
    orange: {
        iconBg: 'bg-orange-50',
        iconColor: 'text-orange-600',
        hoverBg: 'bg-orange-500/[0.03]',
        lineColor: 'bg-orange-500',
        borderColor: 'border-orange-100'
    },
    yellow: {
        iconBg: 'bg-yellow-50',
        iconColor: 'text-yellow-600',
        hoverBg: 'bg-yellow-500/[0.03]',
        lineColor: 'bg-yellow-500',
        borderColor: 'border-yellow-100'
    },
    blue: {
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        hoverBg: 'bg-blue-500/[0.03]',
        lineColor: 'bg-blue-500',
        borderColor: 'border-blue-100'
    },
    emerald: {
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        hoverBg: 'bg-emerald-500/[0.03]',
        lineColor: 'bg-emerald-500',
        borderColor: 'border-emerald-100'
    },
    indigo: {
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
        hoverBg: 'bg-indigo-500/[0.03]',
        lineColor: 'bg-indigo-500',
        borderColor: 'border-indigo-100'
    }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon: Icon,
    color,
    delay = 0
}) => {
    const styles = colorStyles[color];

    return (
        <motion.div
            initial="idle"
            whileHover="hover"
            animate="idle"
            variants={{
                idle: { y: 0, boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }, // shadow-sm
                hover: { y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } // shadow-xl
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`relative w-full h-full bg-white rounded-[2rem] p-8 overflow-hidden cursor-pointer group`}
        >
            {/* Background Overlay */}
            <motion.div
                variants={{
                    idle: { opacity: 0 },
                    hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 ${styles.hoverBg} pointer-events-none`}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon + Arrow */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${styles.iconBg} ${styles.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <div className={`text-slate-300 group-hover:${styles.iconColor} transition-colors duration-300`}>
                        <ArrowRight size={20} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-900 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {description}
                </p>
            </div>

            {/* Bottom Line Animation */}
            <motion.div
                variants={{
                    idle: { width: 0 },
                    hover: { width: "100%" }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute bottom-0 left-0 h-1.5 ${styles.lineColor}`}
            />
        </motion.div>
    );
};
