import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Lightbulb } from 'lucide-react';
import { AiFeedback } from '../../types';

interface GeminiFeedbackProps {
    feedback: AiFeedback | null;
    loading: boolean;
}

export const GeminiFeedback: React.FC<GeminiFeedbackProps> = ({ feedback, loading }) => {
    if (loading) {
        return (
            <div className="flex items-center gap-2 text-xs font-mono text-brand-primary/70 animate-pulse mt-2">
                <Sparkles size={12} />
                <span>AI analisando contexto...</span>
            </div>
        );
    }

    if (!feedback || feedback.suggestions.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                className="mt-4 overflow-hidden"
            >
                <div className="bg-slate-50 border-l-2 border-brand-primary p-4 rounded-r-lg shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                            <Lightbulb size={16} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">Dica do Assistente Virtual</h4>
                            <p className="text-xs text-slate-600 mb-2">
                                Para um orçamento mais preciso, considere adicionar:
                            </p>
                            <ul className="space-y-1">
                                {feedback.suggestions.map((suggestion, idx) => (
                                    <li key={idx} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-brand-primary rounded-full" />
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${feedback.completeness}%` }}
                                    className={`h-full ${feedback.completeness > 80 ? 'bg-green-500' : 'bg-orange-400'}`}
                                />
                            </div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 block text-right">
                                Qualidade do detalhe
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
