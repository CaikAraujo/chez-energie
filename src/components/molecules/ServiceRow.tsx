import React from 'react';
import { CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ServiceData } from '../../data/services.data';

interface ServiceRowProps {
    service: ServiceData;
    index: number;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ service, index }) => {
    // Determine if the layout should be reversed (image on left, text on right)
    // for odd-numbered items (1, 3, 5...)
    const isReverse = index % 2 !== 0;

    return (
        <div className={`group glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 border border-white/50 bg-white/60 ${service.border || ''}`}>

            {/* Background Decorator: Dynamic Glow */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${service.gradient} opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-all duration-700 pointer-events-none`}></div>

            <div className="relative z-10">
                {/* Header Section: Icon & Title */}
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

                    {/* External Link Indicator */}
                    <div className="hidden md:block">
                        <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-slate-900 transition-colors duration-300" />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Text Column */}
                    <div className={`space-y-8 ${isReverse ? 'lg:order-2' : ''}`}>
                        <div className="space-y-4">
                            <p className="text-slate-600 leading-relaxed font-light text-lg">
                                {service.description}
                            </p>

                            {/* Technical Details Box */}
                            {service.details && (
                                <div className="p-4 rounded-xl bg-white/50 border border-gray-100 text-sm text-slate-500 leading-relaxed">
                                    <span className="text-slate-900 font-medium block mb-1">Detalhe Técnico:</span>
                                    {service.details}
                                </div>
                            )}
                        </div>

                        {/* Benefits List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/40 border border-gray-100 group-hover:border-gray-200 transition-colors">
                                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${service.accent}`} />
                                    <span className="text-sm font-medium text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 active:scale-95 transform duration-200">
                                Pedir Orçamento
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-6 py-3 rounded-full border border-gray-200 text-slate-700 font-medium hover:bg-white transition-colors flex items-center justify-center bg-white/50 active:scale-95 transform duration-200">
                                Ver Projetos
                            </button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className={`relative w-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 group-hover:border-gray-200 transition-all ${isReverse ? 'lg:order-1' : ''}`}>
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>

                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                        />

                        {/* Floating Badge */}
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
    );
};

export default ServiceRow;
