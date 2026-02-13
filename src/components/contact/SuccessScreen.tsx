
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface SuccessScreenProps {
    onReset: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onReset }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1
                }}
                className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8 relative"
            >
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={3} />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Message Envoyé !
            </h2>

            <p className="text-slate-500 text-lg max-w-md mb-12 leading-relaxed">
                Merci de nous avoir contactés. Notre équipe technique analysera votre demande et vous répondra sous 24 heures.
            </p>

            <Button
                onClick={onReset}
                className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all hover:shadow-xl hover:-translate-y-1"
            >
                Envoyer un autre message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </motion.div>
    );
};
