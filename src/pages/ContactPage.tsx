import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-surface pt-32 pb-20">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                        Vamos conversar sobre o seu projeto?
                    </h1>
                    <p className="text-slate-600 text-lg">
                        Estamos prontos para analisar suas necessidades e propor a solução energética mais eficiente.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

                    {/* Contact Details Card */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h3 className="font-display text-2xl font-bold text-brand-dark mb-8 relative z-10">Canais Diretos</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Telefone</p>
                                        <p className="font-bold text-xl text-brand-dark">+33 1 23 45 67 89</p>
                                        <p className="text-slate-500 text-sm">Seg-Sex, 9h-18h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="font-bold text-xl text-brand-dark">bonjour@chezenergie.com</p>
                                        <p className="text-slate-500 text-sm">Resposta em 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Escritórios</p>
                                        <p className="font-bold text-xl text-brand-dark">Paris & Lisboa</p>
                                        <p className="text-slate-500 text-sm">Visitas por marcação</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <div className="flex gap-4 justify-center">
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-brand-primary/30"><Instagram size={20} /></a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-brand-primary/30"><Facebook size={20} /></a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-brand-primary/30"><Linkedin size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />

                            <h3 className="font-display text-3xl font-bold text-brand-dark mb-8">Pedir Orçamento Gratuito</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-brand-primary transition-colors">Nome Completo</label>
                                        <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-brand-primary/50 focus:bg-white transition-all" placeholder="Ex: João Silva" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-brand-primary transition-colors">Contacto Telefónico</label>
                                        <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-brand-primary/50 focus:bg-white transition-all" placeholder="Ex: +33 6 12 34 56" />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-brand-primary transition-colors">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-brand-primary/50 focus:bg-white transition-all" placeholder="seu@email.com" />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-brand-primary transition-colors">Interesse Principal</label>
                                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-brand-primary/50 focus:bg-white transition-all text-slate-600 appearance-none cursor-pointer">
                                        <option>Selecione uma solução...</option>
                                        <option>Bomba de Calor</option>
                                        <option>Carregador de Veículo Elétrico</option>
                                        <option>Climatização Residencial</option>
                                        <option>Painéis Solares</option>
                                        <option>Outro</option>
                                    </select>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-brand-primary transition-colors">Mensagem (Opcional)</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-brand-primary/50 focus:bg-white transition-all resize-none" placeholder="Conte-nos mais sobre o seu projeto..." />
                                </div>

                                <button className="w-full bg-brand-primary text-white font-bold text-lg py-5 rounded-2xl hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                                    Enviar Pedido de Orçamento
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-slate-400">
                                    Ao enviar, concorda com a nossa política de privacidade. Seus dados estão seguros.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
