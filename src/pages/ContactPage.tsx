import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowRight, Zap, Sun, Wind, CheckCircle2, Thermometer, Battery } from 'lucide-react';
import { ProjectType, ContactFormData } from '../types';
import { Button } from '../components/contact/Button';
import { InputField } from '../components/contact/InputField';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        projectType: ProjectType.SOLAR,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTypeSelect = (type: ProjectType) => {
        setFormData(prev => ({ ...prev, projectType: type }));
    };

    const projectIcons = {
        [ProjectType.SOLAR]: <Sun className="w-6 h-6" />,
        [ProjectType.HEATPUMP]: <Thermometer className="w-6 h-6" />,
        [ProjectType.BATTERY]: <Battery className="w-6 h-6" />,
        [ProjectType.EVCHARGER]: <Zap className="w-6 h-6" />,
        [ProjectType.HVAC]: <Wind className="w-6 h-6" />,
        [ProjectType.OTHER]: <ArrowRight className="w-6 h-6" />
    };

    return (
        <div className="min-h-screen bg-brand-surface font-sans selection:bg-brand-accent selection:text-brand-dark flex flex-col md:flex-row">

            {/* Left Panel: Brand & Info */}
            <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden bg-brand-dark text-white pt-24">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-brand-accent blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mt-20"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6">
                        Vamos construir o <span className="text-brand-accent">futuro</span> do seu projeto.
                    </h1>
                    <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                        Soluções energéticas inteligentes para residências e empresas. De Paris a Lisboa, transformamos a forma como você consome energia.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative z-10 mt-12 space-y-8"
                >
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Telefone</p>
                                <p className="text-xl font-display">+33 1 23 45 67 89</p>
                                <p className="text-sm text-white/50">Seg-Sex, 9h-18h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-xl font-display">bonjour@chezenergie.com</p>
                                <p className="text-sm text-white/50">Resposta em 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Escritórios</p>
                                <p className="text-xl font-display">Paris & Lisboa</p>
                                <p className="text-sm text-white/50">Visitas por marcação</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-8 border-t border-white/10">
                        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-white/50 hover:text-brand-accent transition-colors">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Panel: Form */}
            <div className="w-full md:w-7/12 bg-white text-brand-dark p-8 md:p-16 md:overflow-y-auto pt-24">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-xl mx-auto mt-20"
                >
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-bold mb-2">Pedir Orçamento Gratuito</h2>
                        <p className="text-slate-500">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                        {/* Project Type Selection - Visual Cards */}
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Interesse Principal</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.values(ProjectType).map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => handleTypeSelect(type)}
                                        className={`cursor-pointer p-4 rounded-lg border-2 flex flex-col items-center justify-center text-center gap-2 transition-all duration-200 ${formData.projectType === type
                                            ? 'bg-brand-dark text-white border-brand-dark shadow-lg scale-[1.02]'
                                            : 'bg-white border-slate-100 text-slate-500 hover:border-brand-dark/30'
                                            }`}
                                    >
                                        {projectIcons[type]}
                                        <span className="text-xs font-bold leading-tight">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InputField
                                label="Nome Completo"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Contacto Telefónico"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <InputField
                            label="Email Corporativo ou Pessoal"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <InputField
                            label="Mensagem (Opcional)"
                            name="message"
                            isTextArea
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <div className="pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                            <div className="text-xs text-slate-400 text-center md:text-left max-w-xs leading-relaxed">
                                Ao enviar, concorda com a nossa política de privacidade. Seus dados estão seguros.
                            </div>
                            <Button type="submit" className="w-full md:w-auto text-sm md:text-base py-4 md:py-4">
                                Enviar Pedido <ArrowRight size={18} />
                            </Button>
                        </div>

                    </form>
                </motion.div>
            </div>



        </div >
    );
};

export default ContactPage;
