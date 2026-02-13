import React from 'react';
import { AlertTriangle, Power, Battery, Refrigerator, Wifi, Lightbulb } from 'lucide-react';

interface BlackoutSimulationProps {
    batteryLevel: number;
    onRestore: () => void;
}

export const BlackoutSimulation: React.FC<BlackoutSimulationProps> = ({ batteryLevel, onRestore }) => {
    return (
        <div className="animate-in fade-in duration-700 space-y-12">
            <div className="flex justify-between items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-red-500/10 text-red-400 mb-4">
                        <AlertTriangle className="w-4 h-4" />
                        Mode d'Urgence
                    </div>
                    <h2 className="text-5xl font-bold font-display text-white">Panne Réseau Détectée</h2>
                </div>
                <button
                    onClick={onRestore}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-red-900/50 flex items-center gap-2"
                >
                    <Power className="w-5 h-5" />
                    Rétablir le Réseau
                </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Battery Status */}
                <div className="space-y-8 p-8 rounded-3xl border border-red-900/30 bg-red-950/10">
                    <h3 className="text-2xl font-bold text-red-500 flex items-center gap-3">
                        <Battery className="w-8 h-8" />
                        Batterie de Secours
                    </h3>

                    <div className="relative h-48 w-full bg-black rounded-2xl border border-red-900/30 overflow-hidden flex items-center justify-center">
                        <div className="absolute bottom-0 left-0 right-0 bg-red-600/20 transition-all duration-1000" style={{ height: `${batteryLevel}%` }}></div>
                        <div className="z-10 text-center">
                            <div className="text-6xl font-black text-white mix-blend-overlay">{batteryLevel}%</div>
                            <div className="text-red-400 font-mono text-sm tracking-widest mt-2">
                                AUTONOMIE ESTIMÉE : {Math.floor(batteryLevel / 10)}h {Math.floor((batteryLevel % 10) * 6)}m
                            </div>
                        </div>
                    </div>
                </div>

                {/* Critical Loads */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-300 mb-6">Charges Prioritaires Actives</h3>

                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                                <Refrigerator className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Réfrigération</div>
                                <div className="text-xs text-slate-400">Consommation : 150W</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Communications</div>
                                <div className="text-xs text-slate-400">Consommation : 15W</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-white">Éclairage (LED)</div>
                                <div className="text-xs text-slate-400">Consommation : 40W</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>

                    <p className="text-sm text-slate-500 mt-8 italic">
                        * Avec notre technologie d'îlotage, le passage sur batterie est imperceptible (moins de 10ms).
                    </p>
                </div>
            </div>
        </div>
    );
};
