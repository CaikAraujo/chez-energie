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

                        <div className="pt-4 flex items-center justify-between gap-4">
                            <div className="text-[10px] text-slate-400 max-w-[200px] leading-tight">
                                Ao enviar, concorda com a nossa política de privacidade. Seus dados estão seguros.
                            </div>
                            <Button type="submit">
                                Enviar Pedido <ArrowRight size={18} />
                            </Button>
                        </div>

                    </form>
                </motion.div>
            </div>

            {/* Floating Action Button for WhatsApp */}
            <a href="#" className="fixed bottom-8 right-8 z-50 group">
                <div className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.572 2.173.894 3.478.894 3.193 0 5.775-2.581 5.779-5.766.002-3.185-2.575-5.777-5.765-5.777zm5.333 7.986c-.235.658-1.293 1.258-1.776 1.341-.421.072-.962.155-2.733-.566-1.921-.781-3.262-2.787-3.364-2.922-.109-.142-.81-1.079-.81-2.059-.001-.983.513-1.467.691-1.666.195-.218.423-.272.563-.272.138 0 .277.001.398.006.128.005.297-.048.463.348.174.417.592 1.45.643 1.555.05.105.084.228.012.368-.071.14-.106.227-.211.347-.116.133-.243.297-.348.4-.112.11-.23.23-.1.459.13.228.573.947 1.228 1.531.849.757 1.565.991 1.789 1.096.222.105.353.09.485-.05.132-.14.573-.664.726-.892.152-.227.304-.19.512-.113.208.077 1.314.618 1.539.73.225.113.375.169.429.264.054.095.054.549-.181 1.207z" />
                    </svg>
                </div>
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-brand-dark text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Fale no WhatsApp
                </div>
            </a>

        </div >
    );
};

export default ContactPage;
