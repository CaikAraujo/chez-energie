import React from 'react';
import { ArrowRight, Trees, Leaf, Zap } from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { SolarCalculations } from '../../../hooks/useSolarCalculations';

interface CalculatorResultsProps {
    calculations: SolarCalculations;
}

export const CalculatorResults: React.FC<CalculatorResultsProps> = ({ calculations }) => {
    return (
        <div className="lg:col-span-2 space-y-6">
            {/* Top Card: Investment Summary */}
            <div className="relative overflow-hidden bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Economia Total (25 Anos)</div>
                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tabular-nums tracking-tight">
                        {Math.round(calculations.totalSavings25y).toLocaleString('de-CH')}<span className="text-2xl text-slate-500 ml-2">CHF</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-slate-950/50 backdrop-blur border border-slate-800 px-4 py-2 rounded-lg">
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Payback</div>
                            <div className="text-emerald-400 font-bold">{calculations.paybackYear} Anos</div>
                        </div>
                        <div className="bg-slate-950/50 backdrop-blur border border-slate-800 px-4 py-2 rounded-lg">
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Investimento</div>
                            <div className="text-white font-bold">{calculations.initialCost.toLocaleString()} CHF</div>
                        </div>
                    </div>
                </div>

                <button className="relative z-10 bg-white hover:bg-emerald-50 text-slate-900 pl-6 pr-5 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-xl shadow-white/5 active:scale-95 duration-200">
                    Receber Proposta
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Environment Stats Row */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex items-center gap-5 hover:border-emerald-500/30 transition-colors group">
                    <div className="p-3 bg-emerald-950/30 text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-emerald-500/10">
                        <Trees className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Floresta Equiv.</div>
                        <div className="text-2xl font-bold text-white">
                            {calculations.treesPlanted} <span className="text-sm font-normal text-slate-500">árvores</span>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex items-center gap-5 hover:border-emerald-500/30 transition-colors group">
                    <div className="p-3 bg-emerald-950/30 text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-emerald-500/10">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">CO₂ Evitado</div>
                        <div className="text-2xl font-bold text-white">
                            {calculations.totalCO2SavedTons.toFixed(0)} <span className="text-sm font-normal text-slate-500">toneladas</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Area Chart */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8 h-[320px] relative w-full">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-bold text-white">Análise Financeira Acumulada</span>
                    </div>
                    <div className="flex gap-4 text-xs font-medium">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-600" /> Sem Solar</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" /> Com Solar</div>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height="100%" maxHeight={240}>
                    <AreaChart data={calculations.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorNoSolar" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#475569" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#475569" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis
                            dataKey="year"
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                            interval={2}
                        />
                        <YAxis
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px', padding: '12px', boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.8)' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            cursor={{ stroke: '#334155', strokeWidth: 1 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="Sem Solar"
                            stroke="#475569"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorNoSolar)"
                        />
                        <Area
                            type="monotone"
                            dataKey="Com Solar"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorSolar)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
