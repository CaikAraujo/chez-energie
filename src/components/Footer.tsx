import React from 'react';
import { Zap, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <img
                src="/logo-chez.svg"
                alt="Chez Energie"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Líderes em soluções de energia sustentável. Transformamos casas em lares eficientes e ecológicos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-white mb-6">Navegação</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <button onClick={() => handleNavClick('/')} className="footer-link">Home</button>
              <button onClick={() => handleNavClick('/services')} className="footer-link">Soluções</button>
              <button onClick={() => handleNavClick('/')} className="footer-link">Sobre Nós</button>
              <button onClick={() => handleNavClick('/contact')} className="footer-link">Contactos</button>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-white mb-6">Soluções</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <span className="footer-link cursor-default">Bombas de Calor</span>
              <span className="footer-link cursor-default">Carregadores EV</span>
              <span className="footer-link cursor-default">Ar Condicionado</span>
              <span className="footer-link cursor-default">Painéis Solares</span>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <a href="#" className="footer-link">Política de Privacidade</a>
              <a href="#" className="footer-link">Termos e Condições</a>
              <a href="#" className="footer-link">Livro de Reclamações</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Chez Energie. Todos os direitos reservados.</p>
          <p>Desenvolvido com energia verde.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;