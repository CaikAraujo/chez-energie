import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowRight, Zap, Sun, Wind, CheckCircle2, Thermometer, Battery, ChevronDown, Loader2 } from 'lucide-react';
import { ProjectType, ContactFormData } from '../types';
import { Button } from '../components/contact/Button';
import { InputField } from '../components/contact/InputField';
import { SuccessScreen } from '../components/contact/SuccessScreen';
import DocumentTitle from '../components/shared/DocumentTitle';
import { useTranslations } from '../i18n/useTranslations';


const ContactPage: React.FC = () => {
    const { t } = useTranslations('contact');
    const location = useLocation();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        projectType: ProjectType.SOLAR,
        message: '',
        monthlyConsumption: '',
        availableArea: '',
        currentHeatingType: '',
        existingSolarSystem: '',
        storageCapacity: '',
        desiredPower: '',
        distanceToPanel: '',
        numberOfRooms: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    // Configuration for dynamic fields based on ProjectType
    const dynamicFieldConfig = useMemo(() => ({
        [ProjectType.SOLAR]: [
            { name: 'monthlyConsumption', label: t('dynamic.monthlyConsumption'), type: 'number' },
            { name: 'availableArea', label: t('dynamic.availableArea'), type: 'number' }
        ],
        [ProjectType.HEATPUMP]: [
            { name: 'availableArea', label: t('dynamic.heatingArea'), type: 'number' },
            { name: 'currentHeatingType', label: t('dynamic.currentHeating'), type: 'text' }
        ],
        [ProjectType.BATTERY]: [
            { name: 'existingSolarSystem', label: t('dynamic.existingSolar'), type: 'select', options: [t('dynamic.yes'), t('dynamic.no')] },
            { name: 'storageCapacity', label: t('dynamic.storageCapacity'), type: 'number' }
        ],
        [ProjectType.EVCHARGER]: [
            { name: 'desiredPower', label: t('dynamic.desiredPower'), type: 'select', options: ['7kW', '11kW', '22kW'] },
            { name: 'distanceToPanel', label: t('dynamic.distanceToPanel'), type: 'number' }
        ],
        [ProjectType.HVAC]: [
            { name: 'availableArea', label: t('dynamic.coolingArea'), type: 'number' },
            { name: 'numberOfRooms', label: t('dynamic.numberOfRooms'), type: 'number' }
        ],
        [ProjectType.OTHER]: []
    }), [t]);

    const currentDynamicFields = dynamicFieldConfig[formData.projectType as ProjectType] || [];

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailParam = params.get('email');
        const projectParam = params.get('project');

        if (emailParam) {
            setFormData(prev => ({ ...prev, email: emailParam }));
        }

        if (projectParam && Object.values(ProjectType).includes(projectParam as ProjectType)) {
            setFormData(prev => ({ ...prev, projectType: projectParam as ProjectType }));
        }
    }, [location]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTypeSelect = (type: ProjectType) => {
        setFormData(prev => ({ ...prev, projectType: type }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus('success');
            // Form clearing is handled when resetting the status
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setSubmitStatus('idle');
        setFormData({
            name: '',
            phone: '',
            email: '',
            projectType: ProjectType.SOLAR,
            message: '',
            monthlyConsumption: '',
            availableArea: '',
            currentHeatingType: '',
            existingSolarSystem: '',
            storageCapacity: '',
            desiredPower: '',
            distanceToPanel: '',
            numberOfRooms: ''
        });
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
            <DocumentTitle
                title={t('hero.title') + " " + t('hero.titleHighlight') + " " + t('hero.titleSuffix') + " | Chez Energie"}
                description={t('hero.description')}
            // canonical="/contact"
            />
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
                    <div className="w-16 h-1 bg-brand-accent mb-6 rounded-full" />
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
                        {t('hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed mb-10 border-l-2 border-slate-700 pl-6">
                        {t('hero.description')}
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
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Téléphone</p>
                                <p className="text-xl font-display">+41 76 513 31 66</p>
                                <p className="text-sm text-white/50">Lun-Ven, 9h-18h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-xl font-display">Info@chezenergy.ch</p>
                                <p className="text-sm text-white/50">Réponse sous 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Bureaux</p>
                                <p className="text-xl font-display">Genève</p>
                                <p className="text-sm text-white/50">Visites sur rendez-vous</p>
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
                <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                        <SuccessScreen key="success" onReset={handleReset} />
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="max-w-xl mx-auto mt-20"
                        >
                            <div className="mb-12">
                                <h2 className="text-3xl font-display font-bold mb-2">{t('hero.ctaTitle')}</h2>
                                <p className="text-slate-500">{t('hero.ctaSubtitle')}</p>
                            </div>

                            {submitStatus === 'error' && (
                                <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-8 border border-red-100 text-sm">
                                    {t('form.submitError')}
                                </div>
                            )}

                            <form className="space-y-8" onSubmit={handleSubmit}>

                                {/* Project Type Selection - Visual Cards */}
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">{t('form.interestLabel')}</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {(Object.entries(ProjectType) as [string, ProjectType][]).map(([key, value]) => (
                                            <div
                                                key={value}
                                                onClick={() => handleTypeSelect(value)}
                                                className={`cursor-pointer p-4 rounded-lg border-2 flex flex-col items-center justify-center text-center gap-2 transition-all duration-200 ${formData.projectType === value
                                                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg scale-[1.02]'
                                                    : 'bg-white border-slate-100 text-slate-500 hover:border-brand-dark/30'
                                                    }`}
                                            >
                                                {projectIcons[value]}
                                                <span className="text-xs font-bold leading-tight">{t(`projectTypes.${key.toLowerCase()}`)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <InputField
                                        label={t('form.nameLabel')}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t('form.namePlaceholder')}
                                    />
                                    <InputField
                                        label={t('form.phoneLabel')}
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={t('form.phonePlaceholder')}
                                    />
                                </div>

                                <InputField
                                    label={t('form.emailLabel')}
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('form.emailPlaceholder')}
                                />

                                {/* Dynamic Fields Section */}
                                {currentDynamicFields.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden pt-4"
                                    >
                                        {currentDynamicFields.map((field) => (
                                            <div key={field.name}>
                                                {field.type === 'select' ? (
                                                    <div className="relative mt-2">
                                                        <select
                                                            id={field.name}
                                                            name={field.name}
                                                            value={(formData as any)[field.name]}
                                                            onChange={handleChange}
                                                            className={`peer w-full border-b-2 border-slate-200 bg-transparent py-3 pr-8 focus:border-brand-primary focus:outline-none transition-colors appearance-none cursor-pointer 
                                                        ${(formData as any)[field.name] ? 'text-slate-900' : 'text-transparent'}`}
                                                        >
                                                            <option value="" disabled className="text-slate-500">{t('form.selectOption')}</option>
                                                            {field.options?.map(opt => (
                                                                <option key={opt} value={opt} className="text-slate-900">{opt}</option>
                                                            ))}
                                                        </select>
                                                        <label
                                                            htmlFor={field.name}
                                                            className={`absolute left-0 transition-all font-medium tracking-wide pointer-events-none 
                                                        ${(formData as any)[field.name]
                                                                    ? '-top-3.5 text-xs text-brand-primary'
                                                                    : 'top-3 text-base text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary'
                                                                }`}
                                                        >
                                                            {field.label}
                                                        </label>
                                                        <ChevronDown className="absolute right-0 top-3 text-slate-400 pointer-events-none" size={16} />
                                                    </div>
                                                ) : (
                                                    <InputField
                                                        label={field.label}
                                                        name={field.name}
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        value={(formData as any)[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                <InputField
                                    label={t('form.messageLabel')}
                                    name="message"
                                    isTextArea
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t('form.messagePlaceholder')}
                                />

                                <div className="pt-8 flex flex-col items-center gap-4 w-full">
                                    <Button type="submit" disabled={isSubmitting} className="group w-full py-3 md:py-5 text-base md:text-xl font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300 border-none flex justify-center items-center">
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                                                {t('form.submitting')}
                                            </>
                                        ) : (
                                            <>
                                                {t('form.submitButton')} <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                    <div className="text-xs text-slate-400 text-center max-w-sm leading-relaxed opacity-80">
                                        {t('form.privacyPolicy')}
                                    </div>
                                </div>

                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>



        </div >
    );
};

export default ContactPage;
